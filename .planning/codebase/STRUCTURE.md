# Codebase Structure

**Analysis Date:** 2026-03-18

## Directory Layout

```
newHome/
├── index.html              # HTML entry point
├── package.json            # Project dependencies
├── vite.config.js          # Vite build configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── src/                    # Source code
│   ├── main.jsx            # Application entry point, Firebase init
│   ├── App.jsx             # Router and page routing logic
│   ├── index.css           # Global styles and custom components
│   └── Components/         # React components
│       ├── Navbar.jsx      # Navigation bar component
│       ├── Buttons/        # Reusable button components
│       │   ├── YearButton.jsx
│       │   └── ResetButton.jsx
│       └── Pages/          # Page components for routes
│           ├── Home.jsx
│           ├── Whoami.jsx
│           ├── Contact.jsx
│           └── BookList.jsx
├── public/                 # Static assets
│   ├── vite.svg
│   ├── humans.txt
│   └── _redirects
└── .planning/
    └── codebase/           # Planning documentation
```

## Directory Purposes

**Root Directory:**
- Purpose: Project configuration and build setup
- Contains: Configuration files, package manifests, documentation
- Key files: `package.json`, `vite.config.js`, `index.html`

**`src/`:**
- Purpose: All source code and application logic
- Contains: React components, styling, entry point
- Key files: `main.jsx` (initialization), `App.jsx` (routing)

**`src/Components/`:**
- Purpose: Container for all React components
- Contains: Navigation, pages, and UI elements
- Key files: `Navbar.jsx` (site navigation)

**`src/Components/Pages/`:**
- Purpose: Page-level components corresponding to routes
- Contains: `Home.jsx`, `Whoami.jsx`, `Contact.jsx`, `BookList.jsx`
- Key files: `BookList.jsx` (most complex with Firebase integration and state)

**`src/Components/Buttons/`:**
- Purpose: Reusable button components used across pages
- Contains: `YearButton.jsx`, `ResetButton.jsx`
- Key files: Styled buttons for BookList filtering

**`public/`:**
- Purpose: Static assets served directly by Vite
- Contains: SVGs, metadata files, redirects configuration
- Key files: `_redirects` (Netlify redirect rules)

## Key File Locations

**Entry Points:**
- `index.html`: HTML document root, loads Vite module script
- `src/main.jsx`: JavaScript entry point, initializes Firebase and React DOM
- `src/App.jsx`: Route definitions and page component mapping

**Configuration:**
- `package.json`: Project metadata and dependencies
- `vite.config.js`: Vite build and dev server configuration
- `tailwind.config.js`: Tailwind CSS theme and content paths
- `postcss.config.js`: PostCSS plugins (Tailwind, Autoprefixer)

**Core Logic:**
- `src/App.jsx`: Routing logic and route-to-component mapping
- `src/Components/Pages/BookList.jsx`: Data fetching from Firebase, state management, filtering logic

**Styling:**
- `src/index.css`: Global styles, custom Tailwind components (`.btn-year`, `.btn-reset`, `.anchorClasses`)

**Testing:**
- Not present in current codebase

## Naming Conventions

**Files:**
- PascalCase for React components: `Navbar.jsx`, `BookList.jsx`, `YearButton.jsx`
- camelCase for non-component files: `main.jsx`, `index.css`
- Config files: lowercase with dots: `vite.config.js`, `tailwind.config.js`

**Directories:**
- PascalCase for component directories: `Components/`, `Pages/`, `Buttons/`
- lowercase for asset directories: `public/`, `src/`

**Components:**
- Named exports: `export const ComponentName = () => {}`
- Single component per file
- Descriptive names reflecting purpose: `YearButton` (what it is), `BookList` (what data it displays)

**Functions & Variables:**
- camelCase for function and variable names: `handleYearClick`, `setSelectedYear`, `filteredBooks`
- State setters follow `set[StateName]` pattern: `setBooks`, `setSelectedYear`
- Event handlers follow `handle[Event]` pattern: `handleYearClick`

**CSS Classes:**
- Kebab-case for custom Tailwind components: `.btn-year`, `.btn-reset`, `.anchorClasses`
- Inline Tailwind utilities: `className="flex flex-col space-y-3"`

## Where to Add New Code

**New Feature (entire page/route):**
- Primary code: Create component in `src/Components/Pages/[NewPage].jsx`
- Register route: Add to Router in `src/App.jsx` (route definition and pattern match)
- Add navigation: Add link to `src/Components/Navbar.jsx`
- Tests: Create `src/Components/Pages/[NewPage].test.jsx` (if testing added)

**New Component/Module (reusable UI):**
- Implementation: `src/Components/[Category]/[ComponentName].jsx` (e.g., `src/Components/Buttons/NewButton.jsx`)
- Usage: Import and use in page or other components

**Utilities & Helpers:**
- If needed: Create `src/utils/` directory (currently doesn't exist)
- Example path: `src/utils/helpers.js`
- Import: `import { helper } from '../utils/helpers'`

**Styling:**
- Global styles: Add to `src/index.css`
- Component-scoped styles: Use inline Tailwind classes in JSX
- Custom Tailwind components: Add `@apply` rules in `src/index.css`

**Firebase Integration:**
- Service layer (future): Could create `src/services/firebase.js` to abstract Firebase calls
- Current pattern: Direct Firebase usage in components

## Special Directories

**`public/`:**
- Purpose: Static assets served as-is by Vite
- Generated: No
- Committed: Yes
- Contains: Vite favicon, humans.txt metadata, Netlify redirects

**`.planning/codebase/`:**
- Purpose: Project documentation and planning artifacts
- Generated: By GSD tools
- Committed: Yes
- Contains: ARCHITECTURE.md, STRUCTURE.md, and other analysis documents

**`node_modules/`:**
- Purpose: Installed dependencies (not present in repo)
- Generated: Yes (via `npm install`)
- Committed: No (in .gitignore)

## Build & Development Flow

**Development:**
- Command: `npm run dev`
- Runs: `vite` dev server on local port
- Features: Hot module replacement, fast refresh

**Build:**
- Command: `npm run build`
- Produces: `dist/` directory with optimized bundle (created by Vite)
- Output: Ready for deployment

**Preview:**
- Command: `npm run preview`
- Runs: Built application locally
- Used for: Testing production build

---

*Structure analysis: 2026-03-18*
