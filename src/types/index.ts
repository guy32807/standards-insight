export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  author: string;
}

export interface Standard {
  id: string;
  name: string;
  code: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: string;
  imageUrl: string;
  imageAlt: string;
  featured: boolean;
  productId: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface IndustryGuide {
  id: string;
  title: string;
  industry: string;
  description: string;
  imageUrl: string;
  standards: string[]; // IDs of relevant standards
  content: string;
}

export interface AffiliateParams {
  source: string;
  medium: string;
  campaign: string;
  content?: string;
}