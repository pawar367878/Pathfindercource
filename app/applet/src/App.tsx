/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/layout/Navbar.tsx';
import { Hero } from './components/home/Hero.tsx';
import { AboutSection } from './components/home/AboutSection.tsx';
import { CoursesSection } from './components/courses/CoursesSection.tsx';
import { PricingSection } from './components/pricing/PricingSection.tsx';
import { InternshipSection } from './components/internship/InternshipSection.tsx';
import { ContactSection } from './components/contact/ContactSection.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-[#0B2545]">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About Pathfinder */}
        <AboutSection />

        {/* Courses Section with Curriculum Modal */}
        <CoursesSection />

        {/* Course Fee & Internship Pricing Breakdown */}
        <PricingSection />

        {/* Take Your Learning Beyond the Classroom - Internship */}
        <InternshipSection />

        {/* Contact Us & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
