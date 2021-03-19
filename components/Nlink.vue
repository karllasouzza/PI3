<template>
  <nuxt-link :accesskey="acess" :style="{ color: color }" :to="link">
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
    link: {
      type: String,
      default: null,
      required: true,
    },
    acess: {
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

<style></style>
