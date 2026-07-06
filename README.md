# Digital Tree Interview Exercise — Sølve SPA

Responsive ecommerce-inspired Single Page Application built from the provided Figma mockup for Project 2.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Vercel-ready deployment configuration

## Implemented scope

- Homepage / frontpage
- Reusable header, footer, buttons, badges, arrow links, product cards, room cards, stores, help section
- Basic room detail route scaffold: `/rooms/:slug`
- Responsive layout for mobile, tablet, laptop, and desktop
- SPA rewrite support through `vercel.json`

## Design notes

The implementation follows the Figma proportions as closely as possible while converting fixed 1920px sections into responsive layouts. The main background is `#ededed`, core text is `#343339`, and the homepage hero uses the inverse white header variant over the dark image overlay.

The Figma uses NewYork and Cabinet Grotesk. Font files are not included in this repository. If licensed font files are available, add them in CSS using `@font-face`. Otherwise, the project falls back to editorial serif and system sans-serif fonts.

## Local setup

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Vercel deployment

Import the GitHub repository into Vercel. The project includes a `vercel.json` rewrite so React Router routes work on refresh.

## Bluehost deployment mirror

Run:

```bash
npm run build
```

Upload the contents of `dist/` to your Bluehost folder, for example:

```txt
public_html/digitaltree-exercise/
```

If you deploy into a subfolder and deep routes refresh incorrectly, add/adjust `.htaccess` rewrite rules for that subfolder.

## Challenge and solution

The main challenge was translating a fixed 1920px Figma composition into a fluid SPA without losing the premium editorial feel. The solution was to use reusable React components, Tailwind responsive utilities, max-width containers, fluid `clamp()` typography, and image crops that preserve the original composition across breakpoints.
