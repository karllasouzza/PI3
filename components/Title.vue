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
      required: true,
    },
  },
}
</script>

<style scoped>
span {
  font-weight: bold;
}
</style>
