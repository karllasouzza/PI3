<template>
  <nuxt-link :style="{ background: background, color: color }" :to="to">
    {{ text }}
  </nuxt-link>
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
    background: {
      type: String,
      default: null,
      required: true,
    },
    to: {
      type: String,
      default: null,
      required: true,
    },
  },
}
</script>

<style scoped>
a {
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
}
</style>
