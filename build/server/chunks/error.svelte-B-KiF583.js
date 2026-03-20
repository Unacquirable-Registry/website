import { c as create_ssr_component, b as subscribe, e as escape } from './ssr-DHpF3kMw.js';
import { p as page } from './stores-DiC-3HfR.js';
import './ssr2-e2juEaAg.js';
import './state.svelte-LLcxisGS.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-B-KiF583.js.map
