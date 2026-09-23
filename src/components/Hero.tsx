import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'motion/react';
import { Link } from 'react-router-dom';
import { Instagram, ExternalLink } from 'lucide-react';

const REELS = [
  {
    id: 'DdLcG2kSV2v',
    url: 'https://www.instagram.com/reel/DdLcG2kSV2v/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
    title: 'Featured Reel 1',
    tag: 'Brand Story'
  },
  {
    id: 'DbIgLymPzRS',
    url: 'https://www.instagram.com/reel/DbIgLymPzRS/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
    title: 'Featured Reel 2',
    tag: 'Visual Campaign'
  },
  {
    id: 'DbF1PdFP3HX',
    url: 'https://www.instagram.com/reel/DbF1PdFP3HX/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
    title: 'Featured Reel 3',
    tag: 'Creative Direction'
  }
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Stagger variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' as any } }
  };

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-sky-50 pt-28 sm:pt-32 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text */}
          <motion.div 
            style={{ y: yText }}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="col-span-1 lg:col-span-5 flex flex-col items-start text-left"
          >
            <motion.span 
              variants={itemVariants}
              className="px-4 py-2 rounded-full border border-sky-200/50 bg-white/50 backdrop-blur-md text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-sky-900 mb-6 sm:mb-8 inline-block shadow-sm"
            >
              Premium Social Media Agency
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] font-light tracking-tight leading-[1.05] text-slate-900"
            >
              Shape the <br />
              <span className="font-medium text-gradient italic pr-2 sm:pr-4">conversation</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg md:text-xl max-w-lg mt-6 text-slate-700 font-light leading-relaxed"
            >
              We design sophisticated social strategies that build genuine communities and lasting brand equity. Cut through the noise with clarity.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
            >
              <Link to="/contact" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-slate-900 text-white rounded-full font-medium hover:bg-sky-600 transition-colors duration-500 shadow-xl shadow-slate-900/20 hover:shadow-sky-600/30 text-center">
                Partner With Us
              </Link>
              <Link to="/services" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white/60 backdrop-blur-md border border-sky-100 text-slate-900 rounded-full font-medium hover:bg-white transition-colors duration-500 shadow-sm text-center">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: 3 Instagram Reels */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' as any }}
            className="col-span-1 lg:col-span-7 relative mt-6 lg:mt-0"
          >
            {/* Header / Profile link */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">Featured Reels</span>
              </div>
              <a
                href="https://www.instagram.com/_urban_edge_official"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-sky-600 transition-colors bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-sky-100 shadow-sm"
              >
                <Instagram size={13} className="text-rose-500" />
                <span>@_urban_edge_official</span>
                <ExternalLink size={11} className="text-slate-400" />
              </a>
            </div>

            {/* 3 Reels Grid / Horizontal scroll on mobile */}
            <div className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-3 xl:gap-4 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
              {REELS.map((reel, index) => (
                <motion.div
                  key={reel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.1, duration: 0.6 }}
                  className="w-[78vw] max-w-[280px] sm:w-auto shrink-0 snap-center rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-sky-900/10 bg-white border border-sky-100/80 flex flex-col group relative"
                >
                  <div className="relative w-full h-[470px] sm:h-[450px] lg:h-[460px] xl:h-[490px] bg-slate-50 overflow-hidden">
                    <iframe
                      src={`https://www.instagram.com/reel/${reel.id}/embed`}
                      className="w-full h-full border-0"
                      scrolling="no"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title={reel.title}
                    />
                  </div>

                  {/* Direct link footer */}
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900/90 text-white text-[11px] font-medium hover:bg-sky-600 transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <Instagram size={12} className="text-rose-400" />
                      <span>{reel.tag}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-slate-300">
                      Open Reel <ExternalLink size={10} />
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Mobile swipe helper */}
            <div className="sm:hidden text-center mt-2 text-[11px] text-slate-400">
              ← Swipe to view all 3 reels →
            </div>
            
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-sky-200/30 rounded-full blur-[80px] sm:blur-[100px] -z-10 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
