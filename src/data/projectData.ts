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
  slug: '[project-slug]',

  // Basic page identity
  title: 'Husky Helper',
  subtitle: 'Your Personal UW Guide, Available 24/7',
  ownerLine: 'Team 10',
  executiveSummary:
  'Husky Helper is a 24/7 digital guide built to help University of Washington students, especially international students, navigate high-friction campus and relocation tasks such as housing, banking, food, transportation, and visa-related questions. The core user workflow is simple: a student lands on the site, starts a chat, and gets fast, personalized guidance across the most common life-on-campus decisions that are usually scattered across many websites and informal sources. By centralizing practical support into one accessible interface, the project reduces confusion, saves time, and makes the transition to UW more manageable for students who need trustworthy answers quickly.'
,

  // Short instruction cards shown near the top of the page
  instructions: [
    'Replace every bracketed placeholder with project-specific content.',
    'Drop screenshots, PDFs, diagrams, or photos into public/project-assets and reference them here.',
    'Add or remove cards by editing arrays in this file instead of rewriting the page layout.',
    'Keep the executive summary concise, but make the stack, methods, feature cards, and architecture specific and concrete.',
  ],

  // Main action buttons / links
  links: [
    { label: 'Live Tool', url: 'https://husky-helper.lovable.app/', primary: true },
    { label: 'Demo Recording', url: 'https://example.com/demo' },
    { label: 'GitHub Repo', url: 'https://github.com/ghui9087/husky-helper.git' },
    { label: 'Slides PDF', url: '/project-assets/final-slides.pdf' },
    { label: 'Technical Report', url: '/project-assets/report.pdf' },
  ],

  // Quick tags shown under the summary
  badges: ['[React]', '[TypeScript]', '[Supabase]', '[Gemini API]'],

  // Short keywords that help when this project is added to a larger gallery later.
  keywords: ['[keyword-1]', '[keyword-2]', '[keyword-3]'],

  // Methods shown in the solution section and methods section
  methods: ['[Prompt chaining]', '[RAG]', '[Human-in-the-loop review]', '[Rapid prototyping]'],

  // Small summary cards near the top
  metrics: [
    { label: 'Team', value: '[3-5 students]', note: 'Xueying Wang, Ji Ko, Shaohan Hu, Houming Ge' },
    { label: 'Core User', value: '[User Segment]', note: 'Who the experience is designed for' },
  ],

  // Problem / solution
  problemStatement:
    '[Describe the pain point in concrete terms. Who experiences it, how often, what it costs them, and why current solutions fall short.]',
  solutionSummary:
    '[Describe the product or system your team is building. Explain the main interaction, the AI or automation role, and the value users get from it.]',
  audience: '[Primary users, buyers, or stakeholders]',
  impactGoal: '[What outcome will improve if this succeeds? Revenue, speed, trust, accuracy, retention, access, etc.]',
  status: '[Prototype / Pilot / Live Tool / Research Concept]',

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
      caption: '[Show how the system works behind the scenes.]',
      placeholder: 'Add a system diagram, workflow slide, or whiteboard export',
    },
    {
      title: 'Evidence of Validation',
      caption: '[Include user testing photos, before/after comparisons, sample outputs, or evaluation charts.]',
      placeholder: 'Add proof that the idea works or is promising',
    },
  ],

  // Technical stack
  stack: [
    {
      category: 'Frontend and Experience',
      tools: ['[React]', '[Next.js / Vite]', '[Tailwind CSS or CSS]', '[Figma]'],
      note: '[How you designed and shipped the interface.]',
    },
    {
      category: 'AI, Logic, and Orchestration',
      tools: ['[OpenAI API]', '[LangGraph / n8n / custom workflow]', '[Prompt patterns]', '[Evaluation setup]'],
      note: '[How intelligence, prompting, and agentic behavior work.]',
    },
    {
      category: 'Data, Backend, and Integrations',
      tools: ['[Supabase / Firebase / Postgres]', '[APIs]', '[Auth]', '[Storage]'],
      note: '[Where data lives and what external systems connect.]',
    },
  ],

  // Feature cards
  features: [
    {
      title: '[Feature or Flow Name]',
      description: '[Explain what this part of the experience does and why it matters.]',
      highlights: ['[Key interaction]', '[AI behavior]', '[What makes it different]'],
    },
    {
      title: '[Feature or Flow Name]',
      description: '[Explain another important piece of the product.]',
      highlights: ['[Key interaction]', '[Automation or insight]', '[User value]'],
    },
    {
      title: '[Feature or Flow Name]',
      description: '[Explain a third area such as admin tools, analytics, onboarding, or evaluation.]',
      highlights: ['[What happens]', '[How it is implemented]', '[Why it matters]'],
    },
  ],

  // Architecture walkthrough
  architecture: [
    { title: 'Input Layer', description: '[What data, files, prompts, or actions enter the system?]' },
    { title: 'Reasoning Layer', description: '[How does the AI retrieve context, classify, rank, or generate output?]' },
    { title: 'Decision Layer', description: '[What rules, guardrails, approvals, or workflow logic shape behavior?]' },
    { title: 'Output Layer', description: '[What does the user receive: a plan, interface state, report, alert, or recommendation?]' },
  ],

  // Optional code snippet area
  // Keep this short. One or two examples is usually enough.
  codeHighlights: [
    {
      title: 'Example code snippet',
      language: 'ts',
      note: 'Paste one or two small code snippets here if they help explain the build.',
      code: `export async function runWorkflow(input: string) {
  const result = await orchestrator.plan(input);
  return result;
}`,
    },
  ],

  // Roadmap
  roadmap: [
    {
      phase: 'Now',
      items: ['[What the prototype does today]', '[What evidence or assets you already have]', '[Any current limitations to be aware of]'],
    },
    {
      phase: 'Next',
      items: ['[Most important improvement]', '[What you would validate with more time]', '[A feature that meaningfully increases value]'],
    },
    {
      phase: 'Later',
      items: ['[Scale-up opportunity]', '[Partnership, data, or business model opportunity]', '[Longer-term product vision]'],
    },
  ],

  // Risks and constraints
  risks: [
    { title: '[Risk or Constraint]', mitigation: '[How your team manages or reduces this risk.]' },
    { title: '[Risk or Constraint]', mitigation: '[How your team manages or reduces this risk.]' },
    { title: '[Risk or Constraint]', mitigation: '[How your team manages or reduces this risk.]' },
  ],
};
