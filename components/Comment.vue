<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    :fill="color"
    @click="click"
  >
    <path
      v-if="!on"
      d="M20,2H4C2.897,2,2,2.897,2,4v18l5.333-4H20c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M20,16H6.667L4,18V4h16V16z"
    ></path>
    <path
      v-else
      d="M20,2H4C2.897,2,2,2.897,2,4v18l4-4h14c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z"
    ></path>
  </svg>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      on: false,
    }
  },
  computed: {
    ...mapState({
      color: (state) => state.Colors.Color_007,
    }),
  },
  methods: {
    click() {
      if (!this.on) {
        this.on = true
      } else {
        this.on = false
      }
    },
  },
}
</script>

<style scoped>
svg {
  cursor: pointer;
}
</style>
