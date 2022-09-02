<script setup lang="ts">
import partnersData from '~/data/partners'
import * as coreMembers from '~/data/core-members.json'
import * as members from '~/data/members.json'

const { t } = useI18n()

document.title = '成员们 | SoCoding'

</script>

<template>
  <Accordion :name="'membership'" :delay="2" default-row="core" max-w-5xl ma>
    <AccordionRow name="core" :title="t('membership.core-members')">
      <p color-zinc-300 dark:color-zinc-600 pb-2>
        按照姓名拼音排序，如有遗漏请联系 hr@socoding.cn
      </p>
      <ToolTipsProvider :gap="1">
        <ToolTip v-for="(it, i) in coreMembers.data" :key="i" :description="it.name">
          <Avatar :avatar="`/avatar/${it.englishName.toLowerCase()}.png`" :name="it.name" :link="`/member?${it.englishName}`" />
        </ToolTip>
      </ToolTipsProvider>
    </AccordionRow>
    <AccordionRow name="members" :title="t('membership.members')">
      <p color-zinc-300 dark:color-zinc-600 pb-2>
        按照姓名拼音排序，如有遗漏请联系 hr@socoding.cn
      </p>
      <ToolTipsProvider :gap="1">
        <ToolTip v-for="(it, i) in members.data" :key="i" :description="it.name">
          <Avatar :avatar="`/avatar/${it.englishName.toLowerCase()}.png`" :name="it.name" :link="`/member?${it.englishName}`" />
        </ToolTip>
      </ToolTipsProvider>
    </AccordionRow>
    <AccordionRow name="partners" :title="t('membership.partners')">
      <p color-zinc-300 dark:color-zinc-600 pb-2>
        我们很高兴与你一起，联系 board@socoding.cn
      </p>
      <ToolTipsProvider :gap="1">
        <ImageCard
          v-for="(it, i) in partnersData"
          :key="i"
          :title="t(it.title)"
          :image-u-r-l="it.url"
          :action="it.action"
          :fold="it.fold"
          :delay="i"
          style="width: 100%"
        />
      </ToolTipsProvider>
    </AccordionRow>
  </Accordion>
</template>
