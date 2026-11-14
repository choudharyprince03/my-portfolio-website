// Verified project & product case studies.
// IDs 1, 2, 3, 4 preserve existing deep-link routes (/project/:id); ID 5 adds Produce POS.
// No fabricated user numbers, revenue claims, or fake screenshots.

export const projects = [
  {
    id: 5,
    slug: 'produce-pos',
    name: 'Produce POS',
    category: 'Commercial Product',
    tagline: 'Digitizing daily counter operations and billing workflows for produce retailers.',
    desc: 'Point-of-sale product built to replace manual billing friction in produce businesses.',
    role: 'Product Manager & Builder',
    timeline: 'Product Initiative',
    palette: 'pine',
    accentColor: '#52E5A8',
    surfaceTint: '#0B1D15',
    shortLine: 'Fast tap-minimal retail billing for high-velocity produce counters.',
    tools: 'Retail POS Architecture, Billing Workflows, Counter UX, Operations Digitization',
    image: null,
    videoId: null,
    liveUrl: null,
    githubUrl: null,
    summary:
      'Designed around high-speed retail counter constraints to replace paper slips and fragmented calculations with a direct digital POS workflow.',
    longDesc:
      'Produce businesses run at high transaction velocity with perishable inventory and variable weights. Produce POS was scoped to move daily billing and counter management off error-prone manual tallies into an accessible point-of-sale flow.',
    challenge:
      'Shop counters cannot pause for multi-step enterprise software screens during rush hours; every interaction needed minimal taps and zero training overhead.',
    story: {
      problem:
        'Local produce retailers rely on manual calculation, handwritten slips, and end-of-day memory reconciliation, creating billing delays and stock blind spots.',
      users:
        'Produce shop owners and counter staff processing rapid walk-in transactions while handling variable weights and repeat customers.',
      businessContext:
        'Small retail operators avoid heavy ERP tools due to high setup cost and slow checkout UI, leaving a clear gap for lightweight operational software.',
      researchInsights:
        'Shadowing retail workflows showed speed per item entry and clear line-item totals matter far more at the counter than deep accounting menus.',
      strategy:
        'Anchor MVP strictly around fast item selection, automatic billing calculation, and clean daily sales summaries before introducing secondary inventory layers.',
      tradeOffs:
        'Excluded complex multi-warehouse ERP configuration in v1 so first-time counter staff could complete transactions cleanly within seconds.',
      execution:
        'Mapped counter billing flows, defined core POS data schemas for items and transactions, and shaped an uncluttered touch-friendly interface hierarchy.',
      outcome:
        'Delivered a focused product architecture directly addressing daily counter digitization and retail operational workflows.',
      learnings:
        'In physical retail environments, software adoption hinges on matching the tempo of live human transactions rather than adding feature density.',
    },
    flow: [
      { step: '01', label: 'Counter Entry', detail: 'Rapid produce item & weight selection' },
      { step: '02', label: 'Instant Calc', detail: 'Error-free line totals without manual math' },
      { step: '03', label: 'Clean Receipt', detail: 'Customer billing recorded in real time' },
      { step: '04', label: 'Daily Ledger', detail: 'Structured end-of-day operational visibility' },
    ],
  },
  {
    id: 1,
    slug: 'nexus',
    name: 'Nexus',
    category: 'AI & SaaS Architecture',
    tagline: 'Role-aware full-stack workspace with context-adaptive AI execution insights.',
    desc: 'AI-Powered Full-Stack Task Dashboard.',
    videoId: 'MM8GjDC7GMw',
    image: '/nexus.png',
    role: 'Full Stack Developer & Product Architect',
    timeline: '2026',
    palette: 'moss',
    accentColor: '#34D399',
    surfaceTint: '#0B1712',
    shortLine: 'Multi-role task platform pairing JWT RBAC with LLaMA 3.3 insights.',
    tools: 'React 19, Vite, Tailwind CSS, Express, MongoDB, Node.js, OpenRouter (LLaMA 3.3)',
    liveUrl: 'https://dashboard01-full-stack.vercel.app/login',
    githubUrl: 'https://github.com/choudharyprince03/Dashboard01FullStack',
    summary:
      'A full-stack MERN task platform pairing fine-grained Admin, Manager, and User RBAC with an OpenRouter LLaMA 3.3 AI insights engine.',
    longDesc:
      'Built a full-stack MERN task dashboard featuring secure JWT authentication, fine-grained Role-Based Access Control (RBAC) across Admin, Manager, and User roles, and an AI insights engine. The backend follows a modular service-oriented architecture while the frontend maintains a responsive interface. (Demo login: user1@mail.com / user1234)',
    challenge:
      'Developing role-tailored AI prompts that dynamically adapt context based on task status, completion metrics, and user permissions while keeping OpenRouter LLM latency low.',
    story: {
      problem:
        'Standard task trackers dump identical task lists on founders, managers, and contributors without surfacing role-specific execution bottlenecks.',
      users:
        'Admins overseeing team throughput, Managers coordinating assignments, and individual Users tracking immediate deliverables.',
      businessContext:
        'As teams adopt LLM tools, generic chat wrappers leak permissions or hallucinate outside operational state; AI must respect RBAC boundaries.',
      researchInsights:
        'Separating operational state by role avoids noise: contributors need clarity on priorities while managers need bottleneck summaries across statuses.',
      strategy:
        'Enforce JWT role guards at the API layer first, then synthesize compact task snapshots into permission-scoped OpenRouter LLaMA 3.3 prompts.',
      tradeOffs:
        'Passed concise aggregated task summaries rather than raw task history into prompts, trading verbose context for faster OpenRouter latency and lower token load.',
      execution:
        'Engineered modular Express/MongoDB services, JWT RBAC middleware across 3 tiers, React 19 dashboard views, and live AI analysis cards.',
      outcome:
        'Shipped a live full-stack application complete with role-isolated workspaces, demo reviewer access, and responsive AI workflow insights.',
      learnings:
        'Prompt engineering is product architecture: deciding what data is filtered before the LLM call matters more than model complexity.',
    },
    flow: [
      { step: '01', label: 'JWT Auth', detail: 'Scoped Admin, Manager, or User claims' },
      { step: '02', label: 'RBAC Guard', detail: 'Server filters task records by role' },
      { step: '03', label: 'Context Pack', detail: 'Task states condensed for low latency' },
      { step: '04', label: 'LLaMA 3.3 Output', detail: 'Actionable role-specific insights in UI' },
    ],
  },
  {
    id: 4,
    slug: 'moneyestate',
    name: 'Moneyestate',
    category: 'Consumer Web Experience',
    tagline: 'Calm typographic hierarchy and structured comparison for dense property discovery.',
    desc: 'Real estate listing website with motion-led browsing.',
    videoId: 'FOh0g72TR7c',
    role: 'Frontend Developer & UX Architect',
    timeline: '2025',
    palette: 'spruce',
    accentColor: '#86EFAC',
    surfaceTint: '#0F1F18',
    shortLine: 'Structured real estate hierarchy built for calm high-ticket comparison.',
    tools: 'React, Framer Motion',
    liveUrl: 'https://moneyestate.vercel.app/',
    githubUrl: 'https://github.com/choudharyprince03/MONEYESTATE',
    summary:
      'Property browsing interface designed to make dense specifications scannable with structured listings and motion-led transitions.',
    longDesc:
      'A real estate listing platform for browsing, buying, and selling properties. Features modern layout hierarchy, responsive transitions, and detailed property views built to keep comparison effortless.',
    challenge:
      'Real estate pages hold dense information, so the interface needed to stay calm while feeling decisive. Clear typographic hierarchy and repeatable detail blocks keep browsing structured.',
    story: {
      problem:
        'Property portals routinely overwhelm buyers with competing banners, inconsistent attribute tables, and jarring page jumps during comparison.',
      users:
        'Prospective property buyers and sellers evaluating multiple high-ticket listings under heavy cognitive load.',
      businessContext:
        'In high-consideration purchases like real estate, visual credibility and calm clarity build far more buyer trust than aggressive pop-ups.',
      researchInsights:
        'Consistent spatial anchors across listing cards and detail views let visitors scan price, specs, and imagery without re-learning each page.',
      strategy:
        'Design repeatable modular property detail blocks paired with purposeful Framer Motion state transitions to preserve orientation while browsing.',
      tradeOffs:
        'Restrained animation strictly to view orientation and card feedback, avoiding decorative parallax that slows attribute scanning.',
      execution:
        'Built responsive listing directories, structured property overview views, and cohesive transition timing in React and Framer Motion.',
      outcome:
        'Deployed a responsive web experience demonstrating how disciplined layout hierarchy calms information-heavy buyer journeys.',
      learnings:
        'High-stakes product interfaces earn trust through restraint, predictable structure, and typography rather than decorative UI chrome.',
    },
    flow: [
      { step: '01', label: 'Property Grid', detail: 'Consistent visual & price anchors' },
      { step: '02', label: 'Smooth Transition', detail: 'Context-preserving view navigation' },
      { step: '03', label: 'Structured Specs', detail: 'Repeatable comparison detail blocks' },
      { step: '04', label: 'Direct Inquiry', detail: 'Low-friction path to evaluation' },
    ],
  },
  {
    id: 3,
    slug: 'blogged',
    name: 'Blogged',
    category: 'Editorial & Publishing System',
    tagline: 'Separating author publishing control from lightweight reader experiences.',
    desc: 'Full-stack blogging platform for publishing workflows.',
    videoId: 'CEYswTm5HAQ',
    role: 'Full Stack Developer',
    timeline: '2024',
    palette: 'moss',
    accentColor: '#34D399',
    surfaceTint: '#0B1712',
    shortLine: 'Clean architectural split between Appwrite CRUD publishing and reading.',
    tools: 'React, Redux, Tailwind CSS, Appwrite',
    liveUrl: 'https://mega-blog-liart.vercel.app/',
    githubUrl: 'https://github.com/choudharyprince03/MegaBlog',
    summary:
      'Publishing platform featuring Appwrite authentication, role-aware editing, full CRUD management, and image storage.',
    longDesc:
      'Built a full-stack publishing platform with React, Redux, Tailwind CSS, and Appwrite featuring secure authentication, role-aware access control, CRUD content workflows, and image uploads via Appwrite Storage.',
    challenge:
      'Making admin publishing workflows direct while keeping reader-facing pages lightweight. Separating content operations from presentation layers kept publishing predictable.',
    story: {
      problem:
        'Publishing platforms often tangle heavy editorial admin forms directly into public reading templates, slowing both authoring and consumption.',
      users:
        'Content creators drafting and managing articles alongside everyday readers browsing published stories.',
      businessContext:
        'Predictable publishing loops require clean state synchronization across authentication, media storage, and live post availability.',
      researchInsights:
        'Isolating write/edit state cleanly via centralized store architecture keeps CRUD reliable while readers receive uncluttered article layouts.',
      strategy:
        'Decouple author CRUD tooling, Appwrite authentication, and Storage asset pipelines from the lightweight reader presentation route.',
      tradeOffs:
        'Chose managed Appwrite Auth and Storage over a custom media backend to allocate effort toward Redux state predictability and editor UX.',
      execution:
        'Integrated Appwrite authentication, image bucket uploads, Redux session/article state, and clean editorial article cards.',
      outcome:
        'Launched an end-to-end publishing platform supporting authenticated creation, media uploads, updates, and clean reading flows.',
      learnings:
        'Drawing a hard architectural seam between creator tooling and reader presentation keeps both experiences focused.',
    },
    flow: [
      { step: '01', label: 'Appwrite Auth', detail: 'Session-verified creator identity' },
      { step: '02', label: 'Media Bucket', detail: 'Direct Storage upload & URL binding' },
      { step: '03', label: 'Redux CRUD', detail: 'Predictable create, edit & delete state' },
      { step: '04', label: 'Reader View', detail: 'Clean article rendering without editor noise' },
    ],
  },
  {
    id: 2,
    slug: 'foodzero',
    name: 'FoodZero',
    category: 'Hospitality Operations UX',
    tagline: 'Zero-backend reservation capture routing guest bookings directly into live ops sheets.',
    desc: 'Restaurant website with live reservation capture.',
    videoId: 'mvL-eQaFV9g',
    role: 'Frontend Developer',
    timeline: '2023',
    palette: 'spruce',
    accentColor: '#86EFAC',
    surfaceTint: '#0F1F18',
    shortLine: 'Mobile dining UI routing live table reservations straight to Google Sheets.',
    tools: 'React.js, Tailwind CSS, Google Sheets API',
    liveUrl: 'https://food-zero-restraunt.vercel.app/',
    githubUrl: 'https://github.com/choudharyprince03/FoodZero-Restraunt',
    summary:
      'Mobile-first restaurant web application combining menu clarity, reviews, and live table bookings piped straight into Google Sheets.',
    longDesc:
      'Built a responsive restaurant application using React.js and Tailwind CSS with structured menus, guest reviews, and a live table reservation form writing directly into Google Sheets via the Sheets API.',
    challenge:
      'Keeping the experience refined without bloat. Strong typography, generous spacing, and a direct booking path let guests reserve easily while capturing usable operational data.',
    story: {
      problem:
        'Independent restaurants want polished digital menus and table booking without paying for or training staff on complex admin portals.',
      users:
        'Hungry mobile visitors booking tables on the go, and hospitality staff managing incoming reservations during service.',
      businessContext:
        'Hospitality teams already check spreadsheets comfortably; meeting staff inside tools they use removes training friction.',
      researchInsights:
        'Mobile diners convert quickly when menu hierarchy is clear and the reservation path requires zero account creation.',
      strategy:
        'Design a mobile-first dining showcase whose booking form pushes structured rows directly to Google Sheets via the Sheets API.',
      tradeOffs:
        'Bypassed a bespoke booking admin panel in favor of Google Sheets integration so restaurant operators get instant zero-cost visibility.',
      execution:
        'Implemented responsive menu layouts, guest social proof sections, form validation, and live Google Sheets API submission.',
      outcome:
        'Shipped a lightweight hospitality application pairing refined guest presentation with zero-friction operational capture.',
      learnings:
        'The smartest product backend is often the tool your operator already knows how to open every morning.',
    },
    flow: [
      { step: '01', label: 'Mobile Menu', detail: 'Fast typographic menu exploration' },
      { step: '02', label: 'Booking Form', detail: 'Guest date, time & party size capture' },
      { step: '03', label: 'Sheets API', detail: 'Direct row append without heavy DB ops' },
      { step: '04', label: 'Host Desk', detail: 'Live spreadsheet ready for shift staff' },
    ],
  },
];
