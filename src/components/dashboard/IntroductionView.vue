<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isImperialVisible = ref(false)
const visible = ref(false)
const imperialRef = ref<HTMLElement | null>(null)
let timeoutRef: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        timeoutRef = setTimeout(() => {
          isImperialVisible.value = true
        }, 1000)
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.1 },
  )
  if (imperialRef.value) {
    observer.observe(imperialRef.value)
  }

  onUnmounted(() => {
    if (imperialRef.value) {
      observer.unobserve(imperialRef.value)
    }
    if (timeoutRef) {
      clearTimeout(timeoutRef)
    }
  })
})
</script>

<template>
  <div
    class="w-full overflow-hidden"
    ref="root"
    :class="[
      'transition-opacity duration-700',
      visible
        ? 'animate-[fade-diagonal-in-left2right_1s_cubic-bezier(0.4,0,0.2,1)_both]'
        : 'opacity-0',
    ]"
  >
    <div class="pt-8 px-8 lg:px-16">
      <div class="lg:flex items-baseline pt-10">
        <div
          class="font-bold text-white text-[20px] lg:text-[45px] text-left tracking-[4px] leading-[normal] x-font-medium"
        >
          UNE EXÉCUTION
        </div>
        <div
          ref="imperialRef"
          class="lg:pl-8 [font-family:'Cinzel_Decorative',Helvetica] font-normal text-white text-[20px] lg:text-[64px] text-left tracking-[4px] leading-[normal] transition-all duration-700 ease-out x-font-large"
          :class="[isImperialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']"
        >
          IMPÉRIALE
        </div>
      </div>
      <div class="w-full mx-auto text-white pt-[20px] lg:pt-[40px] x-normal-leading">
        <p
          class="font-bold tracking-[2px] mb-6 text-[12px] lg:text-[18px] x-font-normal"
          style="font-weight: 600"
        >
          Chez Santium, chaque mandat est abordé avec une rigueur impériale.
          <br /><br />
          Nous ne nous contentons pas de créer des sites web ou d’optimiser des stratégies digitales
          : nous orchestrons des projets où chaque détail est méticuleusement pensé, chaque choix
          est stratégique, chaque ligne de code sert un objectif précis.
          <br />
          <br />
          Notre expertise s'étend bien au-delà de la technique.Nous sculptons des présences
          digitales durables, pensées pour dominer leur marché et inspirer la confiance
          <br />
          <br />
          Basés à Montréal, nous accompagnons une clientèle exigeante qui recherche l’excellence
          dans l’exécution, la précision dans la stratégie et l’élégance dans le résultat.
        </p>
      </div>
    </div>
  </div>
</template>
