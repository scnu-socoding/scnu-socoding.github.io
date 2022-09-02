<script setup lang="ts">
import NavBar from '~/components/NavBar.vue'
import { isDark } from '~/composables'

const { t } = useI18n()

</script>

<template>
  <div lg:flex lg:justify-between lg:mx-36>
    <div text-3xl mb-1rem>
      <animate-component duration-300>
        <a href="/">
          <ToolTipsProvider>
            <ToolTip :description="t('web-name')">
              <img :class="isDark?'dark-filter':''" src="../../public/img/icons/banner.svg" width="160">
            </ToolTip>
          </ToolTipsProvider>
        </a>
      </animate-component>
    </div>
    <NavBar lg:text-3xl />
  </div>
</template>

<style scoped>

.dark-filter  {
  filter: invert(0.93) hue-rotate(180deg) !important;
}

</style>
