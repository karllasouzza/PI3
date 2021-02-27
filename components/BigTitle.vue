<template>
  <p :class="customclass">
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
    customclass: {
      type: String,
      default: null,
      required: true,
    },
  },
}
</script>
<style scoped>
p {
  font-size: 45px;
  font-weight: bold;
}
</style>
