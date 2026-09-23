import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Film, 
  PenTool, 
  Sparkles, 
  Share2, 
  Compass, 
  Target, 
  Quote, 
  ArrowRight,
  Layers,
  HeartHandshake
} from 'lucide-react';

export default function About() {
  const founderCapabilities = [
    {
      icon: Film,
      title: "Storytelling & Direction",
      desc: "Turning ideas, raw perspectives, and real-world journeys into deeply engaging visual narratives that captivate audiences."
    },
    {
      icon: PenTool,
      title: "Scriptwriting",
      desc: "Crafting narratives and scripts specifically structured to arrest attention, inspire curiosity, and connect on an emotional level."
    },
    {
      icon: Sparkles,
      title: "Branding & Identity",
      desc: "Building distinct, memorable visual identities, genuine brand voices, and positioning that make visionary ideas truly stand out."
    },
    {
      icon: Share2,
      title: "Social Media Strategy",
      desc: "Architecting and managing distribution systems that turn passive viewers into active, engaged, and loyal communities."
    },
    {
      icon: Compass,
      title: "Exploration & Discovery",
      desc: "Uncovering authentic human stories, novel environments, and unique perspectives to produce content with enduring cultural value."
    }
  ];

  const agencyPillars = [
    {
      icon: Layers,
      title: "Purposeful Architecture",
      text: "Every piece of content, campaign, and visual asset is engineered with clear intent and high aesthetic discipline."
    },
    {
      icon: HeartHandshake,
      title: "Human Connection",
      text: "We focus on real emotional resonance over fleeting algorithms, building digital presence that people genuinely remember."
    }
  ];

  return (
    <div className="bg-sky-50 min-h-screen relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-200/35 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-[65%] left-1/4 -translate-x-1/2 w-[650px] h-[350px] bg-sky-100/50 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* 1. Basic Introduction of Urban Edge */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 border-b border-sky-100/90 relative">
        <div className="container mx-auto max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Visual Studio Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="col-span-1 lg:col-span-6 relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-sky-950/10 bg-slate-900 border border-white/80 group"
            >
              <img
                src="/about-image.jpg"
                alt="Urban Edge Creative Studio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white pointer-events-none">
                <span className="text-xs sm:text-sm font-medium tracking-wide bg-slate-900/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                  Urban Edge Creative Studio
                </span>
                <span className="text-xs text-sky-200 font-light hidden sm:inline">
                  Story • Strategy • Presence
                </span>
              </div>
            </motion.div>

            {/* Urban Edge Intro Content */}
            <div className="col-span-1 lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                About Urban Edge
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl sm:text-5xl font-light tracking-tight mb-5 text-slate-900 leading-tight"
              >
                Refining the <br />
                <span className="font-medium text-sky-600">social landscape.</span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4 font-sans text-slate-600 font-light text-base leading-relaxed"
              >
                <p>
                  Urban Edge is a creative agency built on a simple conviction: true influence isn't about chasing transient trends or amplifying noise. It is about crafting stories that resonate deeply, honor brand heritage, and command authentic attention.
                </p>
                <p>
                  We combine editorial aesthetic standards with strategic distribution frameworks. From founders and creators to scaling brands, we turn core philosophies into enduring digital presence and memorable experiences.
                </p>
              </motion.div>

              {/* Qualitative Pillar Cards (Replacing raw numbers for a more refined agency presentation) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-sky-200/80"
              >
                {agencyPillars.map((pillar, i) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={i} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-sky-100/90 shadow-sm">
                      <div className="flex items-center gap-2 text-sky-700 mb-1.5">
                        <Icon size={16} />
                        <h2 className="font-display text-sm font-semibold text-slate-900">{pillar.title}</h2>
                      </div>
                      <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                        {pillar.text}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Revamped "Meet the Founder" Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative">
        <div className="container mx-auto max-w-6xl w-full">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              Creative Leadership
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-900 mb-4"
            >
              Meet the <span className="font-medium text-sky-600">Founder</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-slate-600 font-light text-base sm:text-lg max-w-2xl mx-auto"
            >
              The storytelling philosophy, creative direction, and vision driving Urban Edge forward.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Founder Photo & Core Philosophy Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="col-span-1 lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28"
            >
              {/* Photo Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] bg-slate-900 shadow-2xl shadow-sky-950/10 border border-white/90 group">
                <img
                  src="/founder.jpg"
                  alt="Shubham Pareek - Founder of Urban Edge"
                  className="w-full h-full object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.dataset.triedPng) {
                      target.dataset.triedPng = "true";
                      target.src = "/founder.png";
                    } else {
                      target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000";
                    }
                  }}
                />
                
                {/* Cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-sky-200 border border-white/25 mb-2.5 shadow-sm">
                    Founder & Creative Strategist
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-white">
                    Shubham Pareek
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light mt-1">
                    Storyteller • Explorer • Creative Strategist
                  </p>
                </div>
              </div>

              {/* Quote Card */}
              <div className="bg-white/90 backdrop-blur-md p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-sky-100 shadow-sm relative overflow-hidden">
                <Quote size={28} className="text-sky-400 mb-2.5" />
                <p className="font-sans text-slate-800 text-sm sm:text-base font-normal leading-relaxed italic">
                  "I believe every person, place, and journey has a story worth remembering. Great content isn't just about views — it's about creating an enduring connection that stays with people."
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                    — Shubham Pareek
                  </span>
                  <span className="text-[11px] text-slate-600">Founder, Urban Edge</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Narrative, Aim Spotlight, Skills Grid & CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="col-span-1 lg:col-span-7 flex flex-col gap-6 sm:gap-8"
            >
              {/* Biographical Narrative */}
              <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-sky-100 shadow-sm">
                <h3 className="font-display text-2xl sm:text-3xl font-light text-slate-900 mb-4">
                  The Storyteller Behind <span className="font-medium text-sky-600">Urban Edge</span>
                </h3>
                
                <div className="space-y-4 font-sans text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                  <p>
                    I’m <strong className="font-medium text-slate-900">Shubham Pareek</strong>, a storyteller, explorer, and creative professional dedicated to using the transformative power of social media to build lasting impact.
                  </p>
                  <p>
                    From storytelling and scriptwriting to branding, directing, and social media management, I bring together creative instinct and analytical strategy to turn raw ideas into stories that people genuinely feel and remember.
                  </p>
                  <p>
                    As a storyteller and explorer, I’m constantly discovering new experiences, emotions, and fresh perspectives across culture and life—translating them into unforgettable narratives for the brands and leaders we partner with.
                  </p>
                </div>
              </div>

              {/* The Aim Spotlight Banner */}
              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-sky-600 via-sky-700 to-sky-900 text-white shadow-xl shadow-sky-900/15 relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center gap-2 text-sky-200 text-xs font-semibold uppercase tracking-wider mb-3">
                  <Target size={16} className="text-sky-300" />
                  <span>My Aim & Mission</span>
                </div>
                
                <h4 className="font-display text-xl sm:text-2xl font-normal leading-snug mb-3 text-white">
                  "To create an impact on people's lives through social media and make their journeys, experiences, and memories unforgettable."
                </h4>
                
                <p className="text-xs sm:text-sm text-sky-100 font-light leading-relaxed">
                  Whether it’s shaping a brand identity, directing a visual story, writing an engaging script, or helping an idea reach the right audience, great content isn't just about views — it's about crafting an emotional bond that endures.
                </p>
              </div>

              {/* What I Do / Core Capabilities Grid */}
              <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-sky-100 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                  <h4 className="font-display text-xl sm:text-2xl font-light text-slate-900">
                    What <span className="font-medium text-sky-600">I Do</span>
                  </h4>
                  <span className="text-xs text-slate-600 font-sans">
                    Creative disciplines & core execution
                  </span>
                </div>

                <div className="space-y-3.5">
                  {founderCapabilities.map((cap, idx) => {
                    const Icon = cap.icon;
                    return (
                      <div 
                        key={idx} 
                        className="p-4 sm:p-4.5 rounded-xl border border-sky-100/80 bg-sky-50/40 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-300 flex items-start gap-3.5 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h5 className="font-display text-sm sm:text-base font-semibold text-slate-900 mb-1">
                            {cap.title}
                          </h5>
                          <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                            {cap.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Manifesto & Action Link */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="font-display text-sm sm:text-base text-slate-800 font-medium text-center sm:text-left">
                    "I don't just create content. I create stories, experiences, and memories that people carry with them."
                  </p>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-sky-600 text-white text-xs sm:text-sm font-medium hover:bg-sky-700 transition-colors shadow-sm shrink-0"
                  >
                    <span>Connect with Us</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
