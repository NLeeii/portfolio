<script setup lang="ts">
import { ref } from 'vue';
import { allProjects } from '@/data/projectInfo';
import ProjectCard from '@/components/common/ProjectCard.vue';
import ProjectDetail from '@/components/common/ProjectDetail.vue';

// 管理目前選中的專案
const selectedProject = ref<any>(null);

// 開啟彈窗
const openDetail = (project: any) => {
  selectedProject.value = project;
  // 鎖定背景滾動
  document.body.style.overflow = 'hidden';
}

// 關閉彈窗
const closeDetail = () => {
  selectedProject.value = null;
  // 恢復背景滾動
  document.body.style.overflow = '';
}
</script>

<template>
  <section id="projects" class="section projects_section" data-aos ="fade-up" data-aos-duration="1200">
    <div class="container">
      <h2 class="section_title">PROJECTS</h2>
      <div class="project_card_wrapper">
        <ProjectCard 
          v-for="project in allProjects" 
          :key="project.title" 
          :title="project.title"
          :description="project.description" 
          :tags="project.tag" 
          :image="project.image" 
          @click="openDetail(project)"
        />
      </div>
      
      <!-- 彈窗組件 -->
      <Transition name="fade">
        <ProjectDetail 
          v-if="selectedProject !== null" 
          :project="selectedProject" 
          @close="closeDetail" 
        />
      </Transition>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects_section {
  padding: 80px 0;

  .section_title {
    margin-bottom: 60px;
    @include display4;
  }
}

.project_card_wrapper {
  display: flex;
  justify-content: center;
  padding: 40px 0;

  @include tablet {
    flex-direction: column;
    align-items: center;
  }
}

// 彈窗淡入淡出動畫
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
