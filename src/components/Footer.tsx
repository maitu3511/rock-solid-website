import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Award,
  ArrowUp,
  ExternalLink,
  ShieldCheck,
  Lock,
  Globe,
  Sparkles,
  Layers,
  Share2,
  BarChart3,
  GraduationCap,
  Briefcase,
  BookOpen
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { DigiBaseraLogo } from './DigiBaseraLogo';
import { AGENCY_CONFIG } from '../data/agencyData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: (serviceName?: string) => void;
  onOpenTerms?: () => void;
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenTerms,
  onOpenPrivacy,
}) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageType) => {
    onNavigate(page);
    scrollToTop();
  };

  const handleNavigateToTeam = () => {
    onNavigate('about');
    setTimeout(() => {
      const el = document.getElementById('team-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 500, behavior: 'smooth' });
      }
    }, 120);
  };

  const handleNavigateToTestimonials = () => {
    onNavigate('home');
    setTimeout(() => {
      const el = document.getElementById('testimonials-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 1200, behavior: 'smooth' });
      }
    }, 120);
  };

  return (
    <footer className="bg-[#111111] text-[#E8E1D0] border-t border-white/10 text-xs" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-white/10 items-start">
          {/* Column 1: Brand & Contact Info (4 cols) */}
          <div className="lg:col-span-4 md:col-span-2 space-y-4">
            <div
              className="cursor-pointer inline-block"
              onClick={() => handleNav('home')}
            >
              <DigiBaseraLogo variant="dark" size="lg" showTagline={true} />
            </div>

            <p className="text-[#E8E1D0]/80 leading-relaxed text-xs pt-1 max-w-sm">
              DigiBasera is a premier digital marketing & web technology agency based in Rajkot, Gujarat. We engineer high-converting digital systems, performance ad funnels, and industry-certified career training.
            </p>

            {/* Zinmatt Official Partner Badge */}
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 text-xs max-w-sm">
              <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <div>
                <span className="text-[#D4AF37] font-bold block text-[11px] uppercase tracking-wider">Official Zinmatt Associate</span>
                <span className="text-[#E8E1D0]/70 text-[10px]">Certified Digital Marketing Academy</span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-2 pt-1">
              <a
                href={getWhatsAppUrl('Hi DigiBasera, I would like to inquire about your digital services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#E8E1D0] hover:text-[#D4AF37] transition-colors text-xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: {AGENCY_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${AGENCY_CONFIG.email}`}
                className="flex items-center gap-2 text-[#E8E1D0] hover:text-[#D4AF37] transition-colors text-xs"
              >
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Email: {AGENCY_CONFIG.email}</span>
              </a>

              <a
                href={AGENCY_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-[#E8E1D0]/80 hover:text-[#D4AF37] transition-colors group text-xs"
                title="Open Digi Basera Rajkot Location in Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="group-hover:underline underline-offset-2">{AGENCY_CONFIG.location}</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-[11px] text-[#E8E1D0]/70 font-semibold block mb-2">Connect With Us:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={AGENCY_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md hover:scale-110 hover:shadow-[0_0_14px_rgba(220,39,67,0.6)] transition-all duration-200"
                  title="Digibasera on Instagram"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>

                <a
                  href={AGENCY_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shadow-md hover:bg-[#166fe5] hover:scale-110 hover:shadow-[0_0_14px_rgba(24,119,242,0.6)] transition-all duration-200"
                  title="Digibasera on Facebook"
                >
                  <Facebook className="w-4 h-4 text-white fill-white" />
                </a>

                <a
                  href={getWhatsAppUrl('Hi Digibasera, I would like to connect with your team.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shadow-md hover:bg-[#20ba5a] hover:scale-110 hover:shadow-[0_0_14px_rgba(37,211,102,0.6)] transition-all duration-200"
                  title="Chat on WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white fill-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (2.5 cols / lg:col-span-2) */}
          <div className="lg:col-span-2 md:col-span-1 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] font-heading flex items-center gap-1.5">
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#D4AF37] transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#D4AF37]/60 text-[10px]">›</span>
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#D4AF37] transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#D4AF37]/60 text-[10px]">›</span>
                  <span>About</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handleNavigateToTeam}
                  className="hover:text-[#D4AF37] transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#D4AF37]/60 text-[10px]">›</span>
                  <span>Our Team</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="hover:text-[#D4AF37] transition-colors text-left flex items-center gap-1.5 font-semibold text-[#D4AF37]"
                >
                  <span className="text-[#D4AF37]/60 text-[10px]">›</span>
                  <span>Clients</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handleNavigateToTestimonials}
                  className="hover:text-[#D4AF37] transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#D4AF37]/60 text-[10px]">›</span>
                  <span>Testimonials</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('careers')}
                  className="hover:text-[#D4AF37] transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#D4AF37]/60 text-[10px]">›</span>
                  <span>Careers</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Academy, Contact & Resources (2 cols) */}
          <div className="lg:col-span-2 md:col-span-1 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] font-heading flex items-center gap-1.5">
              <span>Resources & Info</span>
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button
                  onClick={() => handleNav('training')}
                  className="hover:text-[#D4AF37] transition-colors text-left flex items-center gap-1.5 text-[#D4AF37] font-medium"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Education</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#D4AF37] transition-colors text-left flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Contact</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('blog')}
                  className="hover:text-[#D4AF37] transition-colors text-left flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Blog</span>
                </button>
              </li>
              {onOpenTerms && (
                <li>
                  <button
                    onClick={onOpenTerms}
                    className="hover:text-[#D4AF37] transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#D4AF37]/60 text-[10px]">›</span>
                    <span>Terms & Condition</span>
                  </button>
                </li>
              )}
              {onOpenPrivacy && (
                <li>
                  <button
                    onClick={onOpenPrivacy}
                    className="hover:text-[#D4AF37] transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#D4AF37]/60 text-[10px]">›</span>
                    <span>Privacy Policy</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Column 4: Free Growth Audit CTA (compact, elegant, proportional 4 cols) */}
          <div className="lg:col-span-4 md:col-span-2">
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all shadow-sm space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-[#D4AF37]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-white">
                    Request Growth Audit
                  </h4>
                </div>
                <span className="text-[10px] font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded-full border border-[#D4AF37]/25 shrink-0">
                  100% Free
                </span>
              </div>

              <p className="text-[#E8E1D0]/70 text-[11px] leading-relaxed">
                Get an actionable 360° audit of your SEO rankings, ad funnels, and landing page conversions with zero obligation.
              </p>

              <div className="pt-0.5 space-y-2">
                <button
                  onClick={() => onOpenConsultation('Footer Free Growth Audit')}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get Free Growth Audit</span>
                </button>

                <div className="flex items-center justify-center gap-3 text-[10px] text-[#E8E1D0]/50 pt-0.5">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#D4AF37]/70" />
                    <span>Confidential</span>
                  </span>
                  <span>•</span>
                  <span>24hr Turnaround</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms / Privacy & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E8E1D0]/60">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {currentYear} DigiBasera. All rights reserved.</span>
            <span>•</span>
            <span>Rajkot, Gujarat, India</span>
          </div>

          <div className="flex items-center gap-4">
            {onOpenTerms && (
              <button onClick={onOpenTerms} className="hover:text-[#D4AF37] transition-colors">
                Terms & Condition
              </button>
            )}
            {onOpenPrivacy && (
              <button onClick={onOpenPrivacy} className="hover:text-[#D4AF37] transition-colors">
                Privacy Policy
              </button>
            )}

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors ml-2"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
