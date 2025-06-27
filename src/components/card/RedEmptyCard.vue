<script setup lang="ts">
import MarkImage from '@/assets/images/mark.png'
</script>

<template>
  <div class="w-[410px] mx-auto rotate-[11.20deg] justify-center items-center !mt-[10px]">
    <div
      class="w-full aspect-[471/710] top-0 left-[67px] rounded-[100px] lg:rounded-[40px] rotate-[-0.05deg] bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(179,1,1,1)_100%)] overflow-hidden border-none"
    >
      <div class="w-full h-full p-0 justify-center items-center scale-[0.6]">
        <img
          class="w-full h-full object-cover"
          alt="Santium logo"
          :src="MarkImage"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
