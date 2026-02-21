<script setup lang="ts">
import logo from '@/assets/images/logo.svg'; 

// Navbar
const navLinks = [
  {name: 'ABOUT', href: '#about'},
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
]


</script>

<template>
  <nav class="navbar">
    <div class="container navbar_container">
      <div class="logo">
        <a href="#">
            <img :src="logo" alt="NiNi Logo" />
        </a>
      </div>
      <ul class="nav_links">
        <li v-for="link in navLinks" :key="link.name">
          <a :href="link.href">{{ link.name }}</a>
        </li>
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
  @include body2;
  li {
    transition: all .3s;
    border-bottom: 2px solid transparent;
    &:hover,
    &:active {
      color: $primary_default;
      border-bottom: 2px solid $primary_default;
    }
  }
}
</style>
