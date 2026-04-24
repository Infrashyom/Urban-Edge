import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const works = [
  { id: 1, title: "Aura Cosmetics", category: "Brand Identity", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Vanguard Tech", category: "Global Campaign", img: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Maison Luxe", category: "Content Production", img: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "Equinox Fitness", category: "Community Growth", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

export default function WorkPreview() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-900 mb-2 sm:mb-4">
              Featured <span className="font-medium">Work</span>
            </h2>
            <p className="font-sans text-base sm:text-xl text-slate-500 font-light">
              A selection of our most impactful campaigns.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden sm:block"
          >
            <Link
              to="/about"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-sky-50 text-sky-900 rounded-full font-medium hover:bg-sky-100 transition-colors inline-flex items-center gap-2"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {works.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group relative overflow-hidden rounded-2xl bg-slate-100 ${i === 1 || i === 2 ? 'md:aspect-square lg:aspect-[4/3]' : 'md:aspect-[4/3] lg:aspect-video'} aspect-square`}
            >
              <img 
                src={work.img} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 mix-blend-multiply opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 sm:p-10">
                <span className="text-sky-300 font-sans text-[10px] sm:text-sm font-medium tracking-wider uppercase mb-1 sm:mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {work.category}
                </span>
                <h3 className="text-white font-display text-2xl sm:text-3xl font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {work.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:hidden flex justify-center">
          <Link
            to="/about"
            className="px-6 py-3 bg-sky-50 text-sky-900 rounded-full font-medium hover:bg-sky-100 transition-colors inline-flex items-center gap-2 w-full justify-center"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
