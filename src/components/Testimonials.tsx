import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Urban Edge completely transformed our social presence. Our engagement skyrocketed by 300% in just two months.",
    author: "Sarah Jenkins",
    role: "CMO, TechNova",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Their data-driven approach to B2B lead generation filled our sales pipeline faster than any agency we've worked with.",
    author: "Michael Chang",
    role: "VP of Sales, ElevateHQ",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The visual storytelling and brand curation by Urban Edge gave us the premium aesthetic we desperately needed.",
    author: "Emma Rawlins",
    role: "Founder, LuxeLife",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-sky-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 mb-6"
          >
            Client <span className="font-medium">Love</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light"
          >
            Don't just take our word for it. Here is what leading brands have to say about partnering with Urban Edge.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-lg shadow-sky-900/5 relative group"
            >
              <div className="absolute top-8 right-8 text-sky-200 group-hover:text-sky-300 transition-colors">
                <Quote size={48} />
              </div>
              
              <p className="font-sans text-slate-700 text-lg sm:text-xl leading-relaxed mb-8 relative z-10 font-light">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-display font-medium text-slate-900">{testimonial.author}</p>
                  <p className="font-sans text-sm text-slate-500 font-light">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
