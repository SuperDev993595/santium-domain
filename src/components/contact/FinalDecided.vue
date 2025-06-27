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

const reserveCall = () => {
  window.open('https://calendly.com/msileye00-agencesantium/30min', '_blank')
}
</script>
<template>
  <div
    class="w-full px-[50px] lg:px-[300px] lg:pb-[200px] x-padding-top"
    ref="root"
    :class="[
      'transition-opacity duration-700',
      visible
        ? `animate-[fade-diagonal-in-top2bottom_1s_cubic-bezier(0.4,0,0.2,1)_both]`
        : 'opacity-0',
    ]"
  >
    <div class="flex text-white py-[40px] justify-center items-center">
      <img
        src="https://em-content.zobj.net/source/apple/81/direct-hit_1f3af.png"
        loading="lazy"
        class="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] object-contain"
        alt="🎯"
      />
      <span class="pl-[30px] text-[20px] lg:text-[56px] x-font-extra"> Enfin décidé ? </span>
    </div>
    <div
      class="text-white text-[12px] lg:text-[28px] justify-center items-center text-center x-font-medium"
    >
      Tu sens que c’est le bon moment ? Nous aussi.
      <br />
      <br />
      Rejoins-nous sur Zoom pour un appel d’accueil stratégique.
      <br />
      <br />
      Ensemble, on clarifie tes besoins, on aligne ta vision, et on trace le début de quelque chose
      de solide.
      <br />
      <br />
      <div class="flex text-white justify-center items-center pb-[20px] lg:pb-[100px]">
        <img
          src="https://em-content.zobj.net/source/apple/419/round-pushpin_1f4cd.png"
          loading="lazy"
          class="w-[30px] h-[80px] object-contain"
          style="margin-top: -30px"
          alt="📍"
        />
        <span> 30 minutes offertes – pas de pitch inutile, juste un vrai diagnostic. </span>
      </div>

      <button
        variant="outline"
        class="group w-[300px] h-[60px] lg:w-[600px] lg:h-[120px] rounded-[9px] border-2 lg:border-4 border-solid border-white bg-transparent hover:bg-white hover:text-black transition-colors cursor-pointer"
        @click="reserveCall"
      >
        <div class="flex text-[28px] text-white justify-center items-center hover:text-black">
          <span
            class="font-medium text-white text-[12px] lg:text-[32px] text-center tracking-[0] leading-[normal] group-hover:text-black"
          >
            Je réserve mon appel
          </span>
          <img
            src="https://em-content.zobj.net/source/apple/81/direct-hit_1f3af.png"
            loading="lazy"
            class="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px] object-contain"
            style="margin-top: -2px; margin-left: 10px"
            alt="🎯"
          />
        </div>
      </button>
    </div>
  </div>
</template>
