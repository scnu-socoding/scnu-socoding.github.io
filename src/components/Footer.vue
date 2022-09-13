<script setup lang="ts">
import SakanaWidget from 'sakana-widget'

setTimeout(() => {
  new SakanaWidget({ character: 'chisato' }).mount('#chisato-widget')
  new SakanaWidget({ character: 'takina' }).mount('#takina-widget')
})
</script>

<template>
  <div id="chisato-widget" class="chisato" />
  <div id="takina-widget" class="takina" />
  <footer py-xl>
    <animate-component duration-300 :delay="0">
      Copyright © {{ new Date().getFullYear() }} SCNU SoCoding
    </animate-component>
  </footer>
</template>

<style scoped>

@media screen and (min-width: 1024px) {
  .chisato{
    position: fixed;
    left: 24px;
    bottom: 24px;
  }

  .takina{
    position: fixed;
    right: 24px;
    bottom: 24px;
  }
}

@media screen and (max-width: 1024px) {
  .chisato{
    display: none;
  }

  .takina{
    display: none;
  }
}
</style>
