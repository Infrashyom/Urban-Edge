import { motion } from 'motion/react';
import { Calendar, Package, Trophy, CheckCircle2 } from 'lucide-react';

interface ProjectInsight {
  id: string;
  category: string;
  title: string;
  architecture: string;
  summary: string;
  features: string[];
  img: string;
}

const insights: ProjectInsight[] = [
  {
    id: "insight-1",
    category: "Healthcare & Clinical Tech",
    title: "Doctor Portfolios & Automated Clinical Booking Suite",
    architecture: "Web Application + Dedicated Admin Portal",
    summary: "Architected modern digital portfolio platforms for doctors and specialized medical clinics. Engineered a complete appointment booking workflow with real-time slot scheduling, calendar synchronization, and an isolated administrative panel enabling practitioners to manage patient visits, availability overrides, and clinic records.",
    features: [
      "Real-time slot booking engine",
      "Isolated multi-role admin dashboard",
      "Automated calendar & patient alerts",
      "Custom medical practitioner profiles"
    ],
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "insight-2",
    category: "Operations & Enterprise Tooling",
    title: "Order Management System (OMS) for High-Growth Startups",
    architecture: "Custom Internal Software Solution",
    summary: "Engineered a custom internal software solution for growing startups replacing disjointed manual spreadsheets. Delivered a centralized real-time dashboard unifying incoming orders, inventory allocation, multi-stage fulfillment tracking, and role-based permissions for internal operations teams.",
    features: [
      "End-to-end order lifecycle tracking",
      "Real-time inventory synchronization",
      "Role-based access & permissions",
      "Automated dispatch & invoice workflows"
    ],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "insight-3",
    category: "Sports Tech & Logistics",
    title: "Comprehensive Sports & Tournament League Management",
    architecture: "League Platform & Facility Booking Engine",
    summary: "Built a scalable sports management ecosystem for athletic leagues, academies, and tournament organizers. Automates bracket scheduling, team & athlete roster registrations, real-time match scoring updates, and integrated sports court/facility booking.",
    features: [
      "Dynamic tournament bracket scheduling",
      "Team rosters & player profiles",
      "Live scoreboard & match updates",
      "Court & sports facility booking system"
    ],
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function WorkPreview() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-sky-50/40 relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-100/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            <span>Software Architecture & Systems</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-900 mb-4"
          >
            Featured <span className="font-medium text-sky-600">Work & Insights</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto"
          >
            A high-level view of specialized web architectures, custom internal tooling, and operational management systems delivered for real-world operations.
          </motion.p>
        </div>

        {/* 3-Column Systems & Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {insights.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl sm:rounded-3xl border border-sky-100 shadow-xl shadow-sky-950/5 flex flex-col overflow-hidden hover:shadow-2xl hover:border-sky-300 transition-all duration-300 group"
            >
              {/* Image Preview with Category Pill */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Domain Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-sky-800 border border-white/40 shadow-sm inline-flex items-center gap-1.5">
                    {i === 0 && <Calendar size={13} className="text-sky-600" />}
                    {i === 1 && <Package size={13} className="text-sky-600" />}
                    {i === 2 && <Trophy size={13} className="text-sky-600" />}
                    {item.category}
                  </span>
                </div>

                {/* Architecture Subtitle on Image Bottom */}
                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <span className="text-xs text-sky-200/90 font-medium tracking-wide drop-shadow-sm">
                    {item.architecture}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight mb-3 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                {/* Delivered Capabilities / Feature Pills */}
                <div className="pt-5 border-t border-slate-100">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Delivered Capabilities
                  </div>
                  <ul className="space-y-2">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 size={15} className="text-sky-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
