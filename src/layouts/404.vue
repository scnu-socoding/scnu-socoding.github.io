<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()

function refresh() {
  window.location.replace(`${window.location.pathname}?t=${Date.now()}`)
}
</script>

<template>
  <main class="px-4 pt-10 text-center text-gray-700 dark:text-gray-200  flex flex-col h-full">
    <div flex-1>
      <Header />
      <main p="x4 y10" text="center teal-700 dark:gray-200">
        <div text-4xl max-w-lg ma lg:mt-4rem p-2xl lg:p-0 class="animate-fadein-shift-y--2-1000">
          <div i-carbon-warning inline-block />
        </div>
        <div class="animate-fadein-shift-y--2-500">
          {{ t('not-found') }}
        </div>
        <button btn text-sm m="3 t8" @click="router.back()">
          {{ t('button.back') }}
        </button>
        <button btn text-sm m="3 t8" @click="refresh()">
          {{ t('button.refresh') }}
        </button>
        <RouterView />
        <div />
      </main>
    </div>
    <Footer />
  </main>
</template>
