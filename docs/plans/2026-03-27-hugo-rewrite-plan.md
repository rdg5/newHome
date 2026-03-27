# Hugo Rewrite Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite the React SPA personal site into a Hugo static site with the same content, same color scheme, better UX, and working Umami analytics.

**Architecture:** Hugo static site with hand-written CSS. Book data in a YAML file. Vanilla JS for year filtering on the books page. Deployed to Netlify.

**Tech Stack:** Hugo, HTML, CSS, vanilla JavaScript, Netlify

---

### Task 1: Install Hugo and scaffold the site

**Files:**
- Create: `config.toml`

**Step 1: Install Hugo**

Run: `brew install hugo`
Expected: Hugo installed successfully

**Step 2: Verify Hugo is working**

Run: `hugo version`
Expected: Version string printed (e.g. `hugo v0.1xx.x ...`)

**Step 3: Create `config.toml` in the project root**

Do NOT run `hugo new site` — we are adding Hugo files into the existing repo alongside the React code (which will be removed later).

```toml
baseURL = "https://www.sandorvass.xyz/"
languageCode = "en"
title = "S.V."

[params]
  description = "Sandor Vass - personal site"

[menu]
  [[menu.main]]
    name = "Who am I?"
    url = "/whoami/"
    weight = 1
  [[menu.main]]
    name = "Books"
    url = "/books/"
    weight = 2
  [[menu.main]]
    name = "Wiki"
    url = "https://wiki.sandorvass.xyz"
    weight = 3
  [[menu.main]]
    name = "Contact"
    url = "/contact/"
    weight = 4
```

**Step 4: Create required Hugo directories**

Run: `mkdir -p layouts/_default layouts/page layouts/partials content data assets/css static`

**Step 5: Commit**

```bash
git add config.toml
git commit -m "feat: add Hugo config and directory structure"
```

---

### Task 2: Create base layout and head partial

**Files:**
- Create: `layouts/_default/baseof.html`
- Create: `layouts/partials/head.html`

**Step 1: Create `layouts/partials/head.html`**

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="image/svg+xml" href="/vite.svg">
<link type="text/plain" rel="author" href="https://www.sandorvass.xyz/humans.txt">
<script defer src="https://cloud.umami.is/script.js" data-website-id="3cf8a72d-cb14-4c3e-91a5-da69d92c3612"></script>
{{ $style := resources.Get "css/style.css" }}
<link rel="stylesheet" href="{{ $style.Permalink }}">
<title>{{ if .IsHome }}S.V.{{ else }}{{ .Title }} | S.V.{{ end }}</title>
```

**Step 2: Create `layouts/_default/baseof.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  {{ partial "head.html" . }}
</head>
<body>
  {{ partial "nav.html" . }}
  <main>
    {{ block "main" . }}{{ end }}
  </main>
</body>
</html>
```

**Step 3: Commit**

```bash
git add layouts/_default/baseof.html layouts/partials/head.html
git commit -m "feat: add base layout and head partial with Umami tracking"
```

---

### Task 3: Create navbar partial

**Files:**
- Create: `layouts/partials/nav.html`

**Step 1: Create `layouts/partials/nav.html`**

```html
<nav>
  {{ range .Site.Menus.main }}
    <a href="{{ .URL }}"
       {{ if strings.HasPrefix .URL "http" }}target="_blank" rel="noopener"{{ end }}
       {{ if eq $.RelPermalink .URL }}class="nav-link active"{{ else }}class="nav-link"{{ end }}>
      {{ .Name }}
    </a>
  {{ end }}
</nav>
```

**Step 2: Commit**

```bash
git add layouts/partials/nav.html
git commit -m "feat: add navbar partial with active page highlighting"
```

---

### Task 4: Create the CSS stylesheet

**Files:**
- Create: `assets/css/style.css`

**Step 1: Create `assets/css/style.css`**

Translate the Tailwind classes from the React app into plain CSS, keeping the same color scheme (slate-600 background, orange/teal accents, gray-900/white text).

```css
/* Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background-color: #475569; /* slate-600 */
  color: #111827; /* gray-900 */
  line-height: 1.6;
}

