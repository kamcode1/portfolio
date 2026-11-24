# Kam Ephrem — Portfolio

Personal portfolio for Kam Ephrem, technology and operations leader based in Addis Ababa.

**Live site:** https://kam-ephrem-portfolio.pages.dev

## Overview

A single-page, responsive portfolio covering areas of expertise, selected work, background, and contact links. It is built with accessibility in mind: semantic landmarks, a skip link, visible focus states, keyboard-operable disclosure sections, and reduced-motion support.

## Tech stack

- [React 19](https://react.dev/)
- [esbuild](https://esbuild.github.io/) for bundling and the local dev server
- Plain CSS (no framework)
- Hosted on [Cloudflare Pages](https://pages.cloudflare.com/)

## Getting started

Requires Node.js 20 or later (`.nvmrc` pins 22).

```sh
npm install
npm run dev
```

Open http://127.0.0.1:4173. The dev server rebuilds on file changes; stop it with `Ctrl+C`.

## Scripts

| Command           | Description                                   |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the local dev server with live rebuild  |
| `npm run build`   | Produce the minified production site in `dist/` |
| `npm run deploy`  | Build and deploy `dist/` to Cloudflare Pages  |

## Project structure

```
.
├── index.html        # HTML shell and SEO / social metadata
├── styles.css        # All site styles
├── public/           # Static assets copied to dist/ (portrait, social image)
├── build.mjs         # esbuild build and dev-server script
├── src/
│   ├── main.jsx      # React entry point
│   └── App.jsx       # Page content and components
├── wrangler.jsonc    # Cloudflare Pages configuration
└── .github/workflows # CI
```

## Deployment

Deployment uses [Wrangler](https://developers.cloudflare.com/workers/wrangler/). After logging in once with `npx wrangler login`:

```sh
npm run deploy
```

This publishes to the `kam-ephrem-portfolio` Cloudflare Pages project. Pushes to GitHub do not deploy automatically unless the repository is connected to the Pages project (build command `npm run build`, output directory `dist`).

## Continuous integration

GitHub Actions builds the site on every push and pull request to confirm it compiles.

## Content

Project descriptions are based on public repository READMEs and professional profiles, and were not independently tested. Portfolio content, text, and branding are © Kam Ephrem; all rights reserved.
