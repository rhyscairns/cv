# Test Suite Documentation

This comprehensive test suite covers all aspects of the CV website application.

## Test Structure

```
__tests__/
├── api/
│   └── contact.test.js          # Tests for the contact API route
├── components/
│   ├── Card.test.js             # Tests for the Card component
│   ├── Form.test.js             # Tests for the contact Form component
│   └── NavBar.test.js           # Tests for the navigation component
├── lib/
│   ├── dataWithFallback.test.js # Tests for data fetching with AWS/static fallback
│   └── staticData.test.js       # Tests for static data validation
└── pages/
    └── home.test.js             # Tests for the home page
```

## Test Coverage

### Data Layer (`lib/`)

- **dataWithFallback.test.js**: Tests the hybrid data fetching approach

  - ✅ AWS API success scenarios
  - ✅ Fallback to static data on API failures
  - ✅ Email posting functionality
  - ✅ Input validation and error handling
  - ✅ Timeout and network error handling

- **staticData.test.js**: Validates static data integrity
  - ✅ Data structure validation
  - ✅ Required field presence
  - ✅ Data type validation
  - ✅ Business logic validation (current entries)

### Components (`components/`)

- **Card.test.js**: Tests the project card component

  - ✅ Content rendering
  - ✅ CSS class application
  - ✅ Edge cases (empty content, long text)

- **NavBar.test.js**: Tests the navigation component

  - ✅ Navigation link rendering
  - ✅ Conditional projects link
  - ✅ Mobile menu functionality
  - ✅ Link href attributes

- **Form.test.js**: Tests the contact form component
  - ✅ Form field rendering
  - ✅ User input handling
  - ✅ Form submission
  - ✅ Success/error states
  - ✅ Form validation
  - ✅ Loading states

### API Routes (`api/`)

- **contact.test.js**: Tests the contact API endpoint
  - ✅ Input validation
  - ✅ Email format validation
  - ✅ AWS API forwarding
  - ✅ Error handling
  - ✅ Response formatting

### Pages (`pages/`)

- **home.test.js**: Tests the homepage
  - ✅ Main content rendering
  - ✅ Project section display
  - ✅ Page structure and styling

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test Configuration

- **Jest Configuration**: `jest.config.js`
- **Test Setup**: `jest.setup.js`
- **Mocks**: Built-in mocks for Next.js components and external APIs

## Key Testing Features

1. **Mocked Dependencies**: All external dependencies are properly mocked
2. **User Event Testing**: Uses @testing-library/user-event for realistic user interactions
3. **Async Testing**: Proper handling of async operations and API calls
4. **Error Scenarios**: Comprehensive error handling and edge case testing
5. **Accessibility**: Basic accessibility testing through semantic queries

## Coverage Goals

The test suite aims for:

- **Functions**: 90%+ coverage
- **Statements**: 85%+ coverage
- **Branches**: 80%+ coverage
- **Lines**: 85%+ coverage

## Best Practices Applied

1. **Arrange-Act-Assert** pattern
2. **Descriptive test names** that explain the scenario
3. **Isolated tests** with proper cleanup
4. **Mock cleanup** between tests
5. **Realistic user interactions** using Testing Library
6. **Edge case coverage** including error scenarios
7. **Async operation testing** with proper waiting strategies

## CI/CD Integration

Tests are designed to run in CI/CD environments with:

- No external dependencies
- Deterministic results
- Fast execution
- Clear failure messages
