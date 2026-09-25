## Development

### Commands

All commands run from the project root:

| Command | Action |
| :--- | --- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds production site to `./dist/` |
| `npm run preview` | Previews build locally at `localhost:4321` |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

### Dev server notes

- `npm run dev` starts the dev server with Vite + Tailwind CSS.

### Tailwind CSS

- Tailwind CSS v4 is configured in `astro.config.mjs` using the `@tailwindcss/vite` plugin.
- Global styles are in `src/styles/global.css` — it imports Tailwind (`@import "tailwindcss"`) and adds custom utility classes:
  - `.bg-grid-pattern` — subtle texture background
  - `.shadow-glow-blue` / `.shadow-glow-blue:hover` — soft blue glow shadow
- Color tokens are defined in the `@theme` block of `global.css`:
  - `--color-primary: #25a4ff`
  - `--color-primary-light: #5cbbff`
  - `--color-primary-dark: #1b8de0`
- Font tokens: `--font-roc: 'roc-grotesk'` and `--font-sans: 'Inter'`
- Components use Tailwind utility classes like `font-roc`, `text-primary`, `bg-primary`, `shadow-glow-blue`, `sm:`, `lg:`, etc.

### Project structure

- `src/pages/` — page components (only `index.astro`)
- `src/layouts/` — `Layout.astro` (base HTML, loads `src/styles/global.css`, sets `--color-primary`/`--color-primary-light`/`--color-primary-dark`/`--font-roc`/`--font-sans` tokens)
- `src/components/` — reusable components: `Header.astro`, `Hero.astro`, `Welcome.astro`, `Logo.astro`, `LogoTicker.astro`
- `src/assets/` — images and logos
- `dist/` — build output (gitignored)
- `.astro/` — generated types (gitignored)

### Fonts

- **Roc Grotesk**: loaded via Typekit (`https://use.typekit.net/sut5pxx.css`) — referenced by the CSS variable `--font-roc`
- **Inter**: loaded via Google Fonts — referenced by `--font-sans`
- Both font families are defined as CSS custom properties in `src/styles/global.css` under the `@theme` block

### Git

- Ignored in `.gitignore`: `dist/`, `.astro/`, `node_modules/`, debug logs, `.env*`, `.DS_Store`, `.idea/`
- No CI workflows or pre-commit hooks configured in this repo