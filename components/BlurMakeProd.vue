<template>
  <transition v-if="Carrinho" name="fade">
    <span
      class="blur"
      :style="{ background: Color_000 + '63' }"
      @click="off()"
    ></span>
  </transition>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      Carrinho: (state) => state.Produtos.On_Off,
      Color_000: (state) => state.Colors.Color_000,
    }),
  },
  methods: {
    ...mapMutations({
      off: 'Produtos/off',
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
  /* background-color: rgba(0, 0, 0); */
  cursor: pointer;
}
</style>
