import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  variant: 'dark' | 'primary' | 'light';
  icon?: React.ReactNode;
}

export interface ProductProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}