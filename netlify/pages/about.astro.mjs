import { e as createComponent, i as renderComponent, j as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_0EfP7QIk.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DdZUzXsy.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main> <p>about</p> </main>` })} ${renderScript($$result, "D:/Project/Astro/RadioMusicak/src/pages/about/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Project/Astro/RadioMusicak/src/pages/about/index.astro", void 0);

const $$file = "D:/Project/Astro/RadioMusicak/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
