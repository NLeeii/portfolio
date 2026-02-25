<script setup lang="ts">
import Card from '@/components/common/Card.vue';
import { allSkills } from '@/data/skillInfo.ts'
import skillsDeco from '@/assets/images/skills_deco.svg'

</script>

<template>
  <section id="skills" class="section skills_section">
    <div class="container">
      <div class="skills_header" data-aos ="fade-up" data-aos-duration="1200">
        <h2 class="section_title">SKILLS</h2>
        <img :src="skillsDeco" alt="插畫裝飾線">
      </div>
      <div class="skills_card_wrapper">
        <div class="skill_card" v-for="skill in allSkills" :key="skill.category" data-aos ="fade-up" data-aos-duration="1200" data-aos-delay="800"> 
          <Card :icon=skill.icon :text=skill.category :skills="skill.skills"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills_section {
  padding: 80px 0;
  background-color: $gray_light;
}

.skills_header {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 80px;
  .section_title {
    @include display4;
  }
  img {
    @include tablet {
      display: none;
    }
  }
}

.skills_card_wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: space-between;
  gap: 32px;
}
</style>
