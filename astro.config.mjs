import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ['php', 'shell', 'javascript', 'go'],
      wrap: true
    }
  },
  site: 'https://joebocock.com',
  integrations: [tailwind(), mdx(), sitemap()]
});
