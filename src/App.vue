<template>
  <AppLayout />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppLayout,
  },
})
</script>

<style>
body {
  margin: 0px;
}
</style>
