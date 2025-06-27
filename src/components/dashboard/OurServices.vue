<template>
  <div
    ref="root"
    :class="[
      'transparent-opacity duration-700',
      visible
        ? 'animate-[fade-diagonal-in-right2left-down_1s_cubic-bezier(0.4,0,0.2,1)_both]'
        : 'opacity-0',
    ]"
  >
    <div class="flex justify-end lg:justify-start">
      <div
        class="lg:w-full w-[200px] lg:!mr-0 !mr-[30px] pl-8 font-copperplate font-bold text-white text-[20px] lg:text-[27px] lg:text-[48px] text-right lg:text-left tracking-[4px] leading-[normal]"
      >
        Nos Services
      </div>
    </div>
    <div
      class="w-full mx-auto px-8 lg:py-8 py-4 font-copperplate font-medium text-white text-[12px] lg:text-[14px] lg:text-[16px] tracking-[1px] leading-[20px] lg:leading-[32px] text-right lg:text-left x-font-normal x-normal-leading"
    >
      Nous accompagnons les entreprises dans la création de sites web performants,
      l&apos;optimisation de leur visibilité en ligne, ainsi que la réalisation de solutions
      visuelles et événementielles.
      <br />
      <br />
      Chaque projet est conçu sur-mesure, avec une attention particulière portée à la qualité et aux
      résultats.
    </div>

    <div class="hidden lg:flex justify-center pt-8 pb-20 hidden">
      <button
        variant="outline"
        class="group w-[448px] h-[83px] rounded-[9px] border-4 border-solid border-white bg-transparent hover:bg-white hover:text-black transition-colors cursor-pointer"
        @click="go2ourservices"
      >
        <span
          class="font-medium text-white text-[28px] text-center tracking-[0] leading-[normal] group-hover:text-black"
        >
          NOS SERVICES
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

const go2ourservices = () => {
  router.push('/service')
}
</script>
