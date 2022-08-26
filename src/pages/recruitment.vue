<script setup lang="ts">
import links from '~/data/links'
const { t } = useI18n()

document.title = '招新流程 | SoCoding'
</script>

<template>
  <div max-w-lg ma lg:mt-4rem p-2xl lg:p-0 class="animate-fadein-shift-y--2-1000" />
  <iframe
    class="animate-fadein-shift-y--2-1000"
    style="overflow:hidden; scrolling: no"
    allowTransparency="true"
    src="static/recruitment.html" width="100%" frameborder="0"
    onload="this.height=this.contentWindow.document.body.scrollHeight"
    onresize="this.height=this.contentWindow.document.body.scrollHeight"
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

<route lang="yaml">
meta:
  layout: home
</route>
