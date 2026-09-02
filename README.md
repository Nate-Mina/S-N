# Autopsy of a Romance: Nate & Sabrina Case Study

An interactive forensic archive, psycholinguistic breakdown, and multi-perspective case study exploring the timeline, evidence vault, diagnostic matrix, and song analysis ("Poison Shot by Shot").

---

## Deploying to GitHub Pages

This project is pre-configured to deploy seamlessly to **GitHub Pages** out of the box using either **GitHub Actions** (recommended) or the **`gh-pages` command line script**.

### Option A: Automated Deployment via GitHub Actions (Recommended)

1. Push this repository to GitHub (e.g. branch `main` or `master`).
2. On GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. That's it! The included `.github/workflows/deploy.yml` workflow will automatically build and publish your site whenever you push changes.

### Option B: Manual CLI Deployment via `gh-pages`

1. In your local terminal, run:
   ```bash
   npm run deploy
   ```
2. This runs `npm run build` and pushes the production `dist/` directory to the `gh-pages` branch of your repository.
3. In your repository's **Settings** > **Pages**, make sure the **Source** is set to deploy from the `gh-pages` branch (`/root`).

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## GitHub Pages Configuration Highlights

- **Relative Base Asset Resolution**: `vite.config.ts` uses `base: './'`, enabling the app to run in any repository subdirectory (such as `https://username.github.io/repository-name/`) or custom domain without broken script, style, or media links.
- **Bypass Jekyll Processing**: `public/.nojekyll` prevents GitHub Pages from ignoring bundled assets.
- **Deep-Linking & Fallbacks**: `public/404.html` and URL hash routing (`#timeline`, `#song-lab`, `#case-study`, etc.) ensure bookmarkable links and clean navigation without server-side 404 errors.
