<template>
  <main class="container" :style="{ background: Color_ffc }">
    <!-- visao  -->
    <div class="parte1">
      <div>
        <p>
          <Title :text="label1" :color="Color_000" />
          <TitleBorder :text="destaque1" :color="Color_238" />
        </p>
        <span>{{ text }}</span>
      </div>
    </div>
    <!-- objetivo   -->
    <div class="parte2">
      <div>
        <p>
          <Title :text="label2" :color="Color_000" />
          <TitleBorder :text="destaque2" :color="Color_238" />
        </p>
        <p>
          <Title :text="label3" :color="Color_000" />
          <TitleBorder :text="destaque3" :color="Color_238" />
        </p>
        <span>{{ text }}</span>
      </div>
    </div>
    <!-- valor  -->
    <div class="parte3">
      <div>
        <p>
          <Title :text="label4" :color="Color_000" />
          <TitleBorder :text="destaque4" :color="Color_238" />
        </p>
        <p>
          <Title :text="label5" :color="Color_000" />
          <TitleBorder :text="destaque5" :color="Color_238" />
        </p>
        <span>{{ text }}</span>
      </div>
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M2 60h302c109.35 0 198 88.65 198 198v249H200C90.65 507 2 418.35 2 309V60z"
          :stroke="Color_238"
          stroke-width="4"
        />
        <path
          d="M46 2h302c109.35 0 198 88.65 198 198v249H244c-109.35 0-198-88.65-198-198V2z"
          fill="url(#pattern0)"
          :stroke="Color_238"
          stroke-width="4"
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
              transform="matrix(.00058 0 0 .00058 -.17 0)"
            />
          </pattern>
          <image
            id="image0"
            width="2000"
            height="2340"
            xlink:href="../assets/img/Inicio/Fotos/2.jpg"
          />
        </defs>
      </svg>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, doloribus eligendi nemo explicabo quam labore ipsum fugiat illum eveniet veniam dolor vitae quis placeat eius, debitis excepturi, adipisci suscipit esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, doloribus eligendi nemo explicabo quam labore ipsum fugiat illum eveniet veniam dolor vitae quis placeat eius, debitis excepturi, adipisci suscipit esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, doloribus eligendi nemo explicabo quam labore ipsum fugiat illum eveniet veniam dolor vitae quis placeat eius, debitis excepturi, adipisci suscipit esse',
      label1: 'Como vemos o',
      destaque1: 'mundo',
      label2: 'Como nós nos',
      destaque2: 'esfroçamos',
      label3: 'para',
      destaque3: 'mudar o mundo',
      label4: 'Nós fazemos do',
      destaque4: 'meio ambiente',
      label5: 'o nosso',
      destaque5: 'meio de vida',
    }
  },
  head: {
    title: 'NomeDoSite | Sobre',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '', // palavras utilizadas (SEO) "melhores remedios" , "soluçao adequada".
      },
    ],
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
.container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 40px 1fr 1fr 1fr 1fr 1fr 1fr 40px;
  grid-template-rows: 100vh 100vh 100vh;
}
.container > div.parte1,
.container > div.parte2,
.container > div.parte3 {
  width: 100%;
  height: 100%;
}
.container > div.parte1 {
  grid-column: 2/8;
  grid-row: 1/2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container > div.parte1 > div {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.container > div.parte1 > div > p {
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 30px;
  margin-bottom: 10px;
}
.container > div.parte1 > div > span,
.container > div.parte2 > div > span,
.container > div.parte3 > div > span {
  width: 69%;
}
.container > div.parte1 > div > p > span:last-child {
  margin-left: 5px;
}
.container > div.parte2 {
  grid-column: 2/8;
  grid-row: 2/3;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container > div.parte2 > div {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.container > div.parte2 > div > p {
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 30px;
  margin-bottom: 10px;
}
.container > div.parte2 > div > p > span:last-child {
  margin-left: 5px;
}

.container > div.parte3 {
  grid-column: 2/8;
  grid-row: 3/4;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container > div.parte3 > div {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.container > div.parte3 > div > p {
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 30px;
  margin-bottom: 10px;
}
.container > div.parte3 > div > p > span:last-child {
  margin-left: 5px;
}
svg {
  width: 550px;
  height: 515px;
}
</style>
