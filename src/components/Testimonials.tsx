import { motion } from 'motion/react';
import { Quote, Star, CheckCircle2, Pause } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "review-1",
    quote: "Urban Edge completely transformed our social presence. Our LinkedIn and Instagram engagement skyrocketed by 340% in just two months, and inbound enterprise demo bookings surged.",
    author: "Ananya Sharma",
    rating: 5
  },
  {
    id: "review-2",
    quote: "Their data-driven approach to influencer collaborations and performance media cut our customer acquisition cost by 42%. By far the most strategic social agency in India.",
    author: "Aarav Mehta",
    rating: 5
  },
  {
    id: "review-3",
    quote: "The visual storytelling and feed curation gave us the global editorial aesthetic we desperately needed. Our community retention and repeat order rates have reached all-time highs.",
    author: "Priya Patel",
    rating: 5
  },
  {
    id: "review-4",
    quote: "Their viral short-form video strategy on Reels generated over 1.5M organic views in our first quarter. The production finesse and trend speed of their team is unmatched.",
    author: "Rohan Kulkarni",
    rating: 5
  },
  {
    id: "review-5",
    quote: "Urban Edge treated our organic skincare brand with immense care. Every post and carousel authentically honors our botanical heritage while driving high-converting Shopify traffic.",
    author: "Meera Nambiar",
    rating: 5
  },
  {
    id: "review-6",
    quote: "From top-funnel positioning to active community replies, Urban Edge functions as an indispensable extension of our leadership. Their growth ROI has been phenomenal.",
    author: "Devendra Verma",
    rating: 5
  },
  {
    id: "review-7",
    quote: "We witnessed an immediate footfall surge across our metro outlets following Urban Edge's hyper-local creator activations. Their pulse on contemporary youth culture is extraordinary.",
    author: "Kavita Sundaram",
    rating: 5
  }
];

export default function Testimonials() {
  // Duplicate list to achieve a seamless loop
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section id="reviews-section" className="py-16 sm:py-24 bg-sky-50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
          >
            <CheckCircle2 size={14} className="text-sky-600" />
            <span>Client Testimonials & Impact</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 mb-4"
          >
            Trusted by founders & leaders <br className="hidden sm:inline" />
            <span className="font-medium text-sky-600">across India</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Discover how leading Indian enterprises, fast-growing D2C powerhouses, and high-growth scale-ups accelerate their digital presence with Urban Edge.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-sky-700 bg-sky-100/60 px-3 py-1 rounded-full border border-sky-200/60"
          >
            <Pause size={12} className="text-sky-600" />
            <span>Hover over any review card to pause and read</span>
          </motion.div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="relative w-full overflow-hidden group py-2">
        {/* Left & Right gradient masks for clean visual fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-sky-50 via-sky-50/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-sky-50 via-sky-50/80 to-transparent z-20" />

        {/* Scrolling Track */}
        <div className="flex animate-marquee gap-5 sm:gap-6 px-4">
          {marqueeItems.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className="w-[300px] sm:w-[380px] shrink-0 bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-sky-100 shadow-lg shadow-sky-900/5 flex flex-col justify-between hover:shadow-xl hover:border-sky-300 hover:bg-white transition-all duration-300 select-none group/card"
            >
              <div>
                {/* Header: 5 Stars on Left, Light Blue Quote Icon on Right */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star 
                        key={starIndex} 
                        size={16} 
                        className="fill-amber-400 text-amber-400" 
                      />
                    ))}
                  </div>

                  <Quote 
                    size={24} 
                    className="text-sky-300 fill-sky-200/40 shrink-0" 
                  />
                </div>

                {/* Review Text */}
                <div className="relative mb-6">
                  <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>

              {/* Author Details: First Letter Avatar + Name & Verified */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-800 border border-sky-200/80 flex items-center justify-center font-display font-semibold text-sm shrink-0 shadow-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="font-display font-medium text-slate-900 text-sm sm:text-base truncate">
                      {testimonial.author}
                    </p>
                    <span title="Verified Review" className="inline-flex items-center gap-1 shrink-0">
                      <CheckCircle2 size={14} className="text-sky-600 shrink-0" />
                      <span className="text-[11px] text-sky-600 font-medium">Verified</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
