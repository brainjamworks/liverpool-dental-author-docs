import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// When deployed at the custom domain `authors.learning.endo360.uk`, set
// CUSTOM_DOMAIN=1 (or remove the base below). Until DNS is wired up, the
// site lives under /liverpool-dental-author-docs/ on github.io.
const useCustomDomain = process.env.CUSTOM_DOMAIN === '1';

export default defineConfig({
  site: useCustomDomain
    ? 'https://authors.learning.endo360.uk'
    : 'https://brainjamworks.github.io',
  base: useCustomDomain ? '/' : '/liverpool-dental-author-docs',
  integrations: [
    starlight({
      title: 'Liverpool Dental Learning Hub',
      description:
        'Guide for staff building CPD courses on the Liverpool Dental Learning Hub.',
      logo: { src: './src/assets/logo.png', alt: 'University of Liverpool', replacesTitle: false },
      customCss: ['./src/styles/brand.css', './src/styles/home.css'],
      components: {
        Footer: './src/components/Footer.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
      },
      social: {
        email: 'mailto:dental.cpd@liverpool.ac.uk',
      },
      editLink: {
        baseUrl:
          'https://github.com/brainjamworks/liverpool-dental-author-docs/edit/main/',
      },
      sidebar: [
        {
          label: 'Quick starts',
          autogenerate: { directory: 'quick-starts' },
        },
        {
          label: 'Creating a course',
          autogenerate: { directory: 'creating-a-course' },
        },
        {
          label: 'Learner engagement',
          autogenerate: { directory: 'engagement' },
        },
        {
          label: 'Content creation',
          autogenerate: { directory: 'content' },
        },
        {
          label: 'Components & activities',
          autogenerate: { directory: 'components' },
        },
        {
          label: 'Data & analytics',
          autogenerate: { directory: 'analytics' },
        },
        {
          label: 'Accessibility',
          autogenerate: { directory: 'accessibility' },
        },
        {
          label: 'Advanced features',
          autogenerate: { directory: 'advanced' },
        },
        {
          label: 'Open Learning XML (OLX)',
          autogenerate: { directory: 'olx' },
        },
      ],
    }),
  ],
});
