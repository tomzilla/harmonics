# Harmonics Industries — Design System

> **Industrial Precision, Human Scale**

A design system that embraces the irony: a one-person software company with an industrial-scale name. The visual language is serious, minimal, and systematic — but with subtle warmth that hints at the human behind the code.

---

## Philosophy

### Core Tension
- **Industrial** → Structured, systematic, reliable
- **Harmonics** → Organic, resonant, human

The design should feel like precision engineering with soul. Think Dieter Rams meets a jazz musician's practice space.

### Principles
1. **Clarity over decoration** — Every element serves a purpose
2. **Systematic but not cold** — Grids and structure with warm accents
3. **Small team, serious craft** — Professional polish, no enterprise bloat
4. **Subtle wit** — The irony lives in the details, not the headlines

---

## Color Palette

### Foundation
| Name | Token | Hex | Usage |
|------|-------|-----|-------|
| Obsidian | `--color-obsidian` | `#0a0a0a` | Primary text, deep backgrounds |
| Graphite | `--color-graphite` | `#1a1a1a` | Secondary backgrounds |
| Steel | `--color-steel` | `#3d3d3d` | Borders, dividers |
| Mist | `--color-mist` | `#e5e5e5` | Subtle borders, rules |
| Vapor | `--color-vapor` | `#f5f5f5` | Section backgrounds |
| White | `--color-white` | `#ffffff` | Cards, primary backgrounds |

### Accent — Harmonic Resonance
| Name | Token | Hex | Usage |
|------|-------|-----|-------|
| Frequency | `--color-frequency` | `#6366f1` | Primary CTAs, links |
| Amplitude | `--color-amplitude` | `#8b5cf6` | Gradients, secondary accents |
| Wavelength | `--color-wavelength` | `#06b6d4` | Data viz, highlights |

### Semantic
| Name | Token | Hex | Usage |
|------|-------|-----|-------|
| Success | `--color-success` | `#10b981` | Positive states |
| Warning | `--color-warning` | `#f59e0b` | Caution states |
| Error | `--color-error` | `#ef4444` | Error states |

### Gradient
```css
--gradient-harmonic: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
--gradient-industrial: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
```

---

## Typography

### Font Stack
```css
/* Primary — Industrial clarity */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Mono — Code, technical details */
--font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
```

### Scale
| Name | Size | Weight | Line | Usage |
|------|------|--------|------|-------|
| Display | `3.5rem` / 56px | 700 | 1.1 | Hero headlines |
| H1 | `2.5rem` / 40px | 700 | 1.2 | Page titles |
| H2 | `1.75rem` / 28px | 600 | 1.3 | Section headers |
| H3 | `1.25rem` / 20px | 600 | 1.4 | Subsections |
| Body | `1rem` / 16px | 400 | 1.6 | Body text |
| Small | `0.875rem` / 14px | 400 | 1.5 | Captions, meta |
| Mono | `0.875rem` / 14px | 400 | 1.7 | Code, technical |

### Letter Spacing
```css
--tracking-tight: -0.02em;  /* Display, H1 */
--tracking-normal: 0;       /* Body */
--tracking-wide: 0.05em;    /* Overlines, labels */
```

---

## Spacing System

### Base Unit: 4px
All spacing derives from a 4px base unit.

```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
```

### Layout Spacing
```css
--container-narrow: 640px;   /* Text content */
--container-main: 896px;     /* Standard content */
--container-wide: 1200px;    /* Full layouts */
--container-max: 1400px;     /* Dashboard views */
```

---

## Grid & Layout

### Grid Philosophy
Industrial grids with intentional breaks. The system creates expectations; occasional asymmetry creates interest.

```css
--grid-columns: 12;
--grid-gap: 1.5rem;
--grid-margin: 1.5rem;
```

### Breakpoints
```css
--bp-sm: 640px;    /* Mobile landscape */
--bp-md: 768px;    /* Tablet */
--bp-lg: 1024px;   /* Laptop */
--bp-xl: 1280px;   /* Desktop */
--bp-2xl: 1536px;  /* Large desktop */
```

---

## Components

### Buttons

#### Primary (Industrial Workhorse)
```css
background: var(--color-obsidian);
color: var(--color-white);
padding: 0.75rem 1.5rem;
border-radius: 4px;  /* Slight softening, not pill-shaped */
font-weight: 500;
transition: all 0.15s ease;
```

Hover: `transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.15);`

#### Secondary (Precision Tool)
```css
background: transparent;
color: var(--color-obsidian);
border: 1px solid var(--color-steel);
padding: 0.75rem 1.5rem;
border-radius: 4px;
font-weight: 500;
```

