<script setup lang="ts">
import BlackEmptyCard from './BlackEmptyCard.vue'
import BlackImgCard from './BlackImgCard.vue'
import BlackImgContentCard from './BlackImgContentCard.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(
  defineProps<{
    imageSrc?: string
    title?: string
    type?: string
  }>(),
  {
    imageSrc: 'default-image-path-or-url.jpg', // your default value here
    type: 'type1',
    title: '',
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
    class="x-auto"
    ref="root"
    :class="[
      'transition-opacity duration-700',
      visible
        ? `animate-[fade-diagonal-in-bottom2top_1s_cubic-bezier(0.4,0,0.2,1)_both]`
        : 'opacity-0',
    ]"
  >
    <div class="absolute z-10 rotate-[0.20deg]">
      <component
        :is="props.type == 'type3' ? BlackImgContentCard : BlackImgCard"
        :imageSrc="props.imageSrc"
        :title="props.title"
      />
    </div>
    <div class="pl-[180px] pt-[25px]">
      <BlackEmptyCard />
    </div>
  </div>
</template>
