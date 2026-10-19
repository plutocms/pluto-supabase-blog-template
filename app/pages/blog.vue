<script setup lang="ts">
// The public site uses the site scope. It has its own language, separate
// from the admin language of a signed-in user. The texts are in
// i18n/locales/<code>.json under `site.*`.
const { t, d } = usePlutoSiteI18n();

useHead({
  title: () => t("site.blog.pageTitle"),
});

const { posts } = await usePost();

function excerpt(content: string | null, length = 160): string {
  const plain = richtextToPlainText(content);
  if (!plain) return t("site.blog.noContent");
  return plain.length > length ? `${plain.slice(0, length)}…` : plain;
}

function formatDate(value: string): string {
  return d(value, { year: "numeric", month: "long", day: "numeric" });
}
</script>

<template>
  <div>
    <header class="bg-slate-400 dark:bg-slate-950 py-20 px-4">
      <div class="text-center space-y-6">
        <UBadge label="Template" icon="i-lucide-star" />

        <h1 class="text-4xl font-bold text-center text-white">
          {{ t("site.blog.heading") }}
        </h1>

        <UAlert
          color="neutral"
          variant="subtle"
          description="npx create-pluto@latest my-blog -t supabase-blog"
          icon="i-lucide-terminal"
          class="mx-auto max-w-lg text-sm font-mono"
        />
      </div>
    </header>

    <main>
      <Container class="py-8 max-w-full">
        <section class="py-8 flex flex-col gap-y-6">
          <h2 class="text-2xl font-bold">{{ t("site.blog.posts") }}</h2>

          <div v-if="!posts?.length" class="text-center text-gray-500 py-16">
            {{ t("site.blog.empty") }}
          </div>

          <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <article
              v-for="post in posts"
              :key="post.id"
              class="group/post relative border border-gray-300/10 rounded-2xl p-4 flex flex-col gap-y-2 transition-all hover:bg-white/5 dark:hover:bg-slate-800/50 hover:border-white/20"
            >
              <!-- Post Link -->
              <NuxtLink
                :to="`/post/${post.slug}`"
                class="absolute inset-0 z-10"
              />

              <h3
                class="text-lg font-semibold leading-tight group-hover/post:text-primary"
              >
                {{ post.title }}
              </h3>

              <p class="text-sm text-gray-500">
                {{ formatDate(post.created_at) }}
              </p>

              <p class="text-sm text-gray-500">
                {{ excerpt(post.content) }}
              </p>
            </article>
          </div>
        </section>
      </Container>
    </main>
  </div>
</template>
