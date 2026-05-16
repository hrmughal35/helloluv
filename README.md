# Samrah — My Forever

A **lightweight** romantic page for **Samrah** from **Hasssan** — plain **HTML, CSS, and a few lines of JavaScript**. No React, no build step, no 3D engine.

## View it

Double-click **`index.html`** or drag it into your browser.

Optional local server (if you prefer `http://localhost`):

```bash
npm run serve
```

Then open the URL it prints (port **3456**). This uses `npx serve` only when you run that command; there are no project dependencies to install.

## Files

```
index.html    # All sections & copy
css/styles.css
js/main.js    # Scroll progress bar + “Yes — Forever” button
```

## GitHub Pages — make https://hrmughal35.github.io/helloluv/ work

The code is pushed to **[github.com/hrmughal35/helloluv](https://github.com/hrmughal35/helloluv)**. Pages is **not** on until you enable it once:

### Option A — GitHub Actions (recommended; workflow is already in this repo)

1. On GitHub open **helloluv** → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Go to the **Actions** tab and open the latest **Deploy to GitHub Pages** run — wait until it shows a green check.
4. Your site URL (when ready): **`https://hrmughal35.github.io/helloluv/`**  
   (GitHub also shows the exact link on the Pages settings screen after the first successful deploy.)

If the workflow fails, confirm **Settings → Actions → General → Workflow permissions** allows workflows to read/write (for Pages deployment).

### Option B — Deploy from branch (no Actions)

1. **Settings** → **Pages** → **Source**: **Deploy from a branch**.
2. Branch: **`main`**, folder: **`/ (root)`** → **Save**.

Either way, wait **1–3 minutes** after saving, then open the **`/helloluv/`** URL above (not the `github.com/...` repo page).

## Other hosts

Upload **`index.html`**, **`css/`**, and **`js/`** anywhere that serves static files (Netlify, Cloudflare Pages, etc.).

Made with love for Samrah.
