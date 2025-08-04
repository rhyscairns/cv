import { POST } from '@/app/api/contact/route';
import { NextResponse } from 'next/server';

// Mock NextResponse
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((data, options) => ({ data, ...options })),
  },
}));

// Mock fetch
global.fetch = jest.fn();

// Mock environment variables
process.env.AWS_API_URL = 'https://test-api.com';

describe('/api/contact route', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns error for missing fields', async () => {
    const request = {
      json: jest.fn().mockResolvedValue({
        name: '',
        email: 'test@example.com',
        description: 'Test message',
      }),
    };

    await POST(request);

    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: 'All fields are required' },
      { status: 400 }
    );
  });

  it('returns error for invalid email format', async () => {
    const request = {
      json: jest.fn().mockResolvedValue({
        name: 'John Doe',
        email: 'invalid-email',
        description: 'Test message',
      }),
    };

    await POST(request);

    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: 'Invalid email format' },
      { status: 400 }
    );
  });

  it('forwards valid request to AWS API', async () => {
    const mockAWSResponse = { message: 'Email sent successfully' };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue(mockAWSResponse),
    });

    const request = {
      json: jest.fn().mockResolvedValue({
        name: 'John Doe',
        email: 'john@example.com',
        description: 'Test message',
      }),
    };

    await POST(request);

    expect(fetch).toHaveBeenCalledWith(
      'https://test-api.com/contact-me',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          name: 'John Doe',
          email: 'john@example.com',
          description: 'Test message',
        }),
      })
    );

    expect(NextResponse.json).toHaveBeenCalledWith(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  });

  it('handles AWS API errors gracefully', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    const request = {
      json: jest.fn().mockResolvedValue({
        name: 'John Doe',
        email: 'john@example.com',
        description: 'Test message',
      }),
    };

    await POST(request);

    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  });

  it('handles network errors', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    const request = {
      json: jest.fn().mockResolvedValue({
        name: 'John Doe',
        email: 'john@example.com',
        description: 'Test message',
      }),
    };

    await POST(request);

    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  });

  it('handles invalid JSON in request', async () => {
    const request = {
      json: jest.fn().mockRejectedValue(new Error('Invalid JSON')),
    };

    await POST(request);

    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  });
});
