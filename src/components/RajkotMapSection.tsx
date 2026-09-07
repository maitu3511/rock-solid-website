import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Mail, Clock, ExternalLink, Check, Copy } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const RajkotMapSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const rajkotAddress = "Digi Basera Marketing Agency, Chandresh Nagar Main Road, Mayani Chowk, Opposite Backbone Shopping Centre, Rajkot - 360004, Gujarat, India";
  const googleMapsUrl = "https://share.google/6qE9KBy6hSqJnPcZ2";
  const mapEmbedSrc = "https://maps.google.com/maps?q=Chandresh%20Nagar%20Main%20Road%2C%20Mayani%20Chowk%2C%20Opposite%20Backbone%20Shopping%20Centre%2C%20Rajkot%20360004&t=&z=16&ie=UTF8&iwloc=&output=embed";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(rajkotAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-16 bg-[#FAFAF8] border-t border-b border-[#E8E1D0]" id="rajkot-map-location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-3 font-heading shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Our Location & Agency Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] font-heading tracking-tight">
            Visit Our Office in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227]">
              Rajkot, Gujarat
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-3 leading-relaxed">
            Drop by our headquarters for an in-person growth strategy consultation, client workshop, or digital marketing career counseling.
          </p>
        </div>

        {/* Map Container & Office Info Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Office Details Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E1D0] shadow-sm">
            <div className="space-y-6">
              {/* Branch Header */}
              <div className="border-b border-[#E8E1D0] pb-5">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#111111] text-[#D4AF37] border border-[#D4AF37]">
                    Headquarters & Strategy Hub
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open for Visits
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] font-heading">
                  Digi Basera Marketing Agency
                </h3>
                <p className="text-xs text-[#9A7B16] font-semibold mt-0.5">
                  Rajkot, Saurashtra & Pan-India Growth Operations
                </p>
              </div>

              {/* Contact List */}
              <div className="space-y-4 text-xs">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] uppercase font-bold text-[#888888] tracking-wider block font-heading">
                      Office Address
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-[#111111] mt-0.5 leading-snug">
                      Chandresh Nagar Main Road, Mayani Chowk, Opposite Backbone Shopping Centre, Rajkot - 360004
                    </p>
                    <p className="text-[11px] text-[#777777] mt-0.5 font-normal">
                      Gujarat, India
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#888888] tracking-wider block font-heading">
                      Consultation Hours
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-[#111111] mt-0.5">
                      Monday – Saturday: 9:30 AM – 7:30 PM IST
                    </p>
                    <p className="text-[11px] text-[#777777]">Sunday: By Prior Appointment Only</p>
                  </div>
                </div>

                {/* Phone & Direct Desk */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#888888] tracking-wider block font-heading">
                      Direct Inquiries & Desk
                    </span>
                    <a
                      href={`tel:${AGENCY_CONFIG.phoneRaw}`}
                      className="text-xs sm:text-sm font-bold text-[#111111] hover:text-[#9A7B16] transition-colors mt-0.5 block"
                    >
                      {AGENCY_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#888888] tracking-wider block font-heading">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${AGENCY_CONFIG.email}`}
                      className="text-xs sm:text-sm font-bold text-[#111111] hover:text-[#9A7B16] transition-colors mt-0.5 block"
                    >
                      {AGENCY_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-[#E8E1D0] space-y-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-[#111111] hover:bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  id="get-directions-btn"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="py-2.5 px-3 rounded-lg bg-[#F8F8F6] hover:bg-[#EFEFEA] border border-[#E8E1D0] text-[#111111] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  id="copy-address-btn"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#888888]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={getWhatsAppUrl("Hi Digi Basera team, I want to visit your Rajkot office for a consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                <span>Book Office Appointment via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E8E1D0] shadow-sm bg-white relative min-h-[420px] flex flex-col">
            {/* Top Bar with Map Title & External Link */}
            <div className="px-5 py-3.5 bg-white border-b border-[#E8E1D0] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                <span className="text-xs font-bold text-[#111111] font-heading">
                  Interactive Google Map: Rajkot, Gujarat (HQ)
                </span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-[#9A7B16] hover:text-[#7E580A] flex items-center gap-1 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Google Maps iFrame */}
            <div className="relative flex-1 w-full min-h-[380px] bg-[#E8E1D0]">
              <iframe
                title="Digi Basera Rajkot Location"
                src={mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
