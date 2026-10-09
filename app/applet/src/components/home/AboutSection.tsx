import React from 'react';
import { Target, Compass, Terminal, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PathfinderLogo } from '../common/PathfinderLogo.tsx';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Learn',
      description: 'Master core concepts of web development, testing, and AI tools with solid fundamentals.',
    },
    {
      title: 'Build',
      description: 'Apply every concept into real-world code by building full stack applications and portfolios.',
    },
    {
      title: 'Test',
      description: 'Write test cases, perform functional and regression testing, and verify software reliability.',
    },
    {
      title: 'Deploy',
      description: 'Configure Git, environment variables, cloud deployment pipelines, and live hosting.',
    },
    {
      title: 'Grow',
      description: 'Develop technical problem-solving capabilities, professional workflows, and industry confidence.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
            About Pathfinder
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight text-balance">
            Practical IT Training Built for Real-World Competence
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed text-balance">
            Pathfinder provides practical IT training designed to help students and beginners
            develop industry-relevant technical skills. We prioritize actionable engineering workflows
            over dry textbook theory.
          </p>
        </div>

        {/* Mission and Approach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Our Mission */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2545] tracking-tight">
                Our Mission
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed text-base">
                To help learners build strong technical foundations through practical training,
                real-world projects and modern AI-assisted development workflows.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
              <Terminal className="w-4 h-4 text-blue-600" />
              <span>Applied knowledge tailored for college students & fresh graduates</span>
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0B2545] flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2545] tracking-tight">
                Our Approach
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed text-base">
                Learn concepts, build projects, test applications, deploy websites and continuously
                improve your skills through structured, hands-on guidance.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Realistic development pipelines with quality testing at every phase</span>
            </div>
          </div>
        </div>

        {/* Tagline Methodology Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <PathfinderLogo className="w-14 h-14" />
              <div>
                <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                  Our Educational Methodology
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-[#0B2545] tracking-tight">
                  Learn • Build • Test • Deploy • Grow
                </h4>
              </div>
            </div>
            <a
              href="#courses"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 group"
            >
              <span>See courses built on this framework</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
            {pillars.map((pillar, idx) => (
              <div key={pillar.title} className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}.</span>
                  <span className="text-base font-bold text-[#0B2545]">{pillar.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
