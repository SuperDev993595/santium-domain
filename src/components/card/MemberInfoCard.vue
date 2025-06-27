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
  <div class="lg:flex w-full p-5">
    <section
      className="w-full lg:w-1/2 lg:pl-[30px] flex justify-center items-center lg:justify-end lg:items-end scale-[0.4] lg:scale-[1] !mt-[-150px] lg:!mt-0 lg:pr-[90px]"
    >
      <div class="scale-at-x x-margin-right-220">
        <MemberImageCard :imageSrc="imageSrc" :animation="animationClasses[0]" />
      </div>
    </section>

    <section
      class="w-full lg:w-1/2 pt-[20px] lg:text-left text-center lg:pl-0 lg:max-w-[800px] px-[10px] x-max-width"
    >
      <ContentCard :title="title" :animation="animationClasses[1]">
        <slot />
      </ContentCard>
    </section>
  </div>
</template>
