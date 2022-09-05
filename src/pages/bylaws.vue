<script setup lang="ts">
import links from '~/data/links'
import { isDark } from '~/composables'
const { t } = useI18n()

document.title = '协会章程 | SoCoding'

window.onresize = window.onload = () => {
  const iframe = document.getElementsByTagName('iframe')[0]
  if (iframe && iframe.contentWindow)
    iframe.style.height = `${iframe.contentWindow.document.body.scrollHeight.toString()}px`
}
</script>

<template>
  <div max-w-lg ma lg:mt-4rem p-2xl lg:p-0 class="animate-fadein-shift-y--2-1000" />
  <iframe
    :class="(isDark?'dark-filter ':'')+'animate-fadein-shift-y--2-1000'"
    style="overflow:hidden;"
    scrolling="no"
    onload="this.height=this.contentWindow.document.body.scrollHeight"
    onresize="this.height=this.contentWindow.document.body.scrollHeight"
    allowTransparency="true"
    src="/static/bylaws.html" width="100%" frameborder="0"
    sandbox="allow-same-origin allow-top-navigation allow-forms allow-scripts allow-popups"
  />

  <div text-xl sm:text-2xl lg:text-3xl my-2xl flex justify-center animate-fade-in animate-count-1>
    <ToolTipsProvider :gap="6">
      <ToolTip v-for="(it, i) in links" :key="i" :description="t(it.description)">
        <a :href="it.url" icon-btn :class="it.icon" />
      </ToolTip>
    </ToolTipsProvider>
  </div>
</template>

<style scoped>
.dark-filter  {
  filter: invert(0.93) hue-rotate(180deg) !important;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
