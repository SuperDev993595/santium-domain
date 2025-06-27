<script setup lang="ts">
import MemberImageCard from '@/components/card/MemberImageCard.vue'
import ContentCard from '@/components/card/ContentCard.vue'
import { getAnimationClass } from '@/utils/animation'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
    imageSrc: string
    animationType?: string
  }>(),
  {
    animationType: 'image_down_content_down',
  },
)

const animationClasses = computed(() => getAnimationClass(props.animationType))
</script>

<template>
  <div class="flex flex-col lg:flex-row w-full p-5 lg:justify-center lg:items-center">
    <section
      class="lg:flex-col lg:justify-end lg:items-end lg:max-w-[880px] pt-[40px] !order-2 lg:!order-1 lg:text-left text-center lg:pl-[80px] lg:pr-[0px] px-[10px] lg:!ml-[-150px] x-max-width x-padding-left-0 x-margin-right-100"
    >
      <ContentCard :title="title" :animation="animationClasses[1]">
        <slot />
      </ContentCard>
    </section>
    <section
      class="pl-[50px] !order-1 lg:!order-2 flex justify-center items-center lg:justify-start lg:items-start lg:scale-[1] scale-[0.4] !mt-[-150px] lg:!mt-0"
    >
      <div class="scale-at-x x-margin-top-1100">
        <MemberImageCard :imageSrc="imageSrc" :animation="animationClasses[0]" />
      </div>
    </section>
  </div>
</template>
