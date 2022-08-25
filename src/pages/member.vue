<script setup lang="ts">
import links from '~/data/links'
import * as members from '~/data/members.json'

const { t } = useI18n()

const name = decodeURIComponent(location.search.split('=')[1])
const member = members.data.find(it => it.name === name)

</script>

<template>
  <div max-w-lg ma lg:mt-4rem p-2xl lg:p-0 class="animate-fadein-shift-y--2-1000" />
  <div class="animate-fadein-shift-y--2-1000">
    <div v-if="member">
      <ToolTipsProvider :gap="1">
        <ToolTip :key="1" :description="member.name">
          <Avatar :avatar="member.avatar" :name="member.name" />
        </ToolTip>
      </ToolTipsProvider>
      <br>
      <p>{{ member.code }}</p>
    </div>
    <div v-else>
      没有此成员
    </div>
  </div>

  <div text-xl sm:text-2xl lg:text-3xl my-2xl flex justify-center animate-fade-in animate-count-1>
    <ToolTipsProvider :gap="6">
      <ToolTip v-for="(it, i) in links" :key="i" :description="t(it.description)">
        <a :href="it.url" icon-btn :class="it.icon" />
      </ToolTip>
    </ToolTipsProvider>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
