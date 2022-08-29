<script setup lang="ts">
import type { CardData } from '~/data/CardData'

const { t } = useI18n()

document.title = '文章 | SoCoding'

const data: CardData[] = [
  {
    title: '软协 | SoCoding 招新流程',
    description: '如果想加入我们，快来看看叭~',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '/recruitment' },
    ],
  },
  {
    title: '软协 | SoCoding 换届公示',
    description: '这是我们委员会的职务交付表~',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '/office' },
    ],
  },
  {
    title: '软协 | SoCoding 暂行章程',
    description: '这是我们重整后的第一部暂行章程',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '/bylaws' },
      { label: 'Download', icon: 'i-carbon-download', url: '../public/download/软件协会章程.pdf' }],
  },
  {
    title: '软协 | SoCoding Discord',
    description: '如果你知道什么是 Discord ，欢迎加入~',
    action: [
      { label: 'Go', icon: 'i-ri:discuss-line', url: 'https://discord.gg/FC3E84ssSF' },
    ],
  },
  {
    title: '软协 | SoCoding 网站主页',
    description: '我们刚刚建立了 SCNU SoCoding 的网站主页，欢迎大家访问~',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '/' }],
  },
]
</script>

<template>
  <Card
    v-for="(it, i) in data"
    :key="i"
    :title="t(it.title)"
    :description="t(it.description)"
    :action="it.action"
    :fold="it.fold"
    :delay="i"
  />
</template>
