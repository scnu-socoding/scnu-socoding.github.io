<script setup lang="ts">
import partnersData from '~/data/partners'

const { t } = useI18n()

if (document)
  document.title = '合作伙伴 | SoCoding'

</script>

<template>
  <ImageCard
    v-for="(it, i) in partnersData"
    :key="i"
    :title="t(it.title)"
    :image-u-r-l="it.url"
    :action="it.action"
    :fold="it.fold"
    :delay="i"
  />
</template>
