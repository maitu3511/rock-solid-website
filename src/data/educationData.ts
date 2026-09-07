// 90-Day Free Practical Digital Marketing & Web Skills Training
// Content data for the Education / Training page.

export interface TrainingPhase {
  phase: string;
  title: string;
  duration: string;
  points: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  tag: string;
  summary: string;
  topics: string[];
}

export interface PracticalProject {
  title: string;
  description: string;
}

export const EDUCATION_CONFIG = {
  programTitle: '90 Days Free Practical Digital Marketing & Web Skills Training',
  heroSubtitle:
    'A structured 90-day practical program covering website development, digital marketing, SEO, Google Ads, Meta Ads, social media and AI marketing tools — taught through hands-on exercises instead of theory-only lessons.',
  freeNotice:
    'Our training classes are completely free for 90 days. There is no separate tuition or course fee for the classes. Students may only need to pay for third-party software, tools, hosting, domains or other resources that are actually required for practical training.',
  certificateNote:
    'Students who successfully complete the 90-day practical training program receive a Certificate of Completion.',
};

export const TRAINING_PHASES: TrainingPhase[] = [
  {
    phase: 'Phase 1',
    title: 'Digital & Web Fundamentals',
    duration: 'Days 1-10',
    points: [
      'How the web, domains and hosting actually work',
      'Digital marketing landscape and channels',
      'Audience research and buyer intent basics',
      'Setting up accounts, tools and workspaces',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Website Development & Design',
    duration: 'Days 11-25',
    points: [
      'HTML and CSS fundamentals',
      'Responsive website structure',
      'Modern website UI and layout practice',
      'Basic frontend development',
      'Deploying a live website',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'SEO & Google Business Profile',
    duration: 'Days 26-40',
    points: [
      'Keyword research methods',
      'On-page and technical SEO basics',
      'Local SEO for city-level businesses',
      'Google Business Profile setup and optimization',
      'Tracking search visibility',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Social Media & Content Marketing',
    duration: 'Days 41-52',
    points: [
      'Content planning and calendars',
      'Creative and copywriting basics',
      'Instagram, Facebook and LinkedIn practice',
      'Community engagement and organic reach',
    ],
  },
  {
    phase: 'Phase 5',
    title: 'Google Ads & Meta Ads',
    duration: 'Days 53-68',
    points: [
      'Campaign structure and account setup',
      'Audience targeting and placements',
      'Ad creatives and ad copy practice',
      'Budget basics and bidding',
      'Campaign optimization routines',
    ],
  },
  {
    phase: 'Phase 6',
    title: 'Lead Generation, Analytics & Conversion Tracking',
    duration: 'Days 69-78',
    points: [
      'Landing pages built for enquiries',
      'Lead capture forms and WhatsApp flows',
      'Analytics and event tracking basics',
      'Reading reports and improving results',
      'Email marketing fundamentals',
    ],
  },
  {
    phase: 'Phase 7',
    title: 'AI Tools & Practical Projects',
    duration: 'Days 79-86',
    points: [
      'AI-assisted content and creative ideation',
      'AI research and marketing workflow automation',
      'Graphic and creative basics for marketers',
      'Practical business exercises',
    ],
  },
  {
    phase: 'Phase 8',
    title: 'Final Practical Project & Completion',
    duration: 'Days 87-90',
    points: [
      'End-to-end practical project submission',
      'Review and feedback session',
      'Portfolio and profile preparation',
      'Certificate of Completion',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'web-development',
    title: 'Website Development',
    tag: 'Build & Deploy',
    summary: 'Learn to build and publish clean, responsive websites from scratch.',
    topics: [
      'HTML/CSS fundamentals',
      'Responsive website structure',
      'Modern website UI',
      'Basic frontend development',
      'Website deployment',
      'Domain and hosting basics',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    tag: 'Strategy',
    summary: 'Understand how businesses attract, convince and convert customers online.',
    topics: [
      'Digital marketing fundamentals',
      'Audience research',
      'Marketing strategy',
      'Content planning',
      'Lead generation',
      'Campaign measurement',
    ],
  },
  {
    id: 'seo',
    title: 'SEO',
    tag: 'Organic Growth',
    summary: 'Practical search optimization for websites and local businesses.',
    topics: [
      'Keyword research',
      'On-page SEO',
      'Technical SEO basics',
      'Local SEO',
      'Google Business Profile',
      'Search visibility',
    ],
  },
  {
    id: 'ads',
    title: 'Google & Meta Ads',
    tag: 'Paid Media',
    summary: 'Set up, run and improve paid campaigns on search and social platforms.',
    topics: [
      'Campaign structure',
      'Audience targeting',
      'Ad creatives',
      'Budget basics',
      'Conversion tracking',
      'Campaign optimization',
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI Marketing Tools',
    tag: 'Modern Workflow',
    summary: 'Use AI tools to work faster on content, research and daily marketing tasks.',
    topics: [
      'AI-assisted content creation',
      'AI research',
      'Creative ideation',
      'Marketing workflow automation',
      'Productivity tools',
    ],
  },
];

export const PRACTICAL_PROJECTS: PracticalProject[] = [
  { title: 'Business Website', description: 'Plan, build and publish a multi-section business website.' },
  { title: 'Landing Page', description: 'Create a focused page designed to collect enquiries.' },
  { title: 'SEO Project', description: 'Run keyword research and apply on-page SEO to real pages.' },
  { title: 'Google Business Profile', description: 'Set up and optimize a local listing end to end.' },
  { title: 'Social Media Campaign', description: 'Build a content calendar and publish a campaign.' },
  { title: 'Google Ads Campaign Setup', description: 'Structure a search campaign with keywords and ad copy.' },
  { title: 'Meta Ads Campaign Setup', description: 'Build audiences, creatives and a test campaign.' },
  { title: 'Lead Generation Workflow', description: 'Connect a form, WhatsApp and follow-up process.' },
  { title: 'Analytics & Tracking Setup', description: 'Add tracking and read the key performance reports.' },
  { title: 'Marketing Strategy Project', description: 'Prepare a complete channel plan for a sample business.' },
];

export const CERTIFICATE_SAMPLE = {
  studentName: 'Student Name',
  programName: '90-Day Practical Digital Marketing & Web Skills Training',
  statement:
    'has successfully completed the 90-day practical training program, including the required assignments and the final practical project.',
  certificateNumber: 'DB-EDU-2026-0001',
  completionDate: 'DD / MM / YYYY',
  trainerName: 'Authorized Trainer',
  directorName: 'Program Director',
  skills: ['Web Development', 'SEO', 'Google Ads', 'Meta Ads', 'Social Media', 'AI Tools'],
};
