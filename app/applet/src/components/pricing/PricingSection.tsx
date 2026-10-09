import React, { useState } from 'react';
import { Check, MessageSquare, HelpCircle, ShieldCheck, Zap } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp.ts';

export const PricingSection: React.FC = () => {
  const [includeInternship, setIncludeInternship] = useState<boolean>(true);

  const basePrice = 5999;
  const internshipFee = 3000;
  const totalPrice = includeInternship ? basePrice + internshipFee : basePrice;

  const inquiryMessage = includeInternship
    ? `Hello Pathfinder, I am interested in enrolling in Full Stack Development with AI Tools along with the optional Internship (Total: ₹8,999). Please provide batch details and enrollment procedure.`
    : `Hello Pathfinder, I am interested in enrolling in Full Stack Development with AI Tools course only (₹5,999). Please provide batch details and enrollment procedure.`;

  return (
    <section className="py-20 md:py-24 bg-slate-50/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
            Transparent Pricing
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight text-balance">
            Course Fee & Optional Internship
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed text-balance">
            Clear, upfront tuition without hidden fees. Choose standard training or pair it with our guided project-based internship.
          </p>
        </div>

        {/* Pricing Plan Interactive Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
          {/* Option Selector Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 bg-slate-100 rounded-2xl mb-8">
            <button
              type="button"
              onClick={() => setIncludeInternship(false)}
              className={`w-full sm:w-1/2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                !includeInternship
                  ? 'bg-white text-[#0B2545] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Course Only (₹5,999)
            </button>
            <button
              type="button"
              onClick={() => setIncludeInternship(true)}
              className={`w-full sm:w-1/2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                includeInternship
                  ? 'bg-white text-[#0B2545] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Course + Optional Internship (₹8,999)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Price Column */}
            <div className="md:col-span-5 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {includeInternship ? 'Combined Enrollment' : 'Standard Training'}
              </span>
              
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-[#0B2545] tracking-tight">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-500 font-medium">/ 1 Month</span>
              </div>

              <div className="mt-4 space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span>Full Stack Training:</span>
                  <span className="font-bold text-slate-800">₹5,999</span>
                </div>
                {includeInternship && (
                  <div className="flex justify-between py-1 border-b border-slate-100 text-blue-700 font-medium">
                    <span>Optional Internship:</span>
                    <span className="font-bold">+₹3,000</span>
                  </div>
                )}
                <div className="flex justify-between pt-1 font-bold text-slate-900">
                  <span>Total Payable:</span>
                  <span className="text-emerald-700">₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <a
                href={getWhatsAppUrl(inquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-[#0B2545] hover:bg-[#133868] rounded-xl shadow-xs transition-all w-full text-center"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Enquire & Enroll on WhatsApp</span>
              </a>
            </div>

            {/* Inclusions Column */}
            <div className="md:col-span-7 space-y-3.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Program Inclusions
              </h3>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Full Stack Development (HTML/CSS/JS, React.js, Node.js, Express, DB)</span>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>AI Developer Tools (ChatGPT for coding, AI code reviews & debugging)</span>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Software testing fundamentals, test cases, and quality verification</span>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Git, GitHub version control, environment setup, and cloud deployment</span>
              </div>

              {includeInternship ? (
                <div className="flex items-start gap-3 text-xs text-blue-900 bg-blue-50/70 p-3 rounded-xl border border-blue-200/60">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold">Optional Internship Included (+₹3,000):</span>
                    <p className="mt-0.5 text-slate-600">
                      Guided project tasks, development workflow experience, codebase reviews, and documentation guidance.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-500">
                  <span>Optional Internship not included. You can add it later for ₹3,000 if you wish to participate.</span>
                </div>
              )}
            </div>
          </div>

          {/* Mandatory Disclaimers & Notes */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed space-y-1">
            <p className="font-semibold text-slate-700">
              Important Enrollment Notice:
            </p>
            <p>
              “Course curriculum, internship activities, deliverables and applicable terms will be explained before enrollment.”
            </p>
            <p>
              Internship participation is optional and charged separately. All charges are in Indian Rupees (INR).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
