import { r as redirect } from './index-B2LGyy1l.js';
import { i as isAuthenticated } from './auth-ZawTbZv1.js';
import 'crypto';

const load = async ({ cookies, url }) => {
  if (url.pathname === "/admin/login") return {};
  if (!isAuthenticated(cookies)) {
    redirect(303, "/admin/login");
  }
  return {};
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-BGcyBzhh.js')).default;
const server_id = "src/routes/admin/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.L3v7yS0G.js","_app/immutable/chunks/BwUCMdmY.js","_app/immutable/chunks/C9VM4RKl.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-DxtJeoox.js.map
