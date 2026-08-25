# SVisuals website

Official bilingual download site for SVisuals Fabric 1.21.4.

Current public beta: **18.4.1**. The download contains the protected public JAR;
the optional bundle also includes the free `WeR_PiU` configuration.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

This starter does not use `wrangler.jsonc`.

## Project structure

- edit site code under `app/`
- `app/` contains the site pages and metadata
- `public/downloads/` contains the current mod and bundle
- `public/configs/` contains downloadable SVisuals profiles

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: build and verify the rendered release pages and downloads
