import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X, Plus, BookOpen } from 'lucide-react';
import { SKILL_CATEGORIES, SkillCategory } from '../../data/educationData';

export const EducationSkillCards: React.FC = () => {
  const [active, setActive] = useState<SkillCategory | null>(null);

  return (
    <section className="py-20 bg-[#F8F8F6] border-y border-[#E8E1D0]" id="what-students-learn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-2 font-heading">
            <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Skills Covered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] font-heading">
            What Students Learn
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] mt-2">
            Tap any skill area to see exactly what is covered during the 90 days.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.04 * idx, ease: 'easeOut' }}
              className="text-left p-6 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] hover:-translate-y-0.5 transition-all shadow-sm group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16] bg-[#F8F8F6] px-2 py-0.5 rounded border border-[#E8E1D0]">
                  {cat.tag}
                </span>
                <span className="w-7 h-7 rounded-md bg-[#F8F8F6] border border-[#E8E1D0] flex items-center justify-center text-[#9A7B16] group-hover:bg-[#D4AF37] group-hover:text-[#111111] transition-colors">
                  <Plus className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-base font-bold text-[#111111] font-heading mb-2 group-hover:text-[#9A7B16] transition-colors">
                {cat.title}
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">{cat.summary}</p>
              <span className="text-[11px] font-semibold text-[#9A7B16] mt-4 inline-block">
                View {cat.topics.length} topics
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-[#111111]/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-xl bg-white border border-[#E8E1D0] shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 p-6 border-b border-[#E8E1D0]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16]">
                    {active.tag}
                  </span>
                  <h3 className="text-xl font-bold text-[#111111] font-heading mt-1">
                    {active.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="w-9 h-9 rounded-md bg-[#F8F8F6] border border-[#E8E1D0] flex items-center justify-center text-[#555555] hover:text-[#111111] shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs text-[#555555] leading-relaxed">{active.summary}</p>
                <div className="space-y-2">
                  {active.topics.map((t) => (
                    <div key={t} className="flex items-start gap-2 text-xs text-[#111111]">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
