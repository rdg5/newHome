# Hugo Rewrite Design

## Motivation

The current React SPA (Vite + Firebase + Tailwind) is overkill for a personal site with 4 pages and a book list. Rewrite to Hugo for simplicity, zero maintenance, and easier content updates.

## Architecture

Hugo static site deployed to Netlify. No JS frameworks. All content in Markdown or YAML.

```
newHome/
├── config.toml              # Site config (title, menu, params)
├── content/
│   ├── _index.md            # Home page
│   ├── whoami.md            # About page
│   └── contact.md           # Contact page
├── data/
│   └── books.yaml           # Book list (title, author, year)
├── layouts/
│   ├── _default/
│   │   ├── baseof.html      # Base template (head, Umami, body wrapper)
│   │   └── single.html      # Generic page layout
│   ├── index.html           # Home page template
│   ├── page/
│   │   └── books.html       # Books page with year filtering
│   └── partials/
│       ├── nav.html         # Navbar
│       └── head.html        # <head> with Umami, meta, humans.txt link
├── static/
│   ├── humans.txt           # Carried over from current site
│   └── _redirects           # Netlify redirects
└── assets/
    └── css/
        └── style.css        # Hand-written CSS (no Tailwind)
```

## Color Scheme (carried over)

| Role             | Color              | Hex       |
|------------------|--------------------|-----------|
| Background       | slate-600          | #475569   |
| Primary accent   | orange tones       | orange-100 to orange-600 |
| Secondary accent | teal-500           | #14b8a6   |
| Body text        | gray-900 / white   |           |

## Pages

- **Home** (`/`): Short greeting, clean centered text.
- **Who am I** (`/whoami`): Bio paragraph with accent-colored links.
- **Books** (`/books`): Year filter buttons + book list from `data/books.yaml`. Vanilla JS for show/hide filtering via `data-year` attributes. Responsive — stacks on mobile.
- **Contact** (`/contact`): GitHub, LinkedIn, Twitter links with teal/orange styling.

## UX Improvements

- Responsive layout (books page stacks on mobile)
- Nav highlights current page
- Better book filter active states
- Proper semantic HTML

## Umami Fix

Broken `</script` tag in current site fixed by placing correct tag in `partials/head.html`:

```html
<script defer src="https://cloud.umami.is/script.js" data-website-id="3cf8a72d-cb14-4c3e-91a5-da69d92c3612"></script>
```

Full page loads on every navigation means Umami works automatically — no SPA workarounds.

## humans.txt

Carried over from `public/humans.txt` to `static/humans.txt`. Referenced via `<link rel="author">` in head partial.

## Adding a Book

Edit `data/books.yaml`, push. Done.

```yaml
- title: "Some Book"
  author: "Some Author"
  year: "2026"
```
