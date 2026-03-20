import type { Handle } from '@sveltejs/kit';
import { getDb } from '$lib/db';

export const handle: Handle = async ({ event, resolve }) => {
  // Ensure DB is initialized on first request
  try {
    getDb().getAllEnterprises();
  } catch (e) {
    console.error('DB init error:', e);
  }
  return resolve(event);
};
