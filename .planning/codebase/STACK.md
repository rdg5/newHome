# Technology Stack

**Analysis Date:** 2026-03-18

## Languages

**Primary:**
- JavaScript (JSX/ES6+) - Frontend application components and routing
- CSS - Styling with Tailwind CSS utility classes

## Runtime

**Environment:**
- Node.js v22.21.1

**Package Manager:**
- npm v10.9.4
- Lockfile: `package-lock.json` (present)

## Frameworks

**Core:**
- React 18.2.0 - UI library for building interactive components
- Vite 4.2.0 - Build tool and dev server for fast development

**Routing:**
- @swan-io/chicane 1.3.4 - Client-side routing for navigation

**Styling:**
- Tailwind CSS 3.3.2 - Utility-first CSS framework
- Tailwind 4.0.0 - Tailwind variant (newer major version listed)
- PostCSS 8.4.24 - CSS transformation tool
- Autoprefixer 10.4.14 - Automatic vendor prefixing

**State Management:**
- React Hooks (useState, useEffect) - Built-in React state management
- react-query 3.39.3 - Data fetching and caching library (dependency listed but not actively used in codebase)

**Utilities:**
- ts-pattern 4.2.2 - Pattern matching for functional programming
- dotenv 16.0.3 - Environment variable loading
- react-dotenv 0.1.3 - React environment variable integration

## Key Dependencies

**Critical:**
- firebase 9.22.1 - Backend service for authentication, Firestore database, and real-time features

**Database:**
- Firebase Firestore - NoSQL cloud database (accessed via firebase SDK)

**Development:**
- @vitejs/plugin-react 3.1.0 - Vite plugin for React support
- ESLint 8.41.0 - Code quality linting
- eslint-config-airbnb 19.0.4 - Airbnb linting standards preset
- eslint-plugin-react 7.32.2 - React-specific linting rules
- eslint-plugin-react-hooks 4.6.0 - React Hooks linting rules
- @types/react 18.0.28 - TypeScript definitions for React
- @types/react-dom 18.0.11 - TypeScript definitions for React DOM

## Configuration

**Environment:**
- Vite environment variables via `import.meta.env.VITE_*` pattern
- Firebase configuration stored in environment variables (VITE_TYPE, VITE_PROJECT_ID, VITE_PRIVATE_KEY_ID, etc.)
- Environment file: `.env` (not present in repo - developer-local)

**Build:**
- Vite configuration: `vite.config.js` - React plugin enabled
- Tailwind configuration: `tailwind.config.js` - CSS content paths configured
- PostCSS configuration: `postcss.config.js` - Tailwind and Autoprefixer plugins

## Package Scripts

```bash
npm run dev       # Start Vite development server
npm run build     # Build optimized production bundle
npm run preview   # Preview production build locally
```

## Platform Requirements

**Development:**
- Node.js 22.21.1 or compatible
- npm 10.9.4
- Modern browser with ES6+ support

**Production:**
- Static file hosting (Vite builds to static bundle)
- Firebase project with Firestore and Authentication enabled

---

*Stack analysis: 2026-03-18*
