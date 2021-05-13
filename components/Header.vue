<template>
  <header :style="{ background: Color_004, color: Color_fff }">
    <input id="check" type="checkbox" />
    <div v-for="(Logo_content, index) in Logo" :key="index" class="Logo">
      <svg
        :title="Logo_content.conteudo"
        width="28"
        height="34"
        viewBox="0 0 23 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M10.537 7.84328C10.4188 7.52955 10.2583 7.2129 10.0394 6.91084C9.59726 6.29505 9.31563 6.28484 8.03444 5.18021C7.60543 4.81103 7.01007 4.21129 5.81935 3.01328C5.06785 2.25741 4.68846 1.85612 4.33095 1.20239C4.06975 0.723771 3.92091 0.293302 3.83482 0C3.63491 0.24223 3.36057 0.593901 3.05852 1.03458C2.65431 1.62411 2.09252 2.53757 1.54969 3.83774C0.411499 6.56209 -0.242229 8.12783 0.0831762 10.1342C0.185321 10.7632 0.496134 12.6777 2.1538 14.0158C2.4865 14.2843 3.99387 15.5012 6.03531 15.1802C6.76784 15.0649 7.3559 14.7673 7.83453 14.4477L4.00846 11.7306C6.2075 12.4427 6.2075 12.183 6.2075 12.183C3.49044 7.52517 4.6549 5.58442 4.6549 5.58442C5.16124 9.03254 7.97461 12.1626 9.16533 13.3547C9.2237 13.2964 9.28644 13.2365 9.34189 13.1782C9.9606 12.5142 10.3765 11.6869 10.5749 10.8026C10.6085 10.6508 10.6435 10.4991 10.6771 10.3473C10.8639 9.51554 10.8376 8.64001 10.537 7.84328Z"
            fill="#fff"
          />
          <path
            d="M13.848 11.6445C13.9851 11.3877 14.1602 11.1353 14.382 10.9003C14.8329 10.4217 15.0766 10.4451 16.3053 9.64249C16.7168 9.374 17.2975 8.92748 18.4591 8.03444C19.1931 7.46972 19.5652 7.16912 19.9475 6.64818C20.2276 6.26587 20.4042 5.9142 20.5122 5.67197C20.6552 5.90398 20.8522 6.23668 21.0608 6.6511C21.3396 7.20414 21.719 8.05487 22.0356 9.23537C22.701 11.7087 23.0833 13.13 22.5726 14.8183C22.4121 15.3466 21.9262 16.9575 20.3458 17.9177C20.0292 18.1103 18.5933 18.9829 16.8744 18.4722C16.2571 18.2883 15.7858 17.9644 15.4122 17.6346L19.015 15.7391C17.0422 16.0981 17.0714 15.8748 17.0714 15.8748C19.9431 12.183 19.1653 10.3794 19.1653 10.3794C18.3321 13.2862 15.5552 15.653 14.3922 16.5417C14.3485 16.4848 14.3018 16.4264 14.2609 16.3695C13.8042 15.7274 13.543 14.9686 13.4744 14.185C13.4627 14.0508 13.451 13.9165 13.4394 13.7823C13.3752 13.0454 13.4977 12.2953 13.848 11.6445Z"
            fill="#fff"
          />
          <path
            d="M14.9715 17.3136C14.9715 17.3136 10.6785 20.807 11.646 25.7537L12.291 28.7101L10.9135 30C10.9135 30 7.56019 25.5917 8.68963 21.9364C9.81906 18.281 10.3021 18.7655 8.74362 14.1427C8.74362 14.1427 12.0911 16.5898 10.5706 21.5614C10.5706 21.5599 13.5663 17.6361 14.9715 17.3136Z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="22.809" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <label id="input" for="check">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 18 14"
          xml:space="preserve"
          class="responsive-menu-icon"
          height="1.7em"
        >
          <path
            style="fill: rgb(255, 255, 255)"
            d="M0,2V0h18v2H0z M0,6h18V4H0V6z M18,10H0V8h18V10z M18,14H0v-2h18V14z"
          />
        </svg>
      </label>
    </div>
    <nav>
      <ul>
        <li v-for="(buttons, index) in Botoes" :key="index">
          <Nlink
            :text="buttons.conteudo"
            :link="buttons.Link"
            :acess="buttons.key"
            color="#fff"
          />
        </li>
        <li>
          <svg
            width="26"
            height="26"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
          >
            <path
              d="M26.1732 27.4286L27.1857 26.4228C31.8702 26.5758 31.9422 26.4116 32.1481 25.9301L33.4351 22.797L33.5307 22.5L33.4261 22.2401C33.371 22.1028 33.2011 21.6933 30.2761 18.9045V17.4375C33.6511 14.1862 33.5791 14.0197 33.3867 13.5438L32.1054 10.3781C31.913 9.90335 31.8399 9.71772 27.1891 9.84485L26.1766 8.7986C26.2811 7.25746 26.228 5.70968 26.018 4.17935L25.8875 3.88347L22.5417 2.42097C22.049 2.19597 21.8757 2.11497 18.7167 5.55522L17.297 5.53385C14.0446 2.0621 13.8905 2.1251 13.4034 2.32197L10.2927 3.57972C9.80561 3.7766 9.63348 3.84635 9.82248 8.57135L8.81786 9.5726C4.13561 9.4196 4.06361 9.5861 3.85998 10.0653L2.57073 13.1996L2.46948 13.5L2.57523 13.761C2.63036 13.896 2.79348 14.301 5.72523 17.0932V18.5557C2.35023 21.807 2.42336 21.9735 2.61686 22.4505L3.89711 25.6196C4.09286 26.1045 4.16261 26.2766 8.81223 26.1551L9.82473 27.207C9.71978 28.7457 9.77143 30.2912 9.97886 31.8195L10.1094 32.1176L13.4765 33.5891C13.9659 33.7938 14.1357 33.867 17.2857 30.4391L18.7055 30.4571C21.9624 33.9333 22.1289 33.8658 22.6047 33.6735L25.7086 32.4191C26.1991 32.2245 26.3701 32.1558 26.1732 27.4286ZM12.833 20.0891C12.4404 19.0632 12.3596 17.9441 12.6007 16.8724C12.8417 15.8007 13.3939 14.8241 14.188 14.065C14.982 13.306 15.9826 12.7984 17.064 12.6059C18.1455 12.4134 19.2598 12.5445 20.267 12.9829C21.2742 13.4213 22.1295 14.1474 22.7255 15.0701C23.3216 15.9928 23.6319 17.071 23.6175 18.1694C23.6031 19.2678 23.2646 20.3374 22.6445 21.2442C22.0244 22.1509 21.1504 22.8543 20.132 23.2661C18.7425 23.8094 17.1944 23.7802 15.8265 23.1848C14.4585 22.5894 13.3822 21.4763 12.833 20.0891Z"
            />
          </svg>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    Botoes: [],
    Logo: [{ conteudo: 'CWIA', Link: '/', key: '1' }],
  }),
  computed: {
    ...mapState({
      Color_004: (state) => state.Colors.Color_004,
      Color_fff: (state) => state.Colors.Color_fff,
      Color_00f: (state) => state.Colors.Color_00f,
      idioma: (state) => state.Acessibilidade.idioma,
    }),
  },
  created() {
    if (this.idioma === 'pt') {
      this.Botoes = []
      this.Botoes.push(
        { conteudo: 'Inicio', Link: '/', key: '1' },
        { conteudo: 'Blog', Link: '/blog', key: '2' },
        {
          conteudo: 'Produtos',
          Link: '/produtos',
          key: '3',
        },
        { conteudo: 'Sobre', Link: '/sobre', key: '4' },
        { conteudo: 'Contato', Link: '/contato', key: '5' },
        { conteudo: 'Criar conta', Link: '/user', key: '6' }
      )
    } else if (this.idioma === 'en') {
      this.Botoes = []

      this.Botoes.push(
        { conteudo: 'Home', Link: '/', key: '1' },
        { conteudo: 'Blog', Link: '/blog', key: '2' },
        {
          conteudo: 'Products',
          Link: '/produtos',
          key: '3',
        },
        { conteudo: 'About', Link: '/sobre', key: '4' },
        { conteudo: 'Contact', Link: '/contato', key: '5' },
        { conteudo: 'Create an account', Link: '/user', key: '6' }
      )
    } else {
      this.Botoes = []
      this.Botoes.push(
        { conteudo: 'Inicio', Link: '/', key: '1' },
        { conteudo: 'Blog', Link: '/blog', key: '2' },
        {
          conteudo: 'Productos',
          Link: '/produtos',
          key: '3',
        },
        { conteudo: 'Acerca de', Link: '/sobre', key: '4' },
        { conteudo: 'Contacto', Link: '/contato', key: '5' },
        { conteudo: 'Crea una cuenta', Link: '/user', key: '6' }
      )
    }
  },
  methods: {
    ...mapMutations({
      pt: 'Acessibilidade/pt',
      en: 'Acessibilidade/en',
      es: 'Acessibilidade/es',
    }),
    idioma_Site() {
      if (this.language === '1') {
        this.pt()
      } else if (this.language === '2') {
        this.en()
      } else {
        this.es()
      }
    },
  },
}
</script>

