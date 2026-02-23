<script setup lang="ts">
import Tag from '@/components/common/Tag.vue'

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const getImageUrl = (name: string) => {
  return new URL(`../../assets/images/projects/${name}`, import.meta.url).href
}

defineProps<ProjectCardProps>()
</script>
<template>
  <div class="project_card">
    <div class="card_inner">
      <div class="header">
        <h3 class="title">{{ title }}</h3>
        <p class="desc">{{ description }}</p>
      </div>
      <div class="tags">
        <Tag v-for="tag in tags" :key="tag" :text="tag" size="sm" />
      </div>
      <div class="image">
        <img v-if="image" :src="getImageUrl(image)" :alt="title">
        <!-- 空圖片處理 -->
        <div v-else class="img_placeholder">
          <p>圖片處理中!</p>
        </div>
      </div>
    </div>
    <button class="arrow-btn">→</button>
  </div>
</template>

<style lang="scss" scoped>
.project_card {
  position: relative;
  width: 100%;
  max-width: 400px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:not(:first-child) {
    margin-left: -50px;

    @include tablet {
      margin-left: 0;
      margin-top: -20px;
    }
  }

  &:hover {
    z-index: 10;
    transform: translateY(-15px);
  }
}

.card_inner {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 20px;
  background-color: $white;
  border: 1px solid $gray_dark;
  border-radius: $radius_sm;
  height: 100%;
}

.header {
  padding-bottom: 16px;
  border-bottom: 1px solid $gray_dark;
  .title {
    margin-bottom: 8px;
    // padding-bottom: 8px;
    @include subtitle1(true);
    // border-bottom: 1px solid $gray;
  }
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.image {
  margin-top: auto;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .img_placeholder {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $gray;
  }
}

.arrow-btn {
  position: absolute;
  top: -3%;
  right: -10px;
  width: 50px;
  height: 50px;
  @include subtitle1(true);
  background-color: $accent;
  border: 1px solid $black;
  border-radius: $radius_full;
  transform: rotate(-45deg);
  cursor: pointer;
  transition: transform .3s;
  
  &:hover {
    transform: rotate(0deg);
  }
}
</style>