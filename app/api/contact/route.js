import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, description } = await request.json();

    // Validate input: ensure all fields are present
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Forward contact form data to AWS Lambda endpoint
    const response = await fetch(`${process.env.API_URL}/contact-me`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, description }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
