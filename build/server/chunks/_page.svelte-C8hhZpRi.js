import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from './ssr-DHpF3kMw.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-67w248_START -->${$$result.title = `<title>Unacquirable Enterprises – Public Registry</title>`, ""}<!-- HEAD_svelte-67w248_END -->`, ""} <div class="space-y-8"><div data-svelte-h="svelte-66k6mf"><h1 class="text-3xl font-bold text-gray-900">Public Registry</h1> <p class="mt-2 text-gray-600">Businesses that are legally structured to prevent acquisition or sale.</p></div> ${data.enterprises.length === 0 ? `<div class="text-center py-16 text-gray-500" data-svelte-h="svelte-147368e">No enterprises listed yet.</div>` : `<div class="grid gap-4">${each(data.enterprises, (enterprise) => {
    return `<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"><div class="flex items-start justify-between gap-4"><div class="flex-1 min-w-0"><h2 class="text-lg font-semibold text-gray-900">${escape(enterprise.name)}</h2> <div class="mt-1 flex flex-wrap gap-2"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">${escape(enterprise.type)}</span> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">📍 ${escape(enterprise.jurisdiction)} </span></div> ${enterprise.description ? `<p class="mt-3 text-sm text-gray-600">${escape(enterprise.description)}</p>` : ``}</div> ${enterprise.website ? `<a${add_attribute("href", enterprise.website, 0)} target="_blank" rel="noopener noreferrer" class="shrink-0 text-sm text-indigo-600 hover:text-indigo-800 hover:underline">Visit →
              </a>` : ``}</div> </div>`;
  })}</div>`} <div class="text-sm text-gray-500">${escape(data.enterprises.length)} enterprise${escape(data.enterprises.length !== 1 ? "s" : "")} listed.
    <a href="/submit" class="text-indigo-600 hover:underline ml-1" data-svelte-h="svelte-1bl80ih">Know one we&#39;re missing? Submit it →</a></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C8hhZpRi.js.map
