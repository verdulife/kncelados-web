import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const store = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/store" }),

  schema: z.object({
    created_at: z.coerce.date(),
    images: z.array(z.string()),
    title: z.string(),
    price: z.number(),
    tags: z.array(z.string()),
  })
});

export const collections = { store };