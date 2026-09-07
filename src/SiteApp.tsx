import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { PricingPage } from './pages/PricingPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProcessPage } from './pages/ProcessPage';
import { CareersPage } from './pages/CareersPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { TrainingPage } from './components/TrainingPage';
import { ServiceModal } from './components/ServiceModal';
import { ConsultationModal } from './components/ConsultationModal';
import { TermsModal, PrivacyModal } from './components/CompanyModals';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CustomCursor } from './components/CustomCursor';
import { SEOHead } from './components/SEOHead';
import { AnimationProvider } from './context/AnimationContext';
import { PageType, ServiceItem, ServiceCategory } from './types';

export default function App() {
  return (
    <AnimationProvider>
      <AppContent />
    </AnimationProvider>
  );
}

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Service Detail Modal State
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);

  // Consultation & Lead Modal State
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationService, setConsultationService] = useState<string>('Comprehensive Growth Strategy');
  const [consultationBudget, setConsultationBudget] = useState<number | undefined>(undefined);
  const [consultationIndustry, setConsultationIndustry] = useState<string | undefined>(undefined);

  // Company Legal Modals State
  const [isTermsOpen, setIsTermsOpen] = useState<boolean>(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState<boolean>(false);

  // Sync hash routing on mount and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: PageType[] = [
        'home',
        'about',
        'services',
        'portfolio',
        'pricing',
        'training',
        'careers',
        'blog',
        'process',
        'contact',
        'admin'
      ];
      if (validPages.includes(hash as PageType)) {
        setCurrentPage(hash as PageType);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (serviceName?: string, budget?: number, industry?: string) => {
    setConsultationService(serviceName || 'Comprehensive Growth Strategy');
    setConsultationBudget(budget);
    setConsultationIndustry(industry);
    setIsConsultationOpen(true);
  };

  const handleSelectService = (service: ServiceItem, category: ServiceCategory) => {
    setSelectedService(service);
    setSelectedCategory(category);
  };

  // Dynamic SEO Title and Description based on current page
  const getPageSeoMeta = () => {
    switch (currentPage) {
      case 'services':
        return {
          title: 'Digital Marketing & Web Services | DigiBasera Rajkot',
          description: 'Explore 9 specialized digital disciplines: SEO, Google & Meta Ads, Custom Web Design, E-commerce, Social Media Marketing, and Brand Architecture.',
          canonical: 'https://digibasera.com/#services'
        };
      case 'portfolio':
        return {
          title: 'Commercial Portfolio & Client Websites | DigiBasera',
          description: 'Explore live client websites (ABFI Interior, Super India Interior, Premium Pack Co), high-engagement social media campaigns, and verified SEO results.',
          canonical: 'https://digibasera.com/#portfolio'
        };
      case 'pricing':
        return {
          title: 'Transparent Pricing & Marketing Packages | DigiBasera',
          description: 'Clear, ROI-focused digital marketing packages and custom services starting at ₹9,999/mo for businesses in Rajkot, Gujarat & pan-India.',
          canonical: 'https://digibasera.com/#pricing'
        };
      case 'about':
        return {
          title: 'About DigiBasera | Leading Digital Marketing Agency in Rajkot',
          description: 'Meet DigiBasera: our vision, team of growth specialists, local market leadership in Gujarat, and performance-driven methodology.',
          canonical: 'https://digibasera.com/#about'
        };
      case 'training':
        return {
          title: 'Digital Marketing Training Academy | Zinmatt Associate | DigiBasera',
          description: 'Master practical digital marketing, SEO, PPC ads, and AI automations with live client project training and 100% placement support in Rajkot.',
          canonical: 'https://digibasera.com/#training'
        };
      case 'careers':
        return {
          title: 'Careers & Job Openings at DigiBasera | Join Our Rajkot Team',
          description: 'Explore exciting career opportunities in SEO, performance ads, web development, copywriting, and graphic design at DigiBasera.',
          canonical: 'https://digibasera.com/#careers'
        };
      case 'blog':
        return {
          title: 'Agency Insights, SEO & Marketing Blog | DigiBasera',
          description: 'Actionable strategies, algorithm updates, and growth case studies to help your business dominate search rankings and conversion funnels.',
          canonical: 'https://digibasera.com/#blog'
        };
      case 'process':
        return {
          title: 'Our 5-Step Growth Process & Methodology | DigiBasera',
          description: 'Learn how DigiBasera audits, engineers, launches, optimizes, and scales digital marketing campaigns for consistent high ROAS.',
          canonical: 'https://digibasera.com/#process'
        };
      case 'contact':
        return {
          title: 'Contact DigiBasera | 150 Feet Ring Road, Rajkot, Gujarat',
          description: 'Get in touch with DigiBasera. Call +91 91730 08118, message on WhatsApp, or visit our office on 150 Feet Ring Road, Rajkot.',
          canonical: 'https://digibasera.com/#contact'
        };
      default:
        return {
          title: 'DigiBasera | Top Digital Marketing Agency & Web Development in Rajkot, Gujarat',
          description: 'DigiBasera is a premier digital marketing & web technology agency in Rajkot, Gujarat. Specializing in high-ROI SEO, Google Ads PPC, Custom Web Design, E-Commerce, and Social Media Marketing.',
          canonical: 'https://digibasera.com/'
        };
    }
  };

  const seoMeta = getPageSeoMeta();

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111111] font-sans selection:bg-[#D4AF37] selection:text-[#111111] antialiased flex flex-col justify-between">
      {/* Dynamic SEO Meta & Structured Data */}
      <SEOHead
        currentPage={currentPage}
        title={seoMeta.title}
        description={seoMeta.description}
        canonical={seoMeta.canonical}
      />

      {/* Luxury Custom Gold Cursor */}
      <CustomCursor />

      {/* Complete Header with Navigation to All Pages */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Multi-Page Application Router with Smooth Page Transitions */}
      <main className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="w-full"
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onOpenConsultation={handleOpenConsultation}
                onSelectService={handleSelectService}
              />
            )}

            {currentPage === 'services' && (
              <ServicesPage
                onSelectService={handleSelectService}
                onOpenConsultation={handleOpenConsultation}
                onNavigate={handleNavigate}
              />
            )}

            {currentPage === 'portfolio' && (
              <PortfolioPage
                onNavigate={handleNavigate}
                onOpenConsultation={handleOpenConsultation}
              />
            )}

            {currentPage === 'pricing' && (
              <PricingPage
                onOpenConsultation={handleOpenConsultation}
                onNavigate={handleNavigate}
              />
            )}

            {currentPage === 'process' && (
              <ProcessPage
                onNavigate={handleNavigate}
                onOpenConsultation={handleOpenConsultation}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
                onOpenConsultation={handleOpenConsultation}
              />
            )}

            {currentPage === 'training' && (
              <div className="pt-20">
                <TrainingPage
                  onOpenEnquiryModal={(course) => handleOpenConsultation(course ? `Training Course: ${course}` : 'Training Counseling')}
                  onSwitchToAgency={() => handleNavigate('home')}
                />
              </div>
            )}

            {currentPage === 'careers' && (
              <CareersPage
                onNavigate={handleNavigate}
                onOpenConsultation={handleOpenConsultation}
              />
            )}

            {currentPage === 'blog' && (
              <BlogPage
                onNavigate={handleNavigate}
                onOpenConsultation={handleOpenConsultation}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage
                onNavigate={handleNavigate}
                onOpenConsultation={handleOpenConsultation}
              />
            )}

            {currentPage === 'admin' && (
              <div className="pt-20">
                <AdminPage onNavigate={handleNavigate} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Complete Footer with Full Sitemap & Contact Details */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Floating Interactive WhatsApp Desk */}
      <FloatingWhatsApp />

      {/* Detailed Service Deep-Dive Modal */}
      <ServiceModal
        service={selectedService}
        category={selectedCategory}
        onClose={() => {
          setSelectedService(null);
          setSelectedCategory(null);
        }}
        onOpenConsultation={(serviceName) => {
          setSelectedService(null);
          setSelectedCategory(null);
          handleOpenConsultation(serviceName);
        }}
        onNavigate={(page) => handleNavigate(page as PageType)}
      />

      {/* Strategy & Project Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={consultationService}
        defaultBudget={consultationBudget}
        defaultIndustry={consultationIndustry}
      />

      {/* Policy & Terms Modals */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
}
