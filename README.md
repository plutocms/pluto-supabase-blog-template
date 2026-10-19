# Pluto Supabase Blog Template

> [!WARNING]
> This is a work in progress. Expect breaking changes until stable version.

This is a simple blog template built with Nuxt 3 + Pluto CMS. It provides a basic structure for a blog, including a post listing page and individual post pages, backed by the `@plutocms/supabase-blog` layer's post admin (create, edit, list, delete with a rich text editor).

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Styling

This app owns the only Tailwind build. Pluto layers do not register their own. Keep these
three imports at the start of `app/assets/css/tailwind.css`, and add your own theme after
them:

```css
@import 'tailwindcss';
@import '@nuxt/ui';
@import '#build/pluto.css';
```

`#build/pluto.css` brings in the CSS of every Pluto layer, including the admin theme. The
admin keeps its own palette, so your site theme does not change it.

## Translation

The admin is in English and Brazilian Portuguese. Each admin picks a language on the
Settings page.

The public site has its own language, separate from the admin language. This template
shows how to use it:

- Put your texts in `i18n/locales/<code>.json`, under the `site.*` keys. One file per
  language, with the same keys in each file.
- In a page or component, call `usePlutoSiteI18n()`. Use `t('site.…')` for text and
  `d(date, options)` for dates.
- `plutoI18n.siteLocale` in `nuxt.config.ts` sets the language before a visitor picks one.
- The language switch in `app/components/Navbar.vue` calls `setLocale(code)`. The choice is
  kept in the `pluto-site-locale` cookie.

To add a language, add one `i18n/locales/<code>.json` file.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
