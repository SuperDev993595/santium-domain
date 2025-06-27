<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(
  defineProps<{
    imageSrc: string
    title: string
    top?: string
    animation?: string
  }>(),
  {
    top: '-40px',
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
    class="w-full flex justify-center items-center"
    ref="root"
    :class="[
      'transition-opacity duration-700',
      visible ? `animate-[${props.animation}_1s_cubic-bezier(0.4,0,0.2,1)_both]` : 'opacity-0',
    ]"
  >
    <div class="w-[480px] lg:w-[860px] px-[20px] justify-center items-center x-width">
      <div
        class="flex w-full text-white text-[16px] lg:text-[36px] py-[40px] justify-center items-center text-center x-font-medium"
      >
        <img
          :src="imageSrc"
          loading="lazy"
          class="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] object-contain"
          alt="💡"
        />
        <!-- :style="`margin-top: ${props.top}`" -->
        <div class="pl-[10px]">{{ title }}</div>
      </div>
      <div
        class="text-white text-[12px] lg:text-[24px] justify-center text-center x-font-normal x-normal-leading"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
