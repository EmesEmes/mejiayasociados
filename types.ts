import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  features: string[];
  benefits: string[];
  highlight?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specializations: string[];
  imageUrl: string;
}