import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WORK_PROCESS } from '../data/agencyData';
import { TypewriterText } from './TypewriterText';
import {
  Sparkles,
  CheckCircle2,
  Search,
  Compass,
  Code2,
  Rocket,
  TrendingUp,
  ArrowRight,
  X
} from 'lucide-react';

export const HowWeWork: React.FC = () => {
  // Starts with null so details are closed until the user clicks a phase box
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  const stepIcons = [Search, Compass, Code2, Rocket, TrendingUp];

  return (
    <section className="relative py-24 bg-white border-b border-[#E8E1D0]" id="how-we-work-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F2] border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>STRUCTURED METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] font-heading tracking-tight min-h-[1.2em]">
            How We{' '}
            <TypewriterText phrases="Drive Results" />
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-4 leading-relaxed">
            A repeatable 5-step framework designed to eliminate guesswork, accelerate execution, and sustainably scale your business.
          </p>
        </motion.div>

        {/* 5-Step Process Interactive Stepper / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {WORK_PROCESS.map((step, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            const isActive = activeStepIndex === idx;

            return (
              <motion.div
                key={step.step}
                onClick={() => setActiveStepIndex((prev) => (prev === idx ? null : idx))}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                  isActive
                    ? 'bg-[#111111] text-white border-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.25)] ring-1 ring-[#D4AF37] scale-[1.02]'
                    : 'bg-[#FAF9F5] text-[#111111] border-[#E8E1D0] hover:border-[#D4AF37] hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xl font-bold font-heading ${
                        isActive ? 'text-[#D4AF37]' : 'text-[#CCCCCC] group-hover:text-[#9A7B16]'
                      }`}
                    >
                      {step.step}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-[#D4AF37] text-[#111111] shadow-xs'
                          : 'bg-white text-[#9A7B16] border border-[#E8E1D0] group-hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4
                    className={`text-sm font-bold font-heading ${
                      isActive ? 'text-white' : 'text-[#111111]'
                    }`}
                  >
                    {step.title}
                  </h4>
                  <p className={`text-xs mt-1.5 line-clamp-2 ${isActive ? 'text-[#E8E1D0]' : 'text-[#555555]'}`}>
                    {step.summary}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Step Detailed Deep-Dive Card with Animation (Only rendered after clicking a box) */}
        <AnimatePresence mode="wait">
          {activeStepIndex !== null && WORK_PROCESS[activeStepIndex] && (
            <motion.div
              key={activeStepIndex}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="mt-6 rounded-2xl bg-[#FAF9F5] border border-[#D4AF37]/60 p-6 sm:p-10 shadow-[0_15px_40px_-10px_rgba(212,175,55,0.15)] relative overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveStepIndex(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-1.5 rounded-lg bg-white hover:bg-[#EAE6D8] border border-[#E8E1D0] text-xs font-semibold text-[#555555] hover:text-[#111111] flex items-center gap-1.5 transition-colors z-10 cursor-pointer"
                title="Close details"
              >
                <X className="w-3.5 h-3.5" />
                <span>Close</span>
              </button>

              <div className="grid md:grid-cols-12 gap-8 items-center pt-2 sm:pt-0">
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#111111] font-heading">
                      {WORK_PROCESS[activeStepIndex].title}
                    </h3>
                  </div>

                  <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
                    {WORK_PROCESS[activeStepIndex].summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16]">
                      EXECUTION CHECKLIST:
                    </h5>
                    <div className="space-y-1.5">
                      {WORK_PROCESS[activeStepIndex].details.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#111111]">
                          <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 rounded-2xl bg-white border border-[#E8E1D0] p-6 space-y-4 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16] block">
                    Key Deliverable
                  </span>
                  <div className="text-base sm:text-lg font-bold text-[#111111] font-heading">
                    {WORK_PROCESS[activeStepIndex].deliverable}
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Every milestone is reviewed, documented, and verified with your internal stakeholders before moving to the next sprint.
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-[#E8E1D0] text-xs">
                    <span className="text-[#555555]">Sprint Timeline:</span>
                    <span className="text-[#111111] font-bold">Standard 7 - 14 Days</span>
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

