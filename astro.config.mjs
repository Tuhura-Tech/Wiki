import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator'
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

export default defineConfig({
  site: 'https://wiki.tuhuratech.org.nz/',
  integrations: [starlight({
    title: 'Wiki',
    description: 'A collection of guides and resources for learning technology targeted towards rangatahi and kura in Aotearoa',
    logo: {
      light: './src/assets/logo-light.png',
      dark: './src/assets/logo-dark.png',
      replacesTitle: true
    },
    lastUpdated: true,
    editLink: {
      baseUrl: 'https://github.com/Tuhura-Tech/Wiki/blob/main/'
    },
    social: {
      mastodon: 'https://mastodon.nzoss.nz/@tuhuratech',
      discord: 'https://discord.gg/PNxh7cwKfQ',
      github: 'https://github.com/Tuhura-Tech/Wiki'
    },
    customCss: [
      // Relative path to your custom CSS file
      './src/styles/custom.css',
    ],
    sidebar: [
      {
        label: "Python", items: [{
          label: "Python",
          link: 'python'
        }, {
          label: "Setting Up",
          link: 'python/setting-up'
        }, {
          label: "Flask",
          autogenerate: {
            directory: 'python/flask'
          }
        }]
      }, {
        label: "Game Design",
        items: [{
          label: "About",
          link: 'game-design/about'
        }, {
          label: "Godot",
          autogenerate: {
            directory: 'game-design/godot'
          }
        }],
      },
      {
        label: "Cybersecurity",

        autogenerate: {
          directory: 'cybersecurity'
        }
      },
      {
        label: "SQL",
        autogenerate: {
          directory: 'sql'
        }
      }, {
        label: "Javascript",
        items: [{
          label: "Setting Up",
          link: 'javascript/setting-up'
        }, {
          label: "Creative Coding",
          autogenerate: {
            directory: 'javascript/creative-coding'
          }
        }]
      }, {
        label: "Git",
        autogenerate: {
          directory: 'git'
        }
      }, {
        label: "Tūhura Tech Resources",
        autogenerate: {
          directory: 'tuhura-tech'
        }
      }],
    locales: {
      root: {
        label: 'English',
        lang: 'en' // lang is required for root locales
      },

      mi: {
        label: 'Māori',
        lang: 'mi'
      }
    },
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
    components: {
      Hero: './src/components/starlight/Hero.astro',
    },
  })],
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
