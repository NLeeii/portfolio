<script setup lang="ts">
import { ref } from 'vue';
import logo from '@/assets/images/logo.svg'; 

// Navbar 連結資料
const navLinks = [
  {name: 'ABOUT', href: '#about'},
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
]

// 漢堡選單開關狀態
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

// 點擊連結後自動關閉選單 (手機版專用)
const closeMenu = () => {
  isMenuOpen.value = false;
}
</script>

<template>
  <nav class="navbar">
    <div class="container navbar_container">
      <div class="logo">
        <a href="#">
            <img :src="logo" alt="NiNi Logo" />
        </a>
      </div>
      
      <!-- 漢堡按鈕 (僅在 tablet 以下顯示) -->
      <button 
        class="hamburger" 
        :class="{ active: isMenuOpen }" 
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <!-- 導覽連結 -->
      <ul class="nav_links" :class="{ active: isMenuOpen }">
        <li v-for="link in navLinks" :key="link.name">
          <a :href="link.href" @click="closeMenu">{{ link.name }}</a>
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

// 電腦版導覽列
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

  // 手機版漢堡選單樣式設定
  @include tablet {
    position: absolute;
    top: $header_height;
    left: 0;
    width: 100%;
    background-color: rgba($white, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    gap: 0;
    // 將選單往上拉並且隱藏 (滑動特效)
    transform: translateY(-150%);
    opacity: 0;
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    border-bottom: 1px solid $gray;
    box-shadow: $shadow_md;

    &.active {
      transform: translateY(0);
      opacity: 1;
    }

    li {
      width: 100%;
      text-align: center;
      border-bottom: none;
      
      a {
        display: block;
        padding: 20px 0;
        font-size: 18px;
        font-weight: 500;
        transition: background-color 0.2s;

        &:hover {
          background-color: $gray_light;
          color: $primary_default;
        }
      }

      &:hover, &:active {
        border-bottom: none; // 覆蓋電腦版的 hover 效果
      }
    }
  }
}

// 漢堡按鈕樣式
.hamburger {
  display: none;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 10px;
  z-index: 100;

  @include tablet {
    display: block; 
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: $black;
    transition: all 0.3s ease-in-out;
    border-radius: 2px;
  }

  // 點擊後變成 X 的動畫特效
  &.active {
    .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    .bar:nth-child(2) {
      opacity: 0;
    }
    .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
}
</style>
