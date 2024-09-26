import type { z } from 'zod';
import type { curdFormSchema, curdSchema } from '../utils/validation';

export type CurdT = z.infer<typeof curdSchema>;
export type CurdFormT = z.infer<typeof curdFormSchema>