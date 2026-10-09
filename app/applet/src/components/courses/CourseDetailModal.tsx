import React, { useEffect, useState } from 'react';
import { X, Check, MessageSquare, ChevronDown, ChevronUp, Clock, Globe, Briefcase, Sparkles } from 'lucide-react';
import { Course } from '../../types/index.ts';
import { getWhatsAppUrl } from '../../utils/whatsapp.ts';

interface CourseDetailModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  isOpen,
  onClose,
}) => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !course) return null;

  const toggleModule = (id: number) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-start justify-between bg-slate-50/70">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
              <span>Pathfinder Course Curriculum</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-700 font-bold">{course.mode}</span>
            </div>
            <h2 id="course-modal-title" className="text-xl sm:text-2xl font-extrabold text-[#0B2545] tracking-tight">
              {course.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="px-6 py-6 overflow-y-auto space-y-6">
          {/* Quick Info Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                Duration
              </span>
              <span className="text-sm font-bold text-slate-900 mt-0.5">{course.duration}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                Training Mode
              </span>
              <span className="text-sm font-bold text-slate-900 mt-0.5">{course.mode}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-medium">Course Fee</span>
              <span className="text-sm font-bold text-emerald-700 mt-0.5">{course.feeText}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                Optional Internship
              </span>
              <span className="text-sm font-bold text-slate-900 mt-0.5">
                {course.internshipFeeText || 'Available'}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Course Overview
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Modules List */}
          {course.modules && course.modules.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Detailed Curriculum Modules ({course.modules.length})
                </h3>
                <span className="text-xs text-slate-400">Click to expand topics</span>
              </div>

              <div className="space-y-2.5">
                {course.modules.map((mod) => {
                  const isExpanded = expandedModule === mod.id;
                  return (
                    <div
                      key={mod.id}
                      className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggleModule(mod.id)}
                        className="w-full px-4 py-3 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
                      >
                        <span className="text-sm font-bold text-[#0B2545]">{mod.title}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="px-4 pb-3.5 pt-1 bg-slate-50/60 border-t border-slate-100">
                          <ul className="space-y-1.5">
                            {mod.topics.map((topic, tidx) => (
                              <li key={tidx} className="text-xs text-slate-700 flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Internship Notice */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/70 text-xs text-slate-700 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-[#0B2545]">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Internship & Enrollment Information</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Course curriculum, internship activities, deliverables and applicable terms will be explained before enrollment. Optional internship is charged at ₹3,000 additional. Total fee with internship is ₹8,999.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Official helpline: <span className="font-semibold text-slate-800">+91 8767168411</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Close
            </button>
            <a
              href={getWhatsAppUrl(course.whatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#0B2545] hover:bg-[#133868] rounded-lg shadow-sm transition-all w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
