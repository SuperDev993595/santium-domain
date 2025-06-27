<template>
  <section
    class="w-full pt-[100px] lg:pt-[50px] pb-[10px] lg:pb-[50px] lg:pt-8 overflow-hidden scrollingBanner"
  >
    <!-- Marquee container with horizontal scroll effect -->
    <div class="relative w-full overflow-hidden scrollingContent">
      <div class="flex animate-[scroll_20s_linear_infinite]">
        <div
          v-for="(item, index) in missionItems"
          :key="index"
          class="flex items-center flex-shrink-0 mx-4 [-webkit-text-stroke:2px_#ffffff] [font-family:'ClashDisplay-Bold',Helvetica] text-transparent text-[60px] font-normal tracking-[0] leading-[normal] items-center justify-center x-font-extra"
        >
          <div>
            {{ item.text }}
          </div>
          <img
            src="https://em-content.zobj.net/source/apple/81/direct-hit_1f3af.png"
            loading="lazy"
            class="w-[80px] h-[80px] object-contain x-icon-100"
            style="margin-top: -22px; margin-left: 10px; margin-right: 20px"
            alt="🎯"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface MissionItem {
  text: string
  emoji: string
}

// Create an array of repeated mission text items for better code maintainability
const missionItems = ref<MissionItem[]>(
  Array.from({ length: 9 }, () => ({
    text: 'NOTRE MISSION',
    emoji: '🎯',
  })),
)
</script>
