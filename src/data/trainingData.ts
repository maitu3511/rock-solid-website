import { TrainingCourse } from '../types';

export const TRAINING_CONFIG = {
  heroHeading: 'Learn Digital Marketing. Get Certified. Build Your Career.',
  heroSubtitle:
    'Through our association with Zinmatt, students, job seekers, working professionals, and entrepreneurs gain practical, job-ready digital marketing skills through structured, mentor-led courses.',
  associationBadge: 'Official Business Associate of Zinmatt',
  whatsappMsg:
    'Hello, I am interested in your Digital Marketing Training Program in association with Zinmatt. Please share course details and upcoming batch schedule.',
};

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    id: 'master-program',
    title: 'Advanced Master in Digital Marketing & AI',
    badge: 'Flagship Career Track',
    duration: '4 to 6 Months (Flexible Batches)',
    mode: 'Live Interactive + Practical Agency Assignments',
    level: 'Beginner to Advanced',
    popular: true,
    shortDesc:
      'A comprehensive 360° career accelerator covering Search, Social, Paid Performance Ads, Web Fundamentals, E-commerce, Analytics, and Modern Generative AI tools.',
    curriculumHighlights: [
      'Digital Marketing Core Fundamentals & Funnel Architecture',
      'Advanced Search Engine Optimization (Technical, Local & GEO)',
      'Meta (Facebook & Instagram) Paid Performance Marketing',
      'Google Ads Mastery (Search, Display, Performance Max, Video)',
      'Social Media Branding & Viral Content Playbooks',
      'Generative AI Tools for Content, Copy & Design Automation',
      'Website Design Basics & Conversion Landing Pages',
      'Google Analytics 4 (GA4), GTM & Attribution Modeling',
      'E-commerce & Marketplace Marketing (Shopify & Amazon)',
    ],
    toolsCovered: [
      'Google Ads',
      'Meta Ads Manager',
      'GA4 & Looker Studio',
      'SEMrush & Ahrefs',
      'WordPress & Shopify',
      'Canva & Adobe Suite',
      'ChatGPT & Midjourney AI',
      'Klaviyo & Mailchimp',
    ],
    certifications: [
      'Course Completion Certificate (Zinmatt Associate)',
      'ISO-Aligned Curriculum Framework Certificate',
      'Government Skill Alignment Guidelines Preparation',
      'Google & Meta Industry Assessment Guidance',
    ],
    careerSupport: [
      '1-on-1 Resume & LinkedIn Optimization',
      'Mock Technical & HR Interview Rounds',
      'Live Agency Client Project Portfolio',
      'Dedicated Job Placement Assistance & Referrals',
    ],
    suitableFor: [
      'College Graduates seeking high-growth tech careers',
      'Job Seekers looking for verified digital marketing skills',
      'Traditional Marketers wanting to upskill into digital',
      'Founders wanting to grow their business in-house',
    ],
  },
  {
    id: 'performance-specialist',
    title: 'Performance Marketing & Paid Media Specialist',
    badge: 'High-Demand Specialization',
    duration: '2.5 to 3 Months',
    mode: 'Weekend / Weekday Live Batches',
    level: 'Intermediate to Advanced',
    shortDesc:
      'Intensive deep-dive focused strictly on media buying, ROI optimization, high-budget Google/Meta campaigns, conversion tracking, and scaling sales.',
    curriculumHighlights: [
      'Media Buying Psychology & Cold Audience Acquisition',
      'Meta Advantage+ & Dynamic Creative Optimization',
      'Google Search, Shopping & Performance Max Campaigns',
      'Conversion Tracking, Pixels, CAPI & Server-side GTM',
      'E-commerce ROAS Scaling & Unit Economics',
      'A/B Split-Testing & High-Yield Copywriting',
    ],
    toolsCovered: [
      'Meta Ads Manager',
      'Google Ads Platform',
      'Google Tag Manager',
      'Looker Studio',
      'Triple Whale / GA4',
      'Hotjar & Clarity',
    ],
    certifications: [
      'Performance Specialist Certification',
      'Google Ads Search & Measurement Accreditation Guidance',
    ],
    careerSupport: [
      'Live Ad Spend Simulation & Budget Handling',
      'Case Study Portfolio for Agency & Brand Roles',
      'Performance Marketer Interview Question Vault',
    ],
    suitableFor: [
      'Marketing executives wanting to handle large ad budgets',
      'D2C Founders and E-commerce store managers',
      'Freelancers looking for high-ticket media buying retainers',
    ],
  },
  {
    id: 'seo-content-mastery',
    title: 'SEO, Content Strategy & Generative AI',
    badge: 'Organic Specialization',
    duration: '2 to 3 Months',
    mode: 'Online / Hybrid',
    level: 'Beginner to Intermediate',
    shortDesc:
      'Master the science of page-1 Google rankings, technical website audits, high-intent content creation, and next-gen AI Search (GEO).',
    curriculumHighlights: [
      'Search Engine Architecture & Crawling Mechanics',
      'Keyword Research & Commercial Intent Mapping',
      'On-Page, Schema.org Markup & Core Web Vitals',
      'High-Authority Link Building & Digital PR Outreach',
      'AI-Powered SEO Workflow (ChatGPT, Perplexity & Claude)',
      'Local SEO & Google Business Profile Dominance',
    ],
    toolsCovered: [
      'Google Search Console',
      'SEMrush / Ahrefs',
      'Screaming Frog SEO Spider',
      'SurferSEO / NeuronWriter',
      'WordPress SEO (RankMath/Yoast)',
    ],
    certifications: [
      'SEO Masterclass Certificate of Completion',
      'HubSpot Content Marketing Accreditation Guidance',
    ],
    careerSupport: [
      'Live Website Audit Portfolio Piece',
      'Technical SEO Checklist & Pitch Deck Templates',
      'Client Outreach & Freelance Freelancing Frameworks',
    ],
    suitableFor: [
      'Content writers wanting to transition to SEO strategists',
      'Bloggers, affiliate marketers, and site builders',
      'Professionals seeking remote international freelance work',
    ],
  },
];

