import React from 'react';
import { 
  Code2, 
  Globe, 
  ShoppingBag, 
  Search, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Award,
  Smartphone
} from 'lucide-react';

export const TechMarquee: React.FC = () => {
  const techItems = [
    { name: 'React.js & Next.js', category: 'Frontend', icon: Code2 },
    { name: 'WordPress & WooCommerce', category: 'CMS & E-com', icon: Globe },
    { name: 'Shopify Plus', category: 'E-commerce', icon: ShoppingBag },
    { name: 'Google Ads Premier', category: 'PPC & Search', icon: Search },
    { name: 'Meta Verified Partner', category: 'Social Ads', icon: TrendingUp },
    { name: 'Node.js & Python', category: 'Backend & APIs', icon: Cpu },
    { name: 'iOS & Android (React Native)', category: 'Mobile Apps', icon: Smartphone },
    { name: 'AI & AEO Search Engine', category: 'Next-Gen SEO', icon: Sparkles },
    { name: 'Figma UI/UX Prototyping', category: 'Design System', icon: Layers },
    { name: 'Clutch Top B2B Agency', category: 'Verified 5.0★', icon: Award },
    { name: 'AWS & Cloudflare Speed', category: 'Infrastructure', icon: ShieldCheck },
  ];

  // Repeat for continuous infinite scroll
  const marqueeList = [...techItems, ...techItems, ...techItems];

  return (
    <div className="relative py-6 bg-[#111111] text-white border-y border-[#D4AF37]/40 overflow-hidden select-none">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-20 bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
      
      {/* Left and Right Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee-track flex items-center gap-6 sm:gap-8">
          {marqueeList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#1E1E1E] border border-[#333333] hover:border-[#D4AF37] transition-colors shrink-0 group cursor-default"
              >
                <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                    {item.name}
                  </div>
                  <div className="text-[9px] text-[#888888] uppercase tracking-wider font-semibold">
                    {item.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
