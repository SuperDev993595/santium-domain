<script setup lang="ts">
import BlackInfoCard from './BlackInfoCard.vue'
import ContentCard2 from './ContentCard2.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    imageSrc: string
    cardTitle: string
    cardTop?: string
    xPadding?: string
  }>(),
  {
    cardTop: '0px',
    xPadding: '0px',
  },
)

const isXL = ref(window.innerWidth >= 1280)
function handleResize() {
  isXL.value = window.innerWidth >= 1280
}
onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))

const sectionPaddingLeft = computed(() => (isXL.value ? '40px' : '50px'))
const sectionPaddingRight = computed(() => (isXL.value ? props.xPadding : '50px'))
</script>

<template>
  <div class="flex flex-col lg:flex-row w-full h-full py-5 justify-center items-center">
    <section
      class="pl-[30px] justify-center items-center flex lg:justify-end items-end scale-[0.4] lg:scale-[1] !mt-[-150px] lg:!mt-0 lg:pr-[80px]"
      :style="{ marginTop: props.cardTop }"
    >
      <div class="scale-at-x x-margin-right-220 x-margin-left-100">
        <BlackInfoCard :imageSrc="imageSrc" :title="cardTitle" />
      </div>
    </section>
    <section
      class="lg:pt-[40px] pl-[40px] lg:max-w-[800px] x-max-width"
      :style="{ paddingRight: sectionPaddingRight, paddingLeft: sectionPaddingLeft }"
    >
      <ContentCard2>
        <slot />
      </ContentCard2>
    </section>
  </div>
</template>
