<template>
  <main>
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

    <div
      v-for="(User, index) in infoUser"
      :key="'User' + index"
      :style="{ background: Color_238 }"
      class="Sobre"
    >
      <div class="Menu" :style="{ 'border-right-color': Color_fff }">
        <span :style="{ color: Color_fff }">
          {{ Label_sobre }}
        </span>
      </div>
      <div class="itens">
        <span :style="{ background: Color_fff }" class="years"
          >{{ User.years }}{{ years }}</span
        >
        <span :style="{ background: Color_fff }" class="sexo">{{
          User.sexo
        }}</span>
        <span :style="{ background: Color_fff }" class="email">{{
          User.email
        }}</span>
        <span :style="{ background: Color_fff }" class="cit">{{
          User.cit
        }}</span>
        <span :style="{ background: Color_fff }" class="NumberProdutos"
          >{{ User.NumberProdutos }}{{ products }}</span
        >
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      years: ' Anos',
      products: ' Produtos',
      User_img: 'https://github.com/karllasouzza.png',
      Label_sobre: 'Sobre',
      infoUser: [
        {
          name: 'Karlla Souzza',
          sexo: 'Mulher Transgenera',
          cit: 'Taquaritinga-Sp',
          years: '18',
          email: 'Karlla.souzza7@gmail.com',
          bio: 'Nascer em um corpo de "homem" nao me torna menos mulher',
          NumberProdutos: '330',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      Color_fff: (state) => state.Colors.Color_fff,
      Color_000: (state) => state.Colors.Color_000,
      Color_238: (state) => state.Colors.Color_238,
      idioma: (state) => state.Acessibilidade.idioma,
    }),
  },
}
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 55px 169px 180px 40px 85px 20px 43px 100vh;
  grid-template-columns: 1fr 940px 1fr;
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
.User_info[data-v-5d705585] {
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
  padding: 0 25px;
}
.Sobre > .itens > span:first-child {
  margin-top: 0;
}
</style>
