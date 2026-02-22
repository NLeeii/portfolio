<script setup lang="ts">
import Tag from '@/components/common/Tag.vue';

type CardProps = {
  icon: string;
  text: string;
  skills: string[]; // 意思是這是一個裡面全都是字串的陣列
}

defineProps<CardProps>()

const getImageUrl = (name: string) => {
  return new URL(`../../assets/images/icons/${name}`, import.meta.url).href
}

</script>
<template>
  <div class="card">
    <div class="card_icon">
      <img :src="getImageUrl(icon)" :alt="text">
    </div>
    <div class="card_title">{{ text }}</div>
    <div class="card_tags">
      <Tag v-for="skill in skills" :key="skill" :text="skill" size="sm"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding: 40px 24px;
  background-color: $white;
  border-radius: $radius_sm;
  box-shadow: $shadow_md;
  .card_title {
    @include body1(true);
    color: $primary_dark;
  }
}

.card_icon {
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $gray;
  background-color: $primary_default;
  border-radius: $radius_full;
  img {
    width: 60%;
  }
}

.card_tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}
</style>
