<template>
  <section class="w-full flex flex-col items-center justify-center">
    <div class="relative">
      <!-- First Line -->
      <div
        class="w-full [font-family:'Libre_Baskerville',Helvetica] font-normal text-white text-[20px] lg:text-[68px] text-center tracking-[0] leading-[normal] x-font-extra"
      >
        {{ firstLine }}
        <span
          class="absolute ml-1 h-[24px] lg:h-[68px] w-1 bg-white transition-opacity duration-300"
          :class="{ 'opacity-100': showCursor, 'opacity-0': !showCursor }"
          v-show="firstLine.length < textLines[0].length"
        />
      </div>

      <!-- Second Line -->
      <div
        class="mt-3 w-full [font-family:'Libre_Baskerville',Helvetica] text-white text-[20px] lg:text-[68px] text-center font-normal tracking-[0] leading-[normal] x-font-extra lg:!mt-[20px]"
      >
        {{ secondLine }}
        <span
          class="absolute ml-1 h-[24px] lg:h-[68px] w-1 bg-white transition-opacity duration-300"
          :class="{ 'opacity-100': showCursor, 'opacity-0': !showCursor }"
          v-show="firstLine === textLines[0] && secondLine.length < textLines[1].length"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const textLines = ['Votre succès,', 'Notre accomplissement.']

const firstLine = ref('')
const secondLine = ref('')
const showCursor = ref(true)
const cycleCount = ref(0)

const lineHeight = 68 // px
const margin = 12 // mt-3 = 12px
const fixedHeight = computed(() => lineHeight * 2 + margin)

function resetAnimation() {
  firstLine.value = ''
  secondLine.value = ''
  cycleCount.value++
}

let timers: ReturnType<typeof setTimeout>[] = []
let cursorTimer: ReturnType<typeof setInterval> | null = null
let cycleTimer: ReturnType<typeof setTimeout> | null = null

const clearAllTimers = () => {
  timers.forEach((timer) => clearTimeout(timer))
  timers = []
  if (cursorTimer) clearInterval(cursorTimer)
  if (cycleTimer) clearTimeout(cycleTimer)
}

const startAnimation = () => {
  clearAllTimers()

  // Typing logic
  if (firstLine.value.length < textLines[0].length) {
    timers.push(
      setTimeout(() => {
        firstLine.value = textLines[0].substring(0, firstLine.value.length + 1)
        startAnimation()
      }, 50),
    )
  } else if (secondLine.value.length < textLines[1].length) {
    timers.push(
      setTimeout(() => {
        secondLine.value = textLines[1].substring(0, secondLine.value.length + 1)
        startAnimation()
      }, 50),
    )
  } else {
    // Pause before restart
    timers.push(setTimeout(resetAnimation, 30000))
  }

  // Cursor blink effect
  if (!cursorTimer) {
    cursorTimer = setInterval(() => {
      showCursor.value = !showCursor.value
    }, 500)
  }

  // Force reset every 30s
  if (!cycleTimer) {
    cycleTimer = setTimeout(resetAnimation, 30000)
  }
}

onMounted(() => {
  startAnimation()
})

onBeforeUnmount(() => {
  clearAllTimers()
})

// Watch for cycleCount to restart animation
watch([firstLine, secondLine, cycleCount], () => {
  if (firstLine.value === '' && secondLine.value === '') {
    startAnimation()
  }
})
</script>
