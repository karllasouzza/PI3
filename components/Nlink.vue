<template>
  <nuxt-link :accesskey="acess" :to="link">
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
  },
}
</script>

<style></style>
