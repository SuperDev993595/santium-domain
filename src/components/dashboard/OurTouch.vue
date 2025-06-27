<template>
  <div
    ref="root"
    :class="[
      'transition-opacity duration-700',
      visible
        ? 'animate-[fade-diagonal-in-left2right-down_1s_cubic-bezier(0.4,0,0.2,1)_both]'
        : 'opacity-0',
    ]"
  >
    <div
      class="w-full !font-bold text-white text-[20px] lg:text-[48px] tracking-[4px] leading-[normal] pt-[10px] lg:pt-24 pl-[30px]"
    >
      Notre touche
      <br />
      de Midas...
    </div>
    <div
      class="w-full mx-auto px-8 py-4 lg:py-8 text-white text-[12px] lg:text-[18px] tracking-[1px] leading-[20px] lg:leading-[32px] x-font-normal x-normal-leading"
    >
      Notre mission chez Santium est non seulement de développer les meilleurs sites web et
      d&apos;implémenter les techniques et optimisations SEO les plus efficaces,
      <br />
      <br />
      mais aussi de réaliser chaque projet avec une attention minutieuse au moindre détail.
      <br />
      <br />
      Ce qui fait notre force, ce n&apos;est pas uniquement la qualité du travail, mais surtout
      l&apos;excellence de son exécution.
    </div>
    <div
      class="w-full mx-auto px-8 py-4 lg:py-8 font-copperplate !font-medium text-white text-[12px] lg:text-[20px] tracking-[0] leading-[normal] x-font-normal"
    >
      UNE RAISON DE PLUS POUR TRAVAILLER AVEC NOUS!
    </div>
    <div class="hidden lg:flex justify-center items-center py-20">
      <button
        variant="outline"
        class="group w-[448px] h-[83px] rounded-[9px] border-4 border-solid border-white bg-transparent hover:bg-white hover:text-black transition-colors cursor-pointer"
        @click="go2whyus"
      >
        <span
          class="font-medium text-white text-[28px] text-center tracking-[0] leading-[normal] group-hover:text-black"
        >
          POURQUOI NOUS?
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const root = ref<HTMLElement | null>(null)
const visible = ref(false)
let observer: IntersectionObserver | null = null
const router = useRouter()

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

const go2whyus = () => {
  router.push('/whyus')
}
</script>
