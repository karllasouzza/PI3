<template>
  <main :as="PageOn()" :style="{ background: Color_fff }">
    <!-- Baner -->
    <div class="baner">
      <div>
        <p>
          <TitleBorder :text="baner_title1" color="#fff" />
          <TitleBorder :text="baner_title2" color="#fff" />
        </p>
        <ButtonSmall
          :text="baner_button"
          background=""
          color="#fff"
          class="btn-hover color-1"
          to="/produtos"
        />
      </div>
    </div>

    <!-- Sobre -->
    <div class="sobre" :style="{ background: Color_fff }">
      <div class="img" />
      <div>
        <TitleBorder :text="sobre_title1" :color="Color_000" />
        <span :style="{ color: Color_000 }">{{ sobre_texto }}</span>
        <ButtonSmall
          :text="sobre_button"
          background=""
          class="btn-hover color-1"
          color="#fff"
          to="/sobre"
        />
      </div>
    </div>

    <!-- Blog -->
    <div class="blog" :style="{ background: Color_238 }">
      <div>
        <TitleBorder :text="blog_title1" :color="Color_fff" />
        <span :style="{ color: Color_fff }">{{ blog_texto }}</span>
        <a
          href="https://cwiameioambiente.000webhostapp.com/"
          class="desktop btn"
          :style="
            blog_button_hover
              ? { color: '#fff', background: Color_004 }
              : { background: '#fff', color: Color_004 }
          "
          @mouseenter="blog_button_hover = true"
          @mouseleave="blog_button_hover = false"
          >{{ blog_button }}</a
        >
      </div>
      <a
        class="mobile btn"
        href="https://cwiameioambiente.000webhostapp.com/"
        :style="
          blog_button_hover
            ? { color: '#fff', background: Color_004 }
            : { background: '#fff', color: Color_004 }
        "
        @mouseenter="blog_button_hover = true"
        @mouseleave="blog_button_hover = false"
        >{{ blog_button }}</a
      >
      <div>
        <a
          v-for="(cards, index) in card"
          :key="index"
          :href="cards.link"
          :style="{ background: Color_fff }"
          class="card"
        >
          <div
            class="img"
            :style="{ 'background-image': 'url(' + cards.img + ')' }"
          ></div>
          <div class="text">
            <p><Title :text="cards.titulo" :color="Color_000" /></p>
            <span :style="{ color: Color_000 }">{{ cards.resumo }}</span>
          </div>
        </a>
      </div>
    </div>

    <!-- Login -->
    <div class="login">
      <div>
        <p>
          <TitleBorder :text="login_title1" color="#fff" />
        </p>
        <span style="color: #fff">
          {{ login_texto }}
        </span>
        <div>
          <ButtonSmall
            :style="
              login_button_hover
                ? { color: '#fff', background: Color_004 }
                : { background: '#fff', color: Color_004 }
            "
            :text="login_button"
            background="#fff"
            :color="Color_238"
            to="/user"
            class="desktop btn-hover"
            @mouseenter.native="login_button_hover = true"
            @mouseleave.native="login_button_hover = false"
          />
          <ButtonMiddle
            :text="login_button2"
            background=""
            color="#fff"
            to="/user"
            class="desktop btn-hover color-1"
          />
        </div>
      </div>
      <FooterDetalhe />
    </div>
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      // Baner
      baner_title1: '',
      baner_title2: '',
      baner_button: '',

      // Sobre
      sobre_title1: '',
      sobre_texto: '',
      sobre_button: '',

      // Blog
      blog_title1: '',
      blog_texto: '',
      blog_button: '',
      blog_button_hover: false,
      card: [
        {
          img:
            'https://cwiameioambiente.000webhostapp.com/wp-content/uploads/2021/05/222-2-1024x412.jpg',
          titulo: 'Como fazer adubo.',
          resumo:
            'Nesse post vamos ensinar como fazer um adubo caseiro com ingredientes que você joga fora. Vamos fazer o famoso NPK?',
          link:
            'https://cwiameioambiente2.000webhostapp.com/2021/05/como-ter-um-adubo-npk-feito-em-casa',
        },
        {
          img:
            'https://cwiameioambiente.000webhostapp.com/wp-content/uploads/2021/05/plantas.jpg',
          titulo: 'Preparo de terra.',
          resumo:
            'Como ter a terra perfeita para o plantio, algumas dicas de preparo para suas plantas crescerem lindas e fortes.',
          link:
            'https://cwiameioambiente2.000webhostapp.com/2021/05/como-preparar-sua-terra-para-o-plantio',
        },
        {
          img:
            'https://cwiameioambiente.000webhostapp.com/wp-content/uploads/2021/05/5151.jpeg',
          titulo: 'Bananas em casa.',
          resumo:
            'Como saber se seu pé de banana este pronto para colher? Ou se ainda não? Confira nesse post as dicas para saber.',
          link:
            'https://cwiameioambiente2.000webhostapp.com/2021/05/como-saber-se-sua-bananeira-esta-produzindo',
        },
        {
          img:
            'https://cwiameioambiente.000webhostapp.com/wp-content/uploads/2021/05/Screenshot_29.jpg',
          titulo: 'Tomates em casa',
          resumo:
            'Como cultivar aquele tomate cereja delicioso em casa, com uma procedência de qualidade e muito sabor.',
          link:
            'https://cwiameioambiente2.000webhostapp.com/2021/05/como-cultivar-tomates-cereja-na-sua-casa',
        },
      ],

      // Login
      login_title1: '',
      login_texto: '',
      login_button: '',
      login_button2: '',
      login_button_hover: false,
    }
  },
  head: {
    title: 'CWIA | Inicio',
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
      Color_004: (state) => state.Colors.Color_004,
      idioma: (state) => state.Acessibilidade.idioma,
    }),
  },
  created() {
    if (this.idioma === 'pt') {
      // Baner
      this.baner_title1 = 'Plante árvores'
      this.baner_title2 = 'Colha humanidade'
      this.baner_button = 'Explorar'

      // Sobre
      this.sobre_title1 = '"Como vemos o mundo"'
      this.sobre_texto =
        'As vesses o mundo pode parecer um lugar sombrio mas sempre lembre que as pessoas colhem oque plantam a menos que todos nós de o primeiro passo para um mundo mais verde'
      this.sobre_button = 'Ver mais'

      // Blog
      this.blog_title1 = 'Nosso blog'
      this.blog_texto =
        'Com atualizações semanais ajudamos a vocês a estabelecerem raízes consistentes com os métodos de preservação ambiental'
      this.blog_button = 'Ver mais'

      // Login
      this.login_title1 = 'Junte se a nós'
      this.login_texto =
        'Vamos mostrar que com pequenas atitudes você faz uma grande diferença na preservação ambiental'
      this.login_button = 'Entrar'
      this.login_button2 = 'Criar conta'
    }

    // ingles
    else if (this.idioma === 'en') {
      // Baner
      this.baner_title1 = 'Plant trees'
      this.baner_title2 = 'Harvest humanity'
      this.baner_button = 'explore'

      // Sobre
      this.sobre_title1 = '"How we see the world"'
      this.sobre_texto =
        'The vesses the world may seem like a dark place but always remember that people harvest what they plant unless we all take the first step towards a greener world'
      this.sobre_button = 'See more'

      // Blog
      this.blog_title1 = 'Our blog'
      this.blog_texto =
        'With weekly updates we help you establish roots consistent with environmental preservation methods'
      this.blog_button = 'See more'

      // Login
      this.login_title1 = 'Join us'
      this.login_texto =
        'Let us show that with small attitudes you make a great difference in environmental preservation'
      this.login_button = 'Enter'
      this.login_button2 = 'Create account'
    }

    // espanhol
    else {
      // Baner
      this.baner_title1 = 'Plantar árboles'
      this.baner_title2 = 'Cosecha de la humanidad'
      this.baner_button = 'Explorar'

      // Sobre
      this.sobre_title1 = '"Cómo vemos el mundo"'
      this.sobre_texto =
        'Las vísperas del mundo pueden parecer un lugar oscuro, pero siempre recuerden que la gente cosecha lo que plantan a menos que todos demos el primer paso hacia un mundo más verde'
      this.sobre_button = 'Ver más'

      // Blog
      this.blog_title1 = 'Nuestro blog'
      this.blog_texto =
        'Con actualizaciones semanales le ayudamos a establecer raíces consistentes con los métodos de preservación ambiental'
      this.blog_button = 'Ver más'

      // Login
      this.login_title1 = 'Únete a nosotros'
      this.login_texto =
        'Vamos a demostrar que con pequeñas actitudes se hace una gran diferencia en la preservación del medio ambiente'
      this.login_button = 'Entrar'
      this.login_button2 = 'Crear cuenta'
    }
  },
  methods: {
    ...mapMutations({
      PageOn: 'Header/Page_on_inicio',
    }),
  },
}
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 40px 1fr 1fr 40px;
  grid-template-rows: 50vh 50vh 450px 400px 100vh;
}
.Detalhe {
  position: absolute;
  bottom: 0;
  left: 0;
}

