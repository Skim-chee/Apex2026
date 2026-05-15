// @ts-check

import preact from '@astrojs/preact';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://Skim-chee.github.io',
  base: '/Apex2026',
	// Enable Preact to support Preact JSX components.
	integrations: [preact()],
});
