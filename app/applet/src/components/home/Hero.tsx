import React from 'react';
import {
  ArrowRight,
  MessageSquare,
  Code2,
  Cpu,
  FolderGit2,
  CheckCircle2,
  Briefcase,
} from 'lucide-react';
import { PathfinderLogo } from '../common/PathfinderLogo.tsx';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../utils/whatsapp.ts';

export const Hero: React.FC = () => {
  const highlights = [
    {
      title: 'Practical Learning',
      desc: 'Hands-on coding and real implementation',
      icon: Code2,
    },
    {
      title: 'AI-Assisted Development',
      desc: 'Modern developer workflows with AI tools',
      icon: Cpu,
    },
    {
      title: 'Project-Based Training',
      desc: 'Full-fledged portfolio & capstone projects',
      icon: FolderGit2,
    },
    {
      title: 'Software Testing',
      desc: 'Testing fundamentals, QA, and bug reporting',
      icon: CheckCircle2,
    },
    {
      title: 'Internship Opportunities',
      desc: 'Optional guided internship with deliverables',
      icon: Briefcase,
    },
  ];

  const handleExploreCourses = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.querySelector('#courses');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-white">
      {/* Subtle grid pattern background with soft radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#0B2545 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo & Brand Identity Presentation */}
          <div className="inline-flex flex-col items-center mb-6">
            <div className="p-2 rounded-2xl bg-white shadow-xs border border-slate-200/90 hover:shadow-md transition-shadow">
              <PathfinderLogo className="w-24 h-24 sm:w-28 sm:h-28" />
            </div>
            <div className="mt-3 flex flex-col items-center">
              <span className="text-sm font-bold tracking-widest text-[#0B2545] uppercase">
                PATHFINDER
              </span>
              <p className="text-xs sm:text-sm font-medium text-slate-500 tracking-wider mt-0.5">
                Learn • Build • Test • Deploy • Grow
              </p>
            </div>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B2545] tracking-tight leading-[1.15] text-balance">
            Build Your IT Career with Pathfinder
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed text-balance">
            Learn industry-relevant technologies through practical training, AI-assisted development,
            real-world projects and career-focused learning.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#courses"
              onClick={handleExploreCourses}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-[#0B2545] hover:bg-[#133868] rounded-xl shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0B2545] focus:ring-offset-2"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-2xs transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Verification Badge info */}
          <div className="mt-6 flex items-center justify-center gap-3 text-xs text-slate-500">
            <span>Official Helpline: +91 8767168411</span>
            <span aria-hidden="true">·</span>
            <span>Online & Guided Practical Batches</span>
          </div>
        </div>

        {/* 5 Highlights Grid */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">
              Core Training Highlights
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex flex-col text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-3.5 group-hover:bg-[#0B2545] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-sm font-bold text-[#0B2545] tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
