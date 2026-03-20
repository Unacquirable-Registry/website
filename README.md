# Unacquirable Enterprises Registry

A public registry of enterprises that are legally structured to prevent acquisition or sale — built with SvelteKit, SQLite, and Tailwind CSS.

## Features

- **Public Registry** (`/`) — Browse all verified unacquirable enterprises with name, type, jurisdiction, description, and website.
- **Submit Form** (`/submit`) — Anyone can propose a new enterprise for review.
- **Admin Dashboard** (`/admin`) — Password-protected area to approve or reject pending submissions.

## Stack

- [SvelteKit](https://kit.svelte.dev/) with TypeScript
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) for a local SQLite database
- [Tailwind CSS v3](https://tailwindcss.com/) for styling
- [@sveltejs/adapter-node](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) for production deployment

## Getting Started

```bash
# Install dependencies
npm install

# Copy the example env file and customise
cp .env.example .env
# Edit .env: set ADMIN_PASSWORD and ORIGIN

# Start the development server
npm run dev
```

## Environment Variables

| Variable | Description | Default (dev) |
|---|---|---|
| `ADMIN_PASSWORD` | Password for the admin dashboard | `admin123` |
| `ORIGIN` | Public URL of the app (required for CSRF protection) | — |
| `PORT` | Port to listen on | `3000` |

> **Important:** Always set `ORIGIN` to the public URL of your site (e.g. `https://yoursite.com`) in production.

## Production Build

```bash
npm run build
ADMIN_PASSWORD=secret ORIGIN=https://yoursite.com node build/index.js
```

The SQLite database file (`registry.db`) is created automatically in the working directory on first run, seeded with a few example enterprises.

