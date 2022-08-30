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

</script>

<template>
  <div
    style="width:60%"
    ma lg:mt-4rem
    class="bg-img animate-fadein-shift-y--2-1000"
  >
    <div id="dplayer" />
  </div>
  <br>
  <a
    class="my-link" target="_blank"
    href="https://www.bilibili.com/video/BV1cG411578F"
  >关注烧风喵，关注烧风谢谢喵~</a>
</template>

<style scoped>
  .my-link{
    line-height: 1.75;
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: currentColor;
    color: var(--un-prose-links);
    font-weight: 500;
  }

  .my-link:hover{
    line-height: 1.75;
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: currentColor;
    color: #6DBB58;
    text-decoration: underline;
    font-weight: 700;
  }
</style>

<route lang="yaml">
meta:
  layout: home
</route>
