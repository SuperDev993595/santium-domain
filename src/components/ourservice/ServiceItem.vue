<script setup lang="ts">
const props = defineProps<{
  title?: string
  subTitle?: string
  subTitleIcon?: string
  class?: string
}>()
</script>
<template>
  <div
    :class="['w-full h-full', props.class]"
    class="lg:justify-start lg:items-start lg:text-left justify-center items-center text-center px-[50px] lg:px-[30px] pb-[40px] lg:pb-[50px] pt-[20px] lg:pt-[50px]"
  >
    <div class="text-[32px] pb-[10px] text-white hidden lg:block x-font-large">
      {{ title }}
    </div>
    <div
      class="flex font-bold items-center py-[20px] text-white lg:justify-start lg:items-start lg:text-left justify-center items-center text-center"
    >
      <img
        class="w-[48px] lg:w-[30px] h-[48px] lg:h-[30px] !mr-[30px] lg:!mr-0 object-cover x-icon-80"
        v-if="props.subTitleIcon"
        alt="gig"
        :src="subTitleIcon"
        loading="lazy"
      />
      <span class="pl-[20px] text-[24px] lg:text-[46px] lg:text-[26px] x-font-medium">
        {{ subTitle }}
      </span>
    </div>
    <slot></slot>
  </div>
</template>
