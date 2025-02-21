// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";
import netlify from "@astrojs/netlify";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  
  output: "server",
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },
});