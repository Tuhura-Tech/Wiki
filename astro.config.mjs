import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator'

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
      github: 'https://github.com/Tuhura-Tech/Wiki',
      discord: 'https://discord.gg/PNxh7cwKfQ'
    },
    customCss: [
      // Relative path to your custom CSS file
      './src/styles/custom.css',
    ],
    sidebar: [{
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
    },
    {
      label: "Python", items: [{
        label: "Setting Up",
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
    },
    {
      label: "Git",
      autogenerate: {
        directory: 'git'
      }
    }, {
      label: "Cybersecurity",

      autogenerate: {
        directory: 'cybersecurity'
      }
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
      label: "SQL",
      autogenerate: {
        directory: 'sql'
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
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
