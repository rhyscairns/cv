import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// The contact form posts through this; stub it so the section renders in isolation.
jest.mock('@/lib/dataWithFallback', () => ({
  postEmail: jest.fn(),
}));

describe('Home Page (single-page CV)', () => {
  it('renders the hero name', () => {
    render(<Home />);
    // The name is split into individual letters for the entrance animation.
    expect(screen.getAllByText('R').length).toBeGreaterThan(0);
    // Appears in both the hero tagline and the footer.
    expect(
      screen.getAllByText(/Frontend-leaning full stack engineer/i).length
    ).toBeGreaterThan(0);
  });

  it('renders the impact stat labels', () => {
    render(<Home />);
    expect(screen.getByText('Colleagues using what I ship')).toBeInTheDocument();
    expect(screen.getByText('Stores running my UI nationwide')).toBeInTheDocument();
  });

  it('renders experience with the current role', () => {
    render(<Home />);
    expect(screen.getByText('Kingfisher plc')).toBeInTheDocument();
    expect(screen.getByText('La Fosse Futureproof')).toBeInTheDocument();
    expect(screen.getByText('Rightmove')).toBeInTheDocument();
  });

  it('renders skills groups', () => {
    render(<Home />);
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
  });

  it('renders projects', () => {
    render(<Home />);
    expect(screen.getByText('College Athlete Base')).toBeInTheDocument();
  });

  it('renders education and certifications', () => {
    render(<Home />);
    expect(screen.getByText('MSc Computer Science')).toBeInTheDocument();
    expect(
      screen.getByText('AWS Certified Developer – Associate')
    ).toBeInTheDocument();
  });

  it('renders all anchor sections used by the nav', () => {
    const { container } = render(<Home />);
    ['home', 'impact', 'experience', 'skills', 'projects', 'education', 'about', 'contact'].forEach(
      (id) => {
        expect(container.querySelector(`#${id}`)).toBeInTheDocument();
      }
    );
  });
});
