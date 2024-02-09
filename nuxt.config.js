export default defineNuxtConfig({
  css: ["@/assets/css/roboto.css", "@/assets/css/main.css"],

  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss", '@nuxtjs/seo',

    [
      "@storyblok/nuxt",
      {
        accessToken:'QyhbKwwwkYgsE8226xrqaAtt',
        apiOptions: {
          region: "", // Set 'US" if your space is created in US region (EU default)
        },
      },
    ],
  ],

  ssr: process.env.NUXT_PUBLIC_NODE_ENV === "production" ? true : false,

  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
    },
  },

  site: {
    url: process.env.URL,
    name: 'Website Name',
    description: 'Website Description',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  }
});
