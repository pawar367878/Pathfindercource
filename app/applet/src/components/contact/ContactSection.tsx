import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Building,
  CheckCircle,
  AlertCircle,
  Send,
  HelpCircle,
} from 'lucide-react';
import { OFFICIAL_PHONE, formatContactFormMessage, getWhatsAppUrl } from '../../utils/whatsapp.ts';
import { ContactFormData } from '../../types/index.ts';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    mobileNumber: '',
    email: '',
    courseInterested: 'Full Stack Development with AI Tools',
    internshipRequired: 'Yes',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preparedNotice, setPreparedNotice] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name.';
    }

    // Indian 10-digit mobile number or general phone number check
    const cleanPhone = formData.mobileNumber.replace(/[\s\-\+]/g, '');
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required.';
    } else if (!/^[0-9]{10,12}$/.test(cleanPhone)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.courseInterested) {
      newErrors.courseInterested = 'Please select a course.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setPreparedNotice(true);

    // Format the WhatsApp message with form details
    const formattedMsg = formatContactFormMessage({
      fullName: formData.fullName,
      mobileNumber: formData.mobileNumber,
      email: formData.email,
      courseInterested: formData.courseInterested,
      internshipRequired: formData.internshipRequired,
      message: formData.message,
    });

    const targetUrl = getWhatsAppUrl(formattedMsg);

    // Open WhatsApp in new tab / app
    setTimeout(() => {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 400);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight text-balance">
            Contact Pathfinder
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed text-balance">
            Have questions about syllabus, upcoming batches, fees, or internship modules?
            Connect with our admissions desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Info Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Official Information
              </span>
              <h3 className="text-xl font-bold text-[#0B2545] mt-1">
                Pathfinder Training Institute
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Career-oriented IT training designed for practical competence and real software engineering workflows.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium">Contact Number</span>
                  <a
                    href="tel:+918767168411"
                    className="block text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {OFFICIAL_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium">WhatsApp Inquiry</span>
                  <span className="block text-sm font-bold text-slate-900">
                    Available (+91 8767168411)
                  </span>
                  <span className="text-xs text-slate-500">Quick response during working hours</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium">Mode of Training</span>
                  <span className="block text-sm font-bold text-slate-900">
                    Online Interactive Sessions
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 leading-relaxed">
              <div className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>How Inquiries Work:</span>
              </div>
              Submitting the contact form prepares your pre-filled inquiry text and opens WhatsApp directly to chat with Pathfinder admissions. You review the message and press <strong>Send</strong>.
            </div>
          </div>

          {/* Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-[#0B2545] mb-1">
              Course Inquiry Form
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out your details below to connect with us on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName
                      ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                      : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600/20'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Mobile Number & Email (2 cols) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="mobileNumber" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.mobileNumber
                        ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                        : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600/20'
                    }`}
                  />
                  {errors.mobileNumber && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.mobileNumber}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                        : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Course Interested In */}
              <div>
                <label htmlFor="courseInterested" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Course Interested In <span className="text-red-500">*</span>
                </label>
                <select
                  id="courseInterested"
                  name="courseInterested"
                  value={formData.courseInterested}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
                >
                  <option value="Full Stack Development with AI Tools">
                    Full Stack Development with AI Tools (₹5,999)
                  </option>
                  <option value="Manual Software Testing">
                    Manual Software Testing
                  </option>
                  <option value="General IT Training & Career Guidance">
                    General Inquiry / Both Tracks
                  </option>
                </select>
              </div>

              {/* Internship Required (Yes / No) */}
              <div>
                <span className="block text-xs font-bold text-slate-700 mb-1.5">
                  Internship Required? (Optional +₹3,000)
                </span>
                <div className="flex items-center gap-6">
                  <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-slate-800">
                    <input
                      type="radio"
                      name="internshipRequired"
                      value="Yes"
                      checked={formData.internshipRequired === 'Yes'}
                      onChange={handleChange}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span>Yes, I want the optional internship</span>
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-slate-800">
                    <input
                      type="radio"
                      name="internshipRequired"
                      value="No"
                      checked={formData.internshipRequired === 'No'}
                      onChange={handleChange}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span>No, training only</span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share any questions about timings, prerequisites, or batches..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#0B2545] hover:bg-[#133868] rounded-xl shadow-xs transition-all disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#0B2545] focus:ring-offset-2"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>
                    {isSubmitting ? 'Opening WhatsApp...' : 'Submit Inquiry via WhatsApp'}
                  </span>
                </button>
              </div>

              {/* Confirmation Notice */}
              {preparedNotice && (
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Inquiry prepared!</span> WhatsApp has been launched with your formatted details. Please review and press <strong>Send</strong> in WhatsApp.
                  </div>
                </div>
              )}

              <p className="text-[11px] text-slate-500 text-center">
                Your message opens in official WhatsApp (+91 8767168411). No database submission or spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
