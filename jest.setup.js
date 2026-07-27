import '@testing-library/jest-dom';

// Suppress console.error during tests to reduce noise
// while still allowing tests to verify error handling behavior
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalError;
});

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
      prefetch: jest.fn(),
    };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
  usePathname() {
    return '/';
  },
}));

// Mock fetch globally
global.fetch = jest.fn();

// Mock environment variables
process.env.API_KEY = 'test-api-key';

// --- Browser APIs jsdom lacks but Framer Motion needs ---

// IntersectionObserver (used by whileInView / useInView)
class MockIntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
global.IntersectionObserver = MockIntersectionObserver;
window.IntersectionObserver = MockIntersectionObserver;

// ResizeObserver (used by useScroll)
class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = MockResizeObserver;
window.ResizeObserver = MockResizeObserver;

// matchMedia (used for prefers-reduced-motion checks)
if (!window.matchMedia) {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
}
