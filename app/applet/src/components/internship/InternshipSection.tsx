import React from 'react';
import {
  Briefcase,
  Layers,
  FileCheck2,
  Workflow,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../utils/whatsapp.ts';

export const InternshipSection: React.FC = () => {
  const highlights = [
    {
      title: 'Optional Internship Opportunity',
      description:
        'Designed for students seeking hands-on exposure alongside their training schedule.',
      icon: Briefcase,
    },
    {
      title: 'Practical Project-Based Activities',
      description:
        'Work on realistic application features, bug fixes, and development sprints.',
      icon: Layers,
    },
    {
      title: 'Workflow & Documentation Guidance',
      description:
        'Learn code review etiquette, PR submissions, commit hygiene, and technical docs.',
      icon: Workflow,
    },
    {
      title: 'Transparent Pricing Structure',
      description:
        'Nominal additional fee of ₹3,000, clearly decoupled from core course tuition.',
      icon: FileCheck2,
    },
  ];

  return (
    <section id="internship" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-[#0B2545] to-[#133868] rounded-3xl text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-blue-300 tracking-wider uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Optional Practical Track
            </span>

            <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              Take Your Learning Beyond the Classroom
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-balance">
              Students interested in additional practical exposure can enquire about the optional
              internship associated with the training program.
            </p>
          </div>

          {/* Highlights 4-box Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mb-12">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-5 hover:bg-white/15 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Fee & Action Callout */}
          <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-semibold text-slate-300">Additional Fee:</span>
                <span className="text-xl font-black text-emerald-400">₹3,000</span>
                <span className="text-xs text-slate-400">separate from course tuition</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-md">
                Course curriculum, internship activities, deliverables and applicable terms will be explained before enrollment.
              </p>
            </div>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.internship)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold text-[#0B2545] bg-white hover:bg-slate-100 rounded-xl shadow-md transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Enquire About Internship</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
