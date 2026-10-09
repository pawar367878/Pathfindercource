import React from 'react';
import { Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PathfinderLogo } from '../common/PathfinderLogo.tsx';
import { OFFICIAL_PHONE, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../utils/whatsapp.ts';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <PathfinderLogo className="w-12 h-12" />
              <div>
                <span className="font-extrabold text-xl text-[#0B2545] tracking-tight block">
                  PATHFINDER
                </span>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Training Institute
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-[#0B2545] tracking-wide">
              Learn • Build • Test • Deploy • Grow
            </p>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Providing career-oriented IT courses, practical training, real-world project development guidance, software testing fundamentals, and optional internship opportunities.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2545]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleSmoothScroll(e, '#hero')}
                  className="hover:text-blue-700 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleSmoothScroll(e, '#about')}
                  className="hover:text-blue-700 transition-colors"
                >
                  About Pathfinder
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleSmoothScroll(e, '#courses')}
                  className="hover:text-blue-700 transition-colors"
                >
                  All Courses
                </a>
              </li>
              <li>
                <a
                  href="#internship"
                  onClick={(e) => handleSmoothScroll(e, '#internship')}
                  className="hover:text-blue-700 transition-colors"
                >
                  Internship Track
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="hover:text-blue-700 transition-colors"
                >
                  Contact Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2545]">
              Courses & Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleSmoothScroll(e, '#courses')}
                  className="hover:text-blue-700 transition-colors block"
                >
                  Full Stack Development with AI Tools
                  <span className="block text-[11px] text-emerald-700 font-semibold">₹5,999 · 1 Month</span>
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleSmoothScroll(e, '#courses')}
                  className="hover:text-blue-700 transition-colors block pt-1"
                >
                  Manual Software Testing
                  <span className="block text-[11px] text-slate-500">Contact for details</span>
                </a>
              </li>
              <li>
                <a
                  href="#internship"
                  onClick={(e) => handleSmoothScroll(e, '#internship')}
                  className="hover:text-blue-700 transition-colors block pt-1"
                >
                  Optional Project Internship
                  <span className="block text-[11px] text-blue-700 font-semibold">+₹3,000 additional</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2545]">
              Contact Helpline
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-500 block">Phone & WhatsApp:</span>
                <a
                  href={`tel:${OFFICIAL_PHONE.replace(/\s+/g, '')}`}
                  className="font-bold text-slate-900 hover:text-blue-600"
                >
                  {OFFICIAL_PHONE}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block">Training Mode:</span>
                <span className="font-medium text-slate-800">Online Practical Batches</span>
              </div>
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Open WhatsApp Direct</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} Pathfinder Training Institute. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Pathfinder • Learn • Build • Test • Deploy • Grow
          </p>
        </div>
      </div>
    </footer>
  );
};
