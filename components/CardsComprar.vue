<template>
  <div class="B">
    <div class="add">
      <span v-if="prod1 > '0'" class="mais" @click="prod1m()">+</span>
      <span v-if="prod1 > '0'" class="contador">
        {{ prod1 }}
      </span>
      <span v-if="prod1 > '0'" class="menos" @click="prod1n()"> - </span>
    </div>
    <div class="limp thirdBackground" @click="lP1()">Limpar</div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      prod1: (state) => state.Carts.cosmeticos[0].amount,
      Mingles: (state) => state.Acessibilidade.Mingles,
    }),
  },
  methods: {
    ...mapMutations({
      aP1: 'Carts/Cadicionar_C1',
      rP1: 'Carts/Cremover_C1',
      lP1: 'Carts/Climpar_C1',
    }),

    prod1m() {
      this.aP1()
    },
    prod1n() {
      if (this.prod1 <= 0) {
        this.prod1 = 0
      } else {
        this.rP1()
      }
    },
  },
}
</script>
<style scoped>
.limp {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 0 20px 0 0;
  height: 45px;
  width: 30%;
  font-weight: bold;
  background: #f9be1cb6;
}
.add {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 45px;
  width: 100%;
  background: #fff159b6;
  font-weight: bold;
}

.add .mais {
  width: 33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add .contador {
  width: 33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add .menos {
  width: 33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
