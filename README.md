# Campus Compass — University Student Hub

A Next.js 15 campus companion web app for prospective and current students: interactive campus map, virtual tour, AI-powered student assistant (Genkit + Gemini), event listings, and a student portal dashboard.

## Features

- **Interactive Campus Map** — clickable buildings and points of interest
- **Virtual Tour** — guided campus exploration from anywhere
- **Smart Assistant** — AI chatbot answering common student questions (Genkit + Google Gemini)
- **Event Listings** — calendar of upcoming campus events
- **Student Portal** — personalized dashboard with notifications and class info
- **Responsive design** — clean grid layout, Space Grotesk + Inter typography

## Tech Stack

- **Framework**: Next.js 15 (App Router), React 18, TypeScript
- **AI**: Genkit (`@genkit-ai/googleai`) with Gemini models, server actions
- **Styling**: Tailwind CSS + shadcn/ui (Radix primitives)
- **Forms/validation**: React Hook Form + Zod
- **Deployment target**: Firebase App Hosting (`apphosting.yaml` included)

## Quick Start

### Prerequisites

- Node.js 18+
- A Google AI (Gemini) API key — set as `GOOGLE_API_KEY` in `.env`

### Installation

```bash
# Clone and install
git clone https://github.com/girishlade111/Campus-Compass.git
cd Campus-Compass
npm install

# Configure environment
echo "GOOGLE_API_KEY=your-google-ai-key" > .env

# Run the dev server
npm run dev
```

Open `http://localhost:9002` (the dev port configured in `package.json`).

### Build

```bash
npm run build
npm start
```

## Project Structure

```
.
├── src/
│   ├── app/            # App Router pages: home, ask, events, map, portal, virtual-tour, login
│   ├── ai/             # Genkit setup + server-side AI flows (student Q&A)
│   ├── components/     # shadcn/ui components
│   └── lib/            # Utilities
├── docs/blueprint.md   # Product/feature blueprint
├── apphosting.yaml     # Firebase App Hosting config
└── components.json     # shadcn/ui config
```

## Env Vars

| Variable | Purpose |
| :--- | :--- |
| `GOOGLE_API_KEY` | Google AI (Gemini) API key for the AI assistant flow |

## Deploy

- **Firebase App Hosting** — `apphosting.yaml` is included; connect the repo to App Hosting
- Any Next.js-capable host (Vercel, Netlify) with `GOOGLE_API_KEY` set

## Credits

**Built by Girish Lade** — [ladestack.in](https://ladestack.in)
