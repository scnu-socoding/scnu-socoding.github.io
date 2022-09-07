<script setup lang="ts">
import links from '~/data/links'
import membersData from '~/data/members'

const { t } = useI18n()
const name = decodeURIComponent(location.search.split('?')[1])
const member = membersData.find(it => it.englishName === name || it.name === name)

const avatarPath = `/avatar/${member?.englishName.toLowerCase()}.png`

document.title = `${member?.name || '无此成员'} | SoCoding`
</script>

<template>
  <div max-w-lg ma lg:mt-4rem p-2xl lg:p-0 class="animate-fadein-shift-y--2-1000" />
  <div class="animate-fadein-shift-y--2-1000">
    <div v-if="member">
      <ToolTipsProvider :gap="1">
        <ToolTip :key="1" :description="member.name">
          <Avatar :avatar="avatarPath" :name="member.name" />
        </ToolTip>
      </ToolTipsProvider>
      <br>
      <p>{{ member.englishName }}</p>
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
