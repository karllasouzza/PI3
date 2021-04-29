<template>
  <footer :style="{ background: Color_004 }">
    <!-- Título do site -->
    <ul class="title">
      <li>
        <Title :color="Color_fff" :text="Nome_do_site" />
      </li>
    </ul>

    <!-- Acessibilidade -->
    <ul class="accessibility">
      <li>
        <Title text="Acessibilidade" :color="Color_ff5" />
      </li>
      <li v-for="(Acess, index) in Acessibilidade" :key="index">
        <a :style="{ color: Color_fff }" :href="Acess.url">{{ Acess.text }}</a>
      </li>
    </ul>

    <!-- Fac -->
    <ul class="fac">
      <li>
        <Title text="Fac" :color="Color_ff5" />
      </li>
      <li v-for="(Fac, index) in Ajuda" :key="index">
        <a :style="{ color: Color_fff }" :href="Fac.url">{{ Fac.text }}</a>
      </li>
    </ul>

    <!-- Redes Sociais -->
    <ul class="social-media">
      <li>
        <Title text="Redes sociais" :color="Color_ff5" />
      </li>
      <li v-for="(Network, index) in Redes" :key="index">
        <a href="/" :style="{ color: Color_fff }">
          {{ Network.text }}
        </a>
      </li>
    </ul>

    <div :style="{ background: Color_976, color: Color_fff }" class="makers">
      <span>{{ Criadores }}</span>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      // colors
      Color_976: (state) => state.Colors.Color_976,
      Color_004: (state) => state.Colors.Color_004,
      Color_fff: (state) => state.Colors.Color_fff,
      Color_ff5: (state) => state.Colors.Color_ff5,

      // documentaçao
      Criadores: (state) => state.Documentation.Criadores,
      Nome_do_site: (state) => state.Documentation.Nome_do_site,
      Acessibilidade: (state) => state.Documentation.Acessibilidade,
      Ajuda: (state) => state.Documentation.Fac,
      Redes: (state) => state.Documentation.Network,
    }),
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
