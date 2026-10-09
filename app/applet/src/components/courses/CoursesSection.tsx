import React, { useState } from 'react';
import {
  Clock,
  Globe,
  Briefcase,
  CheckCircle2,
  FileText,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { COURSES } from '../../data/courses.ts';
import { Course } from '../../types/index.ts';
import { CourseDetailModal } from './CourseDetailModal.tsx';
import { getWhatsAppUrl } from '../../utils/whatsapp.ts';

export const CoursesSection: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenCurriculum = (course: Course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  return (
    <section id="courses" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
            Curated Programs
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight text-balance">
            Career-Oriented IT Courses
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed text-balance">
            Designed for students and beginners aiming to gain practical programming, testing,
            and deployment capabilities with industry-standard toolsets.
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Course 1: Full Stack Development with AI Tools (Featured Card - 7 columns) */}
          {(() => {
            const course1 = COURSES[0];
            return (
              <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col overflow-hidden">
                {/* Header Strip */}
                <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-b border-slate-100">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <span>Online Training</span>
                      <span aria-hidden="true">·</span>
                      <span>1 Month Duration</span>
                    </div>
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/70 px-2.5 py-0.5 rounded-md">
                      Featured Track
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B2545] tracking-tight">
                    {course1.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {course1.description}
                  </p>

                  {/* Key Metrics Strip (Unboxed metadata with separators) */}
                  <div className="mt-6 pt-5 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <span className="text-xs text-slate-500 font-medium">Course Fee</span>
                      <p className="text-lg font-black text-emerald-700 mt-0.5">₹5,999</p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium">Optional Internship</span>
                      <p className="text-sm font-bold text-[#0B2545] mt-0.5">+₹3,000</p>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <span className="text-xs text-slate-500 font-medium">Total (With Internship)</span>
                      <p className="text-sm font-bold text-slate-900 mt-0.5">₹8,999</p>
                    </div>
                  </div>
                </div>

                {/* Modules Preview Area */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        8 Comprehensive Modules Covered
                      </h4>
                      <span className="text-xs text-blue-600 font-medium">Guided Practical</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {course1.modules?.map((m) => (
                        <div
                          key={m.id}
                          className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2.5"
                        >
                          <span className="text-xs font-mono font-bold text-blue-600 shrink-0 mt-0.5">
                            M{m.id}
                          </span>
                          <span className="text-xs font-semibold text-slate-800 leading-snug">
                            {m.title.replace(`Module ${m.id} — `, '')}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Explanatory note */}
                    <p className="text-xs text-slate-500 leading-relaxed italic bg-slate-50/50 p-3 rounded-lg border border-slate-100 mb-6">
                      Combines computer science theory, guided practical coding sessions, AI developer tools, software testing fundamentals, and real-world project development.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleOpenCurriculum(course1)}
                      className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-colors"
                    >
                      <FileText className="w-4 h-4 text-slate-600" />
                      <span>View Full Curriculum</span>
                    </button>

                    <a
                      href={getWhatsAppUrl(course1.whatsAppMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#0B2545] hover:bg-[#133868] rounded-xl shadow-xs transition-all"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Course 2: Manual Software Testing (Card - 5 columns) */}
          {(() => {
            const course2 = COURSES[1];
            return (
              <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col overflow-hidden">
                {/* Header */}
                <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                    <span>Quality Assurance Track</span>
                    <span aria-hidden="true">·</span>
                    <span>Online Training</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B2545] tracking-tight">
                    {course2.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {course2.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Duration & Fee:</span>
                    <span className="font-semibold text-slate-700 italic">
                      Contact us for details
                    </span>
                  </div>
                </div>

                {/* Topics List */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                      Core Syllabus Topics
                    </h4>

                    <div className="space-y-2.5 mb-6">
                      {course2.modules?.[0]?.topics.map((topic, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <a
                      href={getWhatsAppUrl(course2.whatsAppMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#0B2545] hover:bg-[#133868] rounded-xl shadow-xs transition-all"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Enquire for Course Details</span>
                    </a>

                    <p className="text-[11px] text-center text-slate-500">
                      Chat directly on WhatsApp to get schedule and upcoming batch slots.
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Curriculum Modal */}
      <CourseDetailModal
        course={selectedCourse}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};
