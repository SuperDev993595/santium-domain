<script setup lang="ts">
import { useRouter } from 'vue-router'
const props = defineProps({
  to: {
    type: String,
    default: '#',
  },
  active: {
    type: Boolean,
    default: false,
  },
})

const router = useRouter()
function go2other() {
  if (props.to && props.to != '#') {
    router.push(props.to)
  }
}
</script>
<template>
  <div
    @click="go2other"
    class="hover:text-red-500 text-[10px] lg:text-[20px] text-center tracking-[0] leading-[normal] transition-colors duration-300 cursor-pointer hover:scale-105 pl-[20px] lg:pl-[30px] x-font-normal x-padding-left-40"
    :class="{
      'text-white hover:text-blue-600': !active,
      'text-red-500 font-medium': active,
    }"
  >
    <slot />
  </div>
</template>
