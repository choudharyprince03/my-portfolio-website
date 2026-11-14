# Prince Choudhary: Website Guide

This website is where my work, my path and my way of thinking sit side by side. It is built for three kinds of visitors: a founder or hiring manager who wants to know how I think about a product, a team that needs someone who can read code and talk to customers in the same afternoon, and anyone curious enough to open a project and see what I actually built.

This guide walks through the whole site, section by section, and explains the story behind it.

---

## The story in one line

I started by writing code. I then learned to sell. Now I shape products.

Each step gave me a different lens on the same problem: will this work, will anyone pay for it, and how does it become something people use every day. The whole site is organised around those three lenses.

---

## Page by page

### 1. Hero: the first screen

The headline reads: **"Associate Product Manager with software and sales experience."** It names the job and the unusual part of my background in one line. The sentence under it gives the proof: PRDs, research and delivery at VizionTools, React and Node projects, and ₹3–4 lakh in revenue at RegisterKaro.

Beside it sits a career panel with no photograph, built only from facts the site already holds. It opens with **Now**: *Currently at VizionTools, working on AI-driven products and agentic workflows.* Under that are my three most recent roles with their dates, and three numbers: about 500 leads handled, ₹3–4L in revenue within three months, and four projects built.

Two buttons close the hero: *Email Prince* and *Read my resume*.

### 2. Approach: three lenses

This is the core idea of the site.

- **The Technologist.** I understand what is technically possible. Computer science, hands-on React and Node, AI and ML exploration, and a steady interest in automation.
- **The Business Thinker.** I understand why a solution needs to exist. Time on the front line with customers, sales and commercial processes taught me what people will pay for.
- **The Product Builder.** I take an idea from research and PRDs to launch, and I bring the technical and business views into one decision.

The three lenses sit side by side as three cards on desktop and stack on phones. Each card has a number, the lens, one line addressed to the visitor, the detail, and the skills behind it. Nothing in this section moves on scroll; the cards lift 2px when you point at them.

### 3. Journey: how I got here

The journey is a timeline with four chapters along a red line, newest at the bottom.

**B.Tech, Computer Science & Engineering, VIT Bhopal University (2024 to present).** The foundation: data structures, OOP, DBMS, web development, backend, AI/ML and cloud computing.

**Software Development & Project Building (2024 to 2025).** Theory became shipped projects built with React, Tailwind and machine learning. The work led to an internship offer from OSCode for Full-Stack Development.

**Business Development Associate, RegisterKaro (3 months, 2026).** I managed about 500 leads and generated ₹3–4 lakh in revenue in three months. I handled customer conversations from first contact to conversion, matched customers to the right business services, and ran lead qualification and follow-ups. This is where I learned what buyers actually respond to.

**Associate Product Manager, VizionTools (2026 to present, current).** Product research, competitor analysis and requirements documentation. I write PRDs and feature requirements, coordinate development and milestones, contribute to UI/UX improvements, and turn customer feedback into product changes. I helped launch features and streamline workflows to cut process time.

The RegisterKaro and VizionTools entries have a *Show what I did* toggle, so you can read the detail when you want it.

### 4. Work: what I have built and shipped

The work section has two parts.

**Products.** The first is **Produce POS**, a point-of-sale solution for produce businesses, aimed at simplifying sales and day-to-day operations. Its focus areas are retail technology, POS systems and business process digitisation.

**Engineering projects.** Four projects, each with a preview, a live link and a source link. Each one opens a full project page.

- **Nexus** (2026): an AI-powered full-stack task dashboard. MERN stack, JWT authentication, role-based access for Admin, Manager and User, and an AI insights engine built on OpenRouter (LLaMA 3.3). The hardest problem was writing role-aware AI prompts that adjust to task status and permissions while keeping API latency low.
- **FoodZero** (2023): a restaurant website with a mobile-first menu, a reviews section and a reservation flow that writes bookings into Google Sheets through the Sheets API.
- **Blogged** (2024): a full-stack publishing platform with Redux, Appwrite authentication, CRUD for content and image uploads through Appwrite Storage. The main design decision was keeping admin workflows direct while reader pages stay light.
- **Moneyestate** (2025): a real estate listing site with detailed property pages, motion-led transitions and a calm layout for information-heavy browsing.

Every project page follows the same structure: the video or screenshot, what the project is, the challenge it posed, my role, the timeline, the tools, and links to the live site and the code. Read them in that order and you get the full story of each build.

### 5. Capabilities: where the lenses overlap

Six clusters, each with the specific skills behind it:

