import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import { loadStoredTestimonials, StoredTestimonialItem } from '../data/testimonialsData';

interface TestimonialsSectionProps {
  onOpenConsultation: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenConsultation }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [testimonials, setTestimonials] = useState<StoredTestimonialItem[]>(() => {
    return loadStoredTestimonials().filter(t => t.status !== 'hidden');
  });

  useEffect(() => {
    const handleStorage = () => {
      setTestimonials(loadStoredTestimonials().filter(t => t.status !== 'hidden'));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Extended testimonial roster for rich, continuous infinite scrolling
  const extendedTestimonials = useMemo(() => {
    const list = testimonials.length > 0 ? testimonials : loadStoredTestimonials();
    // Duplicate multiple times to ensure smooth infinite loop
    return [...list, ...list, ...list, ...list];
  }, [testimonials]);

  return (
    <section className="relative py-20 bg-[#FAF9F5] border-y border-[#E8E1D0] overflow-hidden select-none" id="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-3 font-heading shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>CLIENT SUCCESS & PROVEN ROI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] font-heading tracking-tight">
            Trusted by Leaders Across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227] italic font-serif">
              Industries
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-3 leading-relaxed">
            See how our performance marketing, SEO architecture, and high-conversion web development transformed bottom-line revenue for founders and corporate brands.
          </p>
        </motion.div>
      </div>

      {/* Continuous Auto-Scrolling Marquee Track */}
      <div
        className="relative w-full overflow-hidden py-4 my-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Soft Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent z-10" />

        {/* Continuous Horizontal Track */}
        <div className="overflow-x-hidden">
          <div
            className={`animate-marquee-track ${isPaused ? 'pause-marquee' : ''} gap-6 items-stretch px-4`}
          >
            {extendedTestimonials.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[340px] sm:w-[380px] shrink-0 p-6 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(17,17,17,0.04)] hover:shadow-[0_15px_35px_-10px_rgba(212,175,55,0.18)] group relative overflow-hidden"
              >
                {/* Subtle top gold accent on card hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Rating Stars & Industry Tag */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating || 5)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16] bg-[#FAF8F2] px-2.5 py-0.5 rounded border border-[#E8E1D0] group-hover:border-[#D4AF37]/40 transition-colors">
                      {item.industry}
                    </span>
                  </div>

                  {/* Verified Metric Highlight Box */}
                  <div className="p-2.5 rounded-xl bg-[#FAF8F2] border border-[#D4AF37]/30 text-xs font-bold text-[#7E580A] flex items-center gap-2 mb-4 group-hover:bg-[#FAF6EC] transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-3 h-3 text-[#9A7B16]" />
                    </div>
                    <span className="truncate">{item.metricHighlight}</span>
                  </div>

                  {/* Quote Text */}
                  <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed italic line-clamp-4">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-4 border-t border-[#E8E1D0] flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Avatar Image or Initials Badge */}
                    {item.avatarUrl ? (
                      <img
                        src={item.avatarUrl}
                        alt={item.clientName}
                        className="w-9 h-9 rounded-full object-cover border border-[#D4AF37]/50 shrink-0 shadow-xs"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-[#111111] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                        {item.clientName.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </div>
                    )}
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-[#111111] font-heading truncate group-hover:text-[#9A7B16] transition-colors">
                        {item.clientName}
                      </h4>
                      <p className="text-[11px] text-[#777777] truncate">
                        {item.role}, <span className="font-semibold text-[#333333]">{item.company}</span>
                      </p>
                    </div>
                  </div>

                  <Quote className="w-5 h-5 text-[#D4AF37]/30 shrink-0 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Bottom Trust Snapshot & Action Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-[#D4AF37] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Quote className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-white">
                690+ Brands Partnered • 98% Client Retention
              </h3>
              <p className="text-xs text-[#E8E1D0] mt-0.5">
                Join our roster of high-growth businesses scaling with transparent data and dedicated growth strategists.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 shrink-0 font-heading"
          >
            <span>Start Your Success Story</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

