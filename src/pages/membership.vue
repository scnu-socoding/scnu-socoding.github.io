<script setup lang="ts">
import partnersData from '~/data/partners'
import membersData from '~/data/members'

const coreMembers = membersData.filter(it => it.belongs.includes('委员会'))
const techMembers = membersData.filter(it => it.belongs.includes('技术部'))
const publicityMembers = membersData.filter(it => it.belongs.includes('信宣部'))
const opMembers = membersData.filter(it => it.belongs.includes('运营部'))
const developmentMembers = membersData.filter(it => it.belongs.includes('发展组'))
const shannonMembers = membersData.filter(it => it.belongs.includes('香农先修班'))
const cocoMembers = membersData.filter(it => it.belongs.includes('椰风游戏开发社'))
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
    <AccordionRow name="part1" :title="t('membership.part1-members')">
      <Accordion :name="'part1'" :delay="2" default-row="" max-w-5xl ma>
        <AccordionRow name="tech" :title="t('membership.tech-members')">
          <p color-zinc-300 dark:color-zinc-600 pb-2>
            按照姓名拼音排序，如有遗漏请联系 <a href="mailto:hr@socoding.cn">hr@socoding.cn</a>
          </p>
          <ToolTipsProvider :gap="1">
            <ToolTip v-for="(it, i) in techMembers" :key="i" :description="it.name">
              <Avatar :avatar="it.avatar" :name="it.name" :link="`/members/${it.englishName}`" />
            </ToolTip>
          </ToolTipsProvider>
        </AccordionRow>
        <AccordionRow name="publicity" :title="t('membership.publicity-members')">
          <p color-zinc-300 dark:color-zinc-600 pb-2>
            按照姓名拼音排序，如有遗漏请联系 <a href="mailto:hr@socoding.cn">hr@socoding.cn</a>
          </p>
          <ToolTipsProvider :gap="1">
            <ToolTip v-for="(it, i) in publicityMembers" :key="i" :description="it.name">
              <Avatar :avatar="it.avatar" :name="it.name" :link="`/members/${it.englishName}`" />
            </ToolTip>
          </ToolTipsProvider>
        </AccordionRow>
        <AccordionRow name="operation" :title="t('membership.operation-members')">
          <p color-zinc-300 dark:color-zinc-600 pb-2>
            按照姓名拼音排序，如有遗漏请联系 <a href="mailto:hr@socoding.cn">hr@socoding.cn</a>
          </p>
          <ToolTipsProvider :gap="1">
            <ToolTip v-for="(it, i) in opMembers" :key="i" :description="it.name">
              <Avatar :avatar="it.avatar" :name="it.name" :link="`/members/${it.englishName}`" />
            </ToolTip>
          </ToolTipsProvider>
        </AccordionRow>
        <AccordionRow name="development" :title="t('membership.development-members')">
          <p color-zinc-300 dark:color-zinc-600 pb-2>
            按照姓名拼音排序，如有遗漏请联系 <a href="mailto:hr@socoding.cn">hr@socoding.cn</a>
          </p>
          <ToolTipsProvider :gap="1">
            <ToolTip v-for="(it, i) in developmentMembers" :key="i" :description="it.name">
              <Avatar :avatar="it.avatar" :name="it.name" :link="`/members/${it.englishName}`" />
            </ToolTip>
          </ToolTipsProvider>
        </AccordionRow>
      </Accordion>
    </AccordionRow>
    <AccordionRow name="part2" :title="t('membership.part2-members')">
      <Accordion :name="'part2'" :delay="2" default-row="" max-w-5xl ma>
        <AccordionRow name="shannon" :title="t('membership.shannon-members')">
          <p color-zinc-300 dark:color-zinc-600 pb-2>
            按照姓名拼音排序，如有遗漏请联系 <a href="mailto:hr@socoding.cn">hr@socoding.cn</a>
          </p>
          <ToolTipsProvider :gap="1">
            <ToolTip v-for="(it, i) in shannonMembers" :key="i" :description="it.name">
              <Avatar :avatar="it.avatar" :name="it.name" :link="`/members/${it.englishName}`" />
            </ToolTip>
          </ToolTipsProvider>
        </AccordionRow>
        <AccordionRow name="coco" :title="t('membership.coco-members')">
          <p color-zinc-300 dark:color-zinc-600 pb-2>
            按照姓名拼音排序，如有遗漏请联系 <a href="mailto:hr@socoding.cn">hr@socoding.cn</a>
          </p>
          <ToolTipsProvider :gap="1">
            <ToolTip v-for="(it, i) in cocoMembers" :key="i" :description="it.name">
              <Avatar :avatar="it.avatar" :name="it.name" :link="`/members/${it.englishName}`" />
            </ToolTip>
          </ToolTipsProvider>
        </AccordionRow>
      </Accordion>
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
