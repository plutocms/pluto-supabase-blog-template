<script setup lang="ts">
useHead({
  title: "Post",
});

const route = useRoute();

const { post, error } = await usePost(route.params.slug as string);

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
          {{ post?.created_at ? formatDate(post.created_at) : "" }}
        </p>
      </div>

      <PlutoProse :content="post?.content" class="text-gray-700 dark:text-gray-300">
        <template #empty>
          <p class="text-gray-500 dark:text-gray-400">No content yet.</p>
        </template>
      </PlutoProse>
    </article>
  </UContainer>
</template>
