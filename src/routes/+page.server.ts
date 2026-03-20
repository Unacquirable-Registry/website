import type { PageServerLoad } from './$types';
import { getAllEnterprises } from '$lib/db';

export const load: PageServerLoad = async () => {
  const enterprises = getAllEnterprises();
  return { enterprises };
};
