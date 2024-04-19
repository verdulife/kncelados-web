import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import episodes from "./src/lib/episodes.json" assert { type: 'json' };
import slugify from 'slugify';

const BASE_URL = "https://www.kncelados.com";
const customPages = episodes.map(({ title }) => `${BASE_URL}/${slugify(title).toLowerCase()}`);
const pt_opts = {
  config: {
    forward: ["dataLayer.push"]
  }
};

export default defineConfig({
  site: BASE_URL,
  integrations: [tailwind(), sitemap({ customPages }), partytown(pt_opts)],
  output: "server",
  adapter: netlify()
});