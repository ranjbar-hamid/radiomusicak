// @ts-check
// import netlify from "@astrojs/netlify";
// import node from "@astrojs/node";

import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
  integrations: [react()],
});