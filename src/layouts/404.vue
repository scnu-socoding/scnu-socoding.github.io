<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()

function refresh() {
  window.location.replace(`${window.location.pathname}?t=${Date.now()}`)
}

const fileName = location.pathname.split('/').pop()
const isFile = fileName && fileName.toLowerCase().endsWith('.pdf')

if (isFile)
  document.title = `${fileName} | SoCoding`
else
  document.title = '页面找不到啦 | SoCoding'

function downloadThis() {
  if (isFile) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', location.href, true)
    xhr.responseType = 'blob'
    xhr.onload = function (e) {
      if (this.status === 200) {
        const blob = this.response
        const a = document.createElement('a')
        blob.type = 'application/octet-stream'
        const url = URL.createObjectURL(blob)

        a.href = url
        a.download = fileName
        a.click()
        window.URL.revokeObjectURL(url)
      }
    }
    setTimeout(() => { xhr.send() }, 0)
  }
}
</script>

<template>
  <main class="px-4 pt-10 text-center text-gray-700 dark:text-gray-200  flex flex-col h-full">
    <div flex-1>
      <Header />
      <main p="x4 y10" text="center teal-700 dark:gray-200">
        <div text-4xl max-w-lg ma lg:mt-4rem p-2xl lg:p-0 class="animate-fadein-shift-y--2-1000">
          <div v-if="!isFile" i-ri-file-warning-line inline-block />
          <div v-else i-ri-file-line inline-block />
        </div>
        <div class="animate-fadein-shift-y--2-500">
          {{ isFile?fileName:t('not-found') }}
        </div>
        <button btn text-sm m="3 t8" @click="router.back()">
          {{ t('button.back') }}
        </button>
        <button btn text-sm m="3 t8" @click="isFile?downloadThis():refresh()">
          {{ isFile?t('button.download'):t('button.refresh') }}
        </button>
        <RouterView />
        <div />
      </main>
    </div>
    <Footer />
  </main>
</template>