/* Nav */
nav {
  padding: 0.75rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.nav-link {
  display: inline-block;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  color: #334155; /* slate-700 */
  text-decoration: none;
  font-weight: 500;
}

.nav-link:hover,
.nav-link:focus,
.nav-link.active {
  color: #fff;
  background-color: #374151; /* gray-700 */
  outline: none;
}

/* Main content */
main {
  max-width: 48rem;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* Home */
.home h1 {
  font-size: 1.875rem;
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: 0.75rem;
}

.home h2 {
  font-weight: 700;
}

/* Whoami */
.whoami {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
}

.whoami-content {
  max-width: 40rem;
}

.whoami-content p {
  font-size: 1.25rem;
  color: #111827;
  margin-bottom: 1.75rem;
}

/* Link styles */
.link-orange {
  text-decoration: underline;
  text-decoration-color: #ea580c; /* orange-600 */
}

.link-teal {
  text-decoration: underline;
  text-decoration-color: #2dd4bf; /* teal-400 */
}

.link-light {
  text-decoration: underline;
  text-decoration-color: #ffedd5; /* orange-100 */
}

/* Contact */
.contact-list {
  list-style: none;
  padding: 2rem;
}

.contact-list li {
  color: #14b8a6; /* teal-500 */
  margin-bottom: 0.5rem;
}

.contact-list a {
  color: #ffedd5; /* orange-100 */
  text-decoration: underline;
  text-decoration-color: #f97316; /* orange-500 */
  padding-bottom: 0.25rem;
}

/* Books page */
.books-header {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  padding-top: 2.5rem;
  margin-bottom: 1.5rem;
}

.books-layout {
  display: flex;
  gap: 1.75rem;
  padding-top: 1.75rem;
}

.year-filters {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.btn-year {
  background-color: #ffedd5; /* orange-100 */
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border: none;
  border-bottom: 4px solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-year:hover {
  border-bottom-color: #f97316; /* orange-500 */
}

.btn-year.active {
  border-bottom-color: #ea580c; /* orange-600 */
  background-color: #fed7aa; /* orange-200 */
}

.btn-reset {
  background-color: #14b8a6; /* teal-500 */
  color: #fff;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-reset:hover {
  background-color: #0d9488; /* teal-600 */
}

.book-list {
  list-style: none;
  color: #fdba74; /* orange-300 */
}

.book-list li {
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
}

/* Responsive */
@media (max-width: 640px) {
  .books-layout {
    flex-direction: column;
  }

  .year-filters {
    flex-direction: row;
    flex-wrap: wrap;
  }

  nav {
    flex-direction: column;
  }
}
```

**Step 2: Commit**

```bash
git add assets/css/style.css
git commit -m "feat: add CSS stylesheet with slate/orange/teal color scheme"
```

---

### Task 5: Create content pages (Home, Whoami, Contact)

**Files:**
- Create: `content/_index.md`
- Create: `content/whoami.md`
- Create: `content/contact.md`
- Create: `layouts/index.html`
- Create: `layouts/_default/single.html`

**Step 1: Create `content/_index.md`**

```markdown
---
title: "Home"
---
```

**Step 2: Create `layouts/index.html` (home page template)**

```html
{{ define "main" }}
<div class="home">
  <h1>Hi, this is my internet thing</h1>
  <h2>You can find here stuff about me, books I have read and contact</h2>
</div>
{{ end }}
```

**Step 3: Create `content/whoami.md`**

```markdown
---
title: "Who am I?"
url: "/whoami/"
---
```

**Step 4: Create `content/contact.md`**

```markdown
---
title: "Contact"
url: "/contact/"
---
```

**Step 5: Create `layouts/_default/single.html`**

This template checks the page URL to render the right content. Each page has its own section within the template using Hugo conditionals.

```html
{{ define "main" }}

{{ if eq .RelPermalink "/whoami/" }}
<div class="whoami">
  <div class="whoami-content">
    <p>
      I'm sanyi, currently based in Budapest. I'm a software developer at
      <a href="https://bobcatscoding.com" class="link-orange">Bobcats coding</a>.<br>
      Outside of work, I like to <a href="/books/" class="link-teal">read</a>
      and to <a class="link-light">cook</a>.
    </p>
    <p>Currently I enjoy working with the following things:</p>
    <p>
      <a href="https://qwik.builder.io" class="link-orange">qwik</a> on the frontend with
      <a href="https://hono.dev" class="link-light">hono</a> backend, but this might change
    </p>
  </div>
</div>

{{ else if eq .RelPermalink "/contact/" }}
<ul class="contact-list">
  <li>github: <a href="https://github.com/rdg5" target="_blank" rel="noopener">rdg5</a></li>
  <li>linkedin: <a href="https://www.linkedin.com/in/sandorvass" target="_blank" rel="noopener">linkedin</a></li>
  <li>twitter: <a href="https://twitter.com/not_rdg" target="_blank" rel="noopener">@not_rdg</a></li>
</ul>

{{ else }}
<div>
  {{ .Content }}
</div>
{{ end }}

{{ end }}
```

**Step 6: Commit**

```bash
git add content/ layouts/index.html layouts/_default/single.html
git commit -m "feat: add home, whoami, and contact pages"
```

---

### Task 6: Export books from Firestore to YAML

**Files:**
- Create: `scripts/export-books.mjs` (temporary, deleted after use)
- Create: `data/books.yaml`

**Step 1: Create `scripts/export-books.mjs`**

```javascript
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { writeFileSync } from 'fs';
import { config } from 'dotenv';

config();

firebase.initializeApp({
  projectId: process.env.VITE_PROJECT_ID,
  apiKey: process.env.VITE_API_KEY || 'dummy',
});

const db = firebase.firestore();

const snapshot = await db.collection('books').get();
const books = snapshot.docs
  .map(doc => doc.data())
  .sort((a, b) => b.year - a.year);

const yaml = books
  .map(b => `- title: "${b.title}"\n  author: "${b.author}"\n  year: "${b.year}"`)
  .join('\n');

writeFileSync('data/books.yaml', yaml + '\n');
console.log(`Exported ${books.length} books to data/books.yaml`);
```

**Step 2: Run the export script**

Run: `node scripts/export-books.mjs`
Expected: Books exported to `data/books.yaml`

**Step 3: Verify the output**

Read `data/books.yaml` and confirm it has real book data.

**Step 4: Delete the script**

```bash
rm -rf scripts/
```

**Step 5: Commit**

```bash
git add data/books.yaml
git commit -m "feat: export book data from Firestore to YAML"
```

---

### Task 7: Create books page with year filtering

**Files:**
- Create: `content/books.md`
- Create: `layouts/page/books.html`

**Step 1: Create `content/books.md`**

```markdown
---
title: "Books"
url: "/books/"
layout: "books"
type: "page"
---
```

**Step 2: Create `layouts/page/books.html`**

```html
{{ define "main" }}
<h1 class="books-header">Books that I have read in the last years</h1>
<div class="books-layout">
  <div class="year-filters">
    {{ $years := slice "2026" "2025" "2024" "2023" "2022" "2021" "2020" }}
    {{ range $years }}
      <button class="btn-year" data-year="{{ . }}" onclick="filterBooks('{{ . }}')">{{ . }}</button>
    {{ end }}
    <button class="btn-reset" onclick="filterBooks('')">Reset</button>
  </div>
  <div>
    <ul class="book-list">
      {{ range sort .Site.Data.books "year" "desc" }}
        <li data-year="{{ .year }}">{{ .author }} - {{ .title }}</li>
      {{ end }}
    </ul>
  </div>
</div>

<script>
function filterBooks(year) {
  document.querySelectorAll('.btn-year').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.year === year);
  });
  document.querySelectorAll('.book-list li').forEach(li => {
    li.style.display = (!year || li.dataset.year === year) ? '' : 'none';
  });
}
</script>
{{ end }}
```

**Step 3: Commit**

```bash
git add content/books.md layouts/page/books.html
git commit -m "feat: add books page with year filtering from YAML data"
```

---

### Task 8: Copy static files and update humans.txt

**Files:**
- Copy: `public/humans.txt` -> `static/humans.txt`
- Copy: `public/_redirects` -> `static/_redirects`
- Copy: `public/vite.svg` -> `static/vite.svg`

**Step 1: Copy static files**

```bash
cp public/humans.txt static/humans.txt
cp public/vite.svg static/vite.svg
```

**Step 2: Update `static/humans.txt`**

Update the Software and Components lines to reflect Hugo, and update the date:

```
/* TEAM */

Your title: Sandor Vass

Site: sandorvass.xyz

Twitter: not_rdg

Location: Budapest, Hungary

/* SITE */

Last update: 2026.03.27

Standards: HTML5, CSS3

Components: Hugo

Software: Hugo
```

**Step 3: Create `static/_redirects` for Netlify**

Hugo generates real HTML files for each route, so the SPA catch-all redirect is no longer needed. Only keep the humans.txt rule:

```
/humans.txt    /humans.txt   200
```

**Step 4: Commit**

```bash
git add static/
git commit -m "feat: add static files (humans.txt, favicon, redirects)"
```

---

### Task 9: Set up Playwright BDD tests

**Files:**
- Create: `package.json`
- Create: `playwright.config.js`
- Create: `tests/home.spec.js`
- Create: `tests/navigation.spec.js`
- Create: `tests/whoami.spec.js`
- Create: `tests/contact.spec.js`
- Create: `tests/books.spec.js`
- Create: `tests/analytics.spec.js`

**Step 1: Initialize package.json and install Playwright**

```bash
npm init -y
npm install -D @playwright/test
npx playwright install chromium
```

**Step 2: Create `playwright.config.js`**

```javascript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:1313',
  },
  webServer: {
    command: 'hugo server --port 1313',
    port: 1313,
    reuseExistingServer: true,
  },
});
```

**Step 3: Create `tests/home.spec.js`**

```javascript
import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('should display the greeting heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toHaveText('Hi, this is my internet thing');
  });

  test('should display the subtitle', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h2')).toContainText('stuff about me');
  });
});
```

**Step 4: Create `tests/navigation.spec.js`**

```javascript
import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should have links to all pages', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav a[href="/whoami/"]')).toBeVisible();
    await expect(page.locator('nav a[href="/books/"]')).toBeVisible();
    await expect(page.locator('nav a[href="/contact/"]')).toBeVisible();
    await expect(page.locator('nav a[href="https://wiki.sandorvass.xyz"]')).toBeVisible();
  });

  test('should highlight the active page', async ({ page }) => {
    await page.goto('/whoami/');
    await expect(page.locator('nav a[href="/whoami/"]')).toHaveClass(/active/);
  });

  test('should navigate to Who am I page', async ({ page }) => {
    await page.goto('/');
    await page.click('nav a[href="/whoami/"]');
    await expect(page).toHaveURL(/whoami/);
  });

  test('should navigate to Books page', async ({ page }) => {
    await page.goto('/');
    await page.click('nav a[href="/books/"]');
    await expect(page).toHaveURL(/books/);
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('/');
    await page.click('nav a[href="/contact/"]');
    await expect(page).toHaveURL(/contact/);
  });
});
```

**Step 5: Create `tests/whoami.spec.js`**

```javascript
import { test, expect } from '@playwright/test';

