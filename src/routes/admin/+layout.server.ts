import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { isAuthenticated } from '$lib/server/auth';

export const load: LayoutServerLoad = async ({ cookies, url }) => {
  if (url.pathname === '/admin/login') return {};
  if (!isAuthenticated(cookies)) {
    redirect(303, '/admin/login');
  }
  return {};
};
