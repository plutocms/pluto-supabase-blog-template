import { plutoLayer } from "@plutocms/pluto/layers";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Set PLUTO_LOCAL_ROOT in .env to use local checkouts of the Pluto layers.
  // See "Develop with local layers" in README.md.
  extends: [plutoLayer("@plutocms/supabase-blog")],

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