/* Baner */
.baner {
  grid-row: 1/3;
  grid-column: 1/5;
  width: 100%;
  height: 100%;
  background-image: url(assets/img/Inicio/Fotos/1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 40% 30% 30%;
}
.baner div {
  grid-row: 2;
  grid-column: 1/5;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 40px;
}
.baner > div > p {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
}
.baner > div > p > span {
  font-size: 35px;
}

/* Sobre  */
.sobre {
  grid-row: 3/4;
  grid-column: 2/4;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
}
.sobre > .img {
  width: 350px;
  height: 350px;
  grid-column: 1;
  border-radius: 5px;
  margin: auto;
  background: #001219 url(assets/img/Inicio/Fotos/terra.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.sobre > div {
  width: 100%;
  height: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.sobre > div > span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78%;
  text-align: center;
}
.sobre > div > span:first-child {
  font-size: 30px;
}

/* Blog */
.blog {
  grid-row: 4/5;
  grid-column: 1/5;
  display: grid;
  grid-template-columns: 40px 1fr 1fr 40px;
}
.blog a {
  transition: ease-in-out 0.7s;
}
.blog > div > span {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 78%;
}
.blog > div > span:first-child {
  font-size: 30px;
}
.blog > div:first-child {
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80%;
}
.blog > div:last-child {
  grid-column: 3/4;
  width: 320px;
  height: 98%;
  min-width: 100%;
  min-height: 350px;
  overflow-x: Scroll;
  display: flex;
  align-items: center;
  margin: 1px auto;
}
.blog > div:last-child::-webkit-scrollbar {
  width: 16px;
  background: transparent;
}
.blog > div:last-child::-webkit-scrollbar-thumb {
  background: #004b23de;
  cursor: pointer;
  border-radius: 8px;
}
.blog > div:last-child > .card:first-child {
  margin-left: 1px;
}
.blog .btn {
  font-family: 'Montserrat';
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
}
.blog > div > a > .img {
  width: 100%;
  height: 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
.blog > div > a.card {
  min-width: 216px;
  min-height: 333px;
  height: 333px;
  width: 216px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1%;
  text-decoration: none;
  margin: 0 20px;
}
.blog > div > a.card > .text {
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.blog > div > a.card > .text > p > span {
  font-size: 20px;
}
.blog > .mobile {
  display: none;
}

/* Login */
.login {
  grid-row: 5/6;
  grid-column: 1/5;
  width: 100%;
  height: 100%;
  background-image: url(assets/img/Inicio/Fotos/people.png);
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 40% 30% 30%;
  position: relative;
}
.login > div {
  grid-row: 2;
  grid-column: 1/3;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 40px;
}
.login > div > p {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
}
.login > div > p > span {
  font-size: 35px;
}
.login > div > div {
  width: 100%;
  display: flex;
}
.login > div > div > a:last-child {
  margin-left: 20px;
}
/* responsividade antecipada para prevençao de bugs/quebras indevidas */
@media (max-width: 890px) {
  main {
    grid-template-columns: 20px 1fr 1fr 20px;
  }

  /* Sobre  */
  .sobre > img {
    width: 260px;
    height: 260px;
  }
  .sobre > div > span:first-child {
    font-size: 27px;
  }
}

/* responsividade antecipada para prevençao de bugs/quebras indevidas */
@media (max-width: 800px) {
  .sobre > .img {
    width: 300px;
    height: 300px;
  }
}

/* Responsividade - Tablet */
@media (max-width: 768px) {
  main {
    grid-template-columns: 20px 1fr 1fr 20px;
    grid-template-rows: 50vh 50vh 100vh 400px 100vh;
  }
  /* Baner */
  .baner {
    background-image: url(assets/img/Inicio/Fotos/1-tablet.jpg);
  }
  .baner > div > p > span {
    font-size: 30px;
  }
  /* Sobre */
  .sobre {
    grid-template-rows: 50vh 50vh;
  }
  .sobre > .img {
    width: 100%;
    height: 230px;
    grid-row: 1;
    grid-column: 1/3;
    margin: 0;
    margin-top: auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .sobre > div {
    width: 100%;
    height: 85%;
    grid-row: 2;
    grid-column: 1/3;
  }

  /* Blog */
  .blog > div:first-child {
    height: 100%;
  }

  /* login */
  .login {
    background-image: url(assets/img/Inicio/Fotos/people-tablet.png);
  }
  .login > div {
    grid-column: 1/4;
  }
  .login > div > p > span {
    font-size: 30px;
  }
}

/* responsividade antecipada para prevençao de bugs/quebras indevidas */
@media (max-width: 692px) {
  main {
    grid-template-rows: 50vh 50vh 100vh 130vh 100vh;
  }

  /* Blog */
  .blog {
    grid-template-rows: 35% 55% 10%;
  }
  .blog > div:first-child {
    grid-column: 2/4;
    height: 80%;
  }
  .blog > div:last-child {
    grid-column: 2/4;
    grid-row: 2/3;
  }
  .blog > .mobile {
    display: flex;
    grid-row: 3;
    grid-column: 2;
  }
  .blog > div:first-child > a.desktop {
    display: none;
  }
  .blog > div:last-child::-webkit-scrollbar {
    width: 0px;
  }
  .blog > div:last-child::-webkit-scrollbar-thumb {
    width: 0px;
    background: none;
  }
}

/* responsividade antecipada para prevençao de bugs/quebras indevidas */
@media (max-width: 466px) {
  .sobre > div > span:first-child {
    font-size: 24px;
  }

  /* login  */
  .login > div {
    grid-column: 1/5;
    padding: 40px;
    grid-row: 1/3;
  }
}

/* Responsibilidade - Mobile */
@media (max-width: 425px) {
  main {
    grid-template-rows: 50vh 50vh 100vh 110vh 100vh;
  }

  /* Baner */
  .baner {
    background-image: url(assets/img/Inicio/Fotos/1-mobile.jpg);
  }
  .baner > div > p > span,
  .blog > div:first-child > span:first-child {
    font-size: 28px;
  }
  .baner {
    grid-template-rows: 45% 30% 25%;
  }
  .baner > div {
    padding: 0 10px;
    justify-content: space-around;
  }
  /* Sobre */
  .sobre > div > span {
    width: 100%;
  }
  /* Blog */

  .blog {
    grid-template-columns: 20px 1fr 1fr 20px;
    grid-template-rows: 25% 65% 10%;
  }
  .blog > div:first-child {
    grid-column: 2/4;
    height: 100%;
  }
  .blog > div:last-child {
    width: 280px;
  }
  .blog > div > a.card > .text > p > span {
    font-size: 18px;
  }

  /* login */
  .login {
    background-image: url(assets/img/Inicio/Fotos/people-mobile.png);
  }
}

/* responsividade antecipada para prevençao de bugs/quebras indevidas */
@media (max-width: 325px) {
  main {
    grid-template-columns: 10px 1fr 1fr 10px;
    grid-template-rows: 50vh 50vh 100vh 140vh 100vh;
  }
  .blog > div:first-child > span:first-child {
    font-size: 24px;
  }
  .blog > div:first-child {
    grid-column: 2/4;
    height: 100%;
  }
}
</style>
