<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

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
    class="w-full h-full !mt-[-150px] lg:!mt-0"
    ref="root"
    :class="[
      'transition-opacity duration-700',
      visible
        ? `animate-[fade-diagonal-in-top2bottom_1s_cubic-bezier(0.4,0,0.2,1)_both]`
        : 'opacity-0',
    ]"
  >
    <div
      class="font-bold text-white text-center text-[12px] lg:text-[18px] tracking-wider x-font-normal"
    >
      <slot />
    </div>
  </div>
</template>
