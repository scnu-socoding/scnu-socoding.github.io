<script setup lang="ts">
import links from '~/data/links'
import { isDark } from '~/composables'

const { t } = useI18n()

</script>

<template>
  <div
    v-if="!isDark"
    max-w-full
    ma lg:mt-4rem

    class="bg-img animate-fadein-shift-y--2-1000"
  />
  <div
    v-else
    max-w-full
    ma lg:mt-4rem

    class="bg-img-dark animate-fadein-shift-y--2-1000"
  />

  <div
    text-xl sm:text-2xl lg:text-3xl
    my-2xl
    flex justify-center
    animate-fade-in animate-count-1
  >
    <ToolTipsProvider :gap="6">
      <ToolTip
        v-for="(it, i) in links" :key="i"
        :description="t(it.description)"
      >
        <a :href="it.url" icon-btn :class="it.icon" />
      </ToolTip>
    </ToolTipsProvider>
  </div>
</template>

<style>
@media screen and (min-width: 1024px) {
  .bg-img {
      height: 60%;
      background: url("/logo/socoding.svg") center;
      background-size: contain;
      background-repeat: no-repeat;
  }
  .bg-img-dark {
    height: 60%;
    background: url("/logo/socoding-dark.svg") center;
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
.bg-img-dark {
    height: 60%;
    background: url("/favicon.svg") center;
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
