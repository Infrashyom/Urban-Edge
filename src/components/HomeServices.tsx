import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Sparkles, Users, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredServices = [
  {
    number: "01",
    title: "Strategic Growth & Analytics",
    desc: "We don't guess—we engineer growth. By decoding demographic behavior and algorithmic triggers, our data models ensure every campaign drives measurable revenue and high-value followers.",
    icon: TrendingUp,
    badge: "High ROI",
    tags: ["Audience Intelligence", "Algorithmic Growth", "Conversion Funnels"],
    color: "from-sky-500 to-blue-600"
  },
  {
    number: "02",
    title: "Brand Curation & Aesthetics",
    desc: "Your feed is your premier storefront. We craft cohesive visual systems, high-fashion grid design, and distinct typography that immediately communicates luxury and authority.",
    icon: Sparkles,
    badge: "Visual Excellence",
    tags: ["Grid Architecture", "Editorial Creative", "Brand Guidelines"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    number: "03",
    title: "Influencer & Creator Partnerships",
    desc: "Cut through the noise with creators that actually move culture. From niche tastemakers to global voices, we orchestrate authentic ambassador campaigns that build real trust.",
    icon: Users,
    badge: "Vetted Talent",
    tags: ["Creator Sourcing", "Contracting & Briefs", "Performance Tracking"],
    color: "from-sky-600 to-cyan-500"
  },
  {
    number: "04",
    title: "Trend Forecasting & Viral Engineering",
    desc: "Capture attention before the market catches on. We predict cultural micro-trends and craft agile, viral-first short-form video strategies built to explode on Reels and TikTok.",
    icon: Flame,
    badge: "Viral Distribution",
    tags: ["Short-Form Video", "Sound & Audio Hooks", "Cultural Intelligence"],
    color: "from-indigo-500 to-sky-500"
  }
];

export default function HomeServices() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-sky-50/60 via-white to-sky-50/40 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-200/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
              Core Capabilities
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-slate-900 leading-tight">
              Services Designed for <span className="font-medium text-slate-900">Modern Attention</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-600 font-light mt-3">
              We combine behavioral psychology, cinematic production, and data systems to scale ambitious brands.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-slate-900 text-white hover:bg-sky-600 transition-colors text-xs sm:text-sm font-medium shadow-md shadow-slate-900/10 group"
            >
              <span>Explore All 8 Services</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* 4 Revamped Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 group-hover:scale-105 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                        <Icon size={22} />
                      </div>
                      <span className="font-display text-sm font-medium text-slate-400 group-hover:text-sky-600 transition-colors">
                        {service.number}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-slate-900 text-white font-medium text-sm shadow-md"
          >
            <span>View Full Service Catalog</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
