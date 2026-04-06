# Harmonics Industries

> **Industrial Precision, Human Scale**

A one-person software development shop with an ironically industrial name.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Custom Properties (Design System tokens)
- **Deployment**: Vercel-ready

## Design System

This project includes a complete design system for building the Harmonics Industries homepage and related web properties.

### Philosophy

The design embraces the tension between:
- **Industrial** — Structured, systematic, reliable
- **Harmonic** — Organic, resonant, human

Think Dieter Rams meets a solo developer's practice space.

### Documentation

- [Full Design System Documentation](./docs/DESIGN_SYSTEM.md)
- [Live Component Demo](./public/demo.html)

### File Structure

```
harmonics/
├── app/                      # Next.js App Router
│   ├── styles/
│   │   ├── tokens.css        # CSS custom properties
│   │   ├── base.css          # Reset & typography
│   │   └── components.css    # UI components
│   ├── lib/
│   │   └── theme.ts          # TypeScript config
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
├── public/
│   └── demo.html             # Visual reference
├── docs/
│   └── DESIGN_SYSTEM.md      # Complete documentation
└── README.md
```

### Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the homepage.

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Obsidian | `#0a0a0a` | Primary text |
| Graphite | `#1a1a1a` | Backgrounds |
| Steel | `#3d3d3d` | Borders |
| Frequency | `#6366f1` | Primary accent |
| Amplitude | `#8b5cf6` | Secondary accent |
| Wavelength | `#06b6d4` | Highlights |

### Typography

- **Sans-serif**: Inter (headings, body)
- **Mono**: JetBrains Mono (code, technical)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint (if configured) |

## License

MIT — Harmonics Industries
