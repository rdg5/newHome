# Architecture

**Analysis Date:** 2026-03-18

## Pattern Overview

**Overall:** Single Page Application (SPA) with client-side routing and Firebase integration

**Key Characteristics:**
- Component-driven React architecture with functional components and hooks
- Pattern-matching-based routing using Chicane router
- Direct Firebase integration for data fetching and authentication
- Tailwind CSS for styling with custom component classes
- Minimal backend dependency—all data operations client-side

## Layers

**Presentation Layer:**
- Purpose: Render UI and handle user interactions
- Location: `src/Components/`
- Contains: React functional components (Pages, Buttons, Navigation)
- Depends on: React, Tailwind CSS, Chicane router
- Used by: Browser, served via index.html

**Page Components:**
- Purpose: Represent distinct routes/views in the application
- Location: `src/Components/Pages/`
- Contains: `Home.jsx`, `BookList.jsx`, `Contact.jsx`, `Whoami.jsx`
- Depends on: Firebase (BookList), component utilities
- Used by: App router component

**UI Components (Buttons):**
- Purpose: Reusable interactive controls
- Location: `src/Components/Buttons/`
- Contains: `YearButton.jsx`, `ResetButton.jsx`
- Depends on: React, Tailwind CSS custom classes
- Used by: Page components (BookList)

**Navigation Layer:**
- Purpose: Provide top-level navigation and route linking
- Location: `src/Components/Navbar.jsx`
- Contains: Navigation links to all main routes
- Depends on: React, Tailwind CSS
- Used by: Main entry point (main.jsx)

**Routing Layer:**
- Purpose: Handle client-side route matching and page rendering
- Location: `src/App.jsx`
- Contains: Route definitions and pattern-matching logic
- Depends on: Chicane router, ts-pattern, page components
- Used by: React root component

**Initialization & Configuration:**
- Purpose: Bootstrap the application and configure external services
- Location: `src/main.jsx`
- Contains: Firebase initialization, React DOM mounting
- Depends on: Firebase, React, Navbar, App components
- Used by: Browser entry point (index.html)

## Data Flow

**Page Load:**

1. Browser loads `index.html`
2. `index.html` loads `src/main.jsx` as module script
3. `main.jsx` initializes Firebase with environment variables
4. `main.jsx` renders React app into DOM root element
5. Navbar and App components render

**Route Navigation:**

1. User clicks link in Navbar or navigates to URL
2. Chicane router detects route change
3. Router calls `Router.useRoute()` hook in App component
4. App component pattern-matches route name to component
5. Matching page component renders

**Data Loading (BookList Example):**

1. BookList component mounts
2. `useEffect` hook triggers Firebase Firestore fetch
3. Query runs: `db.collection("books").get()`
4. Books data received and mapped from Firestore docs
5. Data sorted by year descending
6. State updated via `setBooks()`
7. Component re-renders with book data

**User Interaction (Year Filter):**

1. User clicks YearButton
2. Button `onClick` calls parent's `handleYearClick(year)`
3. Parent state `selectedYear` updated via `setSelectedYear(year)`
4. Filtered list computed via `books.filter((book) => book.year === selectedYear)`
5. Component re-renders with filtered books
6. Reset button can clear filter by setting `selectedYear` to empty string

**State Management:**

- Component-local state only (useState hooks)
- No global state management library
- Props-based data flow between parent and child components
- Firebase as single source of truth for books data

## Key Abstractions

**Router:**
- Purpose: Provides type-safe route definitions and navigation
- Examples: `src/App.jsx` uses `@swan-io/chicane` Router
- Pattern: Declarative route mapping with pattern matching via `ts-pattern`

**Page Components:**
- Purpose: Represent logical application views
- Examples: `Home`, `BookList`, `Contact`, `Whoami` in `src/Components/Pages/`
- Pattern: Functional React components, typically stateless except BookList

**UI Buttons:**
- Purpose: Encapsulate button styling and behavior
- Examples: `YearButton`, `ResetButton` in `src/Components/Buttons/`
- Pattern: Simple wrapper components accepting props for customization

**Firebase Integration:**
- Purpose: Access cloud data and authentication services
- Examples: Initialized in `src/main.jsx`, used in `src/Components/Pages/BookList.jsx`
- Pattern: Direct SDK usage without service abstraction layer

**Tailwind CSS:**
- Purpose: Utility-first styling system
- Examples: Used throughout all components
- Pattern: Inline class application via `className` attribute, custom component classes in `src/index.css`

## Entry Points

**Browser Entry:**
- Location: `index.html`
- Triggers: Page load
- Responsibilities: Define HTML structure, load Vite module script, mount React app

**Application Initialization:**
- Location: `src/main.jsx`
- Triggers: Vite module load
- Responsibilities: Configure Firebase, mount React to DOM, render navigation and app

**Route Entry:**
- Location: `src/App.jsx`
- Triggers: Route change detected by Chicane router
- Responsibilities: Match route pattern, render appropriate page component

## Error Handling

**Strategy:** Minimal error handling, logging to console

**Patterns:**
- Try-catch block in BookList's Firebase fetch with console.error logging
- No error boundaries or user-facing error messages for data failures
- 404 fallback in App router returns `<h1>404</h1>`
- Navigation links external (GitHub, LinkedIn) open in new tabs with no error handling

## Cross-Cutting Concerns

**Logging:** Console.error in BookList's useEffect catch block only

**Validation:** No validation layer; relies on Firebase schema enforcement

**Authentication:** Firebase auth configured in main.jsx but not actively used in components (no protected routes)

**Styling:** Tailwind CSS utility classes + custom component classes in index.css

---

*Architecture analysis: 2026-03-18*
