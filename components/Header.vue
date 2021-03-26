<template>
  <header :style="{ background: Color_004, color: Color_fff }">
    <input id="check" type="checkbox" />
    <div v-for="(Logo_content, index) in Logo" :key="index" class="Logo">
      <!-- Svg -->

      <Nlink
        :text="Logo_content.conteudo"
        :link="Logo_content.Link"
        :acess="Logo_content.key"
        :style="{ color: Color_fff }"
      />

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
      <ul :style="{ background: Color_004 }">
        <li v-for="(buttons, index) in Botoes" :key="index">
          <Nlink
            :text="buttons.conteudo"
            :link="buttons.Link"
            :acess="buttons.key"
            :color="Color_fff"
          />
        </li>
        <li>
          <svg
            width="26"
            height="26"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.1732 27.4286L27.1857 26.4228C31.8702 26.5758 31.9422 26.4116 32.1481 25.9301L33.4351 22.797L33.5307 22.5L33.4261 22.2401C33.371 22.1028 33.2011 21.6933 30.2761 18.9045V17.4375C33.6511 14.1862 33.5791 14.0197 33.3867 13.5438L32.1054 10.3781C31.913 9.90335 31.8399 9.71772 27.1891 9.84485L26.1766 8.7986C26.2811 7.25746 26.228 5.70968 26.018 4.17935L25.8875 3.88347L22.5417 2.42097C22.049 2.19597 21.8757 2.11497 18.7167 5.55522L17.297 5.53385C14.0446 2.0621 13.8905 2.1251 13.4034 2.32197L10.2927 3.57972C9.80561 3.7766 9.63348 3.84635 9.82248 8.57135L8.81786 9.5726C4.13561 9.4196 4.06361 9.5861 3.85998 10.0653L2.57073 13.1996L2.46948 13.5L2.57523 13.761C2.63036 13.896 2.79348 14.301 5.72523 17.0932V18.5557C2.35023 21.807 2.42336 21.9735 2.61686 22.4505L3.89711 25.6196C4.09286 26.1045 4.16261 26.2766 8.81223 26.1551L9.82473 27.207C9.71978 28.7457 9.77143 30.2912 9.97886 31.8195L10.1094 32.1176L13.4765 33.5891C13.9659 33.7938 14.1357 33.867 17.2857 30.4391L18.7055 30.4571C21.9624 33.9333 22.1289 33.8658 22.6047 33.6735L25.7086 32.4191C26.1991 32.2245 26.3701 32.1558 26.1732 27.4286ZM12.833 20.0891C12.4404 19.0632 12.3596 17.9441 12.6007 16.8724C12.8417 15.8007 13.3939 14.8241 14.188 14.065C14.982 13.306 15.9826 12.7984 17.064 12.6059C18.1455 12.4134 19.2598 12.5445 20.267 12.9829C21.2742 13.4213 22.1295 14.1474 22.7255 15.0701C23.3216 15.9928 23.6319 17.071 23.6175 18.1694C23.6031 19.2678 23.2646 20.3374 22.6445 21.2442C22.0244 22.1509 21.1504 22.8543 20.132 23.2661C18.7425 23.8094 17.1944 23.7802 15.8265 23.1848C14.4585 22.5894 13.3822 21.4763 12.833 20.0891Z"
              fill="white"
            />
          </svg>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    Botoes: [
      { conteudo: 'Inicio', Link: '/', key: '1' },
      { conteudo: 'Blog', Link: '/blog', key: '2' },
      {
        conteudo: 'Banco de sementes',
        Link: '/banco de sementes',
        key: '3',
      },
      { conteudo: 'Sobre', Link: '/sobre', key: '4' },
      { conteudo: 'Contato', Link: '/contato', key: '5' },
      { conteudo: 'Criar conta', Link: '/entrarUser', key: '6' },
    ],
    Logo: [{ conteudo: 'Nome do site', Link: '/', key: '1' }],
  }),
  computed: {
    ...mapState({
      Color_004: (state) => state.Colors.Color_004,
      Color_fff: (state) => state.Colors.Color_fff,
      Color_00f: (state) => state.Colors.Color_00f,
    }),
  },
}
</script>

<style scoped>
header {
  z-index: 100;
  width: 100%;
  height: 55px;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
  opacity: 90%;
  position: fixed;
  top: 0%;
  left: 0;
  right: 0;
}

/* Parte do logo e menu retrátil */
.Logo {
  grid-row: 1/2;
  grid-column: 1/2;

  text-align: left;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 2em;
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
  grid-column: 2/3;

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
