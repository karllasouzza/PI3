<template>
  <main :as="PageOn()">
    <!-- User  -->
    <div class="User_fotos" :style="{ background: Color_238 }" />
    <div
      class="Foto_perfil"
      :style="{ backgroundImage: 'url(' + User_img + ')' }"
    />
    <div
      v-for="(infos, index) in infoUser"
      :key="'infos' + index"
      class="User_info"
    >
      <h1>{{ infos.name }}</h1>
      <span class="bio">{{ infos.bio }}</span>
    </div>

    <!-- Sobre -->
    <div class="Menu_background" :style="{ background: Color_238 }"></div>
    <div v-for="(User, index) in infoUser" :key="'User' + index" class="Sobre">
      <div class="Menu" :style="{ 'border-right-color': Color_fff }">
        <span :style="{ color: Color_fff }">
          {{ Label_sobre }}
        </span>
      </div>
      <div class="itens">
        <span :style="{ background: Color_fff }" class="years">
          <span>{{ years }}</span> {{ User.years }}</span
        >
        <span :style="{ background: Color_fff }" class="sexo">
          <span>{{ sexo }}</span
          >{{ User.sexo }}</span
        >
        <span :style="{ background: Color_fff }" class="email">
          <span> {{ email }} </span>
          {{ User.email }}</span
        >
        <span :style="{ background: Color_fff }" class="cit">
          <span>{{ cit }}</span
          >{{ User.cit }}</span
        >
        <span :style="{ background: Color_fff }" class="NumberProdutos">
          <span>{{ products }}</span
          >{{ User.NumberProdutos }}</span
        >
      </div>
    </div>

    <!-- Produtos -->
    <div class="Produtos_background" :style="{ background: Color_976 }"></div>
    <div class="Card">
      <div class="Menu" :style="{ 'border-right-color': Color_fff }">
        <span :style="{ color: Color_fff }">
          {{ Label_Produtos }}
        </span>
      </div>
      <div class="Cards">
        <CardsProdutos
          v-for="(Card, index) in infoProdutos"
          :key="'Card' + index"
          :img="Card.img"
          :title-img="Card.img"
          :title="Card.title"
          :preco="Card.preco"
          :preco-for="Card.precoFor"
          :comprar-color="Color_976"
          :background="Color_fff"
          :color="Color_000"
        />
      </div>
    </div>
    <FooterDetalhe />
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      User_img: 'https://github.com/karllasouzza.png',

      // Sobre
      Label_sobre: 'Sobre',
      years: 'Idade:',
      sexo: 'Orientação sexual:',
      products: 'Produtos postados:',
      email: 'E-mail:',
      cit: 'Cidade atual:',
      // infoUser: [
      //   {
      //     name: 'Karlla Souzza',
      //     sexo: 'Mulher Transgenera',
      //     cit: 'Taquaritinga-Sp',
      //     years: '18 anos',
      //     email: 'Karlla.souzza7@gmail.com',
      //     bio: 'Nascer em um corpo de "homem" nao me torna menos mulher',
      //     NumberProdutos: '330',
      //   },
      // ],

      // Produtos
      Label_Produtos: 'Produtos',
      infoProdutos: [
        {
          img:
            'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_960_720.jpg',
          title: 'Sementes de Romã',
          preco: '15,00',
          precoFor: '13,00',
        },
        {
          img:
            'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_960_720.jpg',
          title: 'Sementes de Romã',
          preco: '15,00',
          precoFor: '13,00',
        },
        {
          img:
            'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_960_720.jpg',
          title: 'Sementes de Romã',
          preco: '15,00',
          precoFor: '13,00',
        },
      ],
    }
  },
  head: {
    title: 'CWIA | Perfil',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '', // palavras utilizadas (SEO) EX: "melhores remedios" , "soluçao adequada".
      },
    ],
  },
  computed: {
    ...mapState({
      Color_fff: (state) => state.Colors.Color_fff,
      Color_000: (state) => state.Colors.Color_000,
      Color_238: (state) => state.Colors.Color_238,
      Color_976: (state) => state.Colors.Color_976,
      idioma: (state) => state.Acessibilidade.idioma,

      // Dados do usuario
      infoUser: (state) => state.Usuario.User,
    }),
  },
  created() {
    // Portugues-br
    if (this.idioma === 'pt') {
      this.Label_sobre = 'Sobre'
      this.years = 'Idade'
      this.sexo = 'Orientação sexual:'
      this.products = 'Produtos postados:'
      this.email = 'E-mail:'
      this.cit = 'Cidade atual'
      this.Label_Produtos = 'Produtos'
    }
    // Ingles
    else if (this.idioma === 'en') {
      this.Label_sobre = 'About'
      this.years = 'Age'
      this.sexo = 'Sexual orientation:'
      this.products = 'Posted products:'
      this.email = 'E-mail:'
      this.cit = 'Current City'
      this.Label_Produtos = 'Products'
    }
    // Espanhol
    else {
      this.Label_sobre = 'Acerca de'
      this.years = 'Edad'
      this.sexo = 'Orientación sexual:'
      this.products = 'Productos publicados:'
      this.email = 'Correo electrónico:'
      this.cit = 'Ciudad Actual'
      this.Label_Produtos = 'Productos'
    }
  },
  methods: {
    ...mapMutations({
      PageOn: 'Header/Page_on_perfil',
    }),
  },
}
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 55px 169px 180px 40px 85px 20px 0 400px 50px 400px 60px 73px;
  grid-template-columns: 1fr 940px 1fr;
}
.Detalhe {
  grid-row: 12;
  grid-column: 1/4;
}

