import { z } from 'zod';

export const curdSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  image: z.string(),
  price: z.number(),
  rating: z.number().nullable(),
});

export const curdFormSchema = z.object({
  title: z.string(),
  image: z.string(),
  price: z.string(),
  rating: z.string(),
});
