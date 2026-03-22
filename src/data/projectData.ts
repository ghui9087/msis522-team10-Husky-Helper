export interface ProjectLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
  note: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
}

export interface GalleryItem {
  title: string;
  caption: string;
  assetPath?: string;
  placeholder?: string;
}

export interface StackGroup {
  category: string;
  tools: string[];
  note: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  highlights: string[];
}

export interface ArchitectureItem {
  title: string;
  description: string;
}

export interface CodeHighlight {
  title: string;
  language: string;
  note: string;
  code: string;
}

export interface RoadmapPhase {
  phase: string;
  items: string[];
}

export interface RiskItem {
  title: string;
  mitigation: string;
}

export interface ProjectPageData {
  slug: string;
  title: string;
  subtitle: string;
  ownerLine: string;
  executiveSummary: string;
  instructions: string[];
  links: ProjectLink[];
  badges: string[];
  methods: string[];
  metrics: ProjectMetric[];
  problemStatement: string;
  solutionSummary: string;
  audience: string;
  impactGoal: string;
  status: string;
  keywords: string[];
  members: TeamMember[];
  gallery: GalleryItem[];
  stack: StackGroup[];
  features: FeatureCard[];
  architecture: ArchitectureItem[];
  codeHighlights: CodeHighlight[];
  roadmap: RoadmapPhase[];
  risks: RiskItem[];
}

// Students: this is the main file you should edit.
// Replace every bracketed placeholder with real content.
// Put screenshots, PDFs, and diagrams in public/project-assets/.
// In most cases, you do not need to edit App.tsx or styles.css.

