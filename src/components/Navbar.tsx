import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/85 backdrop-blur-lg border-b border-sky-100 py-3.5 shadow-sm' : 'bg-transparent py-4 sm:py-6'}`}>
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
          <Link 
            to="/" 
            className="font-display text-xl sm:text-2xl font-bold tracking-tighter text-slate-900 z-50 flex items-center gap-2.5 group" 
            aria-label="Urban Edge Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Logo className="w-full h-full object-contain" />
            </div>
            <span>
              Urban <span className="text-sky-600 font-light">Edge</span>
            </span>
          </Link>

          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-xs lg:text-sm font-medium transition-colors ${location.pathname === link.href ? 'text-sky-600' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className={`ml-2 lg:ml-4 px-4 lg:px-5 py-2 text-xs lg:text-sm font-medium rounded-full transition-all shadow-md shadow-slate-900/10 ${
                location.pathname === '/contact'
                  ? 'bg-sky-600 text-white shadow-sky-600/20'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              Get Started
            </Link>
          </div>

          <button className="md:hidden text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-[60] bg-white/95 flex flex-col justify-center items-center px-6"
          >
            <button className="absolute top-6 right-6 text-slate-500 hover:text-slate-900 transition-colors" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col gap-7 text-center items-center w-full max-w-xs">
              <Link 
                to="/" 
                className="font-display text-2xl font-bold tracking-tighter text-slate-900 flex items-center justify-center gap-2.5 mb-2" 
                onClick={() => setIsOpen(false)}
              >
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <Logo className="w-full h-full object-contain" />
                </div>
                <span>
                  Urban <span className="text-sky-600 font-light">Edge</span>
                </span>
              </Link>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className={`font-display text-4xl sm:text-5xl font-light transition-colors ${location.pathname === link.href ? 'text-sky-600' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4 w-full"
              >
                <Link
                  to="/contact"
                  className="block w-full py-4 text-center font-sans font-medium text-lg bg-slate-900 text-white rounded-full hover:bg-slate-800 shadow-lg shadow-slate-900/10 transition-colors"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
