import { LucideIcon } from 'lucide-react';

// Core Business Types
export interface Service {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  image?: string;
  category: 'residential' | 'commercial' | 'industrial' | 'consulting';
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
  year: string;
  industry?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  type: string;
  image: string;
  category: string;
  technologies?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image?: string;
  email?: string;
  phone?: string;
}

// Form Types
export interface ContactForm {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface QuoteRequest extends ContactForm {
  projectType: string;
  budget: string;
  timeline: string;
  preferredContact: 'email' | 'phone';
}

export interface NewsletterSubscription {
  email: string;
  name?: string;
  consent: boolean;
}

// Navigation Types
export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
  submenu?: SubMenuItem[];
}

export interface SubMenuItem {
  title: string;
  href: string;
  description?: string;
}

export interface BreadcrumbItem {
  title: string;
  href: string;
  current?: boolean;
}

// UI Component Types
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// API Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Blog & Content Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  featured: boolean;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

// Company Information Types
export interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  cvr: string;
  hours: {
    weekdays: string;
    saturday?: string;
    sunday?: string;
  };
  social: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface OfficeLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  map: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Service Specific Types
export interface ServiceDetail {
  service: Service;
  benefits: string[];
  features: string[];
  process: ProcessStep[];
  specifications?: ServiceSpecifications;
  pricing?: PricingInfo;
  faqs: FAQItem[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface ServiceSpecifications {
  capacity?: string;
  efficiency?: string;
  noiseLevel?: string;
  warranty?: string;
  certifications?: string[];
}

export interface PricingInfo {
  startingFrom?: number;
  factors: string[];
  consultation?: boolean;
}

// Form Validation Types
export interface FormErrors {
  [key: string]: string;
}

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
}

// Error Handling Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
  stack?: string;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: AppError;
}

// Analytics Types
export interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp: number;
  userId?: string;
}

export interface PageView {
  path: string;
  title: string;
  timestamp: number;
  referrer?: string;
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;