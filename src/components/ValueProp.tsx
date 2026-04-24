import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ValueProp() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="py-24 sm:py-32 md:py-48 px-6 md:px-12 bg-slate-950 text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <motion.div style={{ y: y1 }} className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-sky-900/20 rounded-full blur-[100px] pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-0 right-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-6 sm:mb-8">
              We don't just post. <br />
              <span className="font-medium text-sky-400">We build digital ecosystems.</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-slate-400 font-light leading-relaxed mb-6">
              In a world of infinite scroll, capturing attention is no longer enough. You must hold it, nurture it, and convert it into loyalty.
            </p>
            <p className="font-sans text-base sm:text-lg text-slate-400 font-light leading-relaxed">
              Our multidisciplinary team blends behavioral psychology, data science, and high-end aesthetics to engineer social presences that are impossible to ignore.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { number: "300%", label: "Average ROI" },
              { number: "50M+", label: "Impressions" },
              { number: "12", label: "Global Markets" },
              { number: "24/7", label: "Brand Monitoring" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 + 0.4, duration: 0.6 }}
                className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-2">{stat.number}</div>
                <div className="font-sans text-xs sm:text-sm text-sky-400 uppercase tracking-wider font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
