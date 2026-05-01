import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-1 lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden shadow-xl shadow-sky-900/5 bg-slate-100"
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0"
              title="About Us Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          <div className="col-span-1 lg:col-span-5">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-light tracking-tight mb-8 text-slate-900"
            >
              Refining the <br />
              <span className="font-medium text-gradient">social landscape.</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 font-sans text-slate-600 font-light leading-relaxed"
            >
              <p>
                Urban Edge is a boutique social media agency dedicated to elevating premium brands. We believe that true influence isn't just about volume—it's about resonance, aesthetics, and strategic alignment.
              </p>
              <p>
                Our approach combines editorial-quality content creation with rigorous analytical insights. We don't chase fleeting trends; we build enduring digital legacies that captivate and convert.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-sky-100"
            >
              <div>
                <div className="font-display text-4xl font-medium text-slate-900 mb-2">250+</div>
                <div className="font-sans text-sm text-slate-500 uppercase tracking-wider">Brands Elevated</div>
              </div>
              <div>
                <div className="font-display text-4xl font-medium text-slate-900 mb-2">98%</div>
                <div className="font-sans text-sm text-slate-500 uppercase tracking-wider">Client Retention</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
