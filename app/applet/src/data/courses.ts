import { Course } from '../types/index.ts';
import { WHATSAPP_MESSAGES } from '../utils/whatsapp.ts';

export const COURSES: Course[] = [
  {
    id: 'full-stack-ai',
    title: 'Full Stack Development with AI Tools',
    badge: 'Popular',
    description:
      'Learn frontend development, backend development, databases, APIs, AI-assisted coding, software testing fundamentals, Git, GitHub and deployment through practical sessions and projects.',
    duration: '1 Month',
    mode: 'Online',
    feeText: '₹5,999',
    feeAmount: 5999,
    internshipAvailable: true,
    internshipFeeText: '₹3,000 additional',
    internshipFeeAmount: 3000,
    highlights: [
      'Comprehensive Full Stack curriculum (Frontend, Backend & DB)',
      'Modern AI tools integration (AI-assisted coding & debugging)',
      'Software testing fundamentals included',
      'Real-world portfolio and full stack capstone projects',
      'Optional 1-month guided internship with live project tasks',
    ],
    whatsAppMessage: WHATSAPP_MESSAGES.fullStack,
    modules: [
      {
        id: 1,
        title: 'Module 1 — Web Development Fundamentals',
        topics: [
          'HTML5 semantic structure',
          'CSS3 styling & modern flexbox/grid layouts',
          'Responsive Web Design for mobile & desktop',
          'JavaScript Fundamentals (ES6+, DOM manipulation, asynchronous programming)',
        ],
      },
      {
        id: 2,
        title: 'Module 2 — Frontend Development',
        topics: [
          'React.js core architecture',
          'Components and Props hierarchy',
          'State management and Hooks (useState, useEffect, custom hooks)',
          'Forms handling, validation, and REST API integration',
          'Responsive, interactive user interfaces with Tailwind CSS',
        ],
      },
      {
        id: 3,
        title: 'Module 3 — Backend Development',
        topics: [
          'Node.js runtime environment',
          'Express.js framework and middleware architecture',
          'RESTful API design and route handling',
          'Authentication fundamentals & token-based security',
          'Backend validation, error handling, and security best practices',
        ],
      },
      {
        id: 4,
        title: 'Module 4 — Database',
        topics: [
          'Database fundamentals (relational vs document stores)',
          'MongoDB or PostgreSQL setup and data modeling',
          'CRUD operations and indexing strategies',
          'Seamless database integration with Node.js & Express',
        ],
      },
      {
        id: 5,
        title: 'Module 5 — AI Tools for Developers',
        topics: [
          'AI-assisted coding workflows',
          'ChatGPT & modern LLM assistants for accelerated learning and debugging',
          'AI code review and refactoring patterns',
          'AI-assisted documentation generation',
          'Responsible and ethical AI usage in software engineering',
        ],
      },
      {
        id: 6,
        title: 'Module 6 — Software Testing',
        topics: [
          'Software testing fundamentals and quality assurance',
          'Manual testing methodologies',
          'Writing comprehensive test scenarios and test cases',
          'Functional testing, Smoke testing & Sanity testing',
          'Regression testing workflows',
          'Defect life cycle & bug reporting standards',
          'Introduction to automated testing with Selenium and JUnit',
        ],
      },
      {
        id: 7,
        title: 'Module 7 — GitHub and Deployment',
        topics: [
          'Git fundamentals (branching, commits, merging)',
          'GitHub repository management and team collaboration',
          'Version control workflows',
          'Environment variables configuration and secrets safety',
          'Website deployment on modern cloud platforms (Vercel, Render)',
          'Basic production debugging, logs, and monitoring',
        ],
      },
      {
        id: 8,
        title: 'Module 8 — Practical Projects',
        topics: [
          'Project 1: Responsive Personal Portfolio Website showcasing projects & skills',
          'Project 2: Full Stack Application with Database, API Integration, and QA Testing',
        ],
      },
    ],
  },
  {
    id: 'manual-testing',
    title: 'Manual Software Testing',
    description:
      'Master the core principles of quality assurance, test case execution, defect reporting, and test lifecycles to ensure high-performance, bug-free software delivery.',
    duration: 'Contact us for details',
    mode: 'Online',
    feeText: 'Contact us for details',
    internshipAvailable: true,
    internshipFeeText: 'Contact us for details',
    highlights: [
      'Core QA & Software Testing principles',
      'Hands-on test design and execution',
      'Realistic bug reporting and triage exercises',
      'Foundation for automation and API testing',
    ],
    whatsAppMessage: WHATSAPP_MESSAGES.manualTesting,
    modules: [
      {
        id: 1,
        title: 'Quality Assurance & Testing Foundations',
        topics: [
          'Software Testing Fundamentals',
          'SDLC (Software Development Life Cycle) and STLC (Software Testing Life Cycle)',
          'Test Scenarios identification',
          'Test Case Writing and test coverage metrics',
          'Functional Testing techniques',
          'Smoke and Sanity Testing verification',
          'Regression Testing strategy',
          'Defect Life Cycle management',
          'Bug Reporting with industry standards',
          'Introduction to API Testing fundamentals',
        ],
      },
    ],
  },
];
