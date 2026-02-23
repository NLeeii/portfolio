<script setup lang="ts">
import portrait from '@/assets/images/about_portrait.jpg'
import Tag from '../common/Tag.vue';
</script>

<template>
  <section id="about" class="section about_section">
    <div class="container">
      <h2 class="section_title">ABOUT ME</h2>
      <div class="content">
        <div class="about_pic">
          <img :src="portrait" alt="個人插畫形象圖">
        </div>
        <div class="about_info">
          <div class="about_header">
            <h3>李妮 Ni Lee</h3>
            <div class="tag">
              <Tag text="# 團隊協作" size="md"/>
              <Tag text="# 自學能力" size="md"/>
            </div>
          </div>
          <div class="about_desc">
            <h3 class="title">具備設計思維的前端開發者 | 善用 AI 協作實現創意互動</h3>
            <p>畢業於雲科大設計系，從「想讓設計動起來」的動機出發，在 500+ 小時的高強度前端培訓課程中，找到了邏輯與美感的最佳平衡點。 我習慣以使用者體驗為核心，善用設計背景精準還原 Figma 設計稿，並在開發初期預判
              RWD 排版風險。技術上，我不僅具備 Vue.js 與 API 串接能力，更善用 AI 縮短「創意」到「實作」間的距離，確保產出的品質與安全性。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about_section {
  padding: 80px 0;
  @include tablet {
    padding: 48px 0;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    @include tablet {
      flex-direction: column;
    }
  }
}

.section_title {
  margin-bottom: 80px;
  @include display4;
  @include tablet {
    margin-bottom: 48px;
  }
}

.about_pic {
  width: 35%;

  @include tablet {
    width: 60%;
  }
}

.about_info {
  width: 65%;

  @include tablet {
    width: 100%;
  }

  .about_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
    padding-bottom: 12px;
    @include subtitle1(true);
    @include tablet {
      flex-direction: column;
    }
    border-bottom: 1px solid $gray_dark;
    .tag {
      display: flex;
      gap: 8px;
    }
  }

  .about_desc {
    .title {
      margin-bottom: 24px;
    }
  }
}
</style>
