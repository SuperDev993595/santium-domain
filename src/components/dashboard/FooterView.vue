<script setup lang="ts">
import Facebook from '@/assets/images/social/facebook.png'
import Twiter from '@/assets/images/social/twiter.png'
import Instagram from '@/assets/images/social/instagram.png'
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

function scroll2top() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onBeforeUnmount(() => {
  observer?.disconnect()
})

const go2facebook = () => {
  window.open('', '_blank')
}

const go2instagram = () => {
  window.open('https://www.instagram.com/agencesantium/', '_blank')
}

const go2twiter = () => {
  window.open('https://x.com/SantiumT82170', '_blank')
}
</script>
<template>
  <div
    class="w-full h-full"
    ref="root"
    :class="[
      'transition-opacity duration-700',
      visible
        ? `animate-[fade-diagonal-in-bottom2top_1s_cubic-bezier(0.4,0,0.2,1)_both]`
        : 'opacity-0',
    ]"
  >
    <div class="flex justify-center items-center py-10 lg:py-20">
      <button
        variant="outline"
        class="group w-[240px] h-[50px] lg:w-[480px] lg:h-[100px] rounded-[50px] border-2 border-solid border-white bg-transparent hover:bg-white hover:text-black transition-colors cursor-pointer"
        @click="scroll2top"
      >
        <span
          class="font-medium text-white text-[12px] lg:text-[28px] text-center tracking-[0] leading-[normal] group-hover:text-black x-font-normal"
        >
          Je veux remonter!
        </span>
      </button>
    </div>

    <section className="flex justify-center py-4 lg:py-8">
      <img
        className="w-[45px] lg:w-[75px] h-[45px] lg:h-[75px] object-cover !mt-[-7px] lg:!mt-[-10px] cursor-pointer hover:scale-120 duration-300"
        :src="Facebook"
        @click="go2facebook"
      />
      <img
        className="w-[32px] lg:w-[63px] h-[32px] lg:h-[57px] object-cover cursor-pointer hover:scale-120 duration-300"
        :src="Twiter"
        style="margin-left: 50px"
        @click="go2twiter"
      />
      <img
        className="w-[32px] lg:w-[56px] h-[32px] lg:h-[54px] object-cover cursor-pointer hover:scale-120 duration-300"
        :src="Instagram"
        style="margin-left: 50px"
        @click="go2instagram"
      />
    </section>

    <footer className="flex justify-center pt-[10px] lg:pt-[40px] pb-[50px] lg:pb-[150px] z-100">
      <div
        className="w-full font-bold text-white text-[12px] lg:text-[24px] text-center tracking-[1px] leading-[normal] x-font-normal"
      >
        © 2025 Santium. Tous droits réservés.
      </div>
    </footer>
  </div>
</template>
