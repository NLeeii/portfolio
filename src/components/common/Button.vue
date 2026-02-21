<script setup lang="ts">
type ButtonProps = {
  text: string;
  color: 'white' | 'yellow';
  icon?: string;
  href: string;
  target?: boolean;
}

defineProps<ButtonProps>()

</script>
<template>
    <a :class="['btn', `btn_${color}`]" :href="href" :target="target ? '_blank' : undefined" :rel="target ? 'noopener noreferrer' : undefined">{{ text }}</a>
</template>
<style lang="scss" scoped>
  .btn {
    padding: 8px 24px;
    @include body1;
    border-radius: $radius_full;
    transition: all .3s;
  }
  .btn_white {
    background-color: $white;
    border: 1px solid $gray;
    &:hover {
      background-color: $accent;
      border: 1px solid $accent;
    }
  }
  .btn_yellow {
    border: 1px solid $white;
    background-color: $accent;
    &:hover {
      background-color: $white;
      border: 1px solid $white;
    }
  }
</style>