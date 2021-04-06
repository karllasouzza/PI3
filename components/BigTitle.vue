<template>
  <p :style="{ color: color }">
    {{ text }}
  </p>
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
p {
  font-weight: bold;
}
@media (max-width: 967px) {
  p {
    font-weight: bold;
  }
}
</style>
