# Tuhura Tech Wiki Contributing Guide

This is a guide to contributing to the wiki, the associated technical knowledge that's required along with how the content is layed out.

## 🚀 Project Structure

This project is built on-top of the [Starlight](https://starlight.astro.build/) framework and utilises it to convert the content written in markdown to webpages.

Inside of the project, you'll see the following folders and files:

```NA
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

### Modifying existing content

Modifying existing content is straightforward as it can be done through the GitHub web UI once you click the `Edit page` button on the associated wiki page. It can also be done through a local copy of the wiki by modifying the md/mdx file.

### Adding new content

Adding new content is a bit more involved then modifying new content as you have to create the required folder if needed and then add the new files into `astro.config.mjs`.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:3000`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

### 👀 Want to learn more about Asto/Starlight?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

## Opening a Pull Request

Once you have created your changes and committed them to your local repository you should open a pull request with the information about what you have added. This PR should use the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for the PR title to help us know what it is about (most changes will be feat/fit).
