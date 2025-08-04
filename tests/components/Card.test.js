import { render, screen } from '@testing-library/react';
import Card from '@/app/components/Card';

describe('Card Component', () => {
  const mockProps = {
    title: 'Test Title',
    description: 'Test description for the card component',
  };

  it('renders title and description correctly', () => {
    render(<Card {...mockProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(
      screen.getByText('Test description for the card component')
    ).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    render(<Card {...mockProps} />);

    const cardElement = screen.getByText('Test Title').closest('div')
      .parentElement.parentElement;
    expect(cardElement).toHaveClass('group', 'relative', 'bg-slate-800/90');
  });

  it('renders with empty title and description', () => {
    render(<Card title='' description='' />);

    const titleElement = screen.getByRole('heading', { level: 3 });
    const descriptionElement = titleElement.parentElement.nextElementSibling;

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('handles long text content', () => {
    const longTitle =
      'This is a very long title that should still render correctly';
    const longDescription =
      'This is a very long description that should wrap properly and maintain the card layout without breaking the design or causing overflow issues';

    render(<Card title={longTitle} description={longDescription} />);

    expect(screen.getByText(longTitle)).toBeInTheDocument();
    expect(screen.getByText(longDescription)).toBeInTheDocument();
  });
});
