/**
 * SEO Configuration and Structured JSON-LD Data for DigiBasera
 * High-authority Local SEO, Professional Services, Schema.org Markup for All Pages
 */

export const SEO_CONFIG = {
  siteName: 'DigiBasera',
  siteUrl: 'https://digibasera.com',
  title: 'DigiBasera | Top Digital Marketing Agency & Web Development in Rajkot, Gujarat',
  description:
    'DigiBasera is a premier digital marketing & web technology agency in Rajkot, Gujarat. Specializing in high-ROI SEO, Google Ads PPC, Custom Web Design, E-Commerce, and Social Media Marketing with verified client case studies.',
  keywords: [
    'Digital Marketing Agency Rajkot',
    'Best SEO Company Gujarat',
    'Web Development Agency Rajkot',
    'Social Media Marketing Gujarat',
    'Google Ads PPC Management',
    'E-commerce Website Development',
    'DigiBasera Portfolio',
    'Local SEO Rajkot',
    'Performance Marketing Agency India',
    'Custom WordPress & Shopify Developers',
    'ABFI Interior Website Design',
    'Super India Interior Web Development',
    'Premium Pack Co Digital Marketing',
    'Zinmatt Digital Marketing Academy Rajkot',
    'Digital Marketing Course Rajkot',
    'High ROI Marketing Agency Gujarat'
  ].join(', '),
  author: 'DigiBasera Digital Solutions',
  ogImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  telephone: '+919173008118',
  phoneDisplay: '+91 91730 08118',
  email: 'info@digibasera.com',
  address: {
    streetAddress: 'Digi Basera, 150 Feet Ring Road',
    addressLocality: 'Rajkot',
    addressRegion: 'Gujarat',
    postalCode: '360005',
    addressCountry: 'IN'
  },
  geo: {
    latitude: '22.3039',
    longitude: '70.8022'
  },
  priceRange: '₹₹₹',
  openingHours: 'Mo-Sa 09:00-19:00',
  socialProfiles: [
    'https://instagram.com/digibasera',
    'https://facebook.com/digibasera',
    'https://linkedin.com/company/digibasera'
  ]
};

/**
 * Structured Data for Local Business / Professional Service (Global & Home)
 */
export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness', 'Organization'],
  '@id': 'https://digibasera.com/#organization',
  name: 'DigiBasera',
  alternateName: 'DigiBasera Digital Marketing & Web Agency Rajkot',
  url: 'https://digibasera.com',
  logo: 'https://digibasera.com/favicon.svg',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  description:
    'Premier digital marketing agency based in Rajkot, Gujarat. Providing end-to-end SEO, Performance Advertising, Custom Web & E-Commerce Development, and Creative Brand Architecture.',
  telephone: '+919173008118',
  email: 'info@digibasera.com',
  priceRange: '₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Digi Basera, 150 Feet Ring Road',
    addressLocality: 'Rajkot',
    addressRegion: 'Gujarat',
    postalCode: '360005',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.3039,
    longitude: 70.8022
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00'
    }
  ],
  sameAs: [
    'https://instagram.com/digibasera',
    'https://facebook.com/digibasera',
    'https://linkedin.com/company/digibasera'
  ],
  areaServed: [
    { '@type': 'City', name: 'Rajkot' },
    { '@type': 'City', name: 'Ahmedabad' },
    { '@type': 'City', name: 'Surat' },
    { '@type': 'City', name: 'Vadodara' },
    { '@type': 'AdministrativeArea', name: 'Gujarat' },
    { '@type': 'Country', name: 'India' }
  ]
};

/**
 * WebSite schema with search action
 */
export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://digibasera.com/#website',
  url: 'https://digibasera.com',
  name: 'DigiBasera',
  description: 'Top Digital Marketing & Web Development Agency in Rajkot, Gujarat',
  publisher: {
    '@id': 'https://digibasera.com/#organization'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://digibasera.com/#services?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

/**
 * Services Schema: Comprehensive Service Offerings
 */
export const SERVICES_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Digital Marketing & Custom Web Development',
  provider: {
    '@id': 'https://digibasera.com/#organization'
  },
  areaServed: {
    '@type': 'Country',
    name: 'India'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'DigiBasera Digital Growth Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Search Engine Optimization (SEO)',
          description: 'High-authority on-page, off-page, technical SEO and Google Business Profile local 3-pack optimization in Rajkot & pan-India.',
          url: 'https://digibasera.com/#services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Web & Landing Page Development',
          description: 'Ultra-fast, responsive React, Next.js, and WordPress web architectures designed for high conversion and lead capture.',
          url: 'https://digibasera.com/#services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-Commerce Store & Shopify Engineering',
          description: 'B2B and D2C online store development, payment gateway integrations, and conversion rate optimization.',
          url: 'https://digibasera.com/#services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Google Ads & PPC Campaign Management',
          description: 'Laser-targeted Google Search, Shopping, and Display campaigns engineered for maximum ROI and low cost-per-lead.',
          url: 'https://digibasera.com/#services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Meta Ads (Facebook & Instagram)',
          description: 'Full-funnel Meta advertising targeting high-intent consumers, dynamic retargeting, and scalable sales growth.',
          url: 'https://digibasera.com/#services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Social Media Marketing & Content Strategy',
          description: 'High-impact social media creatives, reels scripting, brand positioning, and audience growth management.',
          url: 'https://digibasera.com/#services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Brand Identity & Visual Architecture',
          description: 'Bespoke corporate logos, visual guidelines, typography pairings, and brand collateral engineering.',
          url: 'https://digibasera.com/#services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Amazon Marketplace & Marketplace Management',
          description: 'Product listing optimization, A+ content, Amazon PPC ads, and keyword ranking for sellers.',
          url: 'https://digibasera.com/#services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UI/UX Design & Conversion Rate Optimization',
          description: 'Wireframing, prototype design, user journey mapping, and conversion funnel friction elimination in Figma.',
          url: 'https://digibasera.com/#services'
        }
      }
    ]
  }
};

