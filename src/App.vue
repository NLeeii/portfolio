<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';

import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import ExperienceSection from '@/components/sections/ExperienceSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import SiteNoticeModal from '@/components/common/SiteNoticeModal.vue';

// 在元件掛載後初始化 AOS 滾動動畫
onMounted(() => {
  AOS.init({
    duration: 800, 
    once: true,    // 動畫只會觸發一次 (往返滾動不會重複播放)
    offset: 100,   // 提早或延遲觸發的距離 (px)
  });
});
</script>

<template>
  <div class="app_container">
    <SiteNoticeModal />
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.app_container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
