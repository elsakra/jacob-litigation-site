import { defineCollection, z } from 'astro:content';

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    bio: z.string().optional(),
    image: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    practiceAreas: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    icon: z.string().optional(),
    features: z.array(z.string()).optional(),
    order: z.number().default(0),
    category: z.string().optional(), // 'practice' or 'industry'
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    role: z.string().optional(),
    company: z.string().optional(),
    image: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    content: z.string().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    date: z.string().optional(),
    publishedAt: z.string().optional(),
    updatedAt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    type: z.string().optional(), // Alert, Article, Press Release, etc.
  }),
});

const faq = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    answer: z.string().optional(),
    category: z.string().optional(),
    order: z.number().default(0),
  }),
});

const caseResults = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    outcome: z.string(),
    amount: z.string().optional(),
    practiceArea: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0)
  }),
});

export const collections = {
  team,
  services,
  testimonials,
  blog,
  faq,
  'case-results': caseResults,
};
