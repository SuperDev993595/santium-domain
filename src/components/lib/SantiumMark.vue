<script setup lang="ts"></script>
<template>
  <div class="relative flex items-center justify-center w-96 h-96 scale-[0.7]">
    <!-- Circular Curved Text SVG -->
    <div class="w-full h-full">
      <svg viewBox="0 0 200 200" class="w-full h-full animate-spin [animation-duration:15s]">
        <defs>
          <path
            id="circle"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            fill="none"
          />
        </defs>
        <text font-size="22" fill="white" class="font-bold">
          <textPath href="#circle" startOffset="0%">réussite notre succés, votre</textPath>
        </text>
      </svg>
    </div>

    <!-- Centered Image -->
    <img
      src="@/assets/images/mark/S.png"
      alt="snatium's mark"
      class="absolute top-1/2 left-1/2 w-100 h-100 object-cover rounded-full transform -translate-x-1/2 -translate-y-1/2"
    />
  </div>
</template>
