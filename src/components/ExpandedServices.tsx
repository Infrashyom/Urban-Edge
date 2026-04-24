import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Strategic Growth & Analytics",
    desc: "We don't guess. We analyze. By leveraging deep demographic data and behavioral patterns, we engineer growth strategies that target high-value audiences. Our proprietary analytics framework ensures every campaign delivers measurable ROI.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Data Science", "Audience Targeting", "Conversion Tracking"]
  },
  {
    title: "Brand Curation & Aesthetics",
    desc: "Your feed is your digital storefront. We meticulously craft visual identities, ensuring cohesive grid planning, stunning photography, and elegant typography that instantly communicates premium quality to your audience.",
    mediaType: "video",
    mediaSrc: "https://assets.mixkit.co/videos/preview/mixkit-woman-taking-photos-of-her-food-with-her-smartphone-40332-large.mp4",
    tags: ["Art Direction", "Content Production", "Visual Identity"]
  },
  {
    title: "Community Cultivation",
    desc: "Followers are passive; communities are active. We foster meaningful relationships with your most engaged advocates through proactive community management, exclusive activations, and authentic two-way dialogue.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Engagement Strategy", "Crisis Management", "Advocacy Programs"]
  },
  {
    title: "Influencer & Creator Partnerships",
    desc: "We align your brand with the voices that matter. From micro-influencers to global ambassadors, we manage end-to-end creator campaigns that drive authentic engagement.",
    mediaType: "video",
    mediaSrc: "https://assets.mixkit.co/videos/preview/mixkit-girl-taking-a-selfie-on-the-street-34538-large.mp4",
    tags: ["Talent Sourcing", "Campaign Management", "Authenticity"]
  },
  {
    title: "Paid Media & Performance",
    desc: "Amplify your reach with precision-targeted paid social campaigns. We optimize ad spend across platforms to maximize conversions and lower acquisition costs.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Media Buying", "A/B Testing", "ROI Optimization"]
  },
  {
    title: "Trend Forecasting & Viral Engineering",
    desc: "Stay ahead of the curve. We monitor cultural shifts and emerging trends to position your brand at the forefront of the digital conversation.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Cultural Intelligence", "Agile Marketing", "Trend Analysis"]
  }
];

export default function ExpandedServices() {
  return (
    <section className="py-24 sm:py-32 bg-sky-50 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-16 sm:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-900 mb-4 sm:mb-6"
          >
            Comprehensive <span className="font-medium">Capabilities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light px-4"
          >
            End-to-end social media solutions designed to scale premium brands.
          </motion.p>
        </div>

        <div className="space-y-24 sm:space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 sm:gap-12 lg:gap-24 items-center`}>
                
                {/* Media Side */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, rotate: isEven ? -2 : 2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-1/2 aspect-video lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-sky-900/10 relative group"
                >
                  {service.mediaType === 'video' ? (
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    >
                      <source src={service.mediaSrc} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={service.mediaSrc} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 mix-blend-multiply opacity-90"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-sky-900/10 mix-blend-overlay pointer-events-none" />
                </motion.div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 px-4 sm:px-0">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                      {service.tags.map((tag, i) => (
                        <span key={i} className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-sky-200 bg-white text-[10px] sm:text-xs font-medium tracking-wide uppercase text-sky-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-4 sm:mb-6 leading-tight">
                      {service.title}
                    </h3>
                    <p className="font-sans text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-8 sm:mb-10">
                      {service.desc}
                    </p>
                    <Link 
                      to="/services" 
                      className="inline-flex items-center gap-2 font-sans font-medium text-sky-600 hover:text-sky-800 transition-colors group"
                    >
                      <span className="border-b border-sky-600/30 group-hover:border-sky-800 pb-1 transition-colors">Discover more</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
