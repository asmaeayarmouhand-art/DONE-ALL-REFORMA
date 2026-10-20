export interface UserAccount {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  propertyType?: string;
  projectStatus?: string;
  createdAt: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  estimatedDays: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  propertyType: string;
  budgetCategory: string;
  duration: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  projectType: string;
  rating: number;
  date: string;
  quote: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
