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
    </div>

    <nav>
      <ul>
        <li>
          <nuxtLink to="/">{{ inicio }}</nuxtLink>
        </li>
        <li>
          <nuxtLink to="/blog">{{ blog }}</nuxtLink>
        </li>
        <li>
          <nuxtLink to="/produtos">{{ produtos }}</nuxtLink>
        </li>
        <li>
          <nuxtLink to="/sobre">{{ sobre }}</nuxtLink>
        </li>
        <li>
          <nuxtLink to="/contato">{{ contatos }}</nuxtLink>
        </li>
        <li>
          <nuxtLink to="/user">{{ login }}</nuxtLink>
        </li>
        <li @click="config()">
          <span>
            {{ configuracao }}
          </span>
        </li>
      </ul>
    </nav>
    <div class="L_ci">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        @click="Cart()"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.1213 9.23312H14.8891C15.3088 9.23312 15.6386 8.88615 15.6386 8.46774C15.6386 8.03912 15.3088 7.70236 14.8891 7.70236H12.1213C11.7016 7.70236 11.3719 8.03912 11.3719 8.46774C11.3719 8.88615 11.7016 9.23312 12.1213 9.23312ZM18.1766 3.92749C18.7861 3.92749 19.1858 4.1418 19.5855 4.61123C19.9852 5.08067 20.0551 5.7542 19.9652 6.36549L19.0159 13.06C18.8361 14.3469 17.7569 15.2949 16.4879 15.2949H5.58639C4.25742 15.2949 3.15828 14.255 3.04837 12.908L2.12908 1.7834L0.620259 1.51807C0.22057 1.44664 -0.0592117 1.04864 0.0107338 0.640433C0.0806793 0.223045 0.470376 -0.0535127 0.880056 0.0087383L3.2632 0.375101C3.60293 0.437352 3.85274 0.722074 3.88272 1.06905L4.07257 3.35499C4.10254 3.68257 4.36234 3.92749 4.68209 3.92749H18.1766ZM5.42631 16.9079C4.58697 16.9079 3.9075 17.6018 3.9075 18.459C3.9075 19.3061 4.58697 20 5.42631 20C6.25567 20 6.93514 19.3061 6.93514 18.459C6.93514 17.6018 6.25567 16.9079 5.42631 16.9079ZM16.6676 16.9079C15.8282 16.9079 15.1487 17.6018 15.1487 18.459C15.1487 19.3061 15.8282 20 16.6676 20C17.4969 20 18.1764 19.3061 18.1764 18.459C18.1764 17.6018 17.4969 16.9079 16.6676 16.9079Z"
        />
      </svg>

      <label id="input" class="L-i" for="check">
        <span class="icon"></span>
      </label>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    inicio: 'Inicio',
    blog: 'Blog',
    produtos: 'Produtos',
    sobre: 'Sobre',
    contatos: 'Contato',
    login: 'Criar conta',
    configuracao: '',
    Logo: [{ conteudo: 'CWIA', Link: '/', key: '1' }],
  }),
  computed: {
    ...mapState({
      Color_004: (state) => state.Colors.Color_004,
      Color_fff: (state) => state.Colors.Color_fff,
      Color_00f: (state) => state.Colors.Color_00f,
      idioma: (state) => state.Acessibilidade.idioma,
      conf: (state) => state.Header.config,
      cart: (state) => state.Cart.On_Off,
    }),
  },
  created() {
    if (this.idioma === 'pt') {
      this.inicio = 'Inicio'
      this.blog = 'Blog'
      this.produtos = 'Produtos'
      this.sobre = 'Sobre'
      this.contatos = 'Contato'
      this.login = 'Criar conta'
      this.configuracao = 'Configuração'
    } else if (this.idioma === 'en') {
      this.inicio = 'Home'
      this.blog = 'Blog'
      this.produtos = 'Products'
      this.sobre = 'About'
      this.contatos = 'Contact'
      this.login = 'Create account'
      this.configuracao = 'Settings'
    } else {
      this.inicio = 'Casa'
      this.blog = 'Blog'
      this.produtos = 'Productos'
      this.sobre = 'Sobre'
      this.contatos = 'Acerca de'
      this.login = 'Crear cuenta'
      this.configuracao = 'Ajustes'
    }
  },
  methods: {
    ...mapMutations({
      confg_on: 'Header/config_on',
      confg_off: 'Header/config_off',
      cart_on: 'Cart/on',
      cart_off: 'Cart/off',
    }),
    config() {
      if (!this.conf) {
        this.confg_on()
        window.scrollTo(0, 0)
      } else {
        this.confg_off()
        window.scrollTo(0, 0)
      }
    },
    Cart() {
      if (!this.cart) {
        this.cart_on()
      } else {
        this.cart_off()
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0%;
  left: 0;
  right: 0;
  padding: 0 40px;
}

/* Icone retraril */
.L_ci {
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
}
.L_ci > svg {
  width: 28px;
  height: 28px;
  fill: white;
}
.L-i {
  width: 60px;
  height: 40px;
  display: none;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.icon {
  width: 30px;
  height: 4px;
  position: relative;
  border-radius: 10px;
  left: 0px;
  top: 0px;
  transition: 0.7s ease-in-out;
  background-color: white;
  z-index: 4;
  display: none;
}
.icon::before,
.icon::after {
  content: '';
  background-color: white;
  border-radius: 10px;
  width: 30px;
  left: 0;
  height: 4px;
  position: absolute;
  transition: ease-in-out 0.7s;
}
.icon::before {
  top: 10px;
}
.icon::after {
  bottom: 10px;
}

/* Parte do logo e menu retrátil */
.Logo {
  height: 35px;
  width: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
}
a,
nav > ul > li > span {
  font-weight: bold;
  text-decoration: none;
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
nav > ul > li > a,
nav > ul > li > span {
  text-decoration: none;
  color: white;
}
nav > ul > li > a:hover,
nav > ul > li > span:hover {
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
  .icon {
    display: inline-block;
  }

  nav {
    height: auto;
    padding: 0;
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    left: 0;
    top: 55px;
    -webkit-animation: visibleUl-data-v-1a9bb128 0.7s forwards;
    animation: visibleUl-data-v-1a9bb128 0.7s forwards;
    background: rgb(0, 75, 35);
  }
  nav ul {
    flex-direction: column;
    width: 98%;
  }

  nav ul li {
    margin: 0.7em 0em;
    padding: 0.5em 100%;
    background: rgba(0, 75, 35, 0.397);
  }
  .L-i {
    display: flex;
  }
  .L_ci {
    width: 95px;
  }
}
@media (max-width: 425px) {
  header {
    padding: 0 10px;
  }
}
</style>
