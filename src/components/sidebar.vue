<template>
  <aside class="side-bar"></aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.side-bar {
  width: 10vw;
  height: 100%;

  display: block;
  background-color: var(--dark-blue);
  
  position: absolute;
}
</style>