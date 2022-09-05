<script setup lang="ts">
import type { CardData } from '~/data/CardData'

const { t } = useI18n()

document.title = '链接 | SoCoding'

const data: CardData[] = [
  {
    title: '软协 | SoCoding OJ',
    description: 'SoCoding 在线评测系统',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '//oj.socoding.cn' },
    ],
  },
  {
    title: '软协 | SoCoding Cloud',
    description: 'SoCoding 在线存储服务',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '//cloud.socoding.cn' },
    ],
  },
  {
    title: '软协 | SoCoding Puzzle',
    description: 'SoCoding 在线解密平台',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '//puzzle.socoding.cn' },
    ],
  },
  {
    title: '软协 | SoCoding Status',
    description: 'SoCoding 公网服务状态',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '//status.socoding.cn' },
    ],
  },
  {
    title: '友链 | 0xFFFF 搬砖技术社区',
    description: '这是一个很棒的技术交流平台和学习平台哦~',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '//0xffff.one' },
    ],
  },

]
</script>

<template>
  <Card
    v-for="(it, i) in data" :key="i" :title="t(it.title)" :description="t(it.description)" :action="it.action"
    :delay="i"
  />

  欢迎加入我们的友链，通过 <a href="mailto:board@socoding.cn">board@socoding.cn</a> 联系我们
</template>
