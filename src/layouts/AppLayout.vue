<script setup lang="ts">
import DefaultLayout from './DefaultLayout.vue'
import DashboardLayout from './DashboardLayout.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layouts = {
  DefaultLayout,
  DashboardLayout,
} as const

type LayoutKey = keyof typeof layouts

const layout = computed<LayoutKey>(() => {
  return (route.meta.layout as LayoutKey) || 'DefaultLayout'
})
</script>

<template>
  <div v-if="!layouts[layout]">Invalid layout: {{ layout }}</div>
  <component v-else :is="layouts[layout]">
    <router-view />
  </component>
</template>
