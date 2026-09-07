import trainingHeroBg from '../assets/heroes/training-hero.jpg';
import React, { useState } from 'react';
import {
  TRAINING_COURSES,
  TRAINING_PILLARS,
  STUDENT_JOURNEY_STEPS,
  TRAINING_CONFIG,
} from '../data/trainingData';
import { TrainingCourse } from '../types';
import {
  GraduationCap,
  Award,
  Briefcase,
  Laptop,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Clock,
  BookOpen,
  FileCheck,
  ShieldCheck
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getTrainingWhatsAppUrl } from '../utils/whatsapp';

interface TrainingPageProps {
  onOpenEnquiryModal: (courseName?: string) => void;
  onSwitchToAgency: () => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({
  onOpenEnquiryModal,
  onSwitchToAgency,
}) => {
  const [selectedCourse] = useState<TrainingCourse>(TRAINING_COURSES[0]);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const trainingTopics = [
    { name: 'Digital Marketing Fundamentals', tag: 'Core Base' },
    { name: 'Search Engine Optimization (SEO)', tag: 'Organic Growth' },
    { name: 'Social Media Marketing (SMM)', tag: 'Brand & Viral' },
    { name: 'Google Ads & Search PPC', tag: 'High-Intent Media' },
    { name: 'Meta Ads (Facebook & Instagram)', tag: 'Performance Media' },
    { name: 'Content Marketing & Copywriting', tag: 'Storytelling' },
    { name: 'Email Marketing & Automations', tag: 'Retention Flows' },
    { name: 'Analytics & Google Tag Manager', tag: 'GA4 Data' },
    { name: 'Website Basics & Landing Pages', tag: 'Tech UX' },
    { name: 'E-commerce & Marketplace Marketing', tag: 'Shopify/Amazon' },
    { name: 'High-Converting Lead Generation', tag: 'B2B & B2C' },
    { name: 'Branding & Visual Identity', tag: 'Design Systems' },
    { name: 'AI Tools for Digital Marketing', tag: 'Generative AI' },
  ];

  const trainingFaqs = [
    {
      q: 'What is the association between Digibasera and Zinmatt?',
      a: 'Digibasera operates as an Official Business Associate with Zinmatt. Through this collaboration, learners receive structured, industry-aligned training curriculum, practical assignments, and verifiable certifications developed to meet modern agency and enterprise demands.',
    },
    {
      q: 'Who can enroll in these Digital Marketing courses?',
      a: 'The programs are crafted for college students, fresh graduates seeking first jobs, working professionals wanting to pivot to tech/marketing, freelancers, and business owners looking to manage their own digital presence effectively.',
    },
    {
      q: 'What certification will I receive upon course completion?',
      a: 'Upon successful completion of coursework and practical evaluation assignments, students receive an official Certificate of Completion. The course follows ISO-certified training frameworks and government-approved skill alignment guidelines (exact verification details are provided during counseling).',
    },
    {
      q: 'How does the Job Placement Assistance process work?',
      a: 'Eligible students receive comprehensive career support including 1-on-1 resume optimization, LinkedIn profile review, mock technical and HR interviews, live client project portfolio curation, and direct hiring partner referrals. (We provide dedicated placement assistance without making false 100% employment guarantees).',
    },
    {
      q: 'Are the training sessions live or pre-recorded?',
      a: 'The program includes interactive live mentor-led sessions with practical agency assignment reviews, screen-sharing simulations, and dedicated doubt-clearing sessions.',
    },
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-[#FFFFFF] text-[#111111]" id="training-page">
      {/* 1. TRAINING HERO SECTION */}
      <section className="relative py-14 lg:py-24 overflow-hidden bg-[#FAF9F5] border-b border-[#E8E1D0]">
        {/* Background Image with Ken Burns / Zoom Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <img
            src={trainingHeroBg}
            alt="Digital Marketing Academy & Certification Training"
            className="w-full h-full object-cover object-center animate-hero-zoom opacity-20 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-[#FAF9F5]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-85" />
        </div>

        {/* Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest font-heading shadow-xs backdrop-blur-xs">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>{TRAINING_CONFIG.associationBadge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#111111] font-heading tracking-tight leading-[1.15]">
                Learn Digital Marketing.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#B89018] italic font-serif">
                  Get Certified.
                </span>{' '}
                Build Your Career.
              </h1>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl">
                {TRAINING_CONFIG.heroSubtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenEnquiryModal('General Training Inquiry')}
                  className="px-6 py-3.5 rounded-md bg-[#111111] hover:bg-[#222222] text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-2"
                >
                  <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
                  <span>Enquire About Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getTrainingWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-md bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Talk on WhatsApp</span>
                </a>

                <button
                  onClick={onSwitchToAgency}
                  className="px-4 py-3.5 rounded-md bg-[#F8F8F6] hover:bg-white text-[#555555] hover:text-[#111111] border border-[#E8E1D0] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Switch to Agency Services</span>
                </button>
              </div>

              {/* Quick Highlights */}
              <div className="pt-4 border-t border-[#E8E1D0] flex flex-wrap items-center gap-4 text-xs font-semibold text-[#111111]">
                <span className="flex items-center gap-1.5 text-[#111111]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  Live Practical Projects
                </span>
                <span className="text-[#E8E1D0]">•</span>
                <span className="flex items-center gap-1.5 text-[#111111]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  ISO-Aligned Framework
                </span>
                <span className="text-[#E8E1D0]">•</span>
                <span className="flex items-center gap-1.5 text-[#111111]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  Job Placement Assistance
                </span>
              </div>
            </div>

            {/* Right Academy Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-xl bg-[#F8F8F6] border border-[#E8E1D0] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="relative h-48 rounded-lg overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                    alt="Digital Marketing Classroom & Online Career Mentorship"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#111111] bg-[#D4AF37] px-2 py-0.5 rounded font-heading">
                      Live Cohort Learning
                    </span>
                    <h4 className="text-sm font-bold text-white font-heading mt-1">
                      Practical Agency-Style Training
                    </h4>
                  </div>
                </div>

                {/* Zinmatt Association Badge Box */}
                <div className="p-4 rounded-lg bg-white border border-[#D4AF37] flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#9A7B16] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#111111] font-heading uppercase tracking-wider">
                      Zinmatt Business Association
                    </h5>
                    <p className="text-[11px] text-[#555555] mt-0.5 leading-snug">
                      Structured curriculum modeled on real agency media budgets, SEO algorithms, and generative AI automation.
                    </p>
                  </div>
                </div>

                {/* Career Pillars Quick Grid */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-white border border-[#E8E1D0]">
                    <span className="text-lg font-bold text-[#111111] font-heading">100%</span>
                    <span className="text-[10px] text-[#555555] block mt-0.5 font-medium">Practical Assignments</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-[#E8E1D0]">
                    <span className="text-lg font-bold text-[#D4AF37] font-heading">1-on-1</span>
                    <span className="text-[10px] text-[#555555] block mt-0.5 font-medium">Career Mentorship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY LEARN DIGITAL MARKETING (Pillars) */}
      <section className="py-16 bg-[#F8F8F6] border-y border-[#E8E1D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading">
              Why Learn Digital Marketing With Us?
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-2">
              We bridge the gap between academic theory and real-world commercial marketing demands.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAINING_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all group shadow-sm"
              >
                <span className="text-xs font-mono font-bold text-[#9A7B16] bg-[#F8F8F6] px-2.5 py-0.5 rounded border border-[#E8E1D0]">
                  {pillar.number}
                </span>
                <h4 className="text-base font-bold text-[#111111] font-heading mt-3 mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COURSES SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="training-courses-section">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-2 font-heading">
            <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Structured Career Tracks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] font-heading">
            Choose Your Learning Path
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] mt-2">
            Designed for varied career goals — from complete 360° mastery to high-demand performance ad specialization.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {TRAINING_COURSES.map((course) => {
            return (
              <div
                key={course.id}
                className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  course.popular
                    ? 'bg-white border-2 border-[#D4AF37] shadow-xl'
                    : 'bg-white border border-[#E8E1D0] hover:border-[#D4AF37] shadow-sm'
                }`}
              >
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#111111] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded shadow-md font-heading">
                    Most Popular Career Track
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16] bg-[#F8F8F6] px-2 py-0.5 rounded border border-[#E8E1D0]">
                      {course.badge}
                    </span>
                    <span className="text-xs text-[#555555] font-mono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] font-heading mt-1 mb-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-[#555555] leading-relaxed mb-6">
                    {course.shortDesc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#111111] font-heading">
                      Curriculum Modules:
                    </h5>
                    {course.curriculumHighlights.slice(0, 5).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#111111]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                    {course.curriculumHighlights.length > 5 && (
                      <span className="text-[11px] text-[#9A7B16] font-semibold block pt-1">
                        +{course.curriculumHighlights.length - 5} additional modules included
                      </span>
                    )}
                  </div>

                  {/* Tools */}
                  <div className="space-y-2 mb-6">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#111111] font-heading">
                      Tools & Platforms Mastered:
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {course.toolsCovered.map((tool, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] text-[#111111] bg-[#F8F8F6] px-2 py-0.5 rounded border border-[#E8E1D0]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-[#E8E1D0] space-y-2.5">
                  <button
                    onClick={() => onOpenEnquiryModal(course.title)}
                    className="w-full py-3 rounded-md bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Enquire Now for Next Batch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getTrainingWhatsAppUrl(course.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-md bg-[#F8F8F6] hover:bg-white text-[#111111] border border-[#E8E1D0] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp Course Counseling</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WHAT YOU WILL LEARN (13 Topics Grid) */}
      <section className="py-16 bg-[#F8F8F6] border-y border-[#E8E1D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading">
              What You Will Learn Across the Program
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-2">
              A comprehensive industry-relevant syllabus covering organic, paid, creative, technical, and modern AI toolsets.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {trainingTopics.map((topic, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-colors flex items-center gap-3 shadow-sm"
              >
                <div className="w-8 h-8 rounded-md bg-[#F8F8F6] text-[#9A7B16] flex items-center justify-center shrink-0 border border-[#E8E1D0]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111111]">{topic.name}</h4>
                  <span className="text-[10px] text-[#555555] font-mono">{topic.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATION SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="certification-section">
        <div className="rounded-xl bg-[#111111] border border-[#D4AF37] p-8 sm:p-12 shadow-xl text-white">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4AF37] text-xs font-bold uppercase tracking-widest font-heading border border-white/10">
                <Award className="w-3.5 h-3.5" />
                <span>Certification After Course Completion</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
                Verifiable Certificate to Boost Your Career Credentials
              </h2>

              <p className="text-[#E8E1D0] text-sm leading-relaxed">
                Upon successful completion of all coursework, practical assignments, and final capstone evaluation, students receive official certification in association with Zinmatt.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/5 border border-white/10">
                  <FileCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
                      Official Certificate of Completion (Zinmatt Associate)
                    </h5>
                    <p className="text-[11px] text-[#E8E1D0]/80">
                      Demonstrates hands-on competence across real-world digital marketing disciplines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/5 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
                      ISO-Certified Curriculum Alignment & Skill Guidelines
                    </h5>
                    <p className="text-[11px] text-[#E8E1D0]/80">
                      Standardized training module design following recognized professional quality benchmarks.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-[#E8E1D0]/60 italic">
                *Note: Exact certification details, assessment criteria, and accreditation documents can be verified with our academic counseling team during enrollment.
              </p>
            </div>

            {/* Certificate Mockup Visual */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-xl bg-white border-2 border-[#D4AF37] shadow-2xl relative text-[#111111]">
                <div className="border border-[#E8E1D0] rounded-lg p-5 text-center space-y-3 bg-[#F8F8F6]">
                  <div className="flex justify-between items-center border-b border-[#E8E1D0] pb-2">
                    <span className="text-[10px] font-bold text-[#9A7B16] font-heading">DIGIBASERA x ZINMATT</span>
                    <Award className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#555555] font-heading">
                    Certificate of Excellence
                  </div>
                  <div className="text-lg font-bold text-[#111111] font-heading">
                    Advanced Digital Marketing & AI
                  </div>
                  <p className="text-[11px] text-[#555555]">
                    Awarded to candidate upon mastering SEO, Paid Performance, SMM & Tech Modules
                  </p>
                  <div className="flex justify-between items-center pt-3 border-t border-[#E8E1D0] text-[10px] text-[#555555]">
                    <span>Verified Credential</span>
                    <span>ISO 9001:2015 Aligned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. JOB PLACEMENT ASSISTANCE */}
      <section className="py-16 bg-[#F8F8F6] border-y border-[#E8E1D0]" id="placement-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-2 font-heading">
              <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Career Acceleration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] font-heading">
              Learn Skills. Get Career Support.
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-2">
              We empower learners with the exact practical tools and coaching needed to land agency, in-house, or freelancing opportunities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Job Placement Assistance',
                desc: 'Connecting qualified students with our hiring partner network, digital agencies, and corporate marketing teams.',
                icon: Briefcase,
              },
              {
                title: 'Resume & LinkedIn Optimization',
                desc: 'Tailoring your profile with high-impact keywords, live project links, and quantifiable achievement metrics.',
                icon: FileCheck,
              },
              {
                title: 'Mock Interview Preparation',
                desc: 'Practicing tough agency technical questions, campaign budget case questions, and live pitch scenarios.',
                icon: Users,
              },
              {
                title: 'Live Agency Client Projects',
                desc: 'Build a tangible portfolio of real campaigns rather than just theoretical dummy assignments.',
                icon: Laptop,
              },
              {
                title: 'Career Guidance & Mentorship',
                desc: 'Ongoing 1-on-1 counseling on freelance pricing, high-ticket niche selection, and career growth trajectories.',
                icon: Award,
              },
              {
                title: 'Industry-Oriented Learning',
                desc: 'Curriculum constantly updated to reflect algorithm changes, social media trends, and new AI tools.',
                icon: Sparkles,
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-md bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-base font-bold text-[#111111] font-heading mb-2">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. STUDENT JOURNEY (5 Steps) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading">
            Your 5-Step Path to a Digital Career
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] mt-2">
            A clear roadmap from first counseling session to verified certification and career placement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STUDENT_JOURNEY_STEPS.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#F8F8F6] border border-[#E8E1D0] flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="text-2xl font-bold font-mono text-[#D4AF37] block mb-2">
                  {s.step}
                </span>
                <h4 className="text-sm font-bold text-[#111111] font-heading mb-1.5">
                  {s.title}
                </h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TRAINING FAQS */}
      <section className="py-16 bg-[#F8F8F6] border-y border-[#E8E1D0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading">
              Training Program FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {trainingFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-lg bg-white border border-[#E8E1D0] overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-[#111111] hover:text-[#D4AF37]"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#D4AF37] font-mono text-base">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-xs text-[#555555] leading-relaxed border-t border-[#E8E1D0]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ENQUIRY CALL TO ACTION */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#111111] border border-[#D4AF37] p-8 sm:p-12 text-center space-y-6 text-white shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#D4AF37] px-3 py-1 rounded font-heading">
            Limited Seats Per Batch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
            Ready to Start Your Digital Marketing Career?
          </h2>
          <p className="text-xs sm:text-sm text-[#E8E1D0] max-w-xl mx-auto leading-relaxed">
            Get personalized course counseling, download the complete syllabus breakdown, and secure early batch enrollment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenEnquiryModal('General Training Enrollment')}
              className="px-6 py-3.5 rounded-md bg-[#D4AF37] text-[#111111] hover:bg-[#C9A227] font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              Join Training Program
            </button>

            <a
              href={getTrainingWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-md bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Talk to Counselor on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
