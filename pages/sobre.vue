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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.37 200.02">
        <g id="Camada_2" data-name="Camada 2">
          <g id="Camada_1-2" data-name="Camada 1">
            <path
              d="M8.26,2H176.73a5.64,5.64,0,0,1,5.64,5.64V192.39a5.64,5.64,0,0,1-5.64,5.63H8.26Z"
              style="fill: none; stroke-width: 1.5px"
              :stroke="Color_238"
            />
            <path
              d="M2,2H162a5.63,5.63,0,0,1,5.64,5.64v166a5.64,5.64,0,0,1-5.64,5.64H2Z"
              style="stroke-width: 1.5px"
              :stroke="Color_238"
              fill="url(#pattern0)"
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
              <image
                id="image0"
                width="360"
                height="640"
                href="../assets/img/Inicio/Fotos/2.jpg"
              />
            </defs>
          </g>
        </g>
      </svg>
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
      <svg
        viewBox="0 0 574 337"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M60 2H514C546.033 2 572 27.9675 572 60V277C572 309.033 546.033 335 514 335H60C27.9675 335 2 309.033 2 277V60C2 27.9675 27.9675 2 60 2Z"
          stroke="#238E23"
          stroke-width="4"
        />
        <rect
          x="39"
          y="2"
          width="533"
          height="293"
          rx="58"
          fill="url(#pattern5)"
          stroke="#238E23"
          stroke-width="4"
        />
        <rect
          x="183"
          y="26"
          width="246"
          height="246"
          rx="123"
          fill="url(#pattern6)"
          stroke="#238E23"
          stroke-width="4"
        />
        <rect
          x="208"
          y="51"
          width="196"
          height="196"
          rx="98"
          fill="url(#pattern7)"
          stroke="#238E23"
          stroke-width="4"
        />
        <defs>
          <pattern
            id="pattern5"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image9"
              transform="translate(0 -0.103429) scale(0.000244141 0.000441426)"
            />
          </pattern>
          <pattern
            id="pattern6"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image8"
              transform="translate(-0.0347092) scale(0.000261088 0.000365764)"
            />
          </pattern>
          <pattern
            id="pattern7"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image8"
              transform="translate(-0.0347092) scale(0.000261088 0.000365764)"
            />
          </pattern>
          <image
            id="image8"
            width="4096"
            height="2734"
            xlink:href="../assets/img/Inicio/Fotos/5.jpg"
          />
          <image
            id="image9"
            width="4096"
            height="2734"
            xlink:href="../assets/img/Inicio/Fotos/6.jpg"
          />
        </defs>
      </svg>
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
        width="548"
        height="509"
        viewBox="0 0 548 509"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M2 60H304C413.352 60 502 148.648 502 258V507H200C90.6476 507 2 418.352 2 309V60Z"
          stroke="#238E23"
          stroke-width="4"
        />
        <path
          d="M46 2H348C457.352 2 546 90.6476 546 200V449H244C134.648 449 46 360.352 46 251V2Z"
          fill="url(#pattern3)"
          stroke="#238E23"
          stroke-width="4"
        />
        <defs>
          <pattern
            id="pattern3"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image3"
              transform="translate(-0.171131) scale(0.000582579)"
            />
          </pattern>
          <image
            id="image3"
            width="2304"
            height="1746"
            xlink:href="../assets/img/Inicio/Fotos/3.jpg"
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
  width: 380px;
  height: 345px;
}

@media (max-width: 1046px) {
  .container > div.parte1 > div > span,
  .container > div.parte2 > div > span,
  .container > div.parte3 > div > span {
    width: 80%;
  }
  .container > div.parte1 > div > p,
  .container > div.parte2 > div > p,
  .container > div.parte3 > div > p {
    font-size: 25px;
  }
}
@media (max-width: 1026px) {
  .container > div.parte1 > div,
  .container > div.parte2 > div,
  .container > div.parte3 > div {
    width: 60%;
  }
}
@media (max-width: 832px) {
  svg {
    width: 340px;
    height: 265px;
  }
  .container > div.parte2 > div > p,
  .container > div.parte1 > div > p,
  .container > div.parte3 > div > p {
    font-size: 23px;
  }
}
@media (max-width: 716px) {
  .container > div.parte1,
  .container > div.parte2,
  .container > div.parte3 {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 30px 1fr 1fr 1fr 1fr 1fr 1fr 30px;
    grid-template-rows: 130vh 130vh 130vh;
    padding: 40px 0;
  }
  .container > div.parte1 > div,
  .container > div.parte2 > div,
  .container > div.parte3 > div {
    width: 90%;
    height: 50%;
    align-items: flex-start;
  }
  svg {
    width: 300px;
    height: 290px;
  }
  .container > div.parte1 > div > span,
  .container > div.parte2 > div > span,
  .container > div.parte3 > div > span {
    width: 100%;
  }
}
@media (max-width: 425px) {
  .container > div.parte2 > div > p,
  .container > div.parte1 > div > p,
  .container > div.parte3 > div > p {
    font-size: 20px;
  }
  .container > div.parte1 > div,
  .container > div.parte2 > div,
  .container > div.parte3 > div {
    width: 95%;
    height: 50%;
  }
}
@media (max-width: 375px) {
  .container {
    padding: 10px 0;
    grid-template-rows: 150vh 150vh 150vh;
    grid-template-columns: 10px 1fr 1fr 1fr 1fr 1fr 1fr 10px;
  }
  .container > div.parte2 > div > p,
  .container > div.parte1 > div > p,
  .container > div.parte3 > div > p {
    font-size: 20px;
  }
}
@media (max-width: 360px) {
  .container > div.parte2 > div > p,
  .container > div.parte1 > div > p,
  .container > div.parte3 > div > p {
    font-size: 18px;
  }
  .container > div.parte1 > div,
  .container > div.parte2 > div,
  .container > div.parte3 > div {
    width: 100%;
    height: 50%;
  }
}
</style>
