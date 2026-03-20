import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from './ssr-DHpF3kMw.js';
import './ssr2-e2juEaAg.js';
import './state.svelte-LLcxisGS.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-tg2uqd_START -->${$$result.title = `<title>Admin Dashboard – Unacquirable Enterprises</title>`, ""}<!-- HEAD_svelte-tg2uqd_END -->`, ""} <div class="space-y-8"><div class="flex items-center justify-between" data-svelte-h="svelte-24owls"><h1 class="text-3xl font-bold text-gray-900">Admin Dashboard</h1> <form method="POST" action="/admin/login?/logout"><button type="submit" class="text-sm text-gray-500 hover:text-red-600 transition-colors">Sign out</button></form></div> <div><h2 class="text-xl font-semibold text-gray-800 mb-4">Pending Submissions
      ${data.pending.length > 0 ? `<span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">${escape(data.pending.length)}</span>` : ``}</h2> ${data.pending.length === 0 ? `<div class="text-center py-16 bg-white rounded-xl border border-gray-200 text-gray-500" data-svelte-h="svelte-p1ntem">No pending submissions. 🎉</div>` : `<div class="grid gap-4">${each(data.pending, (sub) => {
    return `<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"><div class="flex items-start justify-between gap-4"><div class="flex-1 min-w-0"><h3 class="text-lg font-semibold text-gray-900">${escape(sub.name)}</h3> <div class="mt-1 flex flex-wrap gap-2"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">${escape(sub.type)}</span> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">📍 ${escape(sub.jurisdiction)}</span></div> ${sub.description ? `<p class="mt-2 text-sm text-gray-600">${escape(sub.description)}</p>` : ``} <div class="mt-3 text-xs text-gray-500 space-y-1">${sub.website ? `<div>🌐 <a${add_attribute("href", sub.website, 0)} target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:underline">${escape(sub.website)}</a></div>` : ``} <div>✉️ ${escape(sub.contact_email)}</div> <div>📅 ${escape(new Date(sub.submitted_at).toLocaleDateString())}</div> </div></div> <div class="flex flex-col gap-2 shrink-0"><form method="POST" action="?/approve"><input type="hidden" name="id"${add_attribute("value", sub.id, 0)}> <button type="submit" class="w-full px-4 py-1.5 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors" data-svelte-h="svelte-osejr0">✓ Approve
                  </button></form> <form method="POST" action="?/reject"><input type="hidden" name="id"${add_attribute("value", sub.id, 0)}> <button type="submit" class="w-full px-4 py-1.5 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors" data-svelte-h="svelte-16qoasy">✗ Reject
                  </button></form> </div></div> </div>`;
  })}</div>`}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-sPOdZAAQ.js.map
