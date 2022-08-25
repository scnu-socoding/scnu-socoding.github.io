<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
import { isDark } from '~/composables'
const { locale } = useI18n()
locale.value = 'zh-CN'

useHead({
  title: 'SCNU SoCoding',
  meta: [
    { name: 'description', content: 'SCNU SoCoding —— 华南师范大学软件协会' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#121212' : '#ffffff'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
