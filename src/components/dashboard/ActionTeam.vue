<template>
  <div
    ref="root"
    :class="[
      'transition-opacity duration-700',
      visible
        ? 'animate-[fade-diagonal-in-right2left-up_1s_cubic-bezier(0.4,0,0.2,1)_both]'
        : 'opacity-0',
    ]"
  >
    <div
      class="w-full font-bold text-white text-[20px] lg:text-[44px] text-left tracking-[4px] leading-[normal] pt-20"
    >
      Une équipe d’action
    </div>
    <div
      class="p-0 text-[12px] lg:text-[18px] tracking-[0] leading-[20px] lg:leading-normal lg:pt-8 pt-4 x-font-normal x-normal-leading"
    >
      <p class="pb-4 lg:pb-8">
        Chez Santium, nous concevons des expériences digitales sur-mesure, pensées pour sublimer
        votre image et propulser votre visibilité.
      </p>
      <p class="pb-4 lg:pb-8">
        Stratégie, design, performance : nous orchestrons l’ensemble avec rigueur et précision.
      </p>
      <p class="font-bold">
        Prenez contact dès maintenant et confiez votre projet à des experts dédiés à votre succès.
      </p>
    </div>
    <div class="hidden lg:flex justify-center py-20">
      <button
        variant="outline"
        class="group w-[448px] h-[83px] rounded-[9px] border-4 border-solid border-white bg-transparent hover:bg-white hover:text-black transition-colors cursor-pointer"
        @click="sendEmail"
      >
        <span
          class="font-medium text-white text-[28px] text-center tracking-[0] leading-[normal] group-hover:text-black"
        >
          ÉCRIVEZ-NOUS!
        </span>
      </button>
    </div>
  </div>
</template>

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

const sendEmail = () => {
  window.open('mailto:hello@agencesantium.com', '_blank')
}
</script>
