// @ts-check
import { defineConfig, envField} from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone'
  }),
  env: {
    schema:{
        API_URL:envField.string({ context: "server", access: "public" })
    }
  }
});