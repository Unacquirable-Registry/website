const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DXUsn4Ts.js",app:"_app/immutable/entry/app.DJB_Hr68.js",imports:["_app/immutable/entry/start.DXUsn4Ts.js","_app/immutable/chunks/B8mgRmSj.js","_app/immutable/chunks/BwUCMdmY.js","_app/immutable/entry/app.DJB_Hr68.js","_app/immutable/chunks/BwUCMdmY.js","_app/immutable/chunks/C9VM4RKl.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Hj0XGOmH.js')),
			__memo(() => import('./chunks/1-BQawpc8H.js')),
			__memo(() => import('./chunks/2-CTyxJh8i.js')),
			__memo(() => import('./chunks/3-BdD0LmxD.js')),
			__memo(() => import('./chunks/4-OKHuJk-g.js')),
			__memo(() => import('./chunks/5-2Si2ZvHl.js')),
			__memo(() => import('./chunks/6-B6ivdkbw.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin/login",
				pattern: /^\/admin\/login\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/submit",
				pattern: /^\/submit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
