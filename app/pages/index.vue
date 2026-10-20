<script setup lang="ts">
const { t } = usePlutoSiteI18n();

definePageMeta({
  layout: "welcome",
});

useHead({
  title: () => t("site.welcome.pageTitle"),
});
</script>

<template>
  <PlutoWelcomeSupabaseBlog />
</template>
