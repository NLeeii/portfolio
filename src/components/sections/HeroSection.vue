<script setup lang="ts">
import MainButton from '@/components/common/Button.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import banner from '@/assets/images/main_banner.svg'
import deco1 from '@/assets/images/banner_deco1.svg'
import character1 from '@/assets/images/character_default.svg'
import character2 from '@/assets/images/character_designer.svg'
import character3 from '@/assets/images/character_engineer.svg'

const swiperModules = [Autoplay, Navigation];
</script>

<template>
  <section id="hero" class="section hero_section">
    <div class="hero_pic">
      <div class="img_wrapper">
        <img :src="banner" alt="banner_picture" class="main_banner">
        <img :src="deco1" alt="banner_deco" class="banner_deco1">
        
        <div class="swiper_container">
          <Swiper
            :modules="swiperModules"
            :slides-per-view="1"
            :loop="true"
            :allowTouchMove="true"
            :navigation="true"
            class="hero_swiper"
          >
            <SwiperSlide><img :src="character1" alt="Character" class="character_img"></SwiperSlide>
            <SwiperSlide><img :src="character2" alt="Designer" class="character_img"></SwiperSlide>
            <SwiperSlide><img :src="character3" alt="Developer" class="character_img"></SwiperSlide>
          </Swiper>
        </div>

      </div>
    </div>
    <div class="hero_content">
      <h1 class="title">Hello, I'm NiNi</h1>
      <p class="slogan">Designer x Developer</p>
      <div class="button">
        <MainButton text="作品展示" color="white" href="#projects" />
        <!-- <MainButton text="履歷" color="white" href="#experience"/> -->
        <MainButton text="GitHub" color="white" href="https://github.com/NLeeii" :target=true />
      </div>
    </div>
  </section>
  <div class="hero_deco_txt">
    <p>DESIGN MEET LOGIC</p>
  </div>
</template>

<style lang="scss" scoped>
.hero_section {
  display: flex;
  gap: 32px;
  padding: 100px 32px 0;
  min-height: 600px;
  background-color: $bg;
  text-align: center;
  
  @include desktop {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
    padding: 120px 16px 0;
  }  

  @include tablet {
    gap: 80px;
    min-height: auto; // 讓內容自然撐開
  }
}

.hero_pic {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @include desktop {
    order: 2; /* 在由上往下排時，確保圖片在下方 */
  }

  @include tablet {
    width: 100%;
  }
}

.img_wrapper {
  position: relative;
  width: 90%;
  max-width: 650px;
  
  .main_banner {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .banner_deco1 {
    position: absolute;
    top: -15%;
    right: 20%;
    width: 8%; 
    z-index: 2;
    animation: bounce 1.5s ease-in-out infinite; 
  }
  
  // Swiper 輪播容器
  .swiper_container {
    position: absolute;
    top: 31%;
    left: 17%;
    width: 55%;  
    height: 60%; 
    z-index: 1;
    transform: rotate(-8deg);
  }
}

.hero_swiper {
  width: 100%;
  height: 100%;
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .character_img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  // Swiper 左右按鈕樣式
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    width: 40px;
    height: 40px;
    background-color: $gray;
    border-radius: $radius_full;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after,
    svg {
      display: none !important;
    }

    &:hover {
      background-color: $gray_dark;
    }
  }

  // 自定義箭頭
  :deep(.swiper-button-prev::before) {
    content: '';
    width: 12px;
    height: 12px;
    border-top: 2.5px solid $white;
    border-left: 2.5px solid $white;
    transform: rotate(-45deg);
    margin-left: 4px;
  }

  :deep(.swiper-button-next::before) {
    content: '';
    width: 12px;
    height: 12px;
    border-top: 2.5px solid $white;
    border-right: 2.5px solid $white;
    transform: rotate(45deg);
    margin-right: 4px;
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

  @include desktop {
    width: 100%;
    order: 1; /* 在由上往下排時，確保文字在上方 */
  }

  @include tablet {
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

.hero_deco_txt {
  padding: 12px;
  @include display3;
  text-align: center;
  color: $white;
  background-color: $primary_default;
  @include tablet {
    @include title1;
  }
}

// deco用動畫
@keyframes bounce {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.05);
  }
}
</style>
