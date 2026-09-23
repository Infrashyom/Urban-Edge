import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-sky-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Link 
              to="/" 
              className="font-display text-xl sm:text-2xl font-bold tracking-tighter text-slate-900 flex items-center gap-2.5 group mb-4" 
              aria-label="Urban Edge Home"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Logo className="w-full h-full object-contain" />
              </div>
              <span>
                Urban <span className="text-sky-600 font-light">Edge</span>
              </span>
            </Link>
            <p className="font-sans text-sm text-slate-500 font-light">
              © {new Date().getFullYear()} Urban Edge. All rights reserved.
            </p>
          </div>
          
          <div>
            <a 
              href="https://www.instagram.com/_urban_edge_official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50/50 text-slate-700 hover:text-sky-600 hover:border-sky-400 hover:bg-sky-50 transition-all font-sans text-sm font-medium"
            >
              <Instagram size={18} className="text-rose-500" />
              <span>@_urban_edge_official</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
