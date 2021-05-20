<template>
  <div class="FontSize">
    <span class="mais" @click="adicionar()"> + </span>
    <span class="contador firstColor">
      {{ FontSize }}
    </span>
    <span class="menos" @click="subitrair()"> - </span>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      FontSize: (state) => state.Acessibilidade.text,
    }),
  },
  methods: {
    ...mapMutations({
      Lon: 'Acessibilidade/fontMais',
      Loff: 'Acessibilidade/fontMenos',
    }),
    adicionar() {
      this.Lon()
    },
    subitrair() {
      this.Loff()
    },
  },
}
</script>
<style>
.FontSize {
  width: 120px;
  height: 42px;
  padding: 1px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  transition: ease 0.7s;
  cursor: pointer;
  background: white;
  box-shadow: 0 0 11px 1px #0000007a;
}
.FontSize .mais {
  width: 33%;
  height: 100%;
  font-weight: bold;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #238e23;
}
.FontSize .contador {
  widows: 33%;
  height: 100%;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
.FontSize .menos {
  width: 33px;
  height: 100%;
  font-weight: bold;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fa4224;
}
.F {
  transition: ease 1s;
  border-radius: 50%;
  cursor: pointer;
}
</style>
