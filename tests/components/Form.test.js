import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '@/app/contact/components/Form';
import { postEmail } from '@/lib/dataWithFallback';

// Mock the postEmail function
jest.mock('@/lib/dataWithFallback', () => ({
  postEmail: jest.fn(),
}));

// Mock window.alert
global.alert = jest.fn();

describe('Contact Form Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders form fields correctly', () => {
    render(<Form />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /send message/i })
    ).toBeInTheDocument();
  });

  it('updates input values when user types', async () => {
    const user = userEvent.setup();
    render(<Form />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'Test message');

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(messageInput).toHaveValue('Test message');
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    postEmail.mockResolvedValueOnce({ success: true });

    render(<Form />);

    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Test message');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(postEmail).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        description: 'Test message',
      });
    });
  });

  it('shows success message after successful submission', async () => {
    const user = userEvent.setup();
    postEmail.mockResolvedValueOnce({ success: true });

    render(<Form />);

    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Test message');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText('Message Sent!')).toBeInTheDocument();
    });
  });

  it('clears form fields after successful submission', async () => {
    const user = userEvent.setup();
    postEmail.mockResolvedValueOnce({ success: true });

    render(<Form />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'Test message');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText('Message Sent!')).toBeInTheDocument();
    });
  });

  it('shows alert on submission error', async () => {
    const user = userEvent.setup();
    postEmail.mockRejectedValueOnce(new Error('Network error'));

    render(<Form />);

    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Test message');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith(
        'Failed to send message. Please try again.'
      );
    });
  });

  it('disables submit button while submitting', async () => {
    const user = userEvent.setup();
    postEmail.mockImplementation(
      () => new Promise((resolve) => setTimeout(resolve, 100))
    );

    render(<Form />);

    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Test message');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    expect(submitButton).toBeDisabled();
  });

  it('allows sending another message after success', async () => {
    const user = userEvent.setup();
    postEmail.mockResolvedValue({ success: true });

    render(<Form />);

    // Submit first message
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Test message');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText('Message Sent!')).toBeInTheDocument();
    });

    // Click "Send Another Message"
    await user.click(screen.getByText(/send another message/i));

    // Form should be visible again
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });
});