/* fotos - perfil e capa  */
.User_fotos {
  background-size: cover;
  grid-row: 2/4;
  grid-column: 2/3;
  border-radius: 0 0 20px 20px;
}

.Foto_perfil {
  width: 166px;
  height: 220px;
  background-position: center;
  background-size: cover;
  grid-row: 3;
  grid-column: 2;
  margin: auto auto;
  border-radius: 0 30px;
}

/* informaços do usuario  */
.User_info {
  grid-row: 5/6;
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.User_info > span,
.User_info > h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Menu_background {
  grid-row: 7/9;
  grid-column: 1/4;
}
.Menu {
  grid-row: 7/8;
  grid-column: 2/3;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  width: 200px;
  border-right: 2px solid;
}
.Menu > span {
  height: 50px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  padding: 0 20px;
  font-size: 30px;
}

.Sobre {
  width: 100%;
  height: 400px;
  grid-row: 8/9;
  grid-column: 2/3;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
}
.itens {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  width: 70%;
}

.Sobre > .itens > span {
  width: auto;
  height: 45px;
  border-radius: 15px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  padding: 0 25px 0 0;
}
.Sobre > .itens > span:first-child {
  margin-top: 0;
}
.Sobre > .itens > span > span:first-child {
  background: lightgreen;
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 0 6px;
  border-radius: 15px 0 0 15px;
  margin-right: 25px;
}

/* Produtos */
.Produtos_background {
  grid-row: 10/11;
  grid-column: 1/4;
}
.Card {
  width: 100%;
  height: 400px;
  grid-row: 10/11;
  grid-column: 2/3;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
}
.Card > .Cards {
  display: flex;
  flex-direction: row;
  margin: 0 20px;
  padding: 20px 0;
  width: 70%;
  height: 98%;
  min-width: 70%;
  min-height: 350px;
  overflow-x: Scroll;
}
.Card > .Cards:last-child::-webkit-scrollbar {
  width: 16px;
  background: transparent;
}
.Card > .Cards:last-child::-webkit-scrollbar-thumb {
  background: white;
  cursor: pointer;
  border-radius: 8px;
}
</style>
