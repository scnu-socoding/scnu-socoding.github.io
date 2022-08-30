<script setup lang="ts">

document.title = 'PV | SoCoding'

function createScript(src: string, callback?: () => void) {
  const oScript = document.createElement('script')
  oScript.type = 'text/javascript'
  oScript.src = src
  document.body.appendChild(oScript)
  if (callback)
    oScript.addEventListener('load', callback)
}

createScript('//cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js', () => {
  createScript('//cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js', () => {
    // eslint-disable-next-line no-new
    new DPlayer({
      container: document.getElementById('dplayer'),
      video: {
        url: '//cdn.jsdelivr.net/gh/scnu-socoding/static/media/SoCoding-2022-PV-head-1080p-low/play/playlist.m3u8',
        type: 'hls',
        pic: '//cdn.jsdelivr.net/gh/scnu-socoding/static/media/SoCoding-2022-PV-head-1080p-low/SoCoding-2022-PV-head-1080p-low.jpg',
      },
      loop: true,
      preload: 'auto',
      autoplay: true,
    })
  })
})

function openBilibili() {
  window.open('//www.bilibili.com/video/BV1cG411578F')
}

</script>

<template>
  <div
    ma lg:mt-4rem
    class="my-video bg-img animate-fadein-shift-y--2-1000"
  >
    <div id="dplayer" />
  </div>
  <br>

  <button btn text-sm m="3 t8" @click="openBilibili()">
    关注烧风喵，关注烧风谢谢喵~
  </button>
</template>

<style scoped>

  @media screen and (min-width: 1024px) {
    .my-video   {
      width: 60%;
    }
  }

  @media screen and (max-width: 1024px) {
    .my-video   {
      width: 90%;
    }
  }
</style>

<route lang="yaml">
meta:
  layout: home
</route>
