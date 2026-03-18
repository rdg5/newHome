# Testing Patterns

**Analysis Date:** 2026-03-18

## Test Framework

**Runner:**
- Not configured - no test runner present in `package.json`
- No Jest, Vitest, or other testing framework installed

**Assertion Library:**
- Not configured - no assertion library present

**Run Commands:**
- No test scripts defined in `package.json`
- Testing not integrated into development workflow

## Test File Organization

**Location:**
- No test files found in codebase
- No `__tests__` directories, `test/` directory, or `*.test.*` files detected

**Naming:**
- Not applicable - no test files exist

**Structure:**
- Not applicable - no test files exist

## Test Coverage

**Requirements:**
- None enforced - no test configuration or coverage tools present

**View Coverage:**
- Not applicable - no test infrastructure available

## Test Types

**Unit Tests:**
- Not implemented

**Integration Tests:**
- Not implemented

**E2E Tests:**
- Not implemented

## Mocking

**Framework:**
- Not applicable - no testing framework configured

**Patterns:**
- Not applicable - no test files to examine

**What to Mock:**
- Not applicable - no established patterns

## Fixtures and Factories

**Test Data:**
- Not applicable - no test infrastructure

**Location:**
- Not applicable - no test infrastructure

## Testing Strategy Recommendations

**Current State:**
The codebase has no testing framework or test coverage. This is a critical gap for a production application with the following components:

**Components Requiring Tests:**
- `BookList.jsx` (line 68): Contains Firebase Firestore queries, state management, and conditional filtering logic
- `App.jsx` (line 23): Router integration with ts-pattern matching logic
- `Navbar.jsx` (line 21): Navigation links and conditional rendering
- Button components: `YearButton.jsx`, `ResetButton.jsx` for event handling

**Firebase Integration:**
- Firebase initialization in `main.jsx` (line 10-21) requires test mocking
- Firestore queries in `BookList.jsx` (line 16) need to be mocked to avoid database hits during testing

**Recommended Framework Setup:**
Given the Vite build configuration, Vitest would be the ideal test runner:
- Fast, Vite-native test runner
- Excellent for React components with proper React 18 support
- Native ESM support matching project configuration
- Integrates with existing Vite setup in `vite.config.js`

**Suggested Testing Libraries:**
- Vitest for test runner
- @testing-library/react for component testing (following React best practices)
- @testing-library/jest-dom for DOM assertions
- jest-mock-extended or vitest's built-in mocking for Firebase mocks

**Priority Areas for Testing:**
1. BookList component (async Firebase integration, state filtering)
2. Router logic in App.jsx (navigation between pages)
3. Event handlers in button components (user interactions)

---

*Testing analysis: 2026-03-18*
