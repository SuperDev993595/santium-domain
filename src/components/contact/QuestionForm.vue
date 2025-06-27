<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SantiumMark from '@/components/lib/SantiumMark.vue'
const text = ref('')
const autoResize = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement
  textarea.style.height = 'auto'
  textarea.style.height = textarea.scrollHeight + 'px'
}
onMounted(() => {
  // Optional: auto-resize on mount if text is pre-filled
  const textarea = document.querySelector('textarea')
  if (textarea) {
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  }
})
</script>
<template>
  <div class="w-full lg:pt-[50px] pb-[100px] px-[50px]">
    <div class="hidden lg:flex w-full justify-between items-cener">
      <div class="text-white text-[68px]">
        Pose tes
        <br />
        questions!
      </div>
      <div class="justify-end items-end flex !mt-[-50px] scale-[0.9]">
        <SantiumMark />
      </div>
    </div>
    <div
      class="pt-[50px] text-[12px] lg:text-[24px] flex flex-col items-center lg:block lg:items-start"
    >
      <div class="max-w-[900px] lg:max-w-[744px] w-full">
        <input
          type="text"
          placeholder="Nom et nom de famille *"
          class="w-full border-0 border-b-2 text-white border-white focus:border-red-500 outline-none px-2 py-2 bg-transparent placeholder-gray-400"
        />
      </div>

      <div class="max-w-[900px] lg:max-w-[648px] w-full">
        <input
          type="text"
          placeholder="Nom de l’entreprise *"
          class="w-full lg:pt-[50px] border-0 text-white border-b-2 border-white focus:border-red-500 outline-none px-2 py-2 bg-transparent placeholder-gray-400"
        />
      </div>

      <div class="max-w-[900px] lg:max-w-[648px] w-full">
        <input
          type="text"
          placeholder="Numéro de téléphone *"
          class="w-full lg:pt-[50px] border-0 text-white border-b-2 border-white focus:border-red-500 outline-none px-2 py-2 bg-transparent placeholder-gray-400"
        />
      </div>

      <div class="max-w-[900px] pt-[30px] lg:pt-[100px] w-full">
        <textarea
          ref="autoResize"
          rows="1"
          class="w-full text-white border-0 border-b border-white focus:border-red-500 focus:outline-none bg-transparent overflow-hidden placeholder-gray-400"
          placeholder="Type here..."
          v-model="text"
          @input="autoResize"
        ></textarea>
      </div>
    </div>
  </div>
</template>