/**
 * ItemList Schema for Live Client Projects
 */
export const PORTFOLIO_ITEM_LIST_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'DigiBasera Live Client Showcase & Commercial Projects',
  description: 'Verified deployed client websites and commercial case studies engineered by DigiBasera in Rajkot, Gujarat.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'ABFI Interior (Live Client Website)',
      url: 'https://www.abfiinterior.com',
      description: 'Luxury architectural & interior design firm digital presence featuring 3D portfolio renders and project inquiries.'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Super India Interior (Live Client Website)',
      url: 'https://www.superindiainterior.com',
      description: 'Commercial interior turnkey contractor portfolio with instant WhatsApp consultation routing and high mobile conversion.'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Premium Pack Co (Live Client Website)',
      url: 'https://www.premiumpackco.com',
      description: 'Industrial packaging catalogue with live product specifications, custom dimension calculators, and export lead generation.'
    }
  ]
};

/**
 * Training Academy Course Schema (Zinmatt Associate)
 */
export const TRAINING_COURSE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Master Digital Marketing & AI Growth Certification Course',
  description: 'Comprehensive practical digital marketing course in Rajkot covering SEO, Google Ads, Meta Ads, Social Media, Content Marketing, and AI Tools with 100% placement support.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'DigiBasera Academy in association with Zinmatt',
    sameAs: 'https://digibasera.com/#training'
  },
  educationalCredentialAwarded: 'Industry Certified Digital Marketer (Zinmatt & DigiBasera)',
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'Blended (Classroom in Rajkot + Live Projects)',
    courseWorkload: 'PT3H/D (3 Hours Daily)',
    instructor: {
      '@type': 'Person',
      name: 'Senior Agency Growth Specialists'
    }
  }
};

/**
 * Process / HowTo Schema
 */
export const PROCESS_HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'DigiBasera 5-Step Performance Growth Methodology',
  description: 'How DigiBasera transforms business digital presence into high-conversion revenue pipelines.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Phase 1: Deep Discovery & Technical Audit',
      text: 'Comprehensive audit of competitive landscape, audience search intent, technical web infrastructure, and conversion bottlenecks.'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Phase 2: Custom Strategy & Architecture Blueprint',
      text: 'Custom funnel architecture, keyword target mapping, creative angles, and KPI projection blueprint.'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Phase 3: High-Speed Execution & Asset Deployment',
      text: 'Deploying high-speed website pages, setting up tracking pixels, launching targeted ad campaigns, and on-page SEO.'
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Phase 4: Real-Time Telemetry & Optimization',
      text: 'Continuous A/B testing of ad copy, bid management, search term refinement, and conversion rate optimization.'
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Phase 5: Scaling & Market Dominance',
      text: 'Expanding keyword footprints, scaling winning ad creatives, and cementing long-term search category leadership.'
    }
  ]
};

/**
 * FAQPage Schema for Google Rich Snippets
 */
export const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why should my business choose DigiBasera for digital marketing & SEO in Rajkot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DigiBasera provides performance-focused digital marketing backed by transparent reporting, verified live client work (such as ABFI Interior, Super India Interior, Premium Pack Co), and high-converting custom website development. We focus on real business revenue, organic search rankings, and measurable lead volume rather than superficial vanity metrics.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see organic SEO results with DigiBasera?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients notice local 3-pack visibility and keyword ranking improvements within the first 60 to 90 days. Full organic search dominance and sustained compounding traffic growth typically solidify within 4 to 6 months of comprehensive on-page, technical, and local authority optimization.'
      }
    },
    {
      '@type': 'Question',
      name: 'What technologies do you use for website and e-commerce development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build ultra-fast, mobile-optimized websites using modern web technologies including React, Next.js, Tailwind CSS, TypeScript, WordPress, and Shopify. Every build includes Google Core Web Vitals optimization, automated schema markup, and responsive UI design.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can DigiBasera manage our social media creatives and paid ad campaigns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide end-to-end social media creative production, high-impact graphic design, compelling copywriting, and targeted Meta/Google Ads management optimized for maximum return on ad spend (ROAS).'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I request a free digital audit or consultation from DigiBasera?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can easily click the "Get Free Audit" button on our website, or contact us directly at +91 91730 08118. Our team will review your website and current marketing funnels to deliver an actionable strategy blueprint.'
      }
    }
  ]
};

/**
 * Breadcrumb Schema Generator for Every Page
 */
export function getBreadcrumbSchema(pageName: string, pageUrl: string) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://digibasera.com/'
    }
  ];

  if (pageName !== 'Home' && pageName !== 'home') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: pageName,
      item: pageUrl
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  };
}
