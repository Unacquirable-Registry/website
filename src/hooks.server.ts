import type { Handle } from '@sveltejs/kit';
import { getAllEnterprises } from '$lib/db';

export const handle: Handle = async ({ event, resolve }) => {
  // Ensure DB is initialized on first request
  try {
    getAllEnterprises();
  } catch (e) {
    console.error('DB init error:', e);
  }
  return resolve(event);
};