test.describe('Who am I page', () => {
  test('should display bio with name and location', async ({ page }) => {
    await page.goto('/whoami/');
    await expect(page.locator('.whoami-content')).toContainText('sanyi');
    await expect(page.locator('.whoami-content')).toContainText('Budapest');
  });

  test('should link to employer', async ({ page }) => {
    await page.goto('/whoami/');
    await expect(page.locator('a[href="https://bobcatscoding.com"]')).toBeVisible();
  });

  test('should link to books page', async ({ page }) => {
    await page.goto('/whoami/');
    await expect(page.locator('a[href="/books/"]')).toBeVisible();
  });
});
```

**Step 6: Create `tests/contact.spec.js`**

```javascript
import { test, expect } from '@playwright/test';

test.describe('Contact page', () => {
  test('should display GitHub link', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page.locator('a[href="https://github.com/rdg5"]')).toBeVisible();
  });

  test('should display LinkedIn link', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page.locator('a[href="https://www.linkedin.com/in/sandorvass"]')).toBeVisible();
  });

  test('should display Twitter link', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page.locator('a[href="https://twitter.com/not_rdg"]')).toBeVisible();
  });

  test('should open links in new tab', async ({ page }) => {
    await page.goto('/contact/');
    const links = page.locator('.contact-list a');
    const count = await links.count();
    for (let i = 0; i < count; i++) {
      await expect(links.nth(i)).toHaveAttribute('target', '_blank');
    }
  });
});
```

**Step 7: Create `tests/books.spec.js`**

```javascript
import { test, expect } from '@playwright/test';

