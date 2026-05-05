# vidhya-ai-portfolio

Personal portfolio for **Vidhya C** — AI / GenAI Engineer specializing in LangChain, LangGraph, AWS Bedrock, RAG pipelines, and multi-agent systems.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS variables
- **Design**: Dark-mode AI aesthetic with particle canvas, grid background, and glow effects
- **Fonts**: Syne (display) + Outfit (body) + DM Mono (code)
- **Deployment**: Static export (compatible with Vercel, Netlify, GitHub Pages)

## Local Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build
```

## Sections

1. **Hero** — Animated particle canvas, headline, stats bar, CTA buttons
2. **About** — Engineering background, AI pivot story, strength highlights
3. **Projects** — Jenson-Flow, Synapse AI, Walmart BOM AI Pipeline
4. **Experience** — Timeline from 2011 to present with tech stacks
5. **Skills** — Grouped by domain: GenAI, Vector DBs, Java, Cloud, Databases
6. **Contact** — Email, LinkedIn, GitHub, phone

## Customization

All content lives in the component files under `src/components/`. To update:

- **Projects**: Edit `Projects.tsx`
- **Experience**: Edit `Experience.tsx`
- **Skills**: Edit `Skills.tsx`
- **Contact info**: Edit `Contact.tsx` and `Nav.tsx`
