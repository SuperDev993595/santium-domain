<script setup lang="ts">
import OurSlogan from '@/components/dashboard/OurSlogan.vue'
const props = defineProps<{
  class?: string
}>()

const sendEmail = () => {
  window.open('mailto:hello@agencesantium.com', '_blank')
}
</script>
<template>
  <section
    :class="['flex flex-col items-center', props.class]"
    class="lg:!mt-[50px] x-padding-top-500"
  >
    <OurSlogan />
    <div
      class="w-[1107px] pt-4 lg:pt-8 [font-family:'Clash_Display-medium',Helvetica] font-medium text-white text-[14px] lg:text-[36px] text-center tracking-[0] leading-[normal] lg:!mt-[20px]"
    >
      SOLUTIONS WEB ET SEO
    </div>

    <div class="relative pt-4 lg:pt-8">
      <button
        variant="outline"
        class="group w-[224px] h-[42px] lg:w-[448px] lg:h-[83px] rounded-[9px] border-2 lg:border-4 border-solid border-white bg-transparent hover:text-black hover:bg-white transition-colors lg:!mt-[20px]"
        @click="sendEmail"
      >
        <span
          class="font-medium text-white text-[12px] lg:text-[28px] text-center tracking-[0] leading-[normal] group-hover:text-black cursor-pointer"
        >
          ÉCRIVEZ-NOUS!
        </span>
      </button>
    </div>
  </section>
</template>
