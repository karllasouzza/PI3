<template>
  <span :style="{ color: color }">{{ text }}</span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null,
      required: true,
    },
    color: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped>
span {
  color: transparent;
  font-weight: bold;
}
@media (max-width: 967px) {
  span {
    font-weight: bold;
  }
}
</style>
