<script setup lang="ts">
defineProps<{
  imageSrc: string
}>()
</script>

<template>
  <div class="max-w-[420px] mx-auto">
    <div class="border-0 shadow-none">
      <div class="p-0">
        <div class="overflow-hidden rounded-[100px] lg:rounded-md aspect-[471/710]">
          <img
            class="w-full h-full object-cover"
            alt="Person in natural setting"
            :src="imageSrc"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>
