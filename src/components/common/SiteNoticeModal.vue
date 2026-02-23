<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

// 當組件掛載完成時，自動將它設為 true 來顯示彈窗
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
    document.body.style.overflow = 'hidden';
  }, 500);
})

const closeModal = () => {
  isVisible.value = false;
  document.body.style.overflow = '';
}
</script>

<template>
  <Transition name="fade">
    <div class="notice-overlay" v-if="isVisible" @click.self="closeModal">
      <div class="notice-modal">
        <button class="close-btn" @click="closeModal">✖</button>
        <div class="notice-header">
          <h2>網站建置公告</h2>
        </div>
        <div class="notice-content">
          <p>您好，感謝您的造訪!</p>
          <p>
            本網站正在 <strong>積極開發與趕工中</strong> ，目前僅包含部分靜態展示內容，完整資訊及動畫效果待補齊。
          </p>
          <p>
            完整專案預計將於 <strong>2/25</strong> 完成更新，屆時歡迎您再次前來查看完整版作品集！
          </p>
          <p class="signature">- Ni Lee</p>
        </div>
        <div class="notice-footer">
          <button class="ok-btn" @click="closeModal">開始瀏覽</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.notice-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.notice-modal {
  position: relative;
  width: 100%;
  max-width: 500px;
  background-color: $white;
  border-radius: $radius_sm;
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 36px;
  height: 36px;
  background-color: transparent;
  color: $black;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: $gray_light;
  }
}

.notice-header {
  background-color: $accent;
  padding: 24px 30px;
  
  h2 {
    @include title2(true);
    margin: 0;
    color: $black;
  }
}

.notice-content {
  padding: 30px;
  @include body1;
  color: #333;
  line-height: 1.8;
  
  p {
    margin-bottom: 16px;
  }
  strong {
    font-weight: bold;
    color: #e53e3e; // 紅色強調
  }
  
  .signature {
    text-align: right;
    font-style: italic;
    color: #666;
    margin-top: 24px;
    margin-bottom: 0;
  }
}

.notice-footer {
  padding: 20px 30px;
  background-color: $gray_light;
  display: flex;
  justify-content: flex-end;
  
  .ok-btn {
    padding: 10px 24px;
    @include body1(true);
    background-color: $black;
    color: $white;
    border: none;
    border-radius: $radius_full;
    cursor: pointer;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 0.8;
    }
  }
}

/* 彈窗淡入淡出動畫 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
