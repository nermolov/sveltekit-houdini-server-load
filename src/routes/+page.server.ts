import { AnimeQueryStore } from '$houdini';
import type { PageServerLoad } from './$houdini';

export const load: PageServerLoad = async (event) => {
  const myQuery = new AnimeQueryStore();
  const { data } = await myQuery.fetch({ event });

  return { data };
};
