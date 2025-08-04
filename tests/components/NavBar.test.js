import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import NavBar from '@/app/components/NavBar';

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('NavBar Component', () => {
  const mockProjects = [
    { id: 1, title: 'Project 1' },
    { id: 2, title: 'Project 2' },
  ];

  it('renders navigation links correctly with projects', () => {
    render(<NavBar projects={mockProjects} />);

    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('EDUCATION')).toBeInTheDocument();
    expect(screen.getByText('EXPERIENCE')).toBeInTheDocument();
    expect(screen.getByText('PROJECTS')).toBeInTheDocument();
    expect(screen.getByText('ABOUT ME')).toBeInTheDocument();
    expect(screen.getByText('CONTACT')).toBeInTheDocument();
  });

  it('renders navigation links correctly without projects', () => {
    render(<NavBar projects={[]} />);

    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('EDUCATION')).toBeInTheDocument();
    expect(screen.getByText('EXPERIENCE')).toBeInTheDocument();
    expect(screen.queryByText('PROJECTS')).not.toBeInTheDocument();
    expect(screen.getByText('ABOUT ME')).toBeInTheDocument();
    expect(screen.getByText('CONTACT')).toBeInTheDocument();
  });

  it('opens mobile menu when hamburger button is clicked', () => {
    render(<NavBar projects={mockProjects} />);

    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);

    // The mobile menu should open (check for dialog)
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes mobile menu when close button is clicked', () => {
    render(<NavBar projects={mockProjects} />);

    // Open menu first
    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);

    // Close menu
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    // Menu should be closed (dialog should not be visible)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('has correct href attributes for navigation links', () => {
    render(<NavBar projects={mockProjects} />);

    expect(screen.getByText('HOME').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('EDUCATION').closest('a')).toHaveAttribute(
      'href',
      '/education'
    );
    expect(screen.getByText('EXPERIENCE').closest('a')).toHaveAttribute(
      'href',
      '/experience'
    );
    expect(screen.getByText('PROJECTS').closest('a')).toHaveAttribute(
      'href',
      '/projects'
    );
    expect(screen.getByText('ABOUT ME').closest('a')).toHaveAttribute(
      'href',
      '/about-me'
    );
    expect(screen.getByText('CONTACT').closest('a')).toHaveAttribute(
      'href',
      '/contact'
    );
  });
});
