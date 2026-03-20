import { z } from 'zod';

export const submissionSchema = z.object({
  name: z.string().min(1, 'Name is required').max(200),
  type: z.string().min(1, 'Type is required').max(100),
  jurisdiction: z.string().min(1, 'Jurisdiction is required').max(100),
  description: z.string().max(2000).optional().default(''),
  website: z.string().url('Invalid URL').optional().or(z.literal('')),
  contact_email: z.string().email('Invalid email address'),
});

export type SubmissionData = z.infer<typeof submissionSchema>;
