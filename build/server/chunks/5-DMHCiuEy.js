import { r as redirect, f as fail } from './index-B2LGyy1l.js';
import { c as clearSessionCookie, a as checkPassword, s as setSessionCookie, i as isAuthenticated } from './auth-ZawTbZv1.js';
import 'crypto';

const load = async ({ cookies }) => {
  if (isAuthenticated(cookies)) redirect(303, "/admin");
  return {};
};
const actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();
    const password = data.get("password");
    if (!password || !checkPassword(password)) {
      return fail(401, { error: "Invalid password." });
    }
    setSessionCookie(cookies);
    redirect(303, "/admin");
  },
  logout: async ({ cookies }) => {
    clearSessionCookie(cookies);
    redirect(303, "/admin/login");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CnKJAc8T.js')).default;
const server_id = "src/routes/admin/login/+page.server.ts";
const imports = ["_app/immutable/nodes/5.liRUyQe5.js","_app/immutable/chunks/BwUCMdmY.js","_app/immutable/chunks/C9VM4RKl.js","_app/immutable/chunks/DfnHWHO1.js","_app/immutable/chunks/Dk5tK-iP.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-DMHCiuEy.js.map
