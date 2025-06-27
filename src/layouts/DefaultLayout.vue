<script lang="ts">
  export default {}
</script>

<template>
    <div className="layout">
      <main>
        <!--The <slot> element is a slot outlet that indicates 
              where the "VIEW" content should be rendered.-->
          <slot></slot>
      </main>
    </div>
</template>
