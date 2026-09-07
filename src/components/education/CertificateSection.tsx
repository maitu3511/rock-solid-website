import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, X, Expand, CheckCircle2 } from 'lucide-react';
import { CertificateSample } from './CertificateSample';
import { EDUCATION_CONFIG } from '../../data/educationData';

export const CertificateSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-[#FFFFFF]" id="certificate-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest font-heading">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>After Completion</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] font-heading">
              Certificate of Completion
            </h2>

            <p className="text-sm text-[#555555] leading-relaxed">
              {EDUCATION_CONFIG.certificateNote} The certificate records the 90-day training
              completion, the practical work covered, a certificate number and the date of
              completion, with authorized trainer and program director signatures.
            </p>

            <div className="space-y-2">
              {[
                '90-day practical training completion',
                'Skills covered during the program',
                'Certificate number & date of completion',
                'Authorized trainer and program director signatures',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-[#111111]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-3.5 rounded-md bg-[#111111] hover:bg-[#222222] text-white font-bold text-xs uppercase tracking-wider shadow-sm inline-flex items-center gap-2 transition-colors"
            >
              <Expand className="w-4 h-4 text-[#D4AF37]" />
              <span>View Certificate Sample</span>
            </button>

            <p className="text-[11px] text-[#555555] italic">
              This is a Certificate of Completion issued by DigiBasera Training Academy. It is not a
              government, ISO or platform-partner accreditation. Names and details shown are
              placeholders on the sample.
            </p>
          </div>

          {/* Clickable preview */}
          <div className="lg:col-span-7">
            <motion.button
              type="button"
              onClick={() => setIsOpen(true)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="group relative block w-full text-left rounded-xl overflow-hidden border border-[#E8E1D0] shadow-lg hover:shadow-xl transition-shadow bg-white"
              aria-label="Open larger certificate sample preview"
            >
              <CertificateSample compact />
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#111111]/85 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand className="w-3 h-3 text-[#D4AF37]" />
                Click to enlarge
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[95] bg-[#111111]/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 14 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl my-auto"
            >
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close certificate preview"
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-10 w-9 h-9 rounded-full bg-white border border-[#E8E1D0] shadow-md flex items-center justify-center text-[#111111]"
              >
                <X className="w-4 h-4" />
              </button>
              <CertificateSample />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
