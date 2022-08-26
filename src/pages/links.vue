<script setup lang="ts">
import type { CardData } from '~/data/CardData'

const { t } = useI18n()

const data: CardData[] = [
  {
    title: 'SoCoding OJ',
    description: 'SoCoding 在线评测系统',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '//oj.socoding.cn' },
    ],
  },
  {
    title: 'SoCoding Cloud',
    description: 'SoCoding 在线存储服务',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '//cloud.socoding.cn' },
    ],
  },
  {
    title: 'SoCoding Status',
    description: 'SoCoding 公网服务状态',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '//status.socoding.cn' },
    ],
  },
  {
    title: '这是一个友联',
    description: '欢迎加入我们的友联，通过 board@socoding.cn 联系我们',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '' },
    ],
  },
]
</script>

<template>
  <Card
    v-for="(it, i) in data" :key="i" :title="t(it.title)" :description="t(it.description)" :action="it.action"
    :delay="i"
  />
</template>
