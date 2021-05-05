<template>
  <div class="cardJ p1" :style="{ background: background, color: color }">
    <span :style="{ 'background-image': 'url(' + img + ')' }" class="img">
    </span>
    <span
      class="conteudo secondBackground"
      :style="{ background: Color_fff, color: Color_000 }"
    >
      <p class="titulo">
        {{ title }}
      </p>
      <hr class="S1" />
      <span class="descricao S1">
        {{ descricao }}
      </span>
      <hr />
      <p class="preco">{{ Label_Preco }} {{ precoFor }}</p>
    </span>
    <span
      class="comprar"
      :style="{ background: comprarColor, color: Color_fff }"
      @click="Comprar()"
    >
      {{ Label_Comprar }}
    </span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    titleImg: {
      type: String,
      require: true,
      default: '',
    },
    img: {
      type: String,
      require: true,
      default: '',
    },
    title: {
      type: String,
      require: true,
      default: '',
    },
    descricao: {
      type: String,
      require: true,
      default: '',
    },
    preco: {
      type: String,
      require: true,
      default: '',
    },
    precoFor: {
      type: String,
      require: true,
      default: '',
    },
    comprarColor: {
      type: String,
      require: true,
      default: '',
    },
    // cores
    color: {
      type: String,
      default: null,
      required: true,
    },
    background: {
      type: String,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      Label_Preco: 'Preço: ',
      Label_Comprar: 'Comprar',
    }
  },
  computed: {
    ...mapState({
      Color_fff: (state) => state.Colors.Color_fff,
      Color_000: (state) => state.Colors.Color_000,
      Color_238: (state) => state.Colors.Color_238,
    }),
  },
  methods: {
    ...mapMutations({}),
    Comprar() {},
  },
}
</script>

<style scoped>
.cardJ {
  border-radius: 10px;
  max-width: 216px;
  min-width: 216px;
  height: 275px;
  padding: 2px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  transition: ease 0.1s;
  box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.205);
}
.p1:hover {
  height: 375px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.205);
}
.p1:hover > span .S1 {
  transition: 0.1s ease-out;
  display: flex;
  height: auto;
  justify-content: flex-start;
  animation: C ease 1s;
}
.p1:hover > .conteudo {
  transition: 0.1s ease-out;
}
.p1:hover > .comprar {
  display: flex;
  transition: 0.1s ease-out;
  animation: C ease 2s;
}
.S1 {
  display: none;
}
hr {
  margin: 3% 0;
  border-color: #011a96;
}
.img {
  width: 100%;
  height: 170px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  flex-wrap: wrap;
}

.conteudo {
  padding: 0 5px;
  margin: 2% 0;
  width: 100%;
  border-radius: 0 0 10px 10px;
  flex-direction: column;
  justify-content: space-between;
}
.preco {
  display: flex;
  align-self: flex-end;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  cursor: text;
  font-weight: bold;
  color: #4bdd64;
}
.titulo {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
}
.descricao {
  font-size: 15px;
}
@keyframes C {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.comprar {
  display: none;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 35px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  align-self: flex-end;
  width: 100%;
}
</style>
