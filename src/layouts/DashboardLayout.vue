<script setup lang="ts">
import HeaderView from '@/components/dashboard/HeaderView.vue'
import FooterView from '@/components/dashboard/FooterView.vue'
</script>

<template>
  <div class="bg-black flex flex-row justify-center w-full h-full min-h-screen">
    <div class="w-full h-full bg-black overflow-hidden relative">
      <div class="relative w-full h-full">
        <div
          class="w-full h-full transition-all duration-200 ease-out lg:bg-[linear-gradient(320deg,rgba(129,21,21,1)_0%,rgba(0,0,0,1)_15%,rgba(142,6,6,1)_27%,rgba(17,12,12,1)_51%,rgba(141,1,1,1)_68%,rgba(7,4,4,1)_90%)] bg-[linear-gradient(310deg,rgba(230,0,0,1)_6%,rgba(0,0,0,1)_22%,rgba(168,0,0,1)_49%,rgba(168,0,0,1)_61%,rgba(2,2,2,1)_79%,rgba(2,2,2,1)_88%,rgba(175,9,9,1)_97%)]"
        >
          <HeaderView />
          <main>
            <slot></slot>
          </main>
          <FooterView />
        </div>
      </div>
    </div>
  </div>
</template>
