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
  color: transparent;
  font-weight: bold;
  -webkit-text-stroke-width: 1px; /* largura da borda */
  -webkit-text-stroke-color: #fff; /* cor da borda */
  font-size: 45px;
}
</style>
