<script setup lang="ts">
import type { CardData } from '~/data/CardData'

const { t } = useI18n()

if (document)
  document.title = '链接 | SoCoding'

const data: CardData[] = [
  {
    title: '软协 | SoCoding OJ',
    description: 'SoCoding 在线评测系统',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '//oj.socoding.cn' },
    ],
    target: '_blank',
  },
  {
    title: '软协 | SoCoding Cloud',
    description: 'SoCoding 在线存储服务',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '//cloud.socoding.cn' },
    ],
    target: '_blank',
  },
  {
    title: '软协 | SoCoding Puzzle',
    description: 'SoCoding 在线解密平台',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '//puzzle.socoding.cn' },
    ],
    target: '_blank',
  },
  {
    title: '软协 | SoCoding Status',
    description: 'SoCoding 公网服务状态',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '//status.socoding.cn' },
    ],
    target: '_blank',
  },
  {
    title: '友链 | 0xFFFF 搬砖技术社区',
    description: '这是一个很棒的技术交流平台和学习平台哦~',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '//0xffff.one' },
    ],
    target: '_blank',
  },

]
</script>

<template>
  <Card
    v-for="(it, i) in data" :key="i" :title="t(it.title)" :description="t(it.description)" :action="it.action"
    :delay="i" :target="it.target"
  />
</template>