test.describe('Books page', () => {
  test('should display the books heading', async ({ page }) => {
    await page.goto('/books/');
    await expect(page.locator('.books-header')).toContainText('Books that I have read');
  });

  test('should display year filter buttons', async ({ page }) => {
    await page.goto('/books/');
    const buttons = page.locator('.btn-year');
    await expect(buttons).toHaveCount(7);
  });

  test('should display a reset button', async ({ page }) => {
    await page.goto('/books/');
    await expect(page.locator('.btn-reset')).toBeVisible();
  });

  test('should display books in the list', async ({ page }) => {
    await page.goto('/books/');
    const books = page.locator('.book-list li');
    await expect(books.first()).toBeVisible();
  });

  test('should filter books when clicking a year button', async ({ page }) => {
    await page.goto('/books/');
    const allBooks = await page.locator('.book-list li').count();

    // Click a year button
    await page.locator('.btn-year').first().click();

    // Visible books should be fewer or equal
    const visibleBooks = await page.locator('.book-list li:visible').count();
    expect(visibleBooks).toBeLessThanOrEqual(allBooks);

    // Clicked button should have active class
    await expect(page.locator('.btn-year').first()).toHaveClass(/active/);
  });

  test('should show all books when clicking reset', async ({ page }) => {
    await page.goto('/books/');
    const allBooks = await page.locator('.book-list li').count();

    // Filter then reset
    await page.locator('.btn-year').first().click();
    await page.locator('.btn-reset').click();

    const visibleBooks = await page.locator('.book-list li:visible').count();
    expect(visibleBooks).toBe(allBooks);
  });
});
```

**Step 8: Create `tests/analytics.spec.js`**

```javascript
import { test, expect } from '@playwright/test';

