# Design System — Prince Choudhary Minimalist Emerald Portfolio

## 1. Visual Direction & ScrollCraft Structure
- **Identity:** Minimalist Botanical-Architectural Product Portfolio for Prince Choudhary (Associate Product Manager at VizionTools).
- **Signature Contrast:** Sharp 16-bit pixel character poses (`public/assets/mascot/extracted/`) rendered crisp (`image-rendering: pixelated`) against dark obsidian stone, frosted emerald glass, and quiet minimalist typography.
- **Six-Act Scroll Architecture (`9.6vh` desktop):**
  1. `Hero` (`pin`, `2.0vh`, `dwell="0.34"`): 4-plane depth (`hero-emerald-bg.webp`, `hero-emerald-mid.webp`, typography + right gallery pixel sprite shifting `idle-neutral` -> `thinking-curious`, `hero-emerald-fg.webp`) + `data-sc-kinetic="lines"`.
  2. `Discovery` (`flow`, `reveal="up"` + `stagger="65"` + `count`): Overhead slate discovery studio + `thinking-eureka` + 3 hairline discovery statements + verified counts (`~500`, `₹3 to 4L`, `5`).
  3. `Journey` (`pin`, `1.8vh`): ScrollCraft `--sc-p` self-drawing emerald SVG timeline spine + interactive 4-stop stations (`VIT` -> `Builder` -> `RegisterKaro` -> `VizionTools`) + evolving sprite states (`determined`, `headphones`, `effort`, `approve`).
  4. `Work` (`pan`, `3.2vh` Peak): Horizon gallery (`launch-horizon.webp`) with horizontal scrolling rack across Produce POS, Nexus, Moneyestate, Blogged, FoodZero + celebratory endcap (`celebrate-sparks`).
  5. `Craft` (`flow`, `reveal="left"`): Interactive 3-lens switch (`Product`, `Engineering`, `Commercial`) beside etched wireframe glass slabs (`execution-craft.webp`) + `typing-focused` sprite.
  6. `Contact` (`flow`, `spotlight`, `magnet="0.22"`): Grounded closing invitation + `happy-hearts` sprite + Web3Forms POST form synced to active lens + single-row `Footer`.

## 2. Green-Shaded Token System (`src/index.css` & `tailwind.config.js`)
- **Dominant Pine (`pine`):** Canvas `#06110D` · Surface `#0B1D15` · Accent `#52E5A8` (Phosphor Mint) · Ink `#EBF5EF` · Muted `#8FAE9E`
- **Technical Moss (`moss`):** Canvas `#0B1712` · Surface `#12231C` · Accent `#34D399` (Jade Emerald) · Mist `#E3EFE8`
- **Human Spruce (`spruce`):** Canvas `#0F1F18` · Surface `#172B22` · Accent `#86EFAC` (Celadon Sage) · Sand-Mist `#ECF5EC`
- **Continuous Canvas Drift:** ScrollCraft `[data-sc-drift]` smoothly shifts `--sc-canvas` across `#06110D` -> `#0B1712` -> `#0F1F18` -> `#07130E` -> `#0B1712` -> `#06110D`.

## 3. Typography Stack
- **Display (`font-display`):** `Archivo`, system-ui, sans-serif (`-0.03em` to `-0.035em` tracking, 700 weight).
- **Body (`font-sans`):** `Geist`, system-ui, sans-serif (`--sc-leading-body: 1.62`).
- **Technical Labels (`font-mono`):** `Geist Mono`, ui-monospace, monospace.

## 4. Animation & Motion Stack
- **ScrollCraft Engine (`src/engine/scrollcraft.js` & `scrollcraft.css`):** Pure CSS + ScrollCraft `--sc-p` driving pinned stages, horizontal rail pan, split-line kinetic titles, clip-path image reveals, staggered rows, counts, background color drift, tilt cards, magnetic CTAs, and pointer spotlights.
- **Deterministic React Sync:** `Hero` and `Journey` subscribe directly to `--sc-p` mutations via `MutationObserver` with full `(prefers-reduced-motion: reduce)` fallbacks.
- **Route Transitions (`motion/react`):** Minimal page transitions between `/`, `/project/:id`, and `/resume`, plus desktop fine-pointer emerald `CustomCursor`.
