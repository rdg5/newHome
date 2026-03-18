# Coding Conventions

**Analysis Date:** 2026-03-18

## Naming Patterns

**Files:**
- React components use PascalCase with `.jsx` extension: `BookList.jsx`, `YearButton.jsx`
- Organized by feature/component in nested directories: `Components/Buttons/`, `Components/Pages/`
- Entry point uses lowercase: `main.jsx`, `App.jsx`

**Functions:**
- Arrow functions using `const` declaration for component exports
- Event handlers use camelCase with `handle` prefix: `handleYearClick`
- Functions are exported as named exports: `export const Navbar = () => {...}`

**Variables:**
- State variables use camelCase: `books`, `selectedYear`, `filteredBooks`
- Destructured props use camelCase: `{ year, onClick, selected }`
- Component props follow camelCase convention

**Types:**
- No TypeScript strict typing enforced; codebase uses JavaScript/JSX
- Props passed without explicit type definitions

## Code Style

**Formatting:**
- ESLint configured with airbnb ruleset (from `package.json` dev dependencies)
- No `.prettierrc` file present; airbnb config defines formatting rules
- Indentation uses tabs in some files (e.g., `Whoami.jsx`, `BookList.jsx`) and spaces in others
- Inconsistent spacing around JSX attributes

**Linting:**
- ESLint 8.41.0 with `eslint-config-airbnb` (19.0.4)
- Includes plugins: `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y`, `eslint-plugin-import`
- No explicit lint script in `package.json`; linting must be run manually or through IDE

## Import Organization

**Order:**
1. React and external dependencies: `import React from 'react'`, `import firebase from 'firebase/compat/app'`
2. Local components and utilities: `import { App } from './App'`, `import { YearButton } from "../Buttons/YearButton"`
3. CSS/styles: `import './index.css'`

**Path Aliases:**
- No path aliases configured (no `jsconfig.json` or `tsconfig.json` found)
- Relative imports used throughout: `./Components/Pages/BookList`, `../Buttons/YearButton`

## Error Handling

**Patterns:**
- Try-catch blocks for async operations: seen in `BookList.jsx` with `fetchBooks` function
- Console logging for errors: `console.error("Error fetching books:", error);`
- No custom error boundaries or error handling mechanisms detected
- Silent failure on error (logs but continues execution)

## Logging

**Framework:** Console API (no dedicated logging library)

**Patterns:**
- `console.error()` used for error logging in async operations
- No info, debug, or warn level logging observed
- Errors logged at point of catch, minimal context provided

## Comments

**When to Comment:**
- No significant comment documentation found in codebase
- Code structure is relatively self-documenting with clear component names
- Minimal use of inline comments

**JSDoc/TSDoc:**
- Not used in this codebase
- No type hints or function documentation

## Function Design

**Size:**
- Functions are generally small and focused: 5-30 lines typical
- Largest function is `BookList` component at 68 lines with multiple concerns (state, effects, rendering)

**Parameters:**
- React components receive props object, destructured inline
- Event handlers take single argument (e.g., `onClick(year)`)
- Functions use simple parameter lists

**Return Values:**
- React components return JSX elements
- Helper functions return data directly or modified data
- No explicit return type annotations

## Module Design

**Exports:**
- Named exports for all components: `export const ComponentName = () => {...}`
- Each file exports single component with matching filename

**Barrel Files:**
- No barrel files (index.js re-exports) used
- Each component imported directly from its file path

## Code Organization Observations

**Spacing Issues:**
- Inconsistent use of tabs vs spaces across files
- Missing space in JSX attribute: `href="https://wiki.sandorvass.xyz"`
- Line formatting inconsistency in `Whoami.jsx` with missing spaces before attributes

**Component Structure:**
- Simple functional components with React hooks (useState, useEffect)
- Props passed directly without prop validation
- Inline styling using Tailwind CSS classes

---

*Convention analysis: 2026-03-18*
