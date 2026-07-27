// Single source of truth for the CV — sourced from Rhys's resume.
// Client-safe static module (no secrets, no PII beyond public contact channels).

export const profile = {
  name: 'Rhys Cairns',
  title: 'Frontend-leaning Full Stack Engineer',
  location: 'Daventry, UK',
  tagline:
    'Ex-collegiate athlete turned engineer, building production software used by 50,000+ colleagues across Europe.',
  email: 'cairns.rhys@gmail.com',
  site: 'rhyscairns.com',
  linkedin: 'https://www.linkedin.com/in/rhys-cairns-648018aa',
  github: 'https://github.com/rhyscairns',
};

export const stats = [
  { value: 50000, suffix: '+', label: 'Colleagues using what I ship', prefix: '' },
  { value: 300, suffix: '', label: 'Stores running my UI nationwide', prefix: '' },
  { value: 2, suffix: 'M+', label: 'Marketplace products supported', prefix: '' },
  { value: 4, suffix: '+', label: 'Years shipping production code', prefix: '' },
  { value: 7, suffix: '', label: 'Retail brands served', prefix: '' },
  { value: 6, suffix: '', label: 'Countries in the live estate', prefix: '' },
];

export const experience = [
  {
    id: 'kingfisher',
    company: 'Kingfisher plc',
    role: 'Software Engineer',
    meta: 'Contract → Permanent (Mar 2024)',
    period: 'Feb 2022 — Present',
    location: 'London / Remote',
    tag: 'FTSE 100 · B&Q, Screwfix, Castorama',
    current: true,
    summary:
      "Subject matter expert on the colleague-facing side of B&Q's Marketplace Click & Collect — a UK-first for online marketplaces. Built the store-colleague UI from scratch and scaled it from a single pilot to a 300-store national network.",
    highlights: [
      'Built the colleague-facing Marketplace Click & Collect UI from scratch in Vue.js + Node.js — the app store colleagues rely on daily to fulfil orders for 2,000+ third-party sellers and 2M+ products.',
      'Code owner on the UI and multiple backend repos with production sign-off authority before changes reach live.',
      'Integrated with an event-driven backend, handling the full lifecycle of a marketplace order across event types and downstream state changes.',
      'Runs the majority of Scrum ceremonies after the Scrum Master role was removed — planning, retros, standups — keeping delivery on track.',
      'On-call incident response across a platform processing tens of thousands of orders monthly across the UK, Ireland, France, Poland, Spain and Portugal.',
      'Mentors new engineers through pairing, code review and structured onboarding; pulled into feature design and architecture from day one.',
    ],
    stack: ['Vue.js', 'Vuex', 'Nuxt.js', 'Pinia', 'TypeScript', 'React', 'Node.js', 'REST', 'AWS Lambda', 'Cypress'],
  },
  {
    id: 'lafosse',
    company: 'La Fosse Futureproof',
    role: 'Trainee Full Stack Developer',
    meta: '',
    period: 'Nov 2021 — Feb 2022',
    location: 'London, UK',
    tag: 'Intensive engineering academy',
    current: false,
    summary:
      "Completed an intensive full-stack engineering programme, then placed directly onto Kingfisher's production team — where a permanent offer followed.",
    highlights: [
      'Covered JavaScript, Node.js, Vue.js, REST APIs, relational databases and test-driven development.',
      'Placed directly onto a live production engineering team on completion.',
    ],
    stack: ['JavaScript', 'Node.js', 'Vue.js', 'REST', 'TDD', 'SQL'],
  },
  {
    id: 'rightmove',
    company: 'Rightmove',
    role: 'Business & Support Analyst',
    meta: '',
    period: 'Oct 2020 — Aug 2021',
    location: 'Milton Keynes, UK',
    tag: "UK's largest property portal",
    current: false,
    summary:
      'Investigated and resolved technical and data issues across the platform, collaborating with engineering to find root causes — the experience that motivated a deliberate move into software engineering.',
    highlights: [
      'Diagnosed platform and data issues alongside engineering teams.',
      'Turned a support role into the launchpad for an engineering career.',
    ],
    stack: ['SQL', 'Data analysis', 'Troubleshooting'],
  },
];

export const skillGroups = [
  {
    label: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'Java'],
  },
  {
    label: 'Frontend',
    items: ['Vue.js (Vue 2 + Vuex)', 'Nuxt.js (Pinia + TS)', 'React', 'Component Architecture', 'State Management', 'HTML / CSS'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'REST APIs', 'Event-Driven Architecture', 'Service-Oriented Architecture'],
  },
  {
    label: 'Cloud & Testing',
    items: ['AWS Lambda', 'AWS Dev Associate', 'Jest', 'Mocha', 'Cypress'],
  },
  {
    label: 'Tooling',
    items: ['Git', 'GitLab CI/CD', 'MySQL'],
  },
  {
    label: 'AI & LLMs',
    items: ['LLM-powered features', 'AI-assisted engineering workflows'],
  },
  {
    label: 'Ways of Working',
    items: ['Agile / Scrum facilitation', 'Code review', 'Mentoring', 'Cross-functional delivery'],
  },
];

export const projects = [
  {
    title: 'College Athlete Base',
    tag: 'Personal Project',
    description:
      'A full-stack platform helping college coaches discover athletes matching specific performance and program criteria — with LLM-powered discovery surfacing insights from structured and unstructured data.',
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'LLMs'],
    link: 'https://github.com/rhyscairns/college-athlete-base',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'rhyscairns.com',
    tag: 'Personal Site',
    description:
      'This site — a live sandbox for exploring frontend patterns, integrations and AI-assisted workflows outside the constraints of a corporate codebase.',
    stack: ['Next.js', 'React', 'Framer Motion', 'Tailwind'],
    link: 'https://github.com/rhyscairns',
    linkLabel: 'GitHub',
  },
];

export const education = [
  {
    degree: 'MSc Computer Science',
    school: 'Newcastle University',
    place: 'United Kingdom',
    period: '2019 — 2020',
    result: 'Merit',
  },
  {
    degree: 'MBA, Management Information Systems',
    school: 'Avila University',
    place: 'USA',
    period: '2017 — 2019',
    result: '',
  },
  {
    degree: 'BA Finance',
    school: 'University of Missouri–Kansas City',
    place: 'USA',
    period: '2014 — 2016',
    result: 'NCAA soccer',
  },
];

export const certifications = [
  'AWS Certified Developer – Associate',
  'Site Development Associate Certification',
];

export const about = {
  headline: 'From the pitch to production',
  paragraphs: [
    "I'm originally from Newcastle. Football took me across the Atlantic — four years of collegiate soccer in the US, then two years coaching — before I found my second obsession in software.",
    "The way I see it, engineering is problem-solving for another job. Every line of code sits on top of a real industry you have to understand first: retail logistics, marketplace fulfilment, athlete performance. That's what I love — the excuse to keep learning entirely new fields.",
    'The discipline, the team-first mindset and the appetite for pressure all came from sport. I just point them at a keyboard now.',
  ],
};
