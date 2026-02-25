/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 消除 TypeScript 對 Swiper CSS 檔案的報錯
declare module 'swiper/css';
declare module 'swiper/css/*';