import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { createSubmission } from '$lib/db';

export const load: PageServerLoad = async () => {
  return {};
};

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = (data.get('name') as string)?.trim();
    const type = (data.get('type') as string)?.trim();
    const jurisdiction = (data.get('jurisdiction') as string)?.trim();
    const description = (data.get('description') as string)?.trim() ?? '';
    const website = (data.get('website') as string)?.trim() ?? '';
    const contact_email = (data.get('contact_email') as string)?.trim();

    const errors: Record<string, string> = {};
    if (!name) errors.name = 'Name is required.';
    if (!type) errors.type = 'Type is required.';
    if (!jurisdiction) errors.jurisdiction = 'Jurisdiction is required.';
    if (!contact_email) errors.contact_email = 'Contact email is required.';
    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/.test(contact_email)) errors.contact_email = 'Invalid email address.';

    if (Object.keys(errors).length > 0) {
      return fail(400, { errors, values: { name, type, jurisdiction, description, website, contact_email } });
    }

    createSubmission({ name, type, jurisdiction, description, website, contact_email });
    redirect(303, '/submit?success=1');
  }
};
