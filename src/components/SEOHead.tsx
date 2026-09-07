import React, { useEffect } from 'react';
import {
  LOCAL_BUSINESS_SCHEMA,
  WEBSITE_SCHEMA,
  SERVICES_SCHEMA,
  PORTFOLIO_ITEM_LIST_SCHEMA,
  TRAINING_COURSE_SCHEMA,
  PROCESS_HOWTO_SCHEMA,
  FAQ_SCHEMA,
  SEO_CONFIG,
  getBreadcrumbSchema
} from '../data/seoData';
import { PageType } from '../types';

interface SEOHeadProps {
  currentPage?: PageType;
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  currentPage = 'home',
  title,
  description,
  canonical,
  keywords,
  ogType = 'website',
  ogImage = SEO_CONFIG.ogImage,
}) => {
  // Page specific SEO defaults
  const pageSEO: Record<
    PageType,
    { title: string; description: string; canonical: string; keywords: string }
  > = {
    home: {
      title: 'DigiBasera | Top Digital Marketing Agency & Web Development in Rajkot, Gujarat',
      description:
        'Premier digital marketing & web technology agency in Rajkot, Gujarat. Specializing in high-ROI SEO, Google Ads PPC, Custom Web Design, E-Commerce, and Social Media Marketing with verified client case studies.',
      canonical: 'https://digibasera.com/',
      keywords:
        'Digital Marketing Agency Rajkot, Best SEO Company Gujarat, Web Development Rajkot, Google Ads Agency, Social Media Marketing Rajkot, Local SEO Gujarat, High ROI Agency'
    },
    services: {
      title: 'Digital Marketing & Web Development Services in Rajkot | DigiBasera',
      description:
        'Explore end-to-end digital growth services: Advanced Technical SEO, Google PPC Ads, Meta Ad Funnels, Custom React/Next.js Web Design, Shopify E-Commerce, and Brand Identity.',
      canonical: 'https://digibasera.com/#services',
      keywords:
        'SEO Services Rajkot, Google Ads PPC Management Gujarat, Custom Web Development, Shopify Store Setup, Social Media Marketing Packages, Branding Agency Rajkot'
    },
    portfolio: {
      title: 'Client Portfolio & Live Websites Showcase | DigiBasera Rajkot',
      description:
        'Explore verified live deployed client websites (ABFI Interior, Super India Interior, Premium Pack Co), architectural portals, and verified performance case studies.',
      canonical: 'https://digibasera.com/#portfolio',
      keywords:
        'DigiBasera Client Portfolio, Live Websites Rajkot, ABFI Interior, Super India Interior, Premium Pack Co, Web Design Case Studies Gujarat'
    },
    pricing: {
      title: 'Transparent Digital Marketing & Web Development Pricing | DigiBasera',
      description:
        'Explore clear, performance-backed pricing packages for SEO, custom web development, Meta ads, Google PPC, and social media management in Rajkot, Gujarat.',
      canonical: 'https://digibasera.com/#pricing',
      keywords:
        'Digital Marketing Cost Rajkot, SEO Packages Gujarat, Website Development Cost India, Social Media Marketing Pricing, Google Ads Management Fee'
    },
    process: {
      title: 'Our Proven 5-Step Growth Methodology & Execution | DigiBasera',
      description:
        'Discover how DigiBasera delivers measurable revenue growth: from deep discovery and technical audits to rapid asset deployment and continuous conversion optimization.',
      canonical: 'https://digibasera.com/#process',
      keywords:
        'Digital Marketing Process, SEO Strategy Framework, Conversion Rate Optimization Methodology, Performance Marketing Blueprint'
    },
    about: {
      title: 'About DigiBasera | Leading Digital Technology & Growth Agency Rajkot',
      description:
        'Learn about DigiBasera’s mission, our team of growth engineers, technical web developers, and performance marketers driving digital excellence in Rajkot, Gujarat.',
      canonical: 'https://digibasera.com/#about',
      keywords:
        'About DigiBasera, Digital Agency Team Rajkot, Marketing Specialists Gujarat, Technology Agency Profile'
    },
    education: {
      title: 'Digital Marketing Training & Placement Academy in Rajkot | Zinmatt & DigiBasera',
      description:
        'Master real-world SEO, Google Ads, Meta Ads, AI Marketing Tools, and live client projects with 100% placement support at Zinmatt Digital Marketing Academy Rajkot.',
      canonical: 'https://digibasera.com/#training',
      keywords:
        'Digital Marketing Course Rajkot, SEO Training Gujarat, Social Media Marketing Institute Rajkot, Zinmatt Academy, Digital Marketing Certification with Placement'
    },
    training: {
      title: 'Digital Marketing Training & Placement Academy in Rajkot | Zinmatt & DigiBasera',
      description:
        'Master real-world SEO, Google Ads, Meta Ads, AI Marketing Tools, and live client projects with 100% placement support at Zinmatt Digital Marketing Academy Rajkot.',
      canonical: 'https://digibasera.com/#training',
      keywords:
        'Digital Marketing Course Rajkot, SEO Training Gujarat, Social Media Marketing Institute Rajkot, Zinmatt Academy, Digital Marketing Certification with Placement'
    },
    careers: {
      title: 'Careers & Job Openings in Rajkot | Join DigiBasera Digital Agency',
      description:
        'Join our high-performing team in Rajkot. Openings for SEO Specialists, Frontend React Developers, Meta Ads Managers, and Creative Graphic Designers.',
      canonical: 'https://digibasera.com/#careers',
      keywords:
        'Digital Marketing Jobs Rajkot, Web Developer Vacancies Gujarat, SEO Specialist Jobs, Graphic Designer Careers Rajkot, DigiBasera Hiring'
    },
    blog: {
      title: 'Digital Growth Insights, SEO Guides & Strategy Blog | DigiBasera',
      description:
        'Actionable digital marketing strategies, local SEO blueprints, Google algorithm updates, and web development best practices by DigiBasera specialists.',
      canonical: 'https://digibasera.com/#blog',
      keywords:
        'Digital Marketing Blog Gujarat, SEO Tips India, Local SEO Guide Rajkot, Google Ads Optimization Strategies, E-Commerce Growth Blog'
    },
    contact: {
      title: 'Contact DigiBasera | Free Growth Audit & Strategy Consultation Rajkot',
      description:
        'Get in touch with DigiBasera for a free digital audit, website quotation, or growth strategy meeting. Located at 150 Feet Ring Road, Rajkot, Gujarat.',
      canonical: 'https://digibasera.com/#contact',
      keywords:
        'Contact DigiBasera, Digital Marketing Agency Phone Rajkot, Office Address 150 Feet Ring Road Rajkot, Request Free Digital Audit'
    },
    admin: {
      title: 'Secure Admin Control Panel | DigiBasera',
      description: 'DigiBasera administrative management interface.',
      canonical: 'https://digibasera.com/#admin',
      keywords: 'admin'
    }
  };

  const currentSEO = pageSEO[currentPage] || pageSEO.home;

  const finalTitle = title || currentSEO.title;
  const finalDesc = description || currentSEO.description;
  const finalCanonical = canonical || currentSEO.canonical;
  const finalKeywords = keywords || currentSEO.keywords;

  useEffect(() => {
    // 1. Title
    document.title = finalTitle;

    // Helper to safely set/create meta tag
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta Tags
    setMeta('description', finalDesc);
    setMeta('keywords', finalKeywords);
    setMeta('author', SEO_CONFIG.author);
    setMeta(
      'robots',
      currentPage === 'admin'
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    // Open Graph
    setMeta('og:title', finalTitle, true);
    setMeta('og:description', finalDesc, true);
    setMeta('og:url', finalCanonical, true);
    setMeta('og:type', ogType, true);
    setMeta('og:site_name', SEO_CONFIG.siteName, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:locale', 'en_IN', true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', finalTitle);
    setMeta('twitter:description', finalDesc);
    setMeta('twitter:image', ogImage);

    // Geographic Meta for Local Rajkot & Gujarat Dominance
    setMeta('geo.region', 'IN-GJ');
    setMeta('geo.placename', 'Rajkot, Gujarat, India');
    setMeta('geo.position', '22.3039;70.8022');
    setMeta('ICBM', '22.3039, 70.8022');

    // Canonical link tag
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', finalCanonical);

    // 2. Structured Data Injections
    const injectJsonLd = (id: string, schemaObj: object) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(schemaObj);
    };

    // Always inject Organization & WebSite Schemas
    injectJsonLd('jsonld-local-business', LOCAL_BUSINESS_SCHEMA);
    injectJsonLd('jsonld-website-schema', WEBSITE_SCHEMA);

    // Inject Breadcrumb Schema for current page
    const pageNameCapitalized =
      currentPage === 'home'
        ? 'Home'
        : currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
    injectJsonLd(
      'jsonld-breadcrumbs',
      getBreadcrumbSchema(pageNameCapitalized, finalCanonical)
    );

    // Page-specific Schemas
    if (currentPage === 'home' || currentPage === 'services') {
      injectJsonLd('jsonld-services-catalog', SERVICES_SCHEMA);
    }
    if (currentPage === 'home' || currentPage === 'portfolio') {
      injectJsonLd('jsonld-portfolio-list', PORTFOLIO_ITEM_LIST_SCHEMA);
    }
    if (currentPage === 'home' || currentPage === 'process') {
      injectJsonLd('jsonld-process-howto', PROCESS_HOWTO_SCHEMA);
    }
    if (currentPage === 'training') {
      injectJsonLd('jsonld-training-course', TRAINING_COURSE_SCHEMA);
    }
    if (currentPage === 'home' || currentPage === 'portfolio') {
      injectJsonLd('jsonld-faq-schema', FAQ_SCHEMA);
    }
  }, [finalTitle, finalDesc, finalCanonical, finalKeywords, ogType, ogImage, currentPage]);

  return null;
};
