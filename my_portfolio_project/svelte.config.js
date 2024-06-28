import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
  // Svelte-esikäsittely
  preprocess: preprocess(),

  kit: {
    // SvelteKitin sovellusadapteri
    adapter: adapter(),
    // SvelteKitin kohde-elementti
    target: '#svelte',
    vite: {
      // Vite-asetukset
    }
  }
};

export default config;
