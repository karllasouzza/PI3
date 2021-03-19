<template>
  <span :style="{ '-webkit-text-stroke-color': color }">{{ text }}</span>
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
  -webkit-text-stroke-width: 1px; /* largura da borda */
  -webkit-text-stroke-color: #fff; /* cor da borda */
  font-size: 45px;
}
</style>
