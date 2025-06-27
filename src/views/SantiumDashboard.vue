<script setup lang="ts">
import IntroductionView from '@/components/dashboard/IntroductionView.vue'
import MainBoard from '@/components/dashboard/MainBoard.vue'
import OurTeam from '@/components/dashboard/OurTeam.vue'
import ServicesView from '@/components/dashboard/ServicesView.vue'
import TeamRole from '@/components/dashboard/TeamRole.vue'
import ChezSantiumSection from '@/components/dashboard/ChezSantiumSection.vue'
import OurTeamMarquee from '@/components/dashboard/OurTeamMarquee.vue'

import SeperatorView from '@/components/lib/SeperatorView.vue'
</script>
<template>
  <MainBoard class="lg:pt-[300px] pt-[50px] pb-[50px] lg:pb-[300px]" />
  <div class="relative h-[100px] flex justify-center items-center !mb-[50px] lg:hidden">
    <SeperatorView orientation="vertical" class="h-full bg-white" />
  </div>
  <SeperatorView class="w-full h-0.5 bg-white hidden lg:block" />
  <TeamRole />
  <SeperatorView class="w-full h-0.5 bg-white hidden lg:block" />
  <ServicesView />
  <SeperatorView class="w-full h-0.5 bg-white hidden lg:block" />
  <IntroductionView />
  <ChezSantiumSection />
  <SeperatorView class="w-full h-0.5 bg-white hidden lg:block" />
  <OurTeamMarquee />
  <SeperatorView class="w-full h-0.5 bg-white hidden lg:block" />
  <OurTeam />
</template>
