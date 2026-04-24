import { motion } from 'motion/react';
import { BarChart3, Globe, PenTool, Users } from 'lucide-react';

const services = [
  {
    title: "Strategic Growth",
    desc: "Data-informed audience expansion targeting high-value demographics.",
    icon: <BarChart3 size={24} className="text-sky-600" />
  },
  {
    title: "Brand Curation",
    desc: "Meticulously crafted visual identities and cohesive grid planning.",
    icon: <PenTool size={24} className="text-sky-600" />
  },
  {
    title: "Community Management",
    desc: "Fostering meaningful relationships with your most engaged followers.",
    icon: <Users size={24} className="text-sky-600" />
  },
  {
    title: "Global Campaigns",
    desc: "Multi-platform social campaigns designed for international reach.",
    icon: <Globe size={24} className="text-sky-600" />
  }
];

export default function Services() {
  return (
    <section className="py-32 px-6 md:px-12 bg-sky-50 min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-6 text-slate-900">
            Our <span className="font-medium">Expertise</span>
          </h2>
          <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Comprehensive social media solutions tailored for premium brands seeking sustainable, high-quality growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-panel p-10 rounded-2xl hover:bg-white transition-colors duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center mb-6 border border-sky-200">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl font-medium mb-3 text-slate-900">
                {service.title}
              </h3>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
