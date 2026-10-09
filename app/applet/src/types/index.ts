export interface CourseModule {
  id: number;
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  badge?: string;
  description: string;
  duration: string;
  mode: string;
  feeText: string;
  feeAmount?: number;
  internshipAvailable: boolean;
  internshipFeeText?: string;
  internshipFeeAmount?: number;
  highlights: string[];
  modules?: CourseModule[];
  whatsAppMessage: string;
}

export interface ContactFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  courseInterested: string;
  internshipRequired: 'Yes' | 'No';
  message: string;
}
