# Saliva Diva — Copilot Instructions

## Mission
You are helping maintain and extend the Saliva Diva website. The goal is to implement new features and fix bugs while preserving the existing visual identity, content-driven structure, and Portuguese-language experience.

## Project Overview
This is a static, content-focused Next.js website for Saliva Diva. The site presents:
- artists
- releases
- manifesto
- calendar
- contacts

Most content is stored in local TypeScript data files rather than fetched from an API or CMS.

## Tech Stack
- Next.js 16 with the App Router
- React 19
- TypeScript 5
- MUI v6 for UI components
- Emotion for styling
- ESLint with Next.js rules

## Project Structure
- app/layout.tsx: global shell with navigation, providers, and video background
- app/page.tsx: home page
- app/components/: shared UI components such as Navigation, ArtistCard, ReleaseCard, VideoBackground
- app/data/: static content data files such as artists.ts, releases.ts, calendar.ts
- app/<route>/page.tsx: route pages
- public/assets/: images and media
- public/fonts/: local font files

## Important Conventions
- Prefer small, focused changes over broad rewrites.
- Reuse existing components and page patterns instead of inventing new ones.
- Keep the UI consistent with the current visual style.
- Preserve the Portuguese copy and naming conventions already used in the project.
- Prefer edits to data files over hardcoded content when adding or updating site content.

## Styling Conventions
- Use MUI components and the sx prop for styling.
- Keep styling responsive with breakpoint-based values such as xs/sm/md.
- Follow the existing color palette:
  - primary purple: #7249b0
  - mint/cyan: #7cfec3
  - white text: #ffffff
- Do not introduce Tailwind, CSS Modules, or new styling libraries.
- Keep the current layout aesthetic and spacing patterns unless a change explicitly requires otherwise.

## Component Rules
- Use client components only when necessary for hooks, browser APIs, or event handlers.
- Prefer server components where possible.
- Export components as default exports.
- Define props with simple TypeScript interfaces declared in the same file.
- Follow the existing component naming patterns already used in app/components.

## Data Model Expectations
This project is data-driven. Content should usually be changed in the relevant file under app/data/.

- Artists: defined in app/data/artists.ts
- Releases: defined in app/data/releases.ts
- Calendar: defined in app/data/calendar.ts

When adding new content:
- update the correct data file
- render it through the existing page/component structure
- avoid hardcoding new content directly in the page component unless the situation truly requires it

## Navigation and Routing
- New pages should live under app/<slug>/page.tsx.
- If the page should be discoverable from the site navigation, add it to the navLinks array in app/components/Navigation.tsx.
- Keep route names and labels consistent with the existing Portuguese navigation style.

## Import and Path Rules
- Use the @/ alias for project-root imports when appropriate.
- Be mindful of the app structure and keep imports relative to the relevant module when that is more readable.

## Development Workflow
Before finishing work:
- inspect the relevant files first
- make the smallest change that solves the issue
- verify the result with linting and build checks
- check the affected page or flow manually if possible

## Verification Commands
Run these when appropriate:
- npm run lint
- npm run build

## Bug Fixing Guidance
When fixing bugs:
1. Reproduce the issue or understand the expected behavior.
2. Trace the relevant component, page, or data source.
3. Fix the root cause rather than patching symptoms.
4. Verify the change does not break nearby behavior.

## Constraints
- Do not add backend services, API routes, or database dependencies.
- Do not switch the site to a different styling approach.
- Do not replace the current local font setup.
- Do not rely on generic Next.js patterns that conflict with this repository’s existing conventions.
- If uncertain, follow the existing pattern already used in the project rather than introducing a new architecture.

## Guardrails
- Preserve the current design language and content intent.
- Keep changes compatible with the static, presentation-first nature of this website.
- Prefer maintainability and clarity over clever abstractions.