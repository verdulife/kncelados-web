import { z, defineCollection } from 'astro:content';

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    images: z.array(z.string()),
    price: z.number(),
    category: z.string()
  }),
});

export const collections = {
  'products': productsCollection,
};