<template>
  <span :class="customclass">{{ text }}</span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null,
      required: true,
    },
    customclass: {
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
  font-size: 20px;
}
</style>
