# Fingerprints

Every site you build with **scroll-craft** gets one row here, appended after it
ships. The registry exists so your next build can prove it is a different page
rather than a re-skin of one you already made.

This file is **yours**. It starts empty on purpose: the gate is about not
repeating *yourself*, so it has nothing to say until you have built something.

The rules and the gate live in the skill's
`references/uniqueness.md`. Short version:

**A new build must differ from EVERY row below on at least 4 of the 6
dimensions.** Four against each row individually, not four on average across the
table. If a planned build fails, change the plan. Never edit a row to make room
for it.

The six dimensions are: **grammar**, **nav treatment**, **hero device**,
**act-sequence shape**, **close pattern**, **signature move**.

Dimension 6 is free, because a signature move is unique by definition. So the
gate really asks for three more out of the remaining five, and a build that
changes only grammar and world will fail it.

---

## The registry

| Build | Grammar | Nav treatment | Hero device | Act-sequence shape | Close pattern | Signature move | World | Port |
|---|---|---|---|---|---|---|---|---|
| `prince-portfolio` | Layered Dossier | Floating top pill (`Prince.` + 5 links + `Email Prince`) + bottom Dock | 5-plane depth parallax (`hero-bg`, `hero-mid`, typography, `hero-monolith`, `hero-fg`) + fine-pointer offset | `pin` (2.4vh / 1.75vh mobile) > `flow` > `pin` (2.1vh) > `pan` (3.6vh Peak) > `flow` > `flow` (6 acts, 11.2vh) | Grounded Web3Forms POST inquiry synced to active lens + `Email Prince` + `Download resume` | Three-Lens Synthesizer persisted into Contact + scroll-driven SVG blueprint trace | Architectural Obsidian & Electric Cobalt (`#0B0E14` canvas, `#131822` surface, `#528BFF` cobalt) | 4173 |
| `prince-portfolio-editorial` | Tri-Palette Editorial Dossier | Glass pill (`Prince. @2026`, 6 links, `Let's talk`) + conditional mid-scroll desktop Dock | Editorial grid Hero + `PRINCE` monogram watermark + GSAP scrubbed plates + interactive Portfolio Index & `Let's Talk` card | 7 chapters with `#EEF4F8` Ice White Philosophy contrast break + GSAP desktop pinned `#work` lateral rail + interactive 9-step PM reader + Triad Capabilities | Spotlight Web3Forms POST synced to active lens + `Conversation Focus` selector + direct Email/LinkedIn/GitHub cards | Inline 9-part PM Case Study Reader + 4-node system flow + GSAP horizontal pin rail + Three-Lens Synthesizer persistence + desktop `CustomCursor` | Tri-Palette Midnight Electric (`#0B1224` / `#66E3FF` / `#EEF4F8`), Graphite Cobalt (`#171923` / `#516CFF`), Plum Coral (`#291C36` / `#FF806B`) | 4514 |
| `prince-portfolio-emerald` | Minimalist Botanical-Pixel Portfolio | Minimal translucent pine bar (`Prince.`, 5 text links, `Let's talk`, no counter badges) + subtle mid-scroll act pill | 4-plane green architectural depth (`hero-emerald-bg`, `-mid`, `-fg`) paired with scroll-synced crisp 16-bit pixel character (`idle-neutral` -> `thinking-curious`) | 6 sparse ScrollCraft acts (`pin` `2.0vh` > `flow` > `pin` `1.8vh` > `pan` `3.2vh` Peak > `flow` > `flow`, `9.6vh` desktop) with deep-link `/project/:id` PM stories | Minimal closing invitation beside `happy-hearts` pixel sprite + Web3Forms POST synced to 3-lens pill + single-row footer | Scroll-synced 16-bit Pixel Alter Ego (40 transparent nearest-neighbor poses mapped to acts) contrasted against forest obsidian photography & frosted jade glass | Forest-Emerald Tri-Palette: Abyssal Pine (`#06110D` / `#52E5A8`), Moss Graphite (`#0B1712` / `#34D399`), Deep Spruce (`#0F1F18` / `#86EFAC`) | 4510 |

---

## What is taken

- **Grammar + peak:** Layered Dossier with a 5-plane optical monolith hero and a lateral `pan` Shipped Work peak (`3.6vh`), built in the Obsidian Slate & Electric Cobalt dark editorial world (`#0B0E14` / `#528BFF`), with Three-Lens Synthesizer synced to Contact + self-drawing SVG timeline trace.
- **Tri-Palette Editorial + Hybrid Motion Stack (`prince-portfolio-editorial`):** Midnight Electric (`#0B1224` / `#66E3FF` / `#EEF4F8` contrast break) + Graphite Cobalt (`#171923` / `#516CFF`) + Plum Coral (`#291C36` / `#FF806B`), interactive Hero Portfolio Index switcher, desktop GSAP horizontal pinned Case Study rail + 9-step inline reader, Triad Capabilities map, and hybrid Framer Motion + GSAP ScrollTrigger + ScrollCraft + `CustomCursor` coordination.
- **Minimalist Forest-Emerald + 16-Bit Pixel Alter Ego (`prince-portfolio-emerald`):** Dark architectural green palettes (`#06110D` pine / `#0B1712` moss / `#0F1F18` spruce with `#52E5A8` mint, `#34D399` jade, `#86EFAC` celadon accents), minimalist 6-act ScrollCraft pacing (`9.6vh`), hero/discovery/launch/craft architectural webp stills, and all 40 crisp chroma-keyed pixel sprite poses mapped via `MutationObserver` on ScrollCraft `--sc-p` across every act.

---

## Appending a row

After shipping, add one line to the table and one bullet to **What is taken** if
the build claimed something new. Fill every column. Say what the build shares
with existing rows.

Rows are append-only. A build that has been superseded stays in the table,
because the space it occupies is still occupied.

---

## Worked example

The skill's author kept a registry of twelve builds across eight page grammars.
If you want to see what a filled-in table looks like, and which shapes tend to
collide, read `EXAMPLES.md` in the scroll-craft repository. Treat it as
illustration only: those rows are somebody else's builds and they do **not**
constrain yours.
