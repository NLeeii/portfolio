<script setup lang="ts">
type TagProps = {
  text: string;
}

defineProps<TagProps>()

</script>
<template>
  <div class="tag">
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
}
</style>
