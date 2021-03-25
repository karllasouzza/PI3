<template>
  <main
    class="container"
    :style="{
      background: Color_ffc,
    }"
  >
    <!-- Baner -->
    <div class="Baner">
      <div>
        <BigTitle :color="Color_fff" :text="Baner_Title_1" />
        <TitleBorder :color="Color_00f" :text="Baner_Destaque_1" />
      </div>
      <div>
        <BigTitle :color="Color_fff" :text="Baner_Title_2" />
        <TitleBorder :color="Color_00f" :text="Baner_Destaque_2" />
      </div>

      <span class="Text" :style="{ color: Color_fff }">
        {{ Sobre_Text }}
        <Nlink
          :color="Color_ff5"
          class="Ver_mais"
          :text="text_More"
          :link="More_link"
          acess=""
        />
      </span>
    </div>
    <!-- Parte remetente a pagina Sobre -->
    <div class="Sobre_Img"></div>
    <div class="Sobre">
      <p class="Title" :style="{ color: Color_000 }">
        {{ Sobre_Title }}
        <TitleBorder :color="Color_007" :text="Sobre_Destaque" />
      </p>
      <span class="Text" :style="{ color: Color_000 }">
        {{ Sobre_Text }}
        <Nlink
          class="Ver_mais"
          :color="Color_ff5"
          :text="text_More"
          link="/sobre"
          acess=""
        />
      </span>
    </div>
    <!-- Parte remetente a pagina Blog -->

    <div class="Blog">
      <p :style="{ color: Color_000 }" class="Title">
        <span>{{ Blog_Title }}</span>
        <Nlink
          :color="Color_ff5"
          :style="{ background: Color_fff }"
          class="Ver_mais"
          :text="text_More"
          link="/blog"
          acess=""
        />
      </p>

      <div class="Scroll">
        <!-- cards -->
        <Card
          v-for="(post, index) in postUser"
          :key="index"
          :user-image="post.userImage"
          :user-name="post.userName"
          :post-time="post.time"
          :card-text="post.cardText"
          :cnt-cmt="post.cntCmt"
          :cnt-fav="post.cntFav"
          :cnt-love="post.cntLove"
          :color="Color_000"
          :background="Color_fff"
        />
      </div>
      <!-- Parte remetente a pagina Login -->
    </div>
    <div class="Login">
      <div class="svg">
        <svg
          class="Login_svg"
          viewBox="0 0 415 437"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M147 76C147 42.863 173.863 16 207 16H256V68.1824C256 101.32 229.137 128.182 196 128.182H147V76Z"
            class="folha"
          />
          <path
            d="M159 60C159 26.8629 185.863 0 219 0H268V52C268 85.1371 241.137 112 208 112H159V60Z"
            fill="url(#pattern0)"
          />
          <path
            d="M0 230C0 196.863 26.8629 170 60 170H109V222.182C109 255.32 82.1371 282.182 49 282.182H0V230Z"
            class="folha"
          />
          <path
            d="M12 214C12 180.863 38.8629 154 72 154H121V206C121 239.137 94.1371 266 61 266H12V214Z"
            fill="url(#pattern1)"
          />
          <path
            d="M294 230C294 196.863 320.863 170 354 170H403V222.182C403 255.32 376.137 282.182 343 282.182H294V230Z"
            class="folha"
          />
          <path
            d="M306 214C306 180.863 332.863 154 366 154H415V206C415 239.137 388.137 266 355 266H306V214Z"
            fill="url(#pattern2)"
          />
          <path
            d="M147 230C147 196.863 173.863 170 207 170H256V222.182C256 255.32 229.137 282.182 196 282.182H147V230Z"
            class="folha"
          />
          <path
            d="M159 214C159 180.863 185.863 154 219 154H268V206C268 239.137 241.137 266 208 266H159V214Z"
            fill="url(#pattern3)"
          />
          <path
            d="M147 384C147 350.863 173.863 324 207 324H256V376.182C256 409.32 229.137 436.182 196 436.182H147V384Z"
            class="folha"
          />
          <path
            d="M159 368C159 334.863 185.863 308 219 308H268V360C268 393.137 241.137 420 208 420H159V368Z"
            fill="url(#pattern4)"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0"
                transform="translate(0 -0.365079) scale(0.00277778)"
              />
            </pattern>
            <pattern
              id="pattern1"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0"
                transform="translate(0 -0.365079) scale(0.00277778)"
              />
            </pattern>
            <pattern
              id="pattern2"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0"
                transform="translate(0 -0.365079) scale(0.00277778)"
              />
            </pattern>
            <pattern
              id="pattern3"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0"
                transform="translate(0 -0.365079) scale(0.00277778)"
              />
            </pattern>
            <pattern
              id="pattern4"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0"
                transform="translate(0 -0.365079) scale(0.00277778)"
              />
            </pattern>
            <image
              id="image0"
              width="360"
              height="640"
              href="https://github.com/karllasouzza.png"
            />
          </defs>
        </svg>
      </div>
      <div class="Login_text">
        <span class="text">
          <TitleBorder
            class="txt"
            :color="Color_238"
            :text="Login_Destaque_1"
          />
          e nos deixe mostrar que com pequenas atitudes você faz uma grande
          diferencia na
          <TitleBorder
            class="txt"
            :color="Color_238"
            :text="Login_Destaque_2"
          />
        </span>

        <span
          class="btn_inicio"
          :style="{ color: Color_fff, background: Color_238 }"
          >Criar conta</span
        >
      </div>
    </div>
    <!-- <div class="Create_Acount">
      <div class="Svg"></div>
      <span class="Text_two"></span>
      <Nlink
        :color="Color_ff5"
        class="Ver_mais"
        :text="text_More"
        link="/loguin"
        acess=""
      />
    </div> -->
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      // Baner
      Baner_Title_1: 'Plante',
      Baner_Title_2: ' Colha',
      Baner_Destaque_1: 'Arvores',
      Baner_Destaque_2: ' Humanidade',

      // Sobre
      Sobre_Title: '"Como vemos o',
      Sobre_Destaque: ' mundo"',
      Sobre_Text:
        ' Lorem ipsum dolor sit amet consectetur adipisicin Tempore officiis sapiente necessitatibus voluptas, vitae aspernatur dolorlaboriosam minus similique? Nemo temporibus praesentium mollitia,nesciunt repellat eos ab sunt exercitationem eligendi?',

      // Blog
      Blog_Title: 'Postagem em alta',

      // Ver mais
      text_More: 'Ver mais',
      More_link: '/banco de sementes',

      // Card
      postUser: [
        {
          userImage: '',
          userName: 'Karlla souzza',
          time: '1 Minuto atraz',
          cardText:
            ' Lorem ipsum dolor sit amet consectetur adipisicin Tempore officiis sapiente necessitatibus voluptas, vitae aspernatur dolorlaboriosam minus similique? Nemo temporibus praesentium mollitia,nesciunt repellat eos ab sunt exercitationem eligendi?  Lorem ipsum dolor sit amet consectetur adipisicin Tempore officiis sapiente necessitatibus voluptas, vitae aspernatur dolorlaboriosam minus similique? Nemo temporibus praesentium mollitia,nesciunt repellat eos ab sunt exercitationem eligendi?',
          cntLove: 1,
          cntFav: 2,
          cntCmt: 3,
        },
        {
          userImage: '',
          userName: 'Karlla souzza',
          time: '1 Minuto atraz',
          cardText: 'Ola mundo',
          cntLove: 1,
          cntFav: 2,
          cntCmt: 3,
        },
        {
          userImage: '',
          userName: 'Karlla souzza',
          time: '1 Minuto atraz',
          cardText: 'Ola mundo',
          cntLove: 1,
          cntFav: 2,
          cntCmt: 3,
        },
        {
          userImage: '',
          userName: 'Karlla souzza',
          time: '1 Minuto atraz',
          cardText: 'Ola mundo',
          cntLove: 1,
          cntFav: 2,
          cntCmt: 3,
        },
        {
          userImage: '',
          userName: 'Karlla souzza',
          time: '1 Minuto atraz',
          cardText: 'Ola mundo',
          cntLove: 1,
          cntFav: 2,
          cntCmt: 3,
        },
      ],

      // Login
      Login_Destaque_1: 'Crie sua conta',
      Login_Destaque_2: 'preservação ambiental.',
    }
  },
  computed: {
    ...mapState({
      /* Colors */
      //
      Color_000: (state) => state.Colors.Color_000,

      //
      Color_976: (state) => state.Colors.Color_976,

      //
      Color_004: (state) => state.Colors.Color_004,

      //
      Color_007: (state) => state.Colors.Color_007,

      //
      Color_00f: (state) => state.Colors.Color_00f,

      //
      Color_238: (state) => state.Colors.Color_238,

      //
      Color_fdc: (state) => state.Colors.Color_fdc,

      //
      Color_ff5: (state) => state.Colors.Color_ff5,

      //
      Color_d63: (state) => state.Colors.Color_d63,

      //
      Color_fff: (state) => state.Colors.Color_fff,

      //
      Color_ffc: (state) => state.Colors.Color_ffc,
    }),
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
  grid-template-rows: 100vh 380px 450px 80vh;
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
  background-repeat: no-repeat;
}
.Baner > .Text {
  width: 408.562px;
  margin-top: 16px;
}
.Baner > div {
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 35px;
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
  border-radius: 0 20px 0 20px;
  display: flex;
  align-self: flex-end;
  margin-bottom: 20%;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.11);
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
  grid-column: 2/8;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.Blog > p.Title {
  display: flex;
  justify-content: space-between;
}
.Blog > p.Title > a {
  font-size: 16px;
  padding: 6px;
  border-radius: 0 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.11);
}
.Scroll {
  min-width: 100%;
  min-height: 350px;
  overflow-x: scroll;
  display: flex;
}
.Scroll::-webkit-scrollbar {
  width: 16px;
  background: transparent;
}
.Scroll::-webkit-scrollbar-thumb {
  background: #004b23de;
  cursor: pointer;
  border-radius: 0 8px 0 8px;
}
.Scroll > .card:first-child {
  margin-left: 1px;
}
.Title {
  font-size: 35px;
  font-weight: bold;
}

