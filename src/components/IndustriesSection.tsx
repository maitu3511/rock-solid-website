import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INDUSTRIES } from '../data/agencyData';
import { TypewriterText } from './TypewriterText';
import {
  Building,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Factory,
  Store,
  Utensils,
  Landmark,
  Briefcase,
  Rocket,
  MapPin,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  X
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';

interface IndustriesSectionProps {
  onOpenConsultation: (industryName?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onOpenConsultation,
}) => {
  // Initially null so details are closed until user clicks a box
  const [selectedIndustryId, setSelectedIndustryId] = useState<string | null>(null);

  const getIndustryIcon = (iconName: string, className = 'w-4 h-4') => {
    switch (iconName) {
      case 'Building':
        return <Building className={`${className} text-[#D4AF37]`} />;
      case 'HeartPulse':
        return <HeartPulse className={`${className} text-[#D4AF37]`} />;
      case 'ShoppingBag':
        return <ShoppingBag className={`${className} text-[#D4AF37]`} />;
      case 'GraduationCap':
        return <GraduationCap className={`${className} text-[#D4AF37]`} />;
      case 'Factory':
        return <Factory className={`${className} text-[#D4AF37]`} />;
      case 'Store':
        return <Store className={`${className} text-[#D4AF37]`} />;
      case 'Utensils':
        return <Utensils className={`${className} text-[#D4AF37]`} />;
      case 'Landmark':
        return <Landmark className={`${className} text-[#D4AF37]`} />;
      case 'Briefcase':
        return <Briefcase className={`${className} text-[#D4AF37]`} />;
      case 'Rocket':
        return <Rocket className={`${className} text-[#D4AF37]`} />;
      case 'MapPin':
        return <MapPin className={`${className} text-[#D4AF37]`} />;
      case 'Sparkles':
        return <Sparkles className={`${className} text-[#D4AF37]`} />;
      default:
        return <ShieldCheck className={`${className} text-[#D4AF37]`} />;
    }
  };

  const currentIndustry = selectedIndustryId ? INDUSTRIES.find((i) => i.id === selectedIndustryId) : null;

  return (
    <section className="relative py-24 bg-[#F8F8F6] border-y border-[#E8E1D0]" id="industries-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>NICHE DOMAIN EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] font-heading tracking-tight min-h-[1.2em]">
            <TypewriterText phrases="Tailored for High-Impact Industries" />
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-4 leading-relaxed">
            We understand the commercial nuances, buyer personas, and unit economics across 13 specialized business sectors.
          </p>
        </motion.div>

        {/* Industry Pills / Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {INDUSTRIES.map((ind, idx) => {
            const isSelected = selectedIndustryId === ind.id;
            return (
              <motion.button
                key={ind.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                whileHover={{ y: -3 }}
                onClick={() => setSelectedIndustryId((prev) => (prev === ind.id ? null : ind.id))}
                className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col items-center justify-between text-center gap-2 relative group cursor-pointer ${
                  isSelected
                    ? 'bg-[#111111] text-white border-[#D4AF37] shadow-[0_10px_25px_rgba(212,175,55,0.25)] scale-[1.03] ring-1 ring-[#D4AF37]'
                    : 'bg-white border-[#E8E1D0] text-[#555555] hover:text-[#111111] hover:border-[#D4AF37] hover:bg-[#FAF9F5]'
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${isSelected ? 'bg-[#222222] border border-[#D4AF37]/40' : 'bg-[#F8F8F6] border border-[#E8E1D0] group-hover:border-[#D4AF37]/50'}`}>
                  {getIndustryIcon(ind.iconName)}
                </div>
                <span className="text-xs font-bold leading-tight font-heading">{ind.name}</span>
                <span
                  className={`text-[9px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded transition-colors ${
                    isSelected
                      ? 'bg-[#D4AF37] text-[#111111]'
                      : 'text-[#999999] group-hover:text-[#9A7B16]'
                  }`}
                >
                  {isSelected ? 'Opened' : 'Click to View'}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Industry Spotlight Card (Only rendered after clicking an industry) */}
        <AnimatePresence mode="wait">
          {currentIndustry && (
            <motion.div 
              key={currentIndustry.id}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="mt-6 rounded-2xl bg-white border border-[#D4AF37]/60 p-6 sm:p-10 shadow-[0_15px_40px_-10px_rgba(212,175,55,0.15)] relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndustryId(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-1.5 rounded-lg bg-[#FAF9F5] hover:bg-[#EAE6D8] border border-[#E8E1D0] text-xs font-semibold text-[#555555] hover:text-[#111111] flex items-center gap-1.5 transition-colors z-10"
                title="Close industry details"
              >
                <X className="w-3.5 h-3.5" />
                <span>Close</span>
              </button>

              <div className="grid lg:grid-cols-12 gap-8 items-center pt-2 sm:pt-0">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#111111] border border-[#D4AF37] flex items-center justify-center shadow-xs">
                      {getIndustryIcon(currentIndustry.iconName, 'w-6 h-6')}
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-widest text-[#9A7B16] bg-[#F8F8F6] px-2.5 py-0.5 rounded-full border border-[#E8E1D0]">
                        Industry Deep-Dive Active
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading mt-1">
                        {currentIndustry.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
                    {currentIndustry.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0]">
                      <span className="text-[10px] font-bold text-[#111111] uppercase tracking-widest block mb-1">
                        Common Sector Bottleneck
                      </span>
                      <p className="text-xs text-[#555555] leading-relaxed">
                        {currentIndustry.keyChallenge}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0]">
                      <span className="text-[10px] font-bold text-[#9A7B16] uppercase tracking-widest block mb-1">
                        Digibasera Growth Blueprint
                      </span>
                      <p className="text-xs text-[#555555] leading-relaxed">
                        {currentIndustry.growthSolution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 rounded-2xl bg-[#111111] border border-[#D4AF37] p-6 space-y-4 text-center sm:text-left text-white shadow-md">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                    Industry Impact Benchmark
                  </span>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-heading">
                    {currentIndustry.metricsPlaceholder}
                  </div>
                  <p className="text-xs text-[#E8E1D0] leading-relaxed">
                    Customized funnel architecture tailored to convert high-value clients in the {currentIndustry.name} sector.
                  </p>

                  <div className="pt-2 space-y-2">
                    <button
                      onClick={() => onOpenConsultation(currentIndustry.name)}
                      className="w-full py-3 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
                    >
                      <span>Request {currentIndustry.name} Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={getServiceWhatsAppUrl(`Digital Marketing for ${currentIndustry.name}`, 'Industry Solutions')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Discuss via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

