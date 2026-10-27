<script setup lang="ts">
const { t } = usePlutoSiteI18n();

const route = useRoute();

interface Post {
  id: number;
  title: string;
  html: string;
  createdAt: string;
}

// One published post from the public API of Pluto. `html` is the body,
// rendered and sanitized on the server. A draft or a missing slug gives an
// error.
const { data, error } = await usePlutoPublicItem<Post>(
  "post",
  String(route.params.slug),
);
const post = computed(() => data.value?.data);

useHead({
  title: () =>
    error.value
      ? t("site.post.notFoundTitle")
      : String(post.value?.title || t("site.post.pageTitle")),
});

function formatDate(value: string): string {
  return new Date(value).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<template>
  <NotFoundPost v-if="error" />

  <UContainer v-else class="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
    <article class="max-w-3xl mx-auto flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100">
          {{ post?.title }}
        </h1>

        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ post?.createdAt ? formatDate(post.createdAt) : "" }}
        </p>
      </div>

      <PlutoProse :content="post?.html" format="html" class="text-gray-700 dark:text-gray-300">
        <template #empty>
          <p class="text-gray-500 dark:text-gray-400">No content yet.</p>
        </template>
      </PlutoProse>
    </article>
  </UContainer>
</template>
