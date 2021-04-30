<template>
  <div class="card p1">
    <span
      class="img"
      :title="titleImg"
      :style="{ 'background-image': 'url(' + img + ')' }"
    >
    </span>
    <span class="conteudo" :style="{ background: Color_fff, color: Color_000 }">
      <p class="titulo">{{ title }}</p>
      <hr />
      <p class="preco">
        <span class="preco-antes"> {{ Label_De }} {{ preco }} </span>
        |
        {{ Label_Para }} {{ precoFor }}
      </p>
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
  },
  data() {
    return {
      Label_Para: 'Para: ',
      Label_De: 'De: ',
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
.card {
  border-radius: 20px;
  max-width: 216px;
  min-width: 216px;
  max-height: 275px;
  padding: 2px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  transition: ease 0.1s;
  margin: 10px;
  box-shadow: 2px 7px 11px 0px rgba(0, 0, 0, 0.37);
}
.p1:hover {
  max-height: 375px;
}
.p1:hover > .comprar {
  display: flex;
  transition: 0.1s ease-out;
  animation: C ease 2s;
}
.p1:hover > .conteudo {
  transition: 0.1s ease-out;
  border-radius: 0;
}
.p1:hover > .add-carrinho {
  display: flex;
  transition: 0.1s ease-out;
  animation: C ease 2s;
}
.img {
  width: 100%;
  height: 170px;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  flex-wrap: wrap;
}
hr {
  width: 100%;
  color: none;
  margin: 2% auto;
}
.conteudo {
  margin: 2% 0;
  width: 100%;
  border-radius: 0 0 20px 20px;
  flex-direction: column;
  justify-content: space-between;
}
.preco {
  display: flex;
  align-self: flex-end;
  padding: 5px;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  cursor: text;
  font-weight: bold;
  color: #01963f;
}
.preco-antes {
  font-size: 14px;
  margin-right: 5%;
  text-decoration-line: line-through;
  font-weight: bold;
  color: #cc0000;
}
.titulo {
  padding: 1%;
  height: 38.25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.descricao {
  font-size: 15px;
  padding: 1px;
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
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  height: 35px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  align-self: flex-end;
  width: 100%;
  font-weight: bold;
}
.add-carrinho {
  display: none;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 35px;
  width: 100%;
  background: #fff159;
  font-weight: bold;
  color: #02142b;
  cursor: pointer;
}
.img {
  background: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
