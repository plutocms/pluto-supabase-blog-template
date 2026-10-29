<script setup lang="ts">
// The preview of the post editor, in Markdown mode. It replaces the default
// preview of Pluto, so the preview looks like `pages/posts/[slug].vue`. Keep the
// two in step. `data-pluto-post-body` marks the body, so the outline can scroll
// to a heading.
const props = defineProps<{
  contentType: string;
  /** The fields of the post, without the body. */
  item: Record<string, unknown>;
  /** The body as sanitized HTML. */
  html: string;
}>();

const text = (value: unknown) => (typeof value === "string" ? value : "");

const date = computed(() => {
  const value = text(props.item.createdAt) || text(props.item.created_at);
  return value
    ? new Date(value).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
});
</script>

<template>
  <UContainer class="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
    <article class="max-w-3xl mx-auto flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100">
          {{ text(item.title) }}
        </h1>

        <p class="text-sm text-gray-500 dark:text-gray-400">{{ date }}</p>
      </div>

      <PlutoProse
        :content="html"
        format="html"
        class="text-gray-700 dark:text-gray-300"
        data-pluto-post-body
      >
        <template #empty>
          <p class="text-gray-500 dark:text-gray-400">No content yet.</p>
        </template>
      </PlutoProse>
    </article>
  </UContainer>
</template>
