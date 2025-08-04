import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// Mock the Card component
jest.mock('@/app/components/Card', () => {
  return function MockCard({ title, description }) {
    return (
      <div data-testid='project-card'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
});

// Mock the data function
jest.mock('@/lib/dataWithFallback', () => ({
  getHomepageProjects: () => [
    { title: 'Test Project 1', description: 'Test description 1' },
    { title: 'Test Project 2', description: 'Test description 2' },
  ],
}));

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);
    expect(screen.getByText('RHYS CAIRNS')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<Home />);
    expect(screen.getByText(/Software Engineer/)).toBeInTheDocument();
  });

  it('renders the projects section', () => {
    render(<Home />);
    expect(screen.getByText('UPCOMING PROJECTS')).toBeInTheDocument();
  });

  it('renders project cards', () => {
    render(<Home />);
    const projectCards = screen.getAllByTestId('project-card');
    expect(projectCards).toHaveLength(2);
  });

  it('displays project titles and descriptions', () => {
    render(<Home />);
    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    expect(screen.getByText('Test description 1')).toBeInTheDocument();
    expect(screen.getByText('Test Project 2')).toBeInTheDocument();
    expect(screen.getByText('Test description 2')).toBeInTheDocument();
  });

  it('has proper page structure', () => {
    render(<Home />);

    // Check for main container with min-h-screen
    const mainContainer = screen.getByText('RHYS CAIRNS').closest('div')
      .parentElement.parentElement.parentElement;
    expect(mainContainer).toHaveClass('min-h-screen');

    // Check for gradient background
    expect(mainContainer).toHaveClass('bg-gradient-to-br');
  });
});
