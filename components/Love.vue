<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    @click="click"
  >
    <g v-if="!on" id="favorite_border_24px">
      <path
        id="icon/action/favorite_border_24px"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4.91499C13.09 3.63499 14.76 2.825 16.5 2.825C19.58 2.825 22 5.245 22 8.325C22 12.1019 18.6056 15.1799 13.4626 19.8435L13.45 19.855L12 21.175L10.55 19.865L10.5105 19.8291C5.38269 15.1692 2 12.0953 2 8.325C2 5.245 4.42004 2.825 7.5 2.825C9.23999 2.825 10.91 3.63499 12 4.91499ZM12 18.475L12.1 18.375C16.86 14.065 20 11.215 20 8.325C20 6.325 18.5 4.825 16.5 4.825C14.96 4.825 13.46 5.81499 12.9399 7.185H11.0699C10.54 5.81499 9.04004 4.825 7.5 4.825C5.5 4.825 4 6.325 4 8.325C4 11.215 7.14001 14.065 11.9 18.375L12 18.475Z"
        :fill="color"
      />
    </g>
    <g v-else id="favorite_24px">
      <path
        id="icon/action/favorite_24px"
        d="M12 21.175L10.55 19.855C5.4 15.185 2 12.105 2 8.325C2 5.245 4.42 2.825 7.5 2.825C9.24 2.825 10.91 3.635 12 4.915C13.09 3.635 14.76 2.825 16.5 2.825C19.58 2.825 22 5.245 22 8.325C22 12.105 18.6 15.185 13.45 19.865L12 21.175Z"
        :fill="color"
      />
    </g>
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
      color: (state) => state.Colors.Color_d63,
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