| Domain | What it covers |
|---|---|
| Technology | Programming, React.js, JavaScript, Python |
| AI / ML | Machine learning, LLMs, AI applications |
| Cloud | AWS and cloud fundamentals |
| Business | Sales, customer acquisition, business development |
| Product | Product thinking, requirements, strategy |
| AI Automation | AI agents, Claude Code, workflow automation |

### 6. Contact

The heading reads **"Let's build something people want."** Visitors can write to me through a form, email me directly, or download my resume. Form submissions are delivered through Web3Forms. The form tells the sender when a message has gone through, and says so plainly when it has not.

I am open to conversations about product, AI-driven workflows and the problems worth solving.

### 7. Resume

The resume page shows my full resume as an embedded PDF, with a download button and an *Open in new tab* option. On phones, where embedded PDFs often fail to render, the page shows a clear fallback with download and open actions instead.

### 8. Navigation and the dock

- The top bar links to **Approach, Journey, Work** and **Contact**, and has a Resume button on the right.
- The floating dock at the bottom of every page gives one-tap access to **Home, Resume, GitHub, Email** and **Scroll to Top**.

---

## Design language

The palette comes from three named colours: **Charcoal Grey `#2A2A2A`**, **Moonlit Silver `#C0C0C0`** and **Signal Red `#E10600`**. The choices are deliberate:

- **A lightened silver background with charcoal text** keeps long reading comfortable. The exact silver is kept for borders and dividers.
- **Signal red** appears only where a visitor should look: the key words in each headline, the current job marker, the timeline line, the primary contact button.
- **One charcoal band.** The contact section and footer are the only dark area, so the page reads as light, light, light, light, then one dark close.
- **One section per screen.** Every section is exactly one or two screens tall with its heading at the top and the same left and right edges, so each screen shows one idea.
- **No photograph of me.** The hero shows my record instead: roles, dates and three real numbers.
- **Motion only where you point.** Cards lift 2px, project images zoom slightly inside their frame, buttons step up on hover and press down on click, and underlines draw. Nothing animates because the page scrolled.
- **Plain copy.** Headings name the thing (Products and projects, Skills across the whole product), buttons say a verb and an object, and no heading is a slogan.

---

## How the site is built

- **Framework:** React 18 with Vite, routed with React Router.
- **Styling:** Tailwind CSS with theme colours defined as CSS variables, so light and palette changes happen in one place.
- **Motion:** CSS transitions for hover and press states, and Motion for React for the page-to-page fade. No scroll-driven animation.
- **Hosting:** Vercel, with a rewrite rule so every route falls back to the single-page app.
- **Fonts:** Inter for text, Instrument Serif for display headings, JetBrains Mono for labels.

### Where the content lives

If you want to change something, start here:

| What you want to change | File |
|---|---|
| Headline, intro, email, "Now" card, lenses, journey, capabilities, products | `src/data/content.js` |
| Engineering projects and project pages | `src/data/projects.js` |
| Hero layout and career panel | `src/components/Hero.jsx` |
| Approach (three lenses) | `src/components/Lenses.jsx` |
| Timeline | `src/components/Journey.jsx` |
| Work section | `src/components/FeaturedWork.jsx` |
| Contact form | `src/components/Contact.jsx` |
| Navigation and dock | `src/components/Nav.jsx`, `src/components/Dock.jsx` |
| Resume | `public/assets/Resume_Prince Choudhary.pdf` |
| Colours, section heights, buttons, hover behaviour | `src/index.css`, `tailwind.config.js` |

The file `src/data/content.js` is the single source of truth for copy. Its own header comment says not to add claims that are not in it, and that rule is worth keeping.

---

## Maintenance notes

These items came up while writing this guide. None of them breaks the site, but each one should be settled before the next update.

1. **Dead files.** `src/components/About.jsx`, `src/components/Skills.jsx`, `src/components/Reveal.jsx`, `src/lib/gsap.js` and `src/lib/useMedia.js` are no longer used by any page. Delete them, and remove `gsap` and `@gsap/react` from `package.json`.
2. **Your portrait inside a thumbnail.** The Blogged project's video thumbnail on YouTube includes a small photo of you. It is outside the site's code, so change the video's thumbnail on YouTube if you want it gone.
3. **Demo credentials in project copy.** The Nexus description in `src/data/projects.js` includes a demo login. That is useful for reviewers, but remove it if the demo account is ever retired or changed.
4. **Hard-coded links in the dock.** `src/components/Dock.jsx` writes the GitHub URL and email address directly rather than reading them from `content.js`. A future change to either will need two edits.
5. **Produce POS page.** The product section is a short summary. When there is a live URL, screenshots or outcome numbers, add them to `products` in `content.js` so this product gets the same depth as the engineering projects.
6. **Uncommitted changes.** Most of the source is currently modified or untracked in git. Review and commit it as one clean change before deploying.
