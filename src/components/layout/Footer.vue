<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} Ni Lee. All rights reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 2rem 0;
  background-color: $black;
  color: $white;
  text-align: center;
}
</style>