test.describe('Analytics', () => {
  test('should have Umami script tag on home page', async ({ page }) => {
    await page.goto('/');
    const script = page.locator('script[src="https://cloud.umami.is/script.js"]');
    await expect(script).toHaveAttribute('data-website-id', '3cf8a72d-cb14-4c3e-91a5-da69d92c3612');
  });

  test('should have Umami script tag on all pages', async ({ page }) => {
    const pages = ['/', '/whoami/', '/books/', '/contact/'];
    for (const url of pages) {
      await page.goto(url);
      await expect(page.locator('script[src="https://cloud.umami.is/script.js"]')).toBeAttached();
    }
  });
});
```

**Step 9: Run the tests**

Run: `npx playwright test`
Expected: All tests pass

**Step 10: Commit**

```bash
git add package.json playwright.config.js tests/
git commit -m "test: add Playwright BDD tests for all pages"
```

---

### Task 10: Update .gitignore and clean up React files

**Files:**
- Modify: `.gitignore`

**Step 1: Update `.gitignore`**

Replace the contents with Hugo-appropriate ignores:

```
# Hugo
public/
resources/_gen/
.hugo_build.lock

# Node (Playwright tests)
node_modules/
test-results/
playwright-report/

# Editor
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Env
.env
```

**Step 2: Remove old React/Vite files**

Note: Keep `package.json` and `package-lock.json` — they now belong to the Playwright test setup. Only remove the React-specific files.

```bash
rm -rf src/
rm -f vite.config.js tailwind.config.js postcss.config.js
rm -f index.html
rm -rf public/
```

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove React/Vite/Firebase files, update gitignore for Hugo"
```

---

### Task 11: Final verification and build

**Step 1: Run Hugo server one more time**

Run: `hugo server`
Expected: Site works correctly at `http://localhost:1313/`

**Step 2: Build for production**

Run: `hugo`
Expected: Clean build to `public/` directory, no warnings

**Step 3: Verify the build output**

Run: `ls public/`
Expected: Should contain `index.html`, `whoami/`, `books/`, `contact/`, `humans.txt`, `vite.svg`

---

## Notes

- **Firestore export:** Task 6 requires a `.env` file with `VITE_PROJECT_ID` set. The existing `.env` (gitignored) should have this from the React app.
- **Netlify config:** If there's a `netlify.toml`, it may need updating to set the build command to `hugo` and publish directory to `public/`. If Netlify is configured via the dashboard, update the build command there.
- **Umami fix:** The broken `</script` tag in the old site is fixed by the proper `</script>` in `partials/head.html`.
- **Angular commits:** All commits use Angular convention (feat:, chore:, fix:, docs:, etc.).
