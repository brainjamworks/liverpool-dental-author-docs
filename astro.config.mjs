import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Canonical host is authors.learning.endo360.co.uk. The .uk variant 301s
// to the .co.uk one at the CloudFront edge. When CUSTOM_DOMAIN=1 (set by
// the S3 deploy workflow) the site builds with the custom domain as the
// absolute-URL base; otherwise it falls back to the CloudFront default
// domain for local `astro dev` / preview.
const useCustomDomain = process.env.CUSTOM_DOMAIN === '1';

export default defineConfig({
  site: useCustomDomain
    ? 'https://authors.learning.endo360.co.uk'
    : 'https://doh8ifckrzjrg.cloudfront.net',
  base: '/',
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
        email: 'mailto:support@learning.endo360.co.uk',
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
