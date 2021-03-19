<template>
  <footer :style="{ background: Color_004 }">
    <div>
      <ul>
        <li>
          <Title
            :style="{ color: Color_fff }"
            :text="Nome_do_site"
            customclass=""
          />
        </li>
      </ul>
      <ul>
        <li>
          <Title
            :text="Nome_do_site"
            :style="{ color: Color_ff5 }"
            customclass="title"
          />
        </li>
        <li
          v-for="(Acess, index) in Acessibilidade"
          :key="index"
          :style="{ color: Color_fff }"
        >
          {{ Acess.text }}
        </li>
      </ul>
      <ul>
        <li>
          <Title
            :text="Nome_do_site"
            :style="{ color: Color_ff5 }"
            customclass="title"
          />
        </li>
        <li
          v-for="(Fac, index) in Ajuda"
          :key="index"
          :style="{ color: Color_fff }"
        >
          {{ Fac.text }}
        </li>
      </ul>
      <ul>
        <li>
          <Title
            :text="Nome_do_site"
            :style="{ color: Color_ff5 }"
            customclass="title"
          />
        </li>
        <li v-for="(Network, index) in Redes" :key="index">
          <a href="/" :style="{ color: Color_fff }">
            {{ Network.text }}
          </a>
        </li>
      </ul>
    </div>

    <span :style="{ background: Color_976, color: Color_fff }">{{
      Criadores
    }}</span>
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
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
footer > div {
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: row;
  padding: 0 0 0 40px;
}
footer > div > ul {
  width: 25%;
  margin: 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  list-style: none;
}
footer > div > ul > li {
  width: 100%;
  text-decoration: none;
}
footer > span {
  width: 100%;
  padding: 5px 0;
  text-align: center;
  font-weight: bold;
}
.title {
  margin-bottom: px;
}
a {
  text-decoration: none;
}
</style>
