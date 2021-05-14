<template>
  <transition v-if="Carrinho" name="fade">
    <span class="blur" @click="off()"></span>
  </transition>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      Carrinho: (state) => state.Header.config,
    }),
  },
  methods: {
    ...mapMutations({
      on: 'Header/config_on',
      off: 'Header/config_off',
    }),
  },
}
</script>
<style scoped>
.blur {
  position: fixed;
  z-index: 998;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.568);
}
</style>
