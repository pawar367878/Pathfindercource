export const OFFICIAL_PHONE = '+91 8767168411';
export const OFFICIAL_PHONE_DIGITS = '918767168411';

export const WHATSAPP_MESSAGES = {
  fullStack:
    'Hello Pathfinder, I am interested in the Full Stack Development with AI Tools course. Please share the complete curriculum, duration, fees and enrollment details.',
  manualTesting:
    'Hello Pathfinder, I am interested in the Manual Software Testing course. Please share the curriculum, duration and fees.',
  internship:
    'Hello Pathfinder, I would like to know more about the optional internship opportunity and its charges.',
  general:
    'Hello Pathfinder, I would like to know more about your IT training courses.',
};

/**
 * Builds standard WhatsApp link with URI-encoded message.
 */
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${OFFICIAL_PHONE_DIGITS}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats a WhatsApp message from the contact form data.
 */
export function formatContactFormMessage(data: {
  fullName: string;
  mobileNumber: string;
  email: string;
  courseInterested: string;
  internshipRequired: string;
  message?: string;
}): string {
  const parts = [
    `Hello Pathfinder, I would like to submit an admission inquiry:`,
    ``,
    `👤 Full Name: ${data.fullName.trim()}`,
    `📱 Contact: ${data.mobileNumber.trim()}`,
    `✉️ Email: ${data.email.trim()}`,
    `📚 Course: ${data.courseInterested}`,
    `💼 Optional Internship: ${data.internshipRequired}`,
  ];

  if (data.message && data.message.trim().length > 0) {
    parts.push(`💬 Message: ${data.message.trim()}`);
  }

  parts.push(``, `Please provide information regarding enrollment and upcoming batches.`);

  return parts.join('\n');
}
