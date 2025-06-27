<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isPromiseVisible = ref(false)
const visible = ref(false)
const promiseRef = ref<HTMLElement | null>(null)
let timeoutRef: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        timeoutRef = setTimeout(() => {
          isPromiseVisible.value = true
        }, 1000)
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.1 },
  )
  if (promiseRef.value) {
    observer.observe(promiseRef.value)
  }

  onUnmounted(() => {
    if (promiseRef.value) {
      observer.unobserve(promiseRef.value)
    }
    if (timeoutRef) {
      clearTimeout(timeoutRef)
    }
  })
})
</script>

<template>
  <div
    class="w-full overflow-hidden lg:pb-8 px-8 lg:px-16"
    ref="root"
    :class="[
      'transition-opacity duration-700',
      visible
        ? 'animate-[fade-diagonal-in-right2left_1s_cubic-bezier(0.4,0,0.2,1)_both]'
        : 'opacity-0',
    ]"
  >
    <section
      class="w-full pt-[50px] lg:pt-[100px] lg:pt-8 lg:pb-8 font-copperplate font-normal text-white text-[24px]"
    >
      <div class="w-full mx-auto">
        <div class="lg:flex flex-wrap items-baseline pb-6">
          <div class="font-bold text-[20px] lg:text-[45px] x-font-medium">NOTRE</div>
          <div
            ref="promiseRef"
            class="pl-0 lg:pl-8 [font-family:'Cinzel_Decorative',Helvetica] text-[20px] lg:text-[64px] transition-all duration-700 ease-out x-font-large"
            :class="[isPromiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']"
          >
            PROMESSE
          </div>
        </div>

        <div
          class="w-full mx-auto pb-10 lg:pb-20 font-copperplate text-white text-[12px] lg:text-[18px] tracking-[0] leading-[20px] lg:leading-[32px] x-font-normal x-normal-leading"
          style="font-weight: 600"
        >
          Chez Santium, chaque projet est exécuté avec le même engagement absolu :<br />
          Excellence, précision et résultats mesurables
          <br /><br />
          Nous nous engageons à concevoir des solutions digitales sur-mesure, à anticiper chaque
          détail stratégique et à dépasser les standards de qualité attendus.
          <br /><br />
          Votre ambition devient notre responsabilité.
        </div>
      </div>
    </section>
  </div>
</template>
