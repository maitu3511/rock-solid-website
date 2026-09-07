import React, { useState } from 'react';
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Send,
  CheckCircle2,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { AGENCY_CONFIG, SERVICE_CATEGORIES } from '../data/agencyData';
import { LeadFormData } from '../types';
import { getWhatsAppUrl, formatContactFormWhatsAppMsg } from '../utils/whatsapp';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    businessName: '',
    phoneNumber: '',
    email: '',
    websiteOrSocial: '',
    serviceCategory: prefilledService || 'Digital Marketing Strategy',
    budgetRange: '₹30,000 - ₹75,000 / mo',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetOptions = [
    '₹25,000 - ₹50,000 / mo',
    '₹50,000 - ₹1,00,000 / mo',
    '₹1,00,000 - ₹2,50,000 / mo',
    '₹2,50,000+ / mo',
    'One-time Project / Web Development',
    'Digital Marketing Training Enrollment',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendViaWhatsApp = () => {
    const formattedMsg = formatContactFormWhatsAppMsg(formData);
    window.open(getWhatsAppUrl(formattedMsg), '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Directly submit full form data to WhatsApp
    const formattedMsg = formatContactFormWhatsAppMsg(formData);
    window.open(getWhatsAppUrl(formattedMsg), '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section className="relative py-24 bg-white border-t border-[#E8E1D0]" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Info & Value Props */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>START YOUR GROWTH JOURNEY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] font-heading tracking-tight">
                Let's Scale Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227] italic font-serif">
                  Business
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#555555] mt-4 leading-relaxed">
                Connect directly with our senior growth strategists. Tell us about your goals and receive a custom digital blueprint within 24 hours.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* WhatsApp */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] hover:border-[#D4AF37] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-white border border-[#E8E1D0] text-[#25D366] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#555555] block font-heading">
                      Direct WhatsApp Desk
                    </span>
                    <span className="text-sm font-bold text-[#111111] group-hover:text-[#9A7B16] transition-colors">
                      {AGENCY_CONFIG.phoneDisplay}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-[#9A7B16] font-bold bg-white px-2.5 py-1 rounded border border-[#E8E1D0]">
                  Instant Reply
                </span>
              </a>

              {/* Phone & Email */}
              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${AGENCY_CONFIG.phoneRaw}`}
                  className="p-4 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] hover:border-[#D4AF37] transition-all flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-md bg-white border border-[#E8E1D0] text-[#9A7B16] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#555555] block font-heading">Call Us</span>
                    <span className="text-xs font-bold text-[#111111]">{AGENCY_CONFIG.phoneDisplay}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${AGENCY_CONFIG.email}`}
                  className="p-4 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] hover:border-[#D4AF37] transition-all flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-md bg-white border border-[#E8E1D0] text-[#9A7B16] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-[#555555] block font-heading">Email Us</span>
                    <span className="text-xs font-bold text-[#111111] truncate block">{AGENCY_CONFIG.email}</span>
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div className="p-4 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] flex items-center justify-between">
                <span className="text-xs font-bold text-[#111111] font-heading uppercase tracking-wider">Official Channels</span>
                <div className="flex items-center gap-2">
                  <a
                    href={AGENCY_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-sm hover:scale-110 hover:shadow-[0_0_12px_rgba(220,39,67,0.5)] transition-all duration-200"
                    title="Digibasera Instagram"
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={AGENCY_CONFIG.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shadow-sm hover:bg-[#166fe5] hover:scale-110 hover:shadow-[0_0_12px_rgba(24,119,242,0.5)] transition-all duration-200"
                    title="Digibasera Facebook"
                  >
                    <Facebook className="w-4 h-4 text-white fill-white" />
                  </a>
                  <a
                    href={getWhatsAppUrl('Hi Digibasera team, I want to connect regarding your services.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shadow-sm hover:bg-[#20ba5a] hover:scale-110 hover:shadow-[0_0_12px_rgba(37,211,102,0.5)] transition-all duration-200"
                    title="Digibasera WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white fill-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Service Coverage & Trust */}
            <div className="p-4 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] space-y-2 text-xs text-[#555555]">
              <a
                href={AGENCY_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-[#111111] hover:text-[#9A7B16] font-semibold transition-colors group"
                title="View Location in Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="group-hover:underline underline-offset-2">{AGENCY_CONFIG.location}</span>
              </a>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#9A7B16]" />
                <span>Business Hours: Mon – Sat (9:30 AM – 7:30 PM IST)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9A7B16]" />
                <span>NDA Protected • 100% Client Data Confidentiality</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Generation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#F8F8F6] border border-[#E8E1D0] p-6 sm:p-10 shadow-[0_10px_35px_-10px_rgba(17,17,17,0.06)] relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white text-[#9A7B16] flex items-center justify-center mx-auto border border-[#D4AF37]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111] font-heading">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] max-w-md mx-auto">
                    Your inquiry has been received. Our digital strategy team is preparing a customized preliminary analysis and will connect within a few business hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="px-6 py-3 rounded-md bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#111111]" />
                      <span>Forward Directly to WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-md bg-white border border-[#E8E1D0] text-[#555555] hover:text-[#111111] text-xs font-semibold"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="lead-consultation-form">
                  <div className="border-b border-[#E8E1D0] pb-4 mb-4">
                    <h3 className="text-xl font-bold text-[#111111] font-heading">
                      Request a Free Digital Strategy Proposal
                    </h3>
                    <p className="text-xs text-[#555555] mt-0.5">
                      Fill in your business details below to get a dedicated audit and roadmap.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1.5 font-heading">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-white border border-[#E8E1D0] focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-[#111111] placeholder:text-[#888888] focus:outline-none"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1.5 font-heading">
                        Business / Brand Name *
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Living Real Estate"
                        className="w-full bg-white border border-[#E8E1D0] focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-[#111111] placeholder:text-[#888888] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1.5 font-heading">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white border border-[#E8E1D0] focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-[#111111] placeholder:text-[#888888] focus:outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1.5 font-heading">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@company.com"
                        className="w-full bg-white border border-[#E8E1D0] focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-[#111111] placeholder:text-[#888888] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Website / Social Link */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1.5 font-heading">
                        Website or Social Media Link
                      </label>
                      <input
                        type="text"
                        name="websiteOrSocial"
                        value={formData.websiteOrSocial}
                        onChange={handleChange}
                        placeholder="https://yourwebsite.com or @instagram"
                        className="w-full bg-white border border-[#E8E1D0] focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-[#111111] placeholder:text-[#888888] focus:outline-none"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1.5 font-heading">
                        Select Primary Service *
                      </label>
                      <select
                        name="serviceCategory"
                        value={formData.serviceCategory}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E8E1D0] focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none"
                      >
                        {SERVICE_CATEGORIES.map((cat) => (
                          <optgroup key={cat.id} label={`Category: ${cat.title}`}>
                            {cat.services.map((s) => (
                              <option key={s.id} value={s.title}>
                                {s.title}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                        <optgroup label="Training Academy">
                          <option value="Digital Marketing Career Training">
                            Digital Marketing Career Training Program
                          </option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1.5 font-heading">
                      Planned Monthly Budget Range
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full bg-white border border-[#E8E1D0] focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1.5 font-heading">
                      Brief Message or Specific Goals
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your target audience, current bottlenecks, or goals..."
                      className="w-full bg-white border border-[#E8E1D0] focus:border-[#D4AF37] rounded-md px-3.5 py-2 text-xs text-[#111111] placeholder:text-[#888888] focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 px-6 rounded-md bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                      id="contact-submit-btn"
                    >
                      {isSubmitting ? (
                        <span>Submitting to WhatsApp...</span>
                      ) : (
                        <>
                          <WhatsAppIcon className="w-4 h-4 text-[#111111]" />
                          <span>Submit & Connect on WhatsApp</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="py-3.5 px-5 rounded-md bg-[#111111] hover:bg-black text-white border border-[#D4AF37] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                      id="contact-whatsapp-bridge-btn"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                      <span>Instant Chat</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

