import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
  // Svelte-esikäsittely
  preprocess: preprocess(),

  kit: {
    // SvelteKitin sovellusadapteri
    adapter: adapter(),
  }
};

export default config;

