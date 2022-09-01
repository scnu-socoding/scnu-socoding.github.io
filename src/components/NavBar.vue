<script setup lang="ts">
import { toggleDark } from '~/composables'
const { t } = useI18n()
// const { t, availableLocales, locale } = useI18n()

// const toggleLocales = () => {
//   // change to some real logic
//   const locales = availableLocales
//   locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
// }
</script>

<template>
  <nav text-xl>
    <ToolTipsProvider>
      <ToolTip :description="t('button.home')">
        <RouterLink class="icon-btn mx-2" to="/" :title="t('button.home')">
          <animate-component duration-300 :delay="0">
            <div i-ri-home-2-line />
          </animate-component>
        </RouterLink>
      </ToolTip>
      <ToolTip :description="t('button.docs')">
        <RouterLink class="icon-btn mx-2" to="/docs" :title="t('button.links')">
          <animate-component duration-300 :delay="1">
            <div i-ri-book-read-line />
          </animate-component>
        </RouterLink>
      </ToolTip>

      <ToolTip :description="t('button.links')">
        <RouterLink class="icon-btn mx-2" to="/links" :title="t('button.links')">
          <animate-component duration-300 :delay="2">
            <div i-ri-links-line />
          </animate-component>
        </RouterLink>
      </ToolTip>

      <ToolTip :description="t('button.about')">
        <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
          <animate-component duration-300 :delay="3">
            <div i-ri-information-line />
          </animate-component>
        </RouterLink>
      </ToolTip>

      <!-- <ToolTip :description="t('button.tools')">
        <RouterLink class="icon-btn mx-2" to="/tools" :title="t('button.tools')">
          <div i-carbon-tool-kit />
        </RouterLink>
      </ToolTip> -->

      <ToolTip :description="t('button.toggle_dark')">
        <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
          <animate-component duration-300 :delay="4">
            <div i="ri-sun-line dark:ri-moon-line" />
          </animate-component>
        </button>
      </ToolTip>

      <!-- <ToolTip :description="t('button.toggle_langs')">
        <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
          <animate-component duration-300 :delay="5">
            <div i-carbon-language />
          </animate-component>
        </a>
      </ToolTip> -->
    </ToolTipsProvider>
  </nav>
</template>
