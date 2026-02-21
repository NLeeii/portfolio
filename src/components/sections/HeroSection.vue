<script setup lang="ts">
import MainButton from '@/components/common/Button.vue'

import banner from '@/assets/images/main_banner.svg'

</script>

<template>
  <section id="hero" class="section hero_section">
    <div class="hero_pic">
      <img :src="banner" alt="banner picture">
    </div>
    <div class="hero_content">
      <h1 class="title">Hello, I'm NiNi</h1>
      <p class="slogan">Designer x Developer</p>
      <div class="button">
        <MainButton text="作品展示" color="white" href="#experience" />
        <!-- <MainButton text="下載履歷" color="white" href="#experience"/> -->
        <MainButton text="GitHub" color="white" href="https://github.com/NLeeii" :target=true />
      </div>
    </div>
  </section>
  <div class="hero_deco">
    <p>DESIGN MEET LOGIC</p>
  </div>
</template>

<style lang="scss" scoped>
.hero_section {
  display: flex;
  gap: 32px;
  padding: 100px 32px 0;
  min-height: 580px;
  background-color: $bg;
  text-align: center;
  @include desktop {
    flex-direction: column-reverse;
    align-items: center;
    gap: 40px;
    padding: 80px 16px 0;
  }  
}

.hero_pic {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @include tablet {
    width: 100%;
  }

  img {
    width: 90%;
    max-width: 650px;
  }
}

.hero_content {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 32px;

  @include tablet {
    width: 100%; 
    padding: 0; 
  }

  .slogan {
    margin-bottom: 8px;
  }

  .title {
    text-wrap: nowrap;
    @include display1;
    @include tablet {
      @include display3;
    }
  }

  .button {
    display: flex;
    gap: 8px;
  }
}

.hero_deco {
  padding: 12px;
  @include display3;
  text-align: center;
  color: $white;
  background-color: $primary_default;
  @include tablet {
    @include title1;
  }
}
</style>
