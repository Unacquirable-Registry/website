import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { checkPassword, setSessionCookie, clearSessionCookie, isAuthenticated } from '$lib/server/auth';

export const load: PageServerLoad = async ({ cookies }) => {
  if (isAuthenticated(cookies)) redirect(303, '/admin');
  return {};
};

export const actions: Actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();
    const password = data.get('password') as string;
    if (!password || !checkPassword(password)) {
      return fail(401, { error: 'Invalid password.' });
    }
    setSessionCookie(cookies);
    redirect(303, '/admin');
  },
  logout: async ({ cookies }) => {
    clearSessionCookie(cookies);
    redirect(303, '/admin/login');
  }
};
