import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CAatugxd.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_0ZIQyJby.mjs');
const _page1 = () => import('./chunks/index_Cws2HsPu.mjs');
const _page2 = () => import('./chunks/_id__87V4r5wz.mjs');
const _page3 = () => import('./chunks/index_CspKh6DS.mjs');
const _page4 = () => import('./chunks/index_B4eOBX-w.mjs');
const _page5 = () => import('./chunks/robots_Cj27xJrr.mjs');
const _page6 = () => import('./chunks/index_CiIyyVrf.mjs');
const _page7 = () => import('./chunks/index_QmgVu_2F.mjs');
const _page8 = () => import('./chunks/index_B9uTWTFw.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.5.10_@types+node@17.0.45_typescript@5.4.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/contacto/index.astro", _page1],
    ["src/pages/player/[id].astro", _page2],
    ["src/pages/podcast/[slug]/index.astro", _page3],
    ["src/pages/podcast/index.astro", _page4],
    ["src/pages/robots.txt.ts", _page5],
    ["src/pages/shorts/index.astro", _page6],
    ["src/pages/tienda/index.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "6dadf699-e653-4acd-a9e2-82803223adce"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