/*  Parte remetente a pagina Loguin  */
.Login {
  grid-row: 4/5;
  grid-column: 2/8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.Login_text {
  width: 488px;
  height: 266px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
}
.btn_inicio {
  width: 100%;
  height: 36px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  background: rgb(35, 142, 35);
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 10px 0 10px;
}
.Login_text > span.text {
  width: 100%;
  font-size: 26px;
}
.Login_text > span.text .txt {
  font-size: 28px;
}
.Login .svg {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.Login .Login_svg {
  width: 300px;
  height: 327px;
}
.folha {
  animation: 5s ease-in infinite slidein;
}

@keyframes slidein {
  0% {
    fill: #61e719;
  }
  25% {
    fill: #5b983e;
  }
  50% {
    fill: #3f992f;
  }
  75% {
    fill: #589b4d;
  }
  90% {
    fill: #0b5c00;
  }
  100% {
    fill: #61e719;
  }
}
@media (max-width: 967px) {
  .Baner div {
    font-size: 25px;
  }
  .Title {
    font-size: 25px;
  }
  .Sobre > span.Text {
    width: 50%;
    height: 50%;
  }
  .Sobre > p.Title {
    width: 50%;
    text-align: left;
    margin-top: 3%;
  }
  .Login_text > span.text .txt[data-v-2a183b29] {
    font-size: 25px;
  }
  .Login_text > span.text[data-v-2a183b29] {
    width: 100%;
    font-size: 25px;
  }
  .container {
    grid-template-columns: 20px 1fr 1fr 1fr 1fr 1fr 1fr 20px;
    grid-template-rows: 100vh 320px 360px 60vh;
  }
  .Sobre_Img {
    margin-bottom: 45%;
    width: 200px;
    height: 260px;
  }
}
@media (max-width: 800px) {
  .Login_text > span.text {
    width: 100%;
    font-size: 20px;
  }
}
</style>
