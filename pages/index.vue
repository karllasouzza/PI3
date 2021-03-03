<template>
  <main class="container">
    <!-- Baner -->
    <div class="Baner Background_000">
      <div>
        <BigTitle customclass="Color_fff" :text="Baner_Title_1"> </BigTitle>
        <TitleBorder customclass="Color_fff" :text="Baner_Destaque_1" />
      </div>
      <div>
        <BigTitle customclass="Color_fff" :text="Baner_Title_2"> </BigTitle>
        <TitleBorder customclass="Color_fff" :text="Baner_Destaque_2" />
      </div>

      <span class="Text">
        {{ Sobre_Text }}
        <nuxt-link to="/" class="Ver_mais Color_ff5">Ver mais</nuxt-link>
      </span>
    </div>
    <!-- Parte remetente a pagina Sobre -->
    <div class="Sobre_Img"></div>
    <div class="Sobre">
      <p class="Title Color_000">{{ Sobre_Title }}</p>
      <span class="Text">
        {{ Sobre_Text }}
        <nuxt-link to="/" class="Ver_mais Color_ff5">Ver mais</nuxt-link>
      </span>
    </div>
    <!-- Parte remetente a pagina Blog -->

    <div class="Blog">
      <p class="Title Color_000">{{ Blog_Title }}</p>
      <div class="L_ver_mais"><nuxt-link to="/">Ver mais</nuxt-link></div>
      <div class="Scroll"></div>
    </div>
    <!-- Parte remetente a pagina Loguin-->
    <div class="Create_Acount">
      <div class="Svg"></div>
      <span class="Text_two"></span>
      <nuxt-link class="Button_Ver_mais" to="/">Ver mais</nuxt-link>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      // Baner
      Baner_Title_1: 'Plante',
      Baner_Title_2: ' Colha',
      Baner_Destaque_1: 'Arvores',
      Baner_Destaque_2: ' Humanidade',
      // Sobre
      Sobre_Title: '"Como vemos o mundo"',
      Sobre_Text:
        ' Lorem ipsum dolor sit amet consectetur adipisicin Tempore officiis sapiente necessitatibus voluptas, vitae aspernatur dolorlaboriosam minus similique? Nemo temporibus praesentium mollitia,nesciunt repellat eos ab sunt exercitationem eligendi?',
      // Blog
      Blog_Title: 'Postagem em alta',
    }
  },
}
</script>

<style scoped>
/* Configurações da pagina */
.container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 40px 1fr 1fr 1fr 1fr 1fr 1fr 40px;
  grid-template-rows: 100vh 350px 350px 100vh;
}
.Ver_mais {
  text-decoration: none;
}
.Ver_mais,
.nuxt-link-active {
  text-decoration: none;
}

/* Baner */
.Baner {
  width: 100%;
  height: 100%;
  padding: 0 40px;
  grid-row: 1/2;
  grid-column: 1/9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-image: url(../assets/img/Inicio/Fotos/1.png);
}
.Baner > .Text {
  width: 408.562px;
  color: white;
  margin-top: 16px;
}
.Baner > div {
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.Baner > div > p {
  margin-right: 1%;
}

/*  Parte remetente a pagina Sobre  */
.Sobre_Img {
  width: 280px;
  height: 380px;
  grid-row: 1/3;
  grid-column: 2/3;
  background-image: url(../assets/img/Inicio/Fotos/2.jpg);
  background-size: cover;
  background-position-x: right;
  border-radius: 20px;
  display: flex;
  align-self: flex-end;
  margin-bottom: 20%;
}
.Sobre {
  width: 100%;
  height: 100%;
  grid-row: 2/3;
  grid-column: 2/8;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 3%;
}
.Sobre > p.Title {
  width: 487.656px;
  text-align: left;
  margin-top: 3%;
  margin-bottom: 2%;
}
.Sobre > span.Text {
  width: 487.656px;
  height: 50%;
}

/*  Parte remetente a pagina Blog  */
.Blog {
  grid-row: 3/4;
  grid-column: 1/9;
  padding: 0 40px;
}
.Scroll {
  overflow-x: scroll;
}
.Title {
  font-size: 35px;
  font-weight: bold;
}

/*  Parte remetente a pagina Loguin  */
.Create_Acount {
  grid-row: 4/5;
  grid-column: 1/9;
}
</style>
