<script setup lang="ts">
// Navbar Logic
</script>

<template>
  <nav class="navbar">
    <div class="container navbar_container">
      <div class="logo">Logo</div>
      <ul class="nav_links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $header_height;
  background-color: rgba($white, 0.9);
  backdrop-filter: blur(10px);
  z-index: $z_nav;
  border-bottom: 1px solid $gray_light;

  &_container {
    height: 100%;
    @include flex_between;
  }
}

.nav_links {
  display: flex;
  gap: 2rem;
}
</style>
