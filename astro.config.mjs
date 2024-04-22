import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import { collections, episodes, generateSlug, shorts } from "./src/lib/utils";

const BASE_URL = "https://www.kncelados.com";
const episodesPages = episodes.map(({ title }) => `${BASE_URL}/podcast/${generateSlug(title)}`);
const collectionsPages = collections.map(({ title }) => `${BASE_URL}/podcast/${generateSlug(title)}`);
const shortsPages = shorts.map(({ title }) => `${BASE_URL}/shorts/${generateSlug(title)}`);
const customPages = [...episodesPages, ...collectionsPages, ...shortsPages];

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