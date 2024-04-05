import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import partytown from "@astrojs/partytown";

const pt_opts = {
  config: {
    forward: ["dataLayer.push"],
  },
}

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), partytown(pt_opts)],
  output: "server",
  adapter: netlify()
});