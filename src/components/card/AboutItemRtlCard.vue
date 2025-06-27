<script setup lang="ts">
import BlackInfoCard from './BlackInfoCard.vue'
import ContentCard2 from './ContentCard2.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    imageSrc?: string
    cardTitle: string
    cardTop?: string
    type?: string
    xPadding?: string
  }>(),
  {
    imageSrc: 'default-image-path-or-url.jpg', // your default value here
    type: 'type1',
    cardTop: '0px',
    xPadding: '0px',
  },
)

const isXL = ref(window.innerWidth >= 1280)
function handleResize() {
  isXL.value = window.innerWidth >= 1280
}
onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))

const sectionPaddingLeft = computed(() => (isXL.value ? props.xPadding : '50px'))
</script>

<template>
  <div class="flex flex-col lg:flex-row w-full py-5 justify-center items-center">
    <section
      class="lg:pt-[40px] !order-2 lg:!order-1 lg:max-w-[800px] lg:!ml-[-150px] lg:!mr-[50px] x-max-width"
      :style="{ paddingLeft: sectionPaddingLeft, paddingRight: sectionPaddingLeft }"
    >
      <ContentCard2>
        <slot />
      </ContentCard2>
    </section>
    <section
      class="pl-[30px] !order-1 lg:!order-2 justify-center items-center flex lg:justify-start items-start scale-[0.4] lg:scale-[1] !mt-[-150px] lg:!mt-0"
      :style="{ marginTop: props.cardTop }"
    >
      <div class="scale-at-x x-margin-left-100">
        <BlackInfoCard :imageSrc="props.imageSrc" :type="props.type" :title="cardTitle" />
      </div>
    </section>
  </div>
</template>
