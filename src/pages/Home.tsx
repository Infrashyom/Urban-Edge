import { motion, useScroll } from 'motion/react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import ValueProp from '../components/ValueProp';
import ExpandedServices from '../components/ExpandedServices';
import WorkPreview from '../components/WorkPreview';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="flex flex-col relative">
      {/* Global Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 to-blue-600 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      <Hero />
      <Marquee />
      <ValueProp />
      <ExpandedServices />
      <WorkPreview />
      <Testimonials />
      <Contact />
    </div>
  );
}
