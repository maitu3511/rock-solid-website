import React from 'react';
import {
  ShieldCheck,
  FileText,
  Users,
  Star,
  Quote,
  CheckCircle2,
  Lock,
  Building2,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { AGENCY_CONFIG, TESTIMONIALS } from '../data/agencyData';
import { TEAM_MEMBERS } from '../data/companyData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#D4AF37]/50 max-h-[90vh] overflow-y-auto text-[#111111]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF9F5] hover:bg-[#111111] hover:text-white text-[#555555] transition-colors"
        >
          ✕
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#9A7B16]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16]">
                Legal & Governance
              </span>
              <h2 className="text-2xl font-bold font-heading">Terms & Conditions</h2>
            </div>
          </div>

          <div className="space-y-4 text-xs text-[#555555] leading-relaxed border-t border-[#E8E1D0] pt-4">
            <p>
              Welcome to <strong>Digibasera</strong> (Operating as a Digital Growth Agency and Business Associate of Zinmatt). By engaging our digital marketing, web engineering, consulting, or training services, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <div className="space-y-2">
              <h4 className="font-bold text-[#111111] text-sm">1. Scope of Services & Retainers</h4>
              <p>
                All digital marketing, SEO, paid media advertising, design, and software engineering engagements are executed in accordance with individual Statement of Work (SOW) or retainer agreements. Digibasera reserves the right to modify delivery timelines based on client response latency, credential provision, or external ad network algorithmic updates.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#111111] text-sm">2. Ad Budgets & Media Spend</h4>
              <p>
                Clients acknowledge that all third-party media ad spends (payable directly to Google Ads, Meta Ads, Amazon, LinkedIn, etc.) are distinct from Digibasera agency retainer fees. Third-party ad costs are charged directly to the client's registered corporate billing cards.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#111111] text-sm">3. Intellectual Property & Deliverables</h4>
              <p>
                Upon receipt of full payment for completed milestones or monthly billing periods, all bespoke creative graphics, custom software codebases, and domain-specific landing pages created specifically for the client become the exclusive property of the client, excluding proprietary agency workflows, internal templates, and foundational frameworks.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#111111] text-sm">4. Performance Disclaimers & Warranties</h4>
              <p>
                While Digibasera adheres to industry-leading white-hat optimization methodologies and data-backed performance marketing best practices, search engine algorithms (Google, Bing, Perplexity, ChatGPT) and platform policies (Meta, Google Ads) operate independently. No agency can ethically guarantee specific numerical search ranks or static conversion rates.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#111111] text-sm">5. Training Academy (Zinmatt Association)</h4>
              <p>
                Training academy enrollments, curriculum schedules, and career assistance pathways are conducted in association with Zinmatt standards. Course fee refunds, batch transfers, and certification credentials adhere to academy academic guidelines outlined during student onboarding.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#111111] text-sm">6. Governing Law & Dispute Resolution</h4>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Ahmedabad, Gujarat, India.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8E1D0] flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-md bg-[#111111] hover:bg-[#222222] text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              I Understand & Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PrivacyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#D4AF37]/50 max-h-[90vh] overflow-y-auto text-[#111111]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF9F5] hover:bg-[#111111] hover:text-white text-[#555555] transition-colors"
        >
          ✕
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#9A7B16]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16]">
                Data Protection & Trust
              </span>
              <h2 className="text-2xl font-bold font-heading">Privacy Policy</h2>
            </div>
          </div>

          <div className="space-y-4 text-xs text-[#555555] leading-relaxed border-t border-[#E8E1D0] pt-4">
            <p>
              At <strong>Digibasera</strong>, your commercial confidentiality and personal data security are of supreme importance. This Privacy Policy details our practices concerning information collection, usage, and client protection.
            </p>

            <div className="space-y-2">
              <h4 className="font-bold text-[#111111] text-sm">1. Information We Collect</h4>
              <p>
                We only collect essential business contact information (Name, Corporate Email, Phone/WhatsApp Number, Website URL, and Estimated Campaign Budget) willingly submitted via our contact forms, audit requests, or career applications.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#111111] text-sm">2. Purpose & Use of Data</h4>
              <p>
                Collected data is used strictly to prepare tailored digital strategy proposals, conduct technical website audits, manage customer communications, and coordinate training admissions. We never sell, rent, or lease client databases to third-party brokers.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#111111] text-sm">3. Security & Non-Disclosure (NDA)</h4>
              <p>
                All client proprietary assets, campaign data, analytics dashboards, and commercial revenue metrics are treated under strict Non-Disclosure parameters. Access is restricted to assigned agency squad specialists.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#111111] text-sm">4. Cookies & Web Tracking</h4>
              <p>
                Our website utilizes standard session cookies and privacy-compliant analytics tools (such as Google Analytics 4) to monitor aggregate traffic patterns, visitor navigation, and website performance metrics.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#111111] text-sm">5. Contact Data Protection Officer</h4>
              <p>
                For data access requests, modification, or erasure, you can directly reach our compliance desk at <strong>{AGENCY_CONFIG.email}</strong> or connect via WhatsApp at <strong>{AGENCY_CONFIG.phoneDisplay}</strong>.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8E1D0] flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-md bg-[#111111] hover:bg-[#222222] text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Accept Privacy Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TeamModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#D4AF37]/50 max-h-[92vh] overflow-y-auto text-[#111111]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF9F5] hover:bg-[#111111] hover:text-white text-[#555555] transition-colors"
        >
          ✕
        </button>

        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16]">
              Multidisciplinary Growth Squad
            </span>
            <h2 className="text-3xl font-bold font-heading">Meet the Digibasera Leadership</h2>
            <p className="text-xs text-[#666666]">
              Senior strategists, certified media buyers, full-stack engineers, and Zinmatt associate educators dedicated to your digital scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="p-5 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-3"
              >
                <div className="relative h-48 w-full rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-[#111111]/85 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {member.experience}
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-[#111111] font-heading">{member.name}</h4>
                  <span className="text-xs text-[#9A7B16] font-semibold block">{member.role}</span>
                  <span className="text-[10px] text-[#777777] block">{member.department}</span>
                </div>

                <p className="text-xs text-[#555555] leading-relaxed">
                  {member.bio}
                </p>

                <div className="pt-2 border-t border-[#E8E1D0]/60 flex flex-wrap gap-1">
                  {member.skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="text-[9px] bg-white px-2 py-0.5 rounded border border-[#E8E1D0] text-[#333333]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-[#111111] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#E8E1D0]">
              Want our leadership team to audit your digital campaigns?
            </div>
            <a
              href={getWhatsAppUrl('Hi Digibasera leadership team, I would like to schedule a growth strategy consultation.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-md bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-white fill-white" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#D4AF37]/50 max-h-[92vh] overflow-y-auto text-[#111111]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF9F5] hover:bg-[#111111] hover:text-white text-[#555555] transition-colors"
        >
          ✕
        </button>

        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16]">
              Verified Client Outcomes
            </span>
            <h2 className="text-3xl font-bold font-heading">Client Reviews & Testimonials</h2>
            <p className="text-xs text-[#666666]">
              Real feedback from enterprise founders, managing directors, and marketing leaders scaled by Digibasera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#D4AF37]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                      ))}
                    </div>
                    <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-[#E8E1D0] font-bold text-[#9A7B16] uppercase">
                      {t.industry}
                    </span>
                  </div>

                  <p className="text-xs text-[#444444] italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8E1D0]/60 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-xs text-[#111111]">{t.clientName}</h5>
                    <span className="text-[10px] text-[#666666] block">{t.role} • {t.company}</span>
                  </div>

                  <div className="px-2 py-1 rounded bg-[#111111] text-[#D4AF37] text-[10px] font-mono font-bold">
                    {t.metricHighlight}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-[#FAF9F5] border border-[#D4AF37]/50 text-center space-y-3">
            <h4 className="text-base font-bold text-[#111111]">Ready to achieve comparable commercial metrics?</h4>
            <p className="text-xs text-[#666666] max-w-md mx-auto">
              Book a complimentary 30-minute growth teardown with our principal strategists.
            </p>
            <a
              href={getWhatsAppUrl('Hi Digibasera, I reviewed your client testimonials and want to discuss scaling my brand.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-[#111111] hover:bg-[#222222] text-white font-bold text-xs uppercase tracking-wider border border-[#D4AF37]"
            >
              <span>Schedule Strategy Call On WhatsApp</span>
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
