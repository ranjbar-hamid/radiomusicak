import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate } from './astro/server_0EfP7QIk.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/Project/Astro/RadioMusicak/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
