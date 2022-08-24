<script setup lang="ts">
import * as coreMembers from '~/data/core-members.json'
import * as members from '~/data/members.json'

const { t } = useI18n()

</script>

<template>
  <Accordion :name="'membership'" :delay="0" default-row="core" max-w-5xl ma>
    <AccordionRow name="core" :title="t('membership.core-members')">
      <p color-zinc-300 dark:color-zinc-600 pb-2>
        按照姓名拼音排序，如有遗漏请联系 hr@socoding.cn
      </p>
      <ToolTipsProvider :gap="1">
        <ToolTip v-for="(it, i) in coreMembers.data" :key="i" :description="it.name">
          <Avatar :avatar="it.avatar" :name="it.name" :link="`/member/?name=${it.name}`" />
        </ToolTip>
      </ToolTipsProvider>
    </AccordionRow>
    <AccordionRow name="members" :title="t('membership.members')">
      <p color-zinc-300 dark:color-zinc-600 pb-2>
        按照姓名拼音排序，如有遗漏请联系 hr@socoding.cn
      </p>
      <ToolTipsProvider :gap="1">
        <ToolTip v-for="(it, i) in members.data" :key="i" :description="it.name">
          <Avatar :avatar="it.avatar" :name="it.name" :link="`/member/?name=${it.name}`" />
        </ToolTip>
      </ToolTipsProvider>
    </AccordionRow>
  </Accordion>
</template>