export const projectData: ProjectPageData = {
  // This slug is useful later if the project is imported back into foster-ai-hub.
  slug: 'husky-helper',

  // Basic page identity
  title: 'Husky Helper',
  subtitle: 'Your Personal UW Guide, Available 24/7',
  ownerLine: 'Team 10',
  executiveSummary:
    'Husky Helper is a 24/7 digital guide built to help University of Washington students, especially international students, navigate high-friction campus and relocation tasks such as housing, banking, food, transportation, and visa-related questions. The core user workflow is simple: a student lands on the site, starts a chat, and gets fast, personalized guidance across the most common life-on-campus decisions that are usually scattered across many websites and informal sources. By centralizing practical support into one accessible interface, the project reduces confusion, saves time, and makes the transition to UW more manageable for students who need trustworthy answers quickly.',

  // Short instruction cards shown near the top
  instructions: [
    'Open the live tool to explore the student-facing experience and see how Husky Helper frames common campus questions.',
    'Use the screenshots, slides, and report links to understand the workflow, design intent, and project rationale.',
    'Read the feature and architecture sections as a guided walkthrough of how the assistant supports student decision-making.',
    'Review the roadmap and risks to see what would be needed to move the current experience into a stronger production launch.',
  ],

  // Main action buttons / links
  links: [
    { label: 'Live Tool', url: 'https://husky-helper.lovable.app/', primary: true },
    { label: 'GitHub Repo', url: 'https://github.com/ghui9087/husky-helper.git' },
    { label: 'Slides PDF', url: '/project-assets/final-slides.pdf' },
    { label: 'Technical Report', url: '/project-assets/report.pdf' },
  ],

  // Quick tags shown under the summary
  badges: ['React', 'TypeScript', 'AI Student Guide', 'International Student Support'],

  // Short keywords that help when this project is added to a larger gallery later.
  keywords: ['uw-students', 'international-students', 'campus-navigation'],

  // Methods shown in the solution section and methods section
  methods: ['Conversational guidance', 'Topic-based routing', 'Resource aggregation', 'Rapid prototyping'],

  // Small summary cards near the top
  metrics: [
    { label: 'Team', value: '4 students', note: 'Xueying Wang, Ji Ko, Shaohan Hu, Houming Ge' },
    { label: 'Core User', value: 'UW students', note: 'Especially useful for international students navigating unfamiliar systems' },
  ],

  // Problem / solution
  problemStatement:
    'Students arriving at the University of Washington often need answers to urgent practical questions about housing, banking, dining, transportation, and visa logistics, but that information is typically scattered across university pages, community posts, and informal advice channels. This creates friction at exactly the moment students need clarity most, especially for international students who are also adapting to a new country, new systems, and time-sensitive paperwork. The cost is wasted time, avoidable stress, and lower confidence in decisions that shape the first weeks of campus life.',
  solutionSummary:
    'Husky Helper is a web-based guide that gives students a single place to start when they need campus and relocation support. Instead of forcing users to search across disconnected sources, the product organizes common student needs into clear categories and a chat-style interaction, making it easier to get personalized, always-available guidance. The AI role is to reduce search overhead, surface relevant next steps quickly, and turn broad questions into usable recommendations students can act on right away.',
  audience: 'University of Washington students, with a strong focus on international students and newly arrived Huskies.',
  impactGoal: 'Improve access to trustworthy student support by reducing search time, confusion, and onboarding friction.',
  status: 'Live tool',

  // Team members
  members: [
    { name: 'Xueying Wang', role: 'Project Lead', focus: 'Overall project management and coordination' },
    { name: 'Ji Ko', role: 'Frontend Developer', focus: 'User interface design and implementation' },
    { name: 'Shaohan Hu', role: 'Backend Developer', focus: 'API development and database integration' },
    { name: 'Houming Ge', role: 'AI Engineer', focus: 'Machine learning model development and deployment' },
  ],

  // Gallery cards
  // To use a real image, put the file in public/project-assets/ and set assetPath.
  gallery: [
    {
      title: 'Hero Screenshot',
      caption: 'Husky Helper landing page featuring a 24/7 UW student guide with quick access to housing, food, transit, and visa support.',
      assetPath: '/project-assets/img_1.jpg',
    },
    {
      title: 'Workflow or Architecture',
      caption: 'Recommended asset: a diagram showing how a student question moves from topic selection into an AI-guided answer backed by curated campus resources.',
      placeholder: 'Add a system diagram, workflow slide, or whiteboard export',
    },
    {
      title: 'Evidence of Validation',
      caption: 'Recommended asset: sample chat responses, user feedback, or before-and-after evidence showing that students find answers faster with Husky Helper.',
      placeholder: 'Add proof that the idea works or is promising',
    },
  ],

  // Technical stack
  stack: [
    {
      category: 'Frontend and Experience',
      tools: ['React', 'TypeScript', 'Vite', 'CSS'],
      note: 'The project is delivered as a responsive web experience with a lightweight front end that makes category navigation and chat entry simple for students.',
    },
    {
      category: 'AI, Logic, and Orchestration',
      tools: ['Conversational assistant', 'Prompt design', 'Topic routing', 'Guided responses'],
      note: 'The product centers on a chat-based guidance flow that interprets student questions, routes them to the right support topic, and returns actionable answers.',
    },
    {
      category: 'Data, Backend, and Integrations',
      tools: ['Curated UW resources', 'Public student information', 'External links', 'Web deployment'],
      note: 'The experience depends on reliable resource organization and lightweight web delivery rather than complex visible user-side workflows.',
    },
  ],

  // Feature cards
  features: [
    {
      title: '24/7 Student Support Entry Point',
      description: 'The landing experience gives students an immediate way to begin getting help instead of hunting across multiple university pages and informal sources.',
      highlights: ['Clear start-chat call to action', 'Always-available guidance flow', 'Reduces first-step friction for new students'],
    },
    {
      title: 'Topic-Based Campus Navigation',
      description: 'The product organizes support around the questions students actually have, including housing, campus life, food and dining, transportation, banking, and visa-related needs.',
      highlights: ['Category navigation from the top-level interface', 'Routes users toward the right information domain', 'Makes broad university support easier to scan and understand'],
    },
    {
      title: 'International Student Onboarding Focus',
      description: 'Husky Helper is positioned as an international student resource, which makes it especially valuable during arrival, transition, and early campus adjustment.',
      highlights: ['Supports relocation and settlement questions', 'Combines practical and campus-life guidance in one experience', 'Improves confidence for students facing unfamiliar systems'],
    },
  ],

  // Architecture walkthrough
  architecture: [
    { title: 'Input Layer', description: 'Students arrive with a direct question or start from visible topics such as housing, food and dining, getting around, banking, or visa support.' },
    { title: 'Reasoning Layer', description: 'The assistant interprets the user request, maps it to the relevant support domain, and composes guidance that is easier to act on than a raw search result list.' },
    { title: 'Decision Layer', description: 'The product flow prioritizes clarity, relevance, and student usability by narrowing broad questions into concrete next steps and likely useful resources.' },
    { title: 'Output Layer', description: 'Users receive concise recommendations, navigational direction, and a clearer path toward solving everyday UW transition problems.' },
  ],

  // Optional code snippet area
  // Keep this short. One or two examples is usually enough.
  codeHighlights: [
    {
      title: 'Data-driven project page configuration',
      language: 'ts',
      note: 'This page is driven by a structured content object, which makes it easy to keep the project story, assets, and supporting evidence in one place.',
      code: `export const projectData: ProjectPageData = {
  title: 'Husky Helper',
  subtitle: 'Your Personal UW Guide, Available 24/7',
  links: [
    { label: 'Live Tool', url: 'https://husky-helper.lovable.app/', primary: true },
    { label: 'GitHub Repo', url: 'https://github.com/ghui9087/husky-helper.git' },
  ],
  gallery: [
    {
      title: 'Hero Screenshot',
      assetPath: '/project-assets/img_1.jpg',
    },
  ],
};`,
    },
  ],

  // Roadmap
  roadmap: [
    {
      phase: 'Now',
      items: [
        'A live web experience presents Husky Helper as a 24/7 UW student guide.',
        'The project already includes a working landing page, screenshots, slides, and a technical report.',
        'Visible product detail is still strongest at the entry and positioning layer rather than a deeply documented end-to-end support workflow.',
      ],
    },
    {
      phase: 'Next',
      items: [
        'Expand the chat flow so each topic area leads to richer, more personalized recommendations.',
        'Validate answer quality and usability with real UW students, especially international students in early onboarding.',
        'Add stronger evidence assets such as sample conversations, user testing notes, and workflow diagrams.',
      ],
    },
    {
      phase: 'Later',
      items: [
        'Broaden coverage into a more complete digital concierge for student life and university onboarding.',
        'Partner with campus offices or student support organizations to improve source quality and trust.',
        'Evolve Husky Helper into a persistent campus guidance layer that supports students beyond their first weeks at UW.',
      ],
    },
  ],

  // Risks and constraints
  risks: [
    { title: 'Information freshness', mitigation: 'Student-facing guidance must be checked regularly so changes in campus services, policies, or public resources do not create stale recommendations.' },
    { title: 'Trust and accuracy', mitigation: 'The product should point students toward reliable sources and frame answers as guidance, especially for high-stakes topics such as visa or financial questions.' },
    { title: 'Scope creep', mitigation: 'Keeping the first version focused on the most common student pain points makes it easier to improve quality before expanding into broader campus support.' },
  ],
};