<style scoped>
header {
  z-index: 100;
  width: 100%;
  height: 55px;
  display: grid;
  grid-template-columns: 132px 1fr 550px;
  grid-template-rows: 100%;
  position: fixed;
  top: 0%;
  left: 0;
  right: 0;
}

/* Parte do logo e menu retrátil */
.Logo {
  grid-row: 1/2;
  grid-column: 1/2;
  height: 30px;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin: auto 2em;
}
.responsive-menu-icon {
  display: none;
}

#icone {
  cursor: pointer;
}

a {
  font-weight: bold;
  text-decoration: none;
}

/* Parte da navegação */
nav {
  grid-row: 1/2;
  grid-column: 3/4;

  width: 100%;
}

nav,
ul {
  height: 100%;
  padding: 0 0 0 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1.5em;
}

ul {
  width: auto;
  padding: 0;
}

ul > li {
  width: auto;
  height: auto;
  display: inline-block;
  white-space: nowrap;
  margin: 0em 0.7em;
}
nav > ul > li > a:hover {
  color: chartreuse !important;
}

nav > ul > li > svg:hover {
  cursor: pointer;
  animation: rotation 4s ease infinite;
  fill: chartreuse !important;
}

/* animação para fazer a engrenagem rodar :)  */
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Animação de visibilidade do menu retrátil */
@keyframes visibleUl {
  0% {
    transform: translateY(-10em);
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    transform: translateY(0deg);
    opacity: 1;
  }
}

@media (max-width: 967px) {
  header {
    grid-template-rows: 100% 100%;
    grid-template-columns: 100%;
  }

  .logo {
    grid-row: 1/2;
    grid-column: 1/2;
  }

  .responsive-menu-icon {
    display: inline-block;
  }

  nav {
    grid-row: 2/3;
    grid-column: 1/2;

    height: auto;
    padding: 0;
  }

  nav ul {
    flex-direction: column;
    width: 100%;
    height: auto;

    position: relative;
    top: 10.5em;

    animation: visibleUl 0.7s forwards;
  }

  nav ul li {
    margin: 0.7em 0em;
    padding: 0.5em 100%;
  }
}
</style>
