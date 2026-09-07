import React from 'react';
import { motion } from 'motion/react';
import { TRUST_STATS } from '../data/agencyData';
import { ShieldCheck, Award, TrendingUp, Sparkles, Briefcase, Layers, CheckCircle2 } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const partnerBadges = [
    { name: 'Google Partner', type: 'Certified Agency' },
    { name: 'Meta Business Partner', type: 'Media Buying' },
    { name: 'Shopify Partner', type: 'E-commerce Dev' },
    { name: 'Zinmatt Associate', type: 'Career & Training' },
    { name: 'ISO 9001:2015', type: 'Quality Aligned' },
  ];

  const statIcons = [
    <Briefcase className="w-5 h-5 text-[#9A7B16]" key="1" />,
    <TrendingUp className="w-5 h-5 text-[#9A7B16]" key="2" />,
    <Layers className="w-5 h-5 text-[#9A7B16]" key="3" />,
    <ShieldCheck className="w-5 h-5 text-[#9A7B16]" key="4" />,
  ];

  return (
    <section className="relative py-16 sm:py-20 border-y border-[#E8E1D0] bg-gradient-to-b from-[#FAF9F5] via-[#FFFFFF] to-[#FAF9F5] overflow-hidden" id="trust-stats-section">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-2 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111111] text-[#D4AF37] text-[11px] font-bold uppercase tracking-widest font-mono shadow-sm">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>Proven Track Record</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading tracking-tight">
            Trusted by Businesses Looking to Scale Profitably
          </h3>
          <p className="text-xs sm:text-sm text-[#555555] max-w-lg mx-auto font-normal leading-relaxed">
            Measurable digital strategy, custom engineering, and transparent commercial outcomes.
          </p>
        </motion.div>

        {/* Centered Stats Cards Grid with Staggered Motion Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto justify-center">
          {TRUST_STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] shadow-[0_4px_20px_-4px_rgba(17,17,17,0.04)] hover:shadow-[0_12px_30px_-5px_rgba(212,175,55,0.2)] transition-all duration-300 group text-center flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Subtle gold top border accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon Badge */}
              <div className="w-10 h-10 rounded-full bg-[#F8F8F6] border border-[#E8E1D0] group-hover:border-[#D4AF37]/50 group-hover:bg-[#FAF6EC] flex items-center justify-center mb-3 transition-colors">
                {statIcons[index % statIcons.length]}
              </div>

              {/* Number Metric with Gold Gradient */}
              <div className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#111111] font-heading tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#9A7B16] group-hover:via-[#D4AF37] group-hover:to-[#B89018] transition-all">
                {stat.value}
              </div>

              {/* Main Label */}
              <div className="text-sm sm:text-base font-bold text-[#111111] mt-2 font-heading">
                {stat.label}
              </div>

              {/* Supporting Caption */}
              <div className="text-xs text-[#666666] mt-1 max-w-[200px] leading-relaxed">
                {stat.caption}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology & Partnership Badges (Centered) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-[#E8E1D0] text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16]">
              Technology & Accreditation Network
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
            {partnerBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#E8E1D0] text-[#111111] hover:border-[#D4AF37] transition-all text-xs font-semibold shadow-sm"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{badge.name}</span>
                <span className="text-[9px] text-[#555555] bg-[#F8F8F6] px-1.5 py-0.5 rounded border border-[#E8E1D0]">
                  {badge.type}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};


