<script setup lang="ts">
import Button from './Button.vue';

const getImageUrl = (name: string) => {
  if (!name) return '';
  return new URL(`../../assets/images/projects/${name}`, import.meta.url).href
}

type ProjectLink = {
  text: string;
  link: string;
}

type ProjectData = {
  title: string;
  description: string;
  detailDescription?: string;
  tag: string[];
  skill: string[];
  image: string;
  link?: ProjectLink[];
}

type ProjectDetailProps = {
  project: ProjectData;
}

defineProps<ProjectDetailProps>()

// 定義事件：當點擊背景或叉叉時通知外層關閉視窗
defineEmits(['close'])
</script>

<template>
  <!-- 加上 @click.self ，只有點擊「灰色背景本身」才會觸發關閉 -->
  <div class="background" @click.self="$emit('close')">
    
    <div class="product_detail">
      <button class="close_btn" @click="$emit('close')">✖</button>
      <div class="detail_container">
        <div class="header">
          <div class="header_info">
            <h2 class="title">{{ project.title }}</h2>
            <p class="subtitle">{{ project.description }}</p>
          </div>
          <!-- 連結按鈕：有連結才顯示 -->
          <div class="header_actions" v-if="project.link && project.link.length > 0">
            <Button 
              v-for="item in project.link" 
              :key="item.text"
              :text="item.text" 
              color="black" 
              :href="item.link" 
              :target="true" 
            />
          </div>
        </div>
        <!-- 內容區域 -->
        <div class="content">
           <div class="content_layout">
              <!-- 左側圖片 -->
              <div class="image_area">
                <img v-if="project.image" :src="getImageUrl(project.image)" :alt="project.title">
                <div v-else class="img_placeholder"></div>
              </div>
              
              <!-- 右側文字介紹 -->
              <div class="info_area">
                <div class="info_section">
                  <h3>專案簡介</h3>
                  <ul>
                    <li>專案定位：{{ project.tag.includes('團體專題') ? '團體專題' : '個人專案' }}</li>
                    <li>使用技術：{{ project.skill.join(', ') }}</li>
                  </ul>
                </div>
                <div class="info_section">
                  <h3>主題簡介</h3>
                  <p>{{ project.detailDescription || '尚無詳細介紹' }}</p>
                </div>
              </div>
           </div>
           
           <hr class="divider">
           
           <!-- 底部核心亮點 -->
           <div class="info_section highlight_section">
             <h3>核心亮點</h3>
             <p>正在更新中...</p>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.product_detail {
  position: relative;
  width: 100%;
  max-width: 1000px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  z-index: 2500;
}

.close_btn {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 48px;
  height: 48px;
  background-color: $accent;
  color: $black;
  // border: 2px solid $black;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  z-index: 2600;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
}


.detail_container {
  width: 100%;
  background-color: $white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  overflow-y: auto; 
}

.header {
  padding: 32px 40px;
  background-color: $gray_light;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  border-bottom: 1px solid $gray;

  .header_info {
    .title {
      @include title2(true);
      margin-bottom: 8px;
    }
    .subtitle {
      @include body1;
      color: #555;
    }
  }

  .header_actions {
    display: flex;
    gap: 12px;
  }
}

.content {
  padding: 40px;
  
  .content_layout {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
    
    @include tablet {
      flex-direction: column;
    }
  }
}

.image_area {
  flex: 1;
  min-width: 0;
  
  img {
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
  }
  
  .img_placeholder {
    width: 100%;
    aspect-ratio: 4 / 3;
    background-color: $gray;
    border-radius: 12px;
  }
}

.info_area {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info_section {
  h3 {
    @include subtitle1(true);
    margin-bottom: 12px;
  }
  
  p, li {
    @include body2;
    color: #444;
    line-height: 1.8;
  }
  
  ul {
    padding-left: 20px;
    list-style-type: disc;
    li {
      margin-bottom: 8px;
    }
  }
}

.divider {
  border: 0;
  border-top: 1px solid $gray_dark;
  margin: 0;
}

.highlight_section {
  padding-top: 32px;
}
</style>