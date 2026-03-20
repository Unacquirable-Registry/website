import { c as create_ssr_component, e as escape } from './ssr-DHpF3kMw.js';
import './ssr2-e2juEaAg.js';
import './state.svelte-LLcxisGS.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  return `${$$result.head += `<!-- HEAD_svelte-1ozz4r0_START -->${$$result.title = `<title>Admin Login – Unacquirable Enterprises</title>`, ""}<!-- HEAD_svelte-1ozz4r0_END -->`, ""} <div class="min-h-[60vh] flex items-center justify-center"><div class="w-full max-w-sm space-y-6"><div class="text-center" data-svelte-h="svelte-zt28xx"><div class="text-4xl mb-2">🔐</div> <h1 class="text-2xl font-bold text-gray-900">Admin Login</h1> <p class="mt-1 text-sm text-gray-500">Enter your password to access the admin area.</p></div> ${form?.error ? `<div class="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">${escape(form.error)}</div>` : ``} <form method="POST" action="?/login" class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-4" data-svelte-h="svelte-kzo0rx"><div><label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label> <input id="password" name="password" type="password" required autofocus class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Enter admin password"></div> <button type="submit" class="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">Sign In</button></form></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CnKJAc8T.js.map
