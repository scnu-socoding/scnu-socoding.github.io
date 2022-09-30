<script setup lang="ts">
defineProps<{
  name: string
  link?: string
  avatar: string
  cla?: string
}>()
</script>

<template>
  <a :href="link" :title="name">
    <img :src="avatar" :alt="name" hover:shadow-lg transition-shadow :class="cla || 'rounded-1/2 w-3rem h-3rem'">
  </a>
</template>
