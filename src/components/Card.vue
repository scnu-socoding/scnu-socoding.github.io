<script setup lang="ts">
import type { Action } from '~/data/CardData'

const { t } = useI18n()

defineProps<{
  title: string
  description?: string
  action?: Array<Action>
  fold?: { label: string; content: string }
  delay?: number
}>()

</script>

<template>
  <pure-card :title="title" :delay="delay" ma>
    <template #header-extra>
      <div flex>
        <a v-for="(a, i) of action" :key="i" flex btn text-sm ml-2 :href="a.url" :title="t(a.label)" target="_blank">
          <div display-none sm:block mr-1>{{ t(a.label) }}</div>
          <div :class="a.icon" />
        </a>
      </div>
    </template>
    <p p-4 bg-zinc-50 dark:bg-zinc-900>
      {{ description }}
    </p>
    <template #footer>
      <details v-if="fold" p-4>
        <summary>
          {{ fold.label }}
        </summary>
        {{ fold.content }}
      </details>
    </template>
  </pure-card>
</template>
