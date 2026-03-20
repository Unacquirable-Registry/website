import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { submissionSchema } from '$lib/validation';
import { getDb } from '$lib/db';

export const load: PageServerLoad = async () => {
  return {};
};

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const rawData = {
      name: formData.get('name') as string,
      type: formData.get('type') as string,
      jurisdiction: formData.get('jurisdiction') as string,
      description: formData.get('description') as string,
      website: formData.get('website') as string,
      contact_email: formData.get('contact_email') as string,
    };

    const result = submissionSchema.safeParse(rawData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const errors: Record<string, string> = {};
      for (const [key, messages] of Object.entries(fieldErrors)) {
        if (messages && messages.length > 0) {
          errors[key] = messages[0];
        }
      }
      return fail(400, { errors, values: rawData });
    }

    const db = getDb();
    db.createSubmission(result.data);
    redirect(303, '/submit?success=1');
  }
};
