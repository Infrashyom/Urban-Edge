import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Stagger variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sky-50 pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text */}
          <motion.div 
            style={{ y: yText }}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="col-span-1 lg:col-span-6 flex flex-col items-start text-left"
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

          {/* Right Column: Visual Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-6 relative mt-8 lg:mt-0"
          >
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square max-h-[70vh] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl shadow-sky-900/10 group">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-creative-content-creator-working-on-a-video-at-home-43632-large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-sky-900/10 mix-blend-overlay border border-white/20 rounded-[2rem] sm:rounded-[3rem] pointer-events-none" />
              
              {/* Floating detail badge over video */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-6 sm:bottom-10 left-6 right-6 sm:left-10 sm:right-auto bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/50 shadow-lg flex items-center gap-4 sm:gap-5"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 shrink-0">
                  <Play size={18} fill="currentColor" className="ml-1" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Brand Storytelling</div>
                  <div className="text-xs text-slate-500">Watch our latest campaigns</div>
                </div>
              </motion.div>
            </div>
            
            {/* Background decorative blob behind video */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-200/40 rounded-full blur-[80px] sm:blur-[100px] -z-10 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
