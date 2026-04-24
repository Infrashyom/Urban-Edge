import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square md:aspect-[4/3] lg:aspect-square max-h-[70vh] rounded-2xl overflow-hidden shadow-xl shadow-sky-900/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Our modern office" 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-sky-500/10 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
          </motion.div>

          <div>
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
