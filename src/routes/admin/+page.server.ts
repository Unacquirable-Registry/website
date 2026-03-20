import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { getPendingSubmissions, approveSubmission, rejectSubmission } from '$lib/db';
import { isAuthenticated } from '$lib/server/auth';

export const load: PageServerLoad = async ({ cookies }) => {
  if (!isAuthenticated(cookies)) redirect(303, '/admin/login');
  const pending = getPendingSubmissions();
  return { pending };
};

export const actions: Actions = {
  approve: async ({ request, cookies }) => {
    if (!isAuthenticated(cookies)) redirect(303, '/admin/login');
    const data = await request.formData();
    const id = parseInt(data.get('id') as string, 10);
    if (isNaN(id) || id <= 0) return fail(400, { error: 'Invalid ID' });
    approveSubmission(id);
    return { success: true };
  },
  reject: async ({ request, cookies }) => {
    if (!isAuthenticated(cookies)) redirect(303, '/admin/login');
    const data = await request.formData();
    const id = parseInt(data.get('id') as string, 10);
    if (isNaN(id) || id <= 0) return fail(400, { error: 'Invalid ID' });
    rejectSubmission(id);
    return { success: true };
  }
};
