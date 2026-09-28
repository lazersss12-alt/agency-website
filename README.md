# AutomateIQ Agency Website

A production-style Next.js website for an AI automation agency focused on lead qualification, customer support, workflow automation, and API-driven business systems.

## What this project demonstrates

- Next.js App Router architecture
- TypeScript and reusable React components
- Responsive, accessible UI
- Structured service and project data
- Interactive automation/process visualizations
- Metadata and SEO-friendly page structure
- Clean separation between presentation components and content/data modules
- Production validation through ESLint, TypeScript, and Next.js build checks

## Core pages

- **Home** — agency positioning, automation use cases, featured systems, process, and CTA
- **Services** — automation capabilities and business use cases
- **Work / Systems** — self-built AI automation demonstrations
- **Contact** — workflow discovery / enquiry flow
- **Birthday** — standalone experimental page retained from the project

## Tech stack

- **Framework:** Next.js 16
- **UI:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Validation:** ESLint + TypeScript + Next.js production build

## Project structure

```
.
├── src/
│   ├── app/                 # App Router pages and layouts
│   ├── components/          # Reusable UI components
│   └── lib/                 # Structured content and application data
├── public/                  # Static assets
├── .env.example             # Environment variable template
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Getting started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/lazersss12-alt/agency-website.git
cd agency-website
npm ci
```

Create a local environment file from the provided template:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Add only the values required by the application.

### Development

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production validation

Run the same checks used by CI:

```bash
npm run lint
npm run typecheck
npm run build
```

### Production server

```bash
npm run build
npm run start
```

## Environment variables

The repository contains an `.env.example` template. Never commit `.env.local` or real API credentials.

## Engineering approach

The site intentionally avoids fabricated client counts, revenue figures, testimonials, or performance claims. Featured systems are presented as self-built demonstrations so the portfolio remains technically credible and transparent.

Content is kept in dedicated data modules where practical, while reusable UI lives in `src/components`. This keeps page composition readable and makes future content changes less likely to require changes to presentation logic.

## CI

Every push to `master` and every pull request targeting `master` runs:

1. Dependency installation with `npm ci`
2. ESLint
3. TypeScript type checking
4. Production build

The workflow is defined in `.github/workflows/ci.yml`.

## Future improvements

- Add automated accessibility checks
- Add end-to-end smoke tests for critical navigation/contact flows
- Add a deployment preview workflow
- Add structured OpenGraph/Twitter metadata and generated sitemap coverage
- Add analytics with privacy-conscious event tracking
- Add a lightweight CMS or content source if project/service updates become frequent

## License

No explicit open-source license is currently declared. Treat the repository as **all rights reserved** unless a license is added by the owner.
