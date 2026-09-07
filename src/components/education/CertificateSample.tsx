import React from 'react';
import { GraduationCap, Search, MousePointerClick, Globe, BarChart3, Sparkles } from 'lucide-react';
import { CERTIFICATE_SAMPLE } from '../../data/educationData';

/**
 * Pure HTML/CSS sample "Certificate of Completion" — premium white background,
 * orange/black/gold accents, geometric corner elements. No accreditation claims.
 */
export const CertificateSample: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  return (
    <div
      className={`relative w-full bg-white overflow-hidden ${
        compact ? 'p-4 sm:p-6' : 'p-6 sm:p-10'
      }`}
      style={{ border: '3px double #D4AF37' }}
    >
      {/* Geometric corner elements */}
      <span className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#111111]" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
      <span className="absolute top-0 left-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#E07B24]" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
      <span className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#111111]" style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 100%)' }} />
      <span className="absolute bottom-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37]" style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 100%)' }} />

      <div className="relative border border-[#E8E1D0] px-4 py-6 sm:px-8 sm:py-9 text-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-2">
          <span className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#111111] flex items-center justify-center">
            <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7 text-[#D4AF37]" />
          </span>
          <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-[#9A7B16] font-heading">
            DigiBasera Training Academy
          </span>
        </div>

        <h3
          className={`font-bold font-heading text-[#111111] tracking-tight mt-4 ${
            compact ? 'text-lg sm:text-2xl' : 'text-2xl sm:text-4xl'
          }`}
        >
          CERTIFICATE OF COMPLETION
        </h3>
        <div className="mx-auto mt-2 h-px w-24 sm:w-40 bg-[#D4AF37]" />

        <p className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#E07B24] mt-3 leading-relaxed">
          {CERTIFICATE_SAMPLE.programName}
        </p>

        {/* Student name */}
        <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#555555] mt-6">
          This certificate is proudly presented to
        </p>
        <p
          className={`font-serif italic text-[#111111] border-b border-dashed border-[#D4AF37] inline-block px-6 pb-1 mt-1 ${
            compact ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
          }`}
        >
          {CERTIFICATE_SAMPLE.studentName}
        </p>

        <p className="text-[10px] sm:text-xs text-[#555555] leading-relaxed max-w-xl mx-auto mt-4">
          {CERTIFICATE_SAMPLE.statement}
        </p>

        {/* Skills covered */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-4">
          {CERTIFICATE_SAMPLE.skills.map((s) => (
            <span
              key={s}
              className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#111111] bg-[#FAF9F5] border border-[#E8E1D0] px-2 py-0.5 rounded"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Subtle discipline icons */}
        <div className="flex items-center justify-center gap-4 text-[#D4AF37]/70 mt-5">
          <Globe className="w-3.5 h-3.5" />
          <Search className="w-3.5 h-3.5" />
          <MousePointerClick className="w-3.5 h-3.5" />
          <BarChart3 className="w-3.5 h-3.5" />
          <Sparkles className="w-3.5 h-3.5" />
        </div>

        {/* Meta + signatures */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-5 border-t border-[#E8E1D0] text-left">
          <div>
            <span className="block text-[8px] uppercase tracking-widest text-[#555555]">Certificate No.</span>
            <span className="block text-[10px] sm:text-xs font-mono font-bold text-[#111111] mt-0.5">
              {CERTIFICATE_SAMPLE.certificateNumber}
            </span>
          </div>
          <div>
            <span className="block text-[8px] uppercase tracking-widest text-[#555555]">Date of Completion</span>
            <span className="block text-[10px] sm:text-xs font-mono font-bold text-[#111111] mt-0.5">
              {CERTIFICATE_SAMPLE.completionDate}
            </span>
          </div>
          <div>
            <span className="block h-5 border-b border-[#111111]" />
            <span className="block text-[8px] sm:text-[9px] uppercase tracking-widest text-[#555555] mt-1">
              {CERTIFICATE_SAMPLE.trainerName}
            </span>
          </div>
          <div>
            <span className="block h-5 border-b border-[#111111]" />
            <span className="block text-[8px] sm:text-[9px] uppercase tracking-widest text-[#555555] mt-1">
              {CERTIFICATE_SAMPLE.directorName}
            </span>
          </div>
        </div>

        {/* Achievement seal */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 sm:bottom-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D4AF37] flex flex-col items-center justify-center text-[#111111] shadow-md border-2 border-white">
            <span className="text-[9px] sm:text-[10px] font-black font-heading leading-none">90</span>
            <span className="text-[6px] sm:text-[7px] font-bold uppercase tracking-wider leading-tight mt-0.5">
              Days
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
