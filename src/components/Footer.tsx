import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-sky-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Link to="/" className="font-display text-xl sm:text-2xl font-bold tracking-tighter text-slate-900 flex items-center gap-2 group mb-4">
              <svg className="w-6 h-6 text-sky-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18"/>
                <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
                <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/>
                <path d="M10 9h.01"/>
                <path d="M14 9h.01"/>
                <path d="M10 13h.01"/>
                <path d="M14 13h.01"/>
              </svg>
              Urban <span className="text-sky-600 font-light">Edge</span>
            </Link>
            <p className="font-sans text-sm text-slate-500 font-light">
              © {new Date().getFullYear()} Urban Edge. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/_urban_edge_official?igsh=Z2gxcXJoYmxncXhq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans text-sm text-slate-500 hover:text-sky-600 transition-colors"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="font-sans text-sm text-slate-500 hover:text-sky-600 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="font-sans text-sm text-slate-500 hover:text-sky-600 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
