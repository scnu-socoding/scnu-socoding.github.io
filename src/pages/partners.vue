<script setup lang="ts">
import type { ImageCardData } from '~/data/CardData'

const { t } = useI18n()

document.title = '合作伙伴 | SoCoding'

const data: ImageCardData[] = [
  {
    title: '合作伙伴 | Cocos 游戏引擎',
    url: '/img/partners/cocos.png',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '//www.cocos.com/?media_source=shao' },
    ],
  },
]
</script>

<template>
  <ImageCard
    v-for="(it, i) in data"
    :key="i"
    :title="t(it.title)"
    :image-u-r-l="it.url"
    :action="it.action"
    :fold="it.fold"
    :delay="i"
  />
</template>
