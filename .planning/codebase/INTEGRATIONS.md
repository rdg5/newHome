# External Integrations

**Analysis Date:** 2026-03-18

## APIs & External Services

**Analytics:**
- Umami Analytics - Website analytics and tracking
  - Integration: Client-side script tag in `index.html`
  - Endpoint: `https://cloud.umami.is/script.js`
  - Website ID: `3cf8a72d-cb14-4c3e-91a5-da69d92c3612` (hardcoded in HTML)

## Data Storage

**Databases:**
- Firebase Firestore (Google Cloud)
  - Type: NoSQL document database
  - SDK: firebase 9.22.0 (compat version)
  - Client: Firebase JavaScript SDK
  - Access: Initialized in `src/main.jsx` with service account credentials
  - Collections: `books` collection queried in `src/Components/Pages/BookList.jsx`

## Authentication & Identity

**Auth Provider:**
- Firebase Authentication (via Firebase SDK)
  - Implementation: Firebase compat library imported in `src/main.jsx`
  - Status: Imported but authentication logic not found in analyzed source files

## Environment Configuration

**Required env vars:**
- `VITE_TYPE` - Firebase service account type
- `VITE_PROJECT_ID` - Firebase project identifier
- `VITE_PRIVATE_KEY_ID` - Firebase private key identifier
- `VITE_PRIVATE_KEY` - Firebase service account private key (SENSITIVE)
- `VITE_CLIENT_EMAIL` - Firebase service account email
- `VITE_CLIENT_ID` - Firebase client ID
- `VITE_AUTH_URI` - Firebase authentication URI
- `VITE_TOKEN_URI` - Firebase token exchange URI
- `VITE_AUTH_PROVIDER_X509_CERT_URL` - Firebase auth provider certificate URL
- `VITE_CLIENT_X509_CERT_URL` - Firebase client certificate URL

**Configuration Location:**
- Environment variables accessed via Vite's `import.meta.env.VITE_*` pattern
- Firebase config object in `src/main.jsx` lines 10-21
- `.env` file required locally for development (not committed to repository)

**Secrets Storage:**
- Firebase service account credentials stored in environment variables
- Local `.env` file (git-ignored)

## Monitoring & Observability

**Analytics:**
- Umami Analytics for website traffic and user behavior
- Tracking script: `https://cloud.umami.is/script.js`
- Website ID: `3cf8a72d-cb14-4c3e-91a5-da69d92c3612`

**Error Tracking:**
- console.error() used in `src/Components/Pages/BookList.jsx` for Firestore errors
- No external error tracking service detected

**Logs:**
- Browser console logging only

## CI/CD & Deployment

**Hosting:**
- Static site hosting required (Vite builds to static bundle)
- Suitable for: Vercel, Netlify, GitHub Pages, Firebase Hosting, etc.

**Build Output:**
- Build command: `npm run build`
- Output directory: dist/ (default Vite output)

**CI Pipeline:**
- Not detected in codebase

## Webhooks & Callbacks

**Incoming:**
- None detected

**Outgoing:**
- None detected

## Data Flow

**Read Path (Books Display):**
1. `BookList` component mounts in React
2. `useEffect` hook triggers `fetchBooks()`
3. Firebase Firestore SDK queries `books` collection
4. Data returned and sorted by year
5. UI renders filtered book list with Tailwind styles

**Initialization Path:**
1. `src/main.jsx` initializes Firebase with environment variables
2. Firebase SDK loads authentication and Firestore modules
3. React app mounts with Navbar and App components
4. Router handles page navigation via @swan-io/chicane

---

*Integration audit: 2026-03-18*
