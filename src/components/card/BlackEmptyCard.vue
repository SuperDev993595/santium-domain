<script setup lang="ts">
import MarkImage from '@/assets/images/mark.png'
</script>

<template>
  <div class="h-[667px] w-[518px] flex items-center justify-center">
    <div class="relative top-0 left-0 w-[520px] h-[667px] rotate-[9.20deg] scale-[0.9]">
      <div class="relative w-[518px] h-[667px]">
        <div
          class="absolute top-[1px] left-[1px] w-[516px] h-[665px] rounded-[40px] rotate-[0.16deg] bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(105,103,103,1)_100%)]"
        ></div>
        <img
          class="absolute w-[420px] h-[420px] top-[73px] left-1/2 -translate-x-1/2 object-cover"
          alt="Santium logo"
          :src="MarkImage"
        />
      </div>
    </div>
  </div>
</template>
