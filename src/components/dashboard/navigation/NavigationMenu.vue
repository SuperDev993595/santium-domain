<script setup lang="ts">
import NavigationItem from './NavigationMenuItem.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const navigationItems = [
  { text: 'À propos', route: '/about' },
  { text: 'Nos services', route: '/service' },
  { text: 'Pourquoi nous?', route: '/whyus' },
  { text: 'Contact', route: '/contact' },
]
</script>
<template>
  <div className="relative w-full h-full">
    <div class="flex items-center">
      <NavigationItem
        v-for="(item, index) in navigationItems"
        :key="index"
        :to="item.route"
        :active="route.path === item.route"
      >
        {{ item.text }}
      </NavigationItem>
    </div>
  </div>
</template>
