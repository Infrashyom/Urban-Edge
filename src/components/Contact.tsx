import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyvHaxL_Ydm5QXjfbYR-aprGE6w9zofU3A2vR03Y2WIoII8OZt6zqFGDjtBWplCb3rr_A/exec';
      
      // We use mode 'no-cors' because Google Apps Script doesn't auto-send CORS headers for JSON
      await fetch(scriptURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      // Because 'no-cors' results in an opaque response, we can't parse the JSON response
      // but if the fetch resolves, we assume it went through successfully.
      setStatus('success');
      form.reset();
    } catch (error) {
      console.error('Error submitting form', error);
      setStatus('error');
    }
  };

  return (
    <section className="py-32 px-6 md:px-12 relative bg-sky-50 min-h-screen flex items-center">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-4 text-slate-900">
            Let's <span className="font-medium">Collaborate</span>
          </h2>
          <p className="font-sans text-slate-600 font-light">
            Ready to give your brand the Urban Edge? Reach out to us below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 glass-panel p-8 rounded-2xl bg-white/60 backdrop-blur-md flex flex-col justify-center gap-8"
          >
            <h3 className="font-display text-2xl font-medium text-slate-900">
              Get in touch
            </h3>
            
            <div className="space-y-6">
              <a href="tel:8209564347" className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-slate-500 font-medium mb-1">Call Us</p>
                  <p className="font-sans text-slate-900 font-medium group-hover:text-sky-600 transition-colors">+91 8209564347</p>
                </div>
              </a>

              <a href="mailto:sppareek1993@gmail.com" className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-slate-500 font-medium mb-1">Email</p>
                  <p className="font-sans text-slate-900 font-medium group-hover:text-sky-600 transition-colors">sppareek1993@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-sky-100 text-sky-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-slate-500 font-medium mb-1">Location</p>
                  <p className="font-sans text-slate-900 font-medium">Remote / Global</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-panel p-8 md:p-12 rounded-2xl bg-white/80 backdrop-blur-md"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-sans text-sm text-slate-500">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-sky-200 py-3 text-slate-900 font-light focus:outline-none focus:border-sky-500 transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-sm text-slate-500">Company</label>
                  <input 
                    type="text" 
                    name="company"
                    className="w-full bg-transparent border-b border-sky-200 py-3 text-slate-900 font-light focus:outline-none focus:border-sky-500 transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-sans text-sm text-slate-500">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-sky-200 py-3 text-slate-900 font-light focus:outline-none focus:border-sky-500 transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-sm text-slate-500">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full bg-transparent border-b border-sky-200 py-3 text-slate-900 font-light focus:outline-none focus:border-sky-500 transition-colors"
                    placeholder="+91 0000000000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-sm text-slate-500">Project Details</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-sky-200 py-3 text-slate-900 font-light focus:outline-none focus:border-sky-500 transition-colors resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full xl:w-auto px-10 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                </button>
                
                {status === 'success' && (
                  <p className="font-sans text-sm text-emerald-600 font-medium">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="font-sans text-sm text-red-600 font-medium">Something went wrong. Please try again.</p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
