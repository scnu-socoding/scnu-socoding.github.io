<script setup lang="ts">
import links from '~/data/links'
import { isDark } from '~/composables'

const { t } = useI18n()

if (document)
  document.title = 'SCNU SoCoding'

</script>

<template>
  <div max-w-full ma lg:mt-4rem :class="(isDark ? 'dark-filter ' : '') + 'bg-img animate-fadein-shift-y--2-1000'" />
  <div style="height: 20pt;" />

  <div text-xl sm:text-2xl lg:text-3xl my-2xl flex justify-center animate-fade-in animate-count-1>
    <ToolTipsProvider :gap="6">
      <ToolTip v-for="(it, i) in links" :key="i" :description="t(it.description)">
        <animate-component duration-300 :delay="i">
          <a :href="it.url" icon-btn :class="it.icon" />
        </animate-component>
      </ToolTip>
    </ToolTipsProvider>
  </div>

  <span class="flag" />
</template>

<style scoped>
.dark-filter {
  filter: invert(0.93) hue-rotate(180deg) !important;
}

@media screen and (min-width: 1024px) {
  .bg-img {
    height: 60%;
    background: url("/logo/socoding.svg") center;
    background-size: contain;
    background-repeat: no-repeat;
  }

}

@media screen and (max-width: 1024px) {
  .bg-img {
    height: 60%;
    background: url("/favicon.svg") center;
    background-size: contain;
    background-repeat: no-repeat;
  }
}

.flag::before {
  content: "big brother is watching you";
  font: bold 10%/1 monospace;
  font-family: var(--font-family-code);
  position: fixed;
  left: 10pt;
  bottom: 10pt;
  z-index: -1000;
  color: #fafafa
    /* Match the color of the texts w/ background. */
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
