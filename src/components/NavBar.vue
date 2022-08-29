<script setup lang="ts">
import { toggleDark } from '~/composables'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav text-xl>
    <ToolTipsProvider>
      <animate-component duration-300 :delay="0">
        <ToolTip :description="t('button.home')">
          <RouterLink class="icon-btn mx-2" to="/" :title="t('button.home')">
            <div i-carbon-home />
          </RouterLink>
        </ToolTip>
      </animate-component>
      <animate-component duration-300 :delay="1">
        <ToolTip :description="t('button.docs')">
          <RouterLink class="icon-btn mx-2" to="/docs" :title="t('button.links')">
            <div i-carbon-book />
          </RouterLink>
        </ToolTip>
      </animate-component>
      <animate-component duration-300 :delay="2">
        <ToolTip :description="t('button.links')">
          <RouterLink class="icon-btn mx-2" to="/links" :title="t('button.links')">
            <div i-carbon-link />
          </RouterLink>
        </ToolTip>
      </animate-component>
      <animate-component duration-300 :delay="3">
        <ToolTip :description="t('button.about')">
          <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
            <div i-carbon-information />
          </RouterLink>
        </ToolTip>
      </animate-component>
      <animate-component duration-300 :delay="4">
        <!-- <ToolTip :description="t('button.tools')">
        <RouterLink class="icon-btn mx-2" to="/tools" :title="t('button.tools')">
          <div i-carbon-tool-kit />
        </RouterLink>
      </ToolTip> -->

        <ToolTip :description="t('button.toggle_dark')">
          <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
            <div i="carbon-sun dark:carbon-moon" />
          </button>
        </ToolTip>
      </animate-component>
      <animate-component duration-300 :delay="5">
        <ToolTip :description="t('button.toggle_langs')">
          <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
            <div i-carbon-language />
          </a>
        </ToolTip>
      </animate-component>
    </ToolTipsProvider>
  </nav>
</template>
