import type { PageServerLoad } from './$types';
import { getDb } from '$lib/db';

export const load: PageServerLoad = async () => {
  const db = getDb();
  const enterprises = db.getAllEnterprises();
  return { enterprises };
};
