<script setup lang="ts">
type TagProps = {
  text: string;
  size: 'sm' | 'md';
}

defineProps<TagProps>()

</script>
<template>
  <div :class="['tag', `tag_${size}`]">
     <span>{{ text }}</span>
  </div>
</template>

<style lang="scss" scoped>
.tag {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 14px;
  border-radius: $radius_full;
  border: 1px solid $gray_dark;
  @include body3;
  color: $text;
  &.tag_sm {
    padding: 2px 12px;
    font-size: 13px;
  }
}
</style>
