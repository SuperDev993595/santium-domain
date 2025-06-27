<script setup lang="ts">
import { useRouter } from 'vue-router'
import markImage from '@/assets/images/mark.png'
import NavigationMenu from '../../components/dashboard/navigation/NavigationMenu.vue'

const router = useRouter()
function go2home() {
  router.push('/')
}
</script>

<template>
  <header className="flex flex-col items-center lg:relative z-100">
    <img
      className="w-[120px] h-[120px] lg:w-[291px] lg:h-[291px] object-cover lg:absolute lg:left-0 top-0 hover:cursor-pointer"
      alt="Santium logo"
      :src="markImage"
      @click="go2home"
    />

    <div
      className="!mb-[50px] lg:absolute lg: top-[120px] lg:right-[72px] lg:block !mr-[16px] lg:m!-0"
    >
      <NavigationMenu />
    </div>
  </header>
</template>
