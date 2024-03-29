import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator'
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
export const locales = {
  root: {
    label: 'English',
    lang: 'en' // lang is required for root locales
  },

  mi: {
    label: 'Māori',
    lang: 'mi'
  }
};
const site = 'https://wiki.tuhuratech.org.nz/';


// https://astro.build/config
export default defineConfig({
  site,
  integrations: [starlight({
    title: 'Wiki',
    logo: {
      light: './src/assets/logo-light.png',
      dark: './src/assets/logo-dark.png',
      replacesTitle: true
    },
    social: {
      mastodon: 'https://mastodon.nzoss.nz/@tuhuratech',
      github: 'https://github.com/Tuhura-Tech/Wiki',
      discord: 'https://discord.gg/PNxh7cwKfQ'
    },
    editLink: {
      baseUrl: 'https://github.com/Tuhura-Tech/Wiki/blob/main/'
    },
    sidebar: [{
      label: 'Guides',
      items: [{
        label: "About our Guides",
        link: 'guides/about'
      }, {
        label: "Javascript",
        collapsed: true,
        items: [{
          label: "Setting Up",
          link: 'guides/javascript/setting-up'
        }, {
          label: "Creative Coding",
          collapsed: true,
          autogenerate: {
            directory: 'guides/javascript/creative-coding'
          }
        }]
      },
      { label: "Python", collapsed: true, autogenerate: { directory: 'guides/python' } },
      {
        label: "Git",
        collapsed: true,
        autogenerate: {
          directory: 'guides/git'
        }
      }, {
        label: "Cybersecurity",
        collapsed: true,
        autogenerate: {
          directory: 'guides/cybersecurity'
        }
      }, {
        label: "Game Design",
        collapsed: true,
        items: [{
          label: "About",
          link: 'guides/game-design/about'
        }, {
          label: "Godot",
          autogenerate: {
            directory: 'guides/game-design/godot'
          }
        }],
      },
      {
        label: "SQL",
        collapsed: true,
        autogenerate: {
          directory: 'guides/sql'
        }
      }]
    }, {
      label: 'NCEA Resources',
      items: [{
        label: "About our Resources",
        link: 'ncea/about'
      }, {
        label: "NCEA Level 2",
        collapsed: true,
        autogenerate: {
          directory: 'ncea/level-2'
        }
      }, {
        label: "NCEA Level 3",
        collapsed: true,
        autogenerate: {
          directory: 'ncea/level-3'
        }
      }]
    }, {
      label: "Tuhura Tech Resources",
      autogenerate: {
        directory: 'tuhura-tech'
      }
    }],
    locales,
    favicon: '/images/favicon.svg',
    head: [
      // Add ICO favicon fallback for Safari.
      {
        tag: 'link',
        attrs: {
          rel: 'icon',
          href: '/images/favicon.ico',
          sizes: '32x32'
        }
      }],
    plugins: [starlightLinksValidator()],
  }), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false
  }),],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }

});
