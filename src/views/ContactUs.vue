<script setup lang="ts">
import TitleView from '@/components/contact/TitleView.vue'
import FinalDecided from '@/components/contact/FinalDecided.vue'
import SeperatorView from '@/components/lib/SeperatorView.vue'
import QuestionForm from '@/components/contact/QuestionForm.vue'
import SantiumMark from '@/components/lib/SantiumMark.vue'
</script>
<template>
  <TitleView />

  <div class="w-full lg:px-[100px] pt-[50px] lg:pt-[100px]">
    <SeperatorView class="w-full h-0.5 bg-white hidden lg:block" />
    <div class="flex w-full">
      <!-- Set height here -->
      <div class="flex w-full">
        <div class="relative h-full justify-center items-center hidden lg:block">
          <SeperatorView orientation="vertical" class="bg-white" />
        </div>
        <QuestionForm />
        <div class="relative h-full flex justify-center items-center hidden lg:block">
          <SeperatorView orientation="vertical" class="bg-white" />
        </div>
      </div>
    </div>
    <SeperatorView class="w-full h-0.5 bg-white hidden lg:block" />
  </div>

  <div class="relative h-[700px] lg:flex justify-center items-center pt-[120px] pb-[250px] hidden">
    <SeperatorView orientation="vertical" class="h-full bg-white" />
  </div>

  <div class="flex flex-col items-center lg:hidden lg:py-[100px]">
    <SantiumMark />
  </div>
  <FinalDecided />
</template>
