<script setup lang="ts">
import MateCard from '@/components/card/MateCard.vue'
import RedEmptyCard from '@/components/card/RedEmptyCard.vue'

import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(
  defineProps<{
    imageSrc: string
    animation?: string
  }>(),
  {
    animation: 'fade-diagonal-in-top2bottom',
  },
)

const root = ref<HTMLElement | null>(null)
const visible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        visible.value = true
        observer?.disconnect() // Only animate once
      }
    },
    { threshold: 0.2 },
  )
  if (root.value) {
    observer.observe(root.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div
    class="!ml-[20px] x-margin-top--700"
    ref="root"
    :class="[
      'transition-opacity duration-700',
      visible ? `animate-[${props.animation}_1s_cubic-bezier(0.4,0,0.2,1)_both]` : 'opacity-0',
    ]"
  >
    <div class="absolute z-10">
      <MateCard :imageSrc="imageSrc" />
    </div>
    <div class="pl-[220px] pt-[20px]">
      <RedEmptyCard />
    </div>
  </div>
</template>
