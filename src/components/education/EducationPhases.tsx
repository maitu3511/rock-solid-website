import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, CalendarDays } from 'lucide-react';
import { TRAINING_PHASES } from '../../data/educationData';

export const EducationPhases: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFFFFF]" id="training-phases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-2 font-heading">
            <CalendarDays className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>90 Day Structured Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] font-heading">
            The 90-Day Training Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] mt-2">
            Eight practical phases that move step by step from web and digital fundamentals to
            live campaigns, tracking and a final project.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#E8E1D0] -translate-x-1/2" />

          <div className="space-y-6 lg:space-y-10">
            {TRAINING_PHASES.map((phase, idx) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.03 * idx, ease: 'easeOut' }}
                className={`lg:w-[calc(50%-2.5rem)] ${idx % 2 === 1 ? 'lg:ml-auto' : ''}`}
              >
                <div className="relative p-6 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-colors shadow-sm">
                  {/* Timeline dot */}
                  <span
                    className={`hidden lg:block absolute top-8 w-3 h-3 rounded-full bg-[#D4AF37] ring-4 ring-white ${
                      idx % 2 === 1 ? '-left-[2.9rem]' : '-right-[2.9rem]'
                    }`}
                  />
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-[10px] font-mono font-bold text-[#9A7B16] bg-[#F8F8F6] px-2.5 py-0.5 rounded border border-[#E8E1D0] uppercase tracking-wider">
                      {phase.phase}
                    </span>
                    <span className="text-[11px] text-[#555555] font-mono">{phase.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111111] font-heading mb-3">
                    {phase.title}
                  </h3>

                  <ul className="space-y-1.5">
                    {phase.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs text-[#555555]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-[11px] text-[#555555] text-center mt-10 max-w-2xl mx-auto">
          The program focuses on practical learning. Progress depends on each student's
          participation and practice — we do not promise expert-level mastery or employment.
        </p>
      </div>
    </section>
  );
};
