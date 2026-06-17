# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal homepage for Benjamin Holfve (@trevald) — a static site with no build step, no dependencies, and no package manager. Edit files directly and open `index.html` in a browser to preview.

## Deployment

The site is hosted on GitHub Pages (migrating from DigitalOcean/Forge). Pushing to `main` deploys automatically. See `trevald-github-pages.md` for DNS and Pages setup details.

## Structure

- `index.html` — the entire page
- `assets/index.css` — all styles; imports Inter font from `./Inter/`
- `assets/index.js` — theme switcher only
- `assets/Inter/` — self-hosted Inter variable font

## Theming

CSS custom properties drive the two themes. Both palettes are defined on `:root` as `--theme-light-*` and `--theme-dark-*` vars, then aliased to semantic `--color-*` vars. Dark mode activates via `prefers-color-scheme: dark` unless overridden by `data-theme` on `<html>`. The JS in `index.js` handles the radio-button toggle and writes `data-theme` to `document.documentElement`.

## Typography

The `h1` name logotype and the `@trevald` handle are inline SVG paths (not live text). Edit the SVG `d` attribute or replace the paths if the name or handle needs to change.

The `h2` intro and body copy use Inter with variable font weight (`font-variation-settings: "wght" 250` for the tagline, `600` for project titles).

## CSS cache busting

The stylesheet link in `index.html` uses a `?v=` query param (`index.css?v=2`). Increment the version number when making CSS changes that need to bust browser cache.
