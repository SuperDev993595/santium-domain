<script setup lang="ts">
defineProps<{
  imageSrc: string
  title: string
}>()
</script>

<template>
  <div class="h-[667px] w-[518px] flex justify-center items-center">
    <div class="relative top-0 left-1/2 -translate-x-1/2 w-[520px] h-[667px] scale-[0.9]">
      <div class="relative w-[518px] h-[667px]">
        <div
          class="absolute top-[1px] left-[1px] w-[516px] h-[665px] rounded-[40px] rotate-[0.16deg] bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(105,103,103,1)_100%)]"
        ></div>
        <div
          class="absolute top-[524px] left-[18px] w-[482px] text-center text-white text-[22px] font-normal tracking-[0] leading-normal"
        >
          {{ title }}
        </div>
        <img
          class="absolute w-[500px] h-[239px] top-[73px] left-1/2 -translate-x-1/2 object-cover"
          alt="Santium logo"
          :src="imageSrc"
        />
        <div class="flex absolute w-[420px] top-[333px] left-1/2 -translate-x-1/2 object-cover">
          <p class="text-[18px]">Créativité</p>
          <p class="text-[18px] pl-[20px]">Rigueur</p>
          <p class="text-[18px] pl-[20px]">Accessibilité</p>
        </div>
      </div>
    </div>
  </div>
</template>
