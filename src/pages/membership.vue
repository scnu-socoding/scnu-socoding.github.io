<script setup lang="ts">
import partnersData from '~/data/partners'
import membersData from '~/data/members'

const coreMembers = membersData.filter(it => it.belongs.includes('委员会'))
const allMembers = membersData.filter(it => it.belongs.includes('会员'))

const { t } = useI18n()

if (document)
  document.title = '成员们 | SoCoding'

</script>

<template>
  <Accordion :name="'membership'" :delay="2" default-row="core" max-w-5xl ma>
    <AccordionRow name="core" :title="t('membership.core-members')">
      <p color-zinc-300 dark:color-zinc-600 pb-2>
        按照姓名拼音排序，如有遗漏请联系 <a href="mailto:hr@socoding.cn">hr@socoding.cn</a>
      </p>
      <ToolTipsProvider :gap="1">
        <ToolTip v-for="(it, i) in coreMembers" :key="i" :description="it.name">
          <Avatar :avatar="it.avatar" :name="it.name" :link="`/members/${it.englishName}`" />
        </ToolTip>
      </ToolTipsProvider>
    </AccordionRow>
    <AccordionRow name="members" :title="t('membership.members')">
      <p color-zinc-300 dark:color-zinc-600 pb-2>
        按照姓名拼音排序，如有遗漏请联系 <a href="mailto:hr@socoding.cn">hr@socoding.cn</a>
      </p>
      <ToolTipsProvider :gap="1">
        <ToolTip v-for="(it, i) in allMembers" :key="i" :description="it.name">
          <Avatar :avatar="it.avatar" :name="it.name" :link="`/members/${it.englishName}`" />
        </ToolTip>
      </ToolTipsProvider>
    </AccordionRow>
    <AccordionRow name="partners" :title="t('membership.partners')">
      <p color-zinc-300 dark:color-zinc-600 pb-2>
        我们很高兴与你们一起，联系 <a href="mailto:board@socoding.cn">board@socoding.cn</a>
      </p>
      <ToolTipsProvider :gap="1">
        <ImageCard
          v-for="(it, i) in partnersData" :key="i" :title="t(it.title)" :image-u-r-l="it.url"
          :action="it.action" :fold="it.fold" :delay="i" style="width: 100%"
        />
      </ToolTipsProvider>
    </AccordionRow>
  </Accordion>
</template>
