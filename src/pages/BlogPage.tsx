import blogHeroBg from '../assets/heroes/blog-hero.jpg';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  BookOpen,
  Clock,
  ArrowRight,
  Search,
  CheckCircle2,
  Share2,
  Calendar,
  Layers,
  TrendingUp
} from 'lucide-react';
import { BLOG_POSTS } from '../data/companyData';
import { BlogPost, PageType } from '../types';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface BlogPageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = ['All', 'SEO & AI', 'Performance Ads', 'Web Development', 'E-commerce', 'Strategy & Growth'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 bg-[#FAF9F5] min-h-screen text-[#111111]" id="blog-page">
      {/* Hero Header with Zoom Background */}
      <section className="relative py-16 sm:py-20 text-center border-b border-[#E8E1D0] bg-white overflow-hidden mb-8">
        {/* Background Image with Ken Burns / Zoom Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <img
            src={blogHeroBg}
            alt="Digibasera Insights & Research Strategy"
            className="w-full h-full object-cover object-center animate-hero-zoom opacity-20 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-[#FAF9F5]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-85" />
        </div>

        {/* Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E8E1D0] shadow-sm text-xs font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[#9A7B16] font-bold uppercase tracking-wider text-[11px]">
              Digibasera Insights & Research
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-heading leading-tight text-[#111111]">
            Digital Growth Strategy,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#B89018] italic font-serif">
              SEO & AI Insights.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#555555] max-w-3xl mx-auto font-normal leading-relaxed">
            Tactical guides, algorithmic search teardowns, and media buying frameworks written by practitioners managing live enterprise campaigns.
          </p>

          {/* Search & Filter Bar */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search marketing articles, GEO strategies, paid ads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white/95 backdrop-blur-xs border border-[#E8E1D0] text-xs text-[#111111] focus:border-[#D4AF37] shadow-sm outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills & Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#111111] text-[#D4AF37] border border-[#D4AF37]'
                  : 'bg-white text-[#555555] border border-[#E8E1D0] hover:border-[#D4AF37]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPosts.map((post, postIdx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: postIdx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveArticle(post)}
              className="group bg-white rounded-2xl border border-[#E8E1D0] hover:border-[#D4AF37] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#111111]/85 text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-[#777777]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {post.publishedDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] font-heading group-hover:text-[#9A7B16] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-[#E8E1D0]/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    referrerPolicy="no-referrer"
                    className="w-7 h-7 rounded-full object-cover border border-[#E8E1D0]"
                  />
                  <div className="text-[11px]">
                    <span className="font-bold text-[#111111] block leading-none">{post.author.name}</span>
                    <span className="text-[10px] text-[#777777] leading-none">{post.author.role}</span>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#111111] group-hover:text-[#9A7B16] flex items-center gap-1">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#D4AF37]/50 max-h-[92vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF9F5] hover:bg-[#111111] hover:text-white text-[#555555] transition-colors"
              >
                ✕
              </button>

              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-[#111111] text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest border border-[#D4AF37]/40">
                    {activeArticle.category}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading leading-tight pt-2">
                    {activeArticle.title}
                  </h2>

                  <div className="flex items-center gap-3 text-xs text-[#666666] pt-1">
                    <span>Published: {activeArticle.publishedDate}</span>
                    <span>•</span>
                    <span>{activeArticle.readTime}</span>
                    <span>•</span>
                    <span>By {activeArticle.author.name} ({activeArticle.author.role})</span>
                  </div>
                </div>

                <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden">
                  <img
                    src={activeArticle.imageUrl}
                    alt={activeArticle.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Paragraphs */}
                <div className="space-y-4 text-sm text-[#444444] leading-relaxed">
                  {activeArticle.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Actionable Takeaways Callout Box */}
                <div className="p-6 rounded-xl bg-[#FAF9F5] border border-[#D4AF37]/40 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#9A7B16] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <span>Key Executive Takeaways</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[#333333]">
                    {activeArticle.takeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#9A7B16] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Article Footer CTAs */}
                <div className="pt-4 border-t border-[#E8E1D0] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#666666]">
                    Need our team to execute this strategy for your business?
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        const title = activeArticle.title;
                        setActiveArticle(null);
                        onOpenConsultation(`Strategy Consultation: ${title}`);
                      }}
                      className="px-5 py-2.5 rounded-md bg-[#111111] hover:bg-[#222222] text-white border border-[#D4AF37] font-bold text-xs uppercase tracking-wider"
                    >
                      Request Strategy Audit
                    </button>
                    <a
                      href={getWhatsAppUrl(`Hi Digibasera, I read your article "${activeArticle.title}" and would like to consult your team regarding execution.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-md bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors"
                      title="Discuss on WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white fill-white" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
