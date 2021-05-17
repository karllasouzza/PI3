<template>
  <footer :style="{ background: Color_004 }">
    <!-- Título do site -->
    <ul class="title">
      <li>
        <Title color="#fff" text="CWIA" />
      </li>
    </ul>

    <!-- Acessibilidade -->
    <ul class="accessibility">
      <li>
        <Title :text="Acessibilidade" class="titleL" :color="Color_000" />
      </li>
      <li>
        <nuxt-link :style="{ color: Color_fff }" to="/">{{
          Acessibilidade1
        }}</nuxt-link>
      </li>
      <li>
        <nuxt-link :style="{ color: Color_fff }" to="/">{{
          Acessibilidade2
        }}</nuxt-link>
      </li>
    </ul>

    <!-- Fac -->
    <ul class="fac">
      <li>
        <Title :text="Fac" class="titleL" :color="Color_000" />
      </li>
      <li>
        <nuxt-link :style="{ color: Color_fff }" to="/">{{ Fac1 }}</nuxt-link>
      </li>
      <li>
        <nuxt-link :style="{ color: Color_fff }" to="/">{{ Fac2 }}</nuxt-link>
      </li>
    </ul>

    <!-- Redes Sociais -->
    <ul class="social-media">
      <li>
        <Title :text="Network" class="titleL" :color="Color_000" />
      </li>
      <li>
        <nuxt-link to="/" :style="{ color: Color_fff }">
          {{ Network1 }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" :style="{ color: Color_fff }">
          {{ Network2 }}
        </nuxt-link>
      </li>
    </ul>

    <div :style="{ background: Color_976, color: '#fff' }" class="makers">
      <span>Karlla, Matheus e Ana</span>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      Acessibilidade: 'Acessibilidade',
      Acessibilidade1: 'Atalhos de acessibilidade',
      Acessibilidade2: 'Mapa do site',
      Fac: 'Suporte',
      Fac1: 'Precisa de ajuda?',
      Fac2: 'Enviar "freedback',
      Network: 'Redes Sociais',
      Network1: 'Facebook',
      Network2: 'Telegram',
    }
  },
  computed: {
    ...mapState({
      Color_fff: (state) => state.Colors.Color_fff,
      Color_000: (state) => state.Colors.Color_000,
      Color_238: (state) => state.Colors.Color_238,
      Color_004: (state) => state.Colors.Color_004,
      Color_976: (state) => state.Colors.Color_976,

      idioma: (state) => state.Acessibilidade.idioma,
    }),
  },
  created() {
    if (this.idioma === 'pt') {
      this.Acessibilidade = 'Acessibilidade'
      this.Acessibilidade1 = 'Atalhos de acessibilidade'
      this.Acessibilidade2 = 'Mapa do site'
      this.Fac = 'Suporte'
      this.Fac1 = 'Precisa de ajuda?'
      this.Fac2 = 'Enviar "freedback"'
      this.Network = 'Redes Sociais'
      this.Network1 = 'Facebook'
      this.Network2 = 'Telegram'
    } else if (this.idioma === 'en') {
      this.Acessibilidade = 'Accessibility'
      this.Acessibilidade1 = 'Accessibility shortcuts'
      this.Acessibilidade2 = 'Site map'
      this.Fac = 'Support'
      this.Fac1 = 'Need help?'
      this.Fac2 = 'Send feedback'
      this.Network = 'Social networks'
      this.Network1 = 'Facebook'
      this.Network2 = 'Telegram'
    } else {
      this.Acessibilidade = 'Accesibilidad'
      this.Acessibilidade1 = 'Atajos de accesibilidad'
      this.Acessibilidade2 = 'Mapa del sitio'
      this.Fac = 'Soporte'
      this.Fac1 = '¿Necesita ayuda?'
      this.Fac2 = 'Enviar comentarios'
      this.Network = 'Redes sociales'
      this.Network1 = 'Facebook'
      this.Network2 = 'Telegram'
    }
  },
}
</script>

<style scoped>
footer {
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 9em 2.3em;
}
/* Classe do Título */
.title {
  grid-row: 1/2;
  grid-column: 1/2;

  text-align: center;
}
.titleF {
  font-size: 20px;
  font-weight: bold;
}

/* Classe da Acessibilidade */
.accessibility {
  grid-row: 1/2;
  grid-column: 2/3;
}

/* Classe do fac */
.fac {
  grid-row: 1/2;
  grid-column: 3/4;
}

/* Classe da rede social */
.social-media {
  grid-row: 1/2;
  grid-column: 4/5;
}

/* Classe dos autores */
.makers {
  grid-row: 2/3;
  grid-column: 1/5;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 2.3em;
}

footer > ul {
  margin: 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  list-style: none;
}

footer > ul > li {
  width: 100%;
  text-decoration: none;
}

footer > .makers > span {
  width: 100%;
  text-align: center;
  font-weight: bold;
}

a {
  text-decoration: none;
  cursor: pointer;
}

@media (max-width: 844px) {
  /*
   No media o footer toma outro posicionamento para o vertical tornando também 
  as letras e espaçamento dos itens aumentados para facilitar a visualização e clique. 
  */
  footer {
    grid-template-columns: 100%;
    grid-auto-rows: 1fr 1fr 1fr 1fr 2.3em;
  }

  footer > ul {
    justify-content: center;
    align-items: center;

    text-align: center;
  }

  footer > ul > li {
    margin: 0.5em 0;
    font-size: 14pt;
  }

  .title {
    grid-row: 1/2;
    grid-column: 1/2;
  }

  .accessibility {
    grid-row: 2/3;
    grid-column: 1/2;
  }

  .fac {
    grid-row: 3/4;
    grid-column: 1/2;
  }

  .social-media {
    grid-row: 4/5;
    grid-column: 1/2;
  }

  .makers {
    grid-row: 5/6;
    grid-column: 1/2;
  }
}
</style>
