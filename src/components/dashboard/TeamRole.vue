<script setup lang="ts">
import SeperatorView from '@/components/lib/SeperatorView.vue'
import OurTouch from '@/components/dashboard/OurTouch.vue'
import OurServices from '@/components/dashboard/OurServices.vue'
import ActionTeam from '@/components/dashboard/ActionTeam.vue'
</script>
<template>
  <section class="flex flex-col lg:flex-row">
    <div class="w-full lg:w-1/2 lg:border-r border-white pt-0 lg:pt-20">
      <OurTouch />
    </div>
    <div class="w-full lg:w-1/2 pt-20">
      <OurServices />
      <SeperatorView class="hidden lg:block w-full h-0.5 bg-white" />
      <div class="w-full p-8 mx-auto text-white bg-transparent border-none">
        <ActionTeam />
      </div>
    </div>
  </section>
</template>