#### Accent (Harmonic Moment)
```css
background: var(--gradient-harmonic);
color: var(--color-white);
padding: 0.75rem 1.5rem;
border-radius: 4px;
font-weight: 500;
```

### Cards

#### Default
```css
background: var(--color-white);
border: 1px solid var(--color-mist);
border-radius: 8px;
padding: 1.5rem;
```

#### Elevated
```css
box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.12);
```

### Inputs

```css
border: 1px solid var(--color-steel);
border-radius: 4px;
padding: 0.625rem 0.875rem;
font-size: 0.9375rem;
transition: border-color 0.15s ease, box-shadow 0.15s ease;
```

Focus: `border-color: var(--color-frequency); box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);`

---

## Visual Elements

### Lines & Dividers

```css
/* Standard rule */
border-top: 1px solid var(--color-mist);

/* Section divider — heavier */
border-top: 1px solid var(--color-steel);

/* Subtle separator */
border-top: 1px solid rgba(0,0,0,0.06);
```

### Data Visualization

For charts, graphs, technical diagrams:

```css
--viz-1: #6366f1;  /* Frequency */
--viz-2: #8b5cf6;  /* Amplitude */
--viz-3: #06b6d4;  /* Wavelength */
--viz-4: #10b981;  /* Success */
--viz-5: #f59e0b;  /* Warning */
```

### Icons

- **Style**: Outlined, 1.5px stroke
- **Size**: 20px for UI, 24px for features
- **Color**: `--color-steel` default, `--color-obsidian` active

---

## Motion

### Philosophy
Industrial precision — mechanical, deliberate, never decorative. Motion serves function.

### Durations
```css
--duration-fast: 100ms;    /* Micro-interactions */
--duration-normal: 200ms;  /* Standard transitions */
--duration-slow: 300ms;    /* Complex animations */
```

### Easing
```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);  /* Entering */
--ease-in: cubic-bezier(0.7, 0, 0.84, 0);   /* Exiting */
--ease-default: cubic-bezier(0.4, 0, 0.2, 1); /* Standard */
```

### Patterns
- Buttons: `transform 0.15s var(--ease-out)`
- Cards: `all 0.2s var(--ease-default)`
- Modals: `opacity 0.2s var(--ease-out), transform 0.25s var(--ease-out)`

---

## Voice & Tone

### Headlines
Direct. Confident. No filler.

> "Software, precisely crafted."
> "One developer. Full stack."

### Body Copy
Conversational but efficient. Technical when needed. Never condescending.

> "I build web applications and APIs that work. No project management overhead, no team coordination tax — just focused development from requirements to deployment."

### Microcopy
- CTAs: Action-oriented ("Start a project", "View case studies")
- Errors: Direct with resolution ("Invalid email. Check the domain and try again.")
- Empty states: Human, slightly wry ("Nothing here yet. Unlike my inbox.")

---

## Imagery

### Photography Style
- Black and white or heavily desaturated
- High contrast
- Architectural, geometric compositions
- Occasional warm accent (a desk lamp, coffee, hands on keyboard)

### Illustration
Minimal if any. When used:
- Line art, technical diagrams
- Wave patterns, frequency visualizations
- No characters, no cartoonish elements

---

## Dark Mode

```css
--color-bg-primary: #0a0a0a;
--color-bg-secondary: #1a1a1a;
--color-bg-surface: #141414;
--color-text-primary: #fafafa;
--color-text-secondary: #a3a3a3;
--color-border: #262626;
```

---

## File Structure

```
src/
├── styles/
│   ├── tokens.css        # CSS custom properties
│   ├── base.css          # Reset, typography
│   ├── components/       # Component styles
│   └── utilities.css     # Helper classes
├── components/           # React/Vue components
└── lib/
    └── theme.ts          # TypeScript theme config
```

---

## Quick Start

### CSS Import
```css
@import './styles/tokens.css';
@import './styles/base.css';
@import './styles/components.css';
```

### First Component Example

```tsx
// components/Button.tsx
import { clsx } from 'clsx';

export function Button({ variant = 'primary', className, ...props }) {
  return (
    <button
      className={clsx(
        'button',
        `button--${variant}`,
        className
      )}
      {...props}
    />
  );
}
```

---

## Credits

Inspired by:
- Braun industrial design (Rams)
- Vercel, Linear, Stripe design systems
- The reality of being a solo developer with an overly ambitious company name

---

*Version 1.0 — Harmonics Industries*
