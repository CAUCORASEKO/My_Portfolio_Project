// Määrittää ja vie Vite-konfiguraation, jossa käytetään SvelteKit-pluginia.

// Määritellmä
import { defineConfig } from 'vite';
// SvelteKit-plugin
import { sveltekit } from '@sveltejs/kit/vite';
// Vientiasetus
export default defineConfig({
  plugins: [sveltekit()],
});