export const TRAINING_PILLARS = [
  {
    number: '01',
    title: 'Practical, Hands-on Learning',
    description: 'No boring theory. Work on real-world agency simulations, live budget campaigns, and case studies.',
    iconName: 'Laptop',
  },
  {
    number: '02',
    title: 'Industry-Recognized Certification',
    description: 'Receive verified completion credentials aligned with ISO frameworks and government skill standards.',
    iconName: 'Award',
  },
  {
    number: '03',
    title: 'Dedicated Job Placement Support',
    description: 'Get tailored resume reviews, interview drills, portfolio guidance, and hiring partner introductions.',
    iconName: 'Briefcase',
  },
  {
    number: '04',
    title: 'Expert Mentorship & Live Doubts',
    description: 'Learn directly from seasoned practitioners who manage real client accounts every single day.',
    iconName: 'Users',
  },
];

export const STUDENT_JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Counseling & Enrollment',
    description: 'Discuss your career goals with our counselor and select the right track matching your ambition.',
  },
  {
    step: '02',
    title: 'Interactive Skill Training',
    description: 'Master core frameworks, tools, algorithms, and workflows through live interactive sessions.',
  },
  {
    step: '03',
    title: 'Live Client Projects',
    description: 'Apply your skills on live agency assignments, managing real campaigns and creating real assets.',
  },
  {
    step: '04',
    title: 'Evaluation & Certification',
    description: 'Submit your capstone project, pass practical assessments, and receive your verified certificate.',
  },
  {
    step: '05',
    title: 'Career Launch & Placement',
    description: 'Refine your resume, rehearse mock interviews, and connect with agency and corporate job openings.',
  },
];
