import { e as createComponent, i as renderComponent, j as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_0EfP7QIk.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DdZUzXsy.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const f = await fetch(
    "https://script.google.com/macros/s/AKfycbz2ilrGauIAJoWzpZ3IcBv6gEato1hUWcC5p-1OJctJZcmwSIiLvrA5n5c8QZ9E5Mb3/exec?t=list"
  );
  const data = await f.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main> <p>welcome</p> ${data.map((d) => renderTemplate`<p>${d.title}</p>`)} </main>` })} ${renderScript($$result, "D:/Project/Astro/RadioMusicak/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Project/Astro/RadioMusicak/src/pages/index.astro", void 0);

const $$file = "D:/Project/Astro/RadioMusicak/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
