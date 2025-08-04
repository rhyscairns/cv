import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, description } = await request.json();

    // Validate input
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you can choose one of these options:

    // Option A: Forward to your existing AWS Lambda
    const response = await fetch(`${process.env.AWS_API_URL}/contact-me`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.AWS_API_KEY}`, // If you use API keys
      },
      body: JSON.stringify({ name, email, description }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    // Option B: Send email directly using a service like Resend, SendGrid, etc.
    // const emailService = new EmailService();
    // await emailService.send({
    //   to: 'your-email@example.com',
    //   subject: `New contact from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${description}`,
    // });

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
