// Point PLUTO_SUPABASE_BLOG_PATH at a local checkout (e.g.
// `../supabase-blog`) to test unpublished changes; unset, it resolves to
// the published npm package.
const supabaseBlogLayer =
  process.env.PLUTO_SUPABASE_BLOG_PATH || "@plutocms/supabase-blog";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [[supabaseBlogLayer, { install: true }]],

  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css"],

  /*
   * The language of the public site before a visitor picks one. The admin
   * has its own language per user. See "Translation" in README.md.
   */
  plutoI18n: {
    siteLocale: "en",
  },

  /*
   * Disable ESLint inherited from @plutocms/supabase-blog.
   * You can enable it by deleting this line.
   */
  eslint: false,
});
