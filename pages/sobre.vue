<template>
  <main :as="PageOn()" class="container" :style="{ background: mainColor }">
    <!-- visao  -->
    <div class="parte1">
      <div>
        <p>
          <Title :text="label1" :color="Color_000" />
          <TitleBorder :text="destaque1" :color="Color_238" />
        </p>
        <span :style="{ color: Color_000 }">{{ text1 }}</span>
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
        <span :style="{ color: Color_000 }">{{ text2 }}</span>
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
        <span :style="{ color: Color_000 }">{{ text3 }}</span>
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
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      mainColor: '',

      //  Parte 1
      label1: '',
      destaque1: '',
      text1: '',
      //  Parte 2
      label2: '',
      destaque2: '',
      label3: '',
      destaque3: '',
      text2: '',
      // Parte 3
      label4: '',
      destaque4: '',
      label5: '',
      destaque5: '',
      text3: '',
    }
  },
  head: {
    title: 'CWIA | Sobre',
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
      Color_000: (state) => state.Colors.Color_000,
      Color_976: (state) => state.Colors.Color_976,
      Color_004: (state) => state.Colors.Color_004,
      Color_007: (state) => state.Colors.Color_007,
      Color_00f: (state) => state.Colors.Color_00f,
      Color_238: (state) => state.Colors.Color_238,
      Color_fdc: (state) => state.Colors.Color_fdc,
      Color_ff5: (state) => state.Colors.Color_ff5,
      Color_d63: (state) => state.Colors.Color_d63,
      Color_fff: (state) => state.Colors.Color_fff,
      Color_ffc: (state) => state.Colors.Color_ffc,

      // idioma
      idioma: (state) => state.Acessibilidade.idioma,

      //  dark Mode
      Dark_mode: (state) => state.Colors.Dark_mode,

      // Header
    }),
  },
  created() {
    // idioma
    if (this.idioma === 'pt') {
      this.label1 = 'Como vemos o'
      this.destaque1 = 'mundo'
      this.text1 =
        'O que meio ambiente significa para você? Já se fez essa pergunta, se olharmos para o dicionário ele dirá que é onde os seres estão inseridos no caso nós, tais como as condições ambientais, biológicas, físicas e químicas.Em nossa concepção o meio ambiente nada mais é que nossa casa, afinal de contas todos “usamos” ele, meio ambiente somos eu, é você é todo mundo, pois todos nós fizemos parte dele. Então surge a dúvida, como preservar o meio ambiente. Bom podemos começar com coisas pequenas como reciclar o lixo, separando os papeis dos plásticos o metal do vidro. Cuide do nosso enorme quintal, cuide da vida.'
      // Parte 2
      this.label2 = 'Como nós nos'
      this.destaque2 = 'esforçamos'
      this.label3 = 'para'
      this.destaque3 = 'mudar o mundo'
      this.text2 =
        'O que significa agropecuária? Sendo o estudo/teoria e a prática da agricultura e da pecuária, sendo assim traduzido como técnicas de agricultura (cultivo de plantas e hortaliças em geral) e dá pecuária que é a criação de animais (porcos, vacas/boi, aves etc). A agropecuária no Brasil hoje é muito presente sendo a maior renda de exportação do pais sendo assim de grande importância.Ela está presente em você que planta hortaliças como alface e rúcula para consumo próprio ou para venda até pessoas que cuida de galinhas para consumo de ovos ou de vacas para o consumo de leite, onde olhamos vemos a agropecuária, da cevada da cerveja do feriado até o pão com café do dia-a-dia.'

      // Parte 3
      this.label4 = 'Nós fazemos do'
      this.destaque4 = 'meio ambiente'
      this.label5 = 'o nosso'
      this.destaque5 = 'meio de vida'
      this.text3 =
        'Como plantar algo em sua casa? É simples com uma terra adubada ou substrato você já terá uma excelente terra para o plantio de sua hortaliça, tais como alface, tomate, cheiro verde etc. Se o plantio for em larga escala é mais fácil usar esterco bovino, ou até mesmo de cavalo, se tiver acesso a esses animais lembre-se que o fertilizante tem que ser “curtido” meio que deixado em repouso (descansando por algum tempo), se você cultivar galinhas vale a pena por cerassem no chão, mesmo assim deve deixar o adubo natural descansar.Se não tem acesso a esses adubos naturais outra opção é fazer em casa mesmo com coisas que geralmente vão para o lixo, como cascas de banana, cascas de ovos e borra de café (sendo mais eficiente se a água não tiver sido pré adoçada), esses 3 ingredientes formam o famoso NPK.'
    } else if (this.idioma === 'en') {
      this.label1 = 'As we see the'
      this.destaque1 = ' world'
      this.text1 =
        'What does the environment mean to you? This question has already been asked, if we look at the dictionary it will say that it is where beings are inserted in the case of us, such as environmental, biological, physical and chemical conditions.In our view, the environment is nothing more than our home, after all we all "use" it, the environment is me, it is you, everyone, because we were all part of it. Then the question arises, how to preserve the environment. Well, we can start with small things like recycling the garbage, separating paper from plastics, metal from glass. Take care of our huge backyard, take care of life.'
      // Parte 2
      this.label2 = 'How we '
      this.destaque2 = 'strive'
      this.label3 = 'to'
      this.destaque3 = ' change the world'
      this.text2 =
        'What does agriculture mean?, being the study / theory and practice of agriculture and livestock, thus being translated as agricultural techniques (cultivation of plants and vegetables in general) and gives livestock which is the breeding of animals (pigs, cows / ox, birds etc). Agriculture in Brazil today is very present with the highest export income in the country being therefore of great importance.It is present in you who grow vegetables like lettuce and arugula for your own consumption or for sale to people who take care of chickens for eggs or cows for milk consumption, where we look we see agriculture, from the beer barley of the holiday to the daily bread with coffee.'

      // Parte 3
      this.label4 = 'We make the'
      this.destaque4 = ' environment'
      this.label5 = 'our'
      this.destaque5 = ' way of life'
      this.text3 =
        'How to plant something in your home? It is simple with a fertilized soil or substrate you will already have an excellent soil for planting your vegetables, such as lettuce, tomatoes, green scent etc.If planting on a large scale it is easier to use cattle manure, or even horse manure, if you have access to these animals remember that the fertilizer has to be “tanned” kind of left to rest (resting for some time), if you grow chickens it’s worth it because they wax on the ground, you should still let the natural fertilizer rest.If you do not have access to these natural fertilizers, another option is to do at home even with things that usually go to waste, such as banana peels, egg skins and coffee grounds (being more efficient if the water has not been pre-sweetened), these 3 ingredients form the famous NPK.'
    } else {
      this.label1 = 'Cómo vemos el '
      this.destaque1 = 'mundo'
      this.text1 =
        '¿Qué significa el medio ambiente para ti? Esta pregunta ya se ha hecho, si miramos el diccionario dirá que es donde se insertan los seres en el caso de nosotros, como las condiciones ambientales, biológicas, físicas y químicas.En nuestra opinión, el medio ambiente no es más que nuestro hogar, después de todo todos lo "usamos", el medio ambiente soy yo, eres tú, todos, porque todos éramos parte de él. Entonces surge la pregunta, cómo preservar el medio ambiente. Bueno, podemos empezar con cosas pequeñas como reciclar la basura, separar el papel de los plásticos, el metal del vidrio. Cuida nuestro enorme patio trasero, cuida la vida.'
      // Parte 2
      this.label2 = 'Cómo nos '
      this.destaque2 = 'esforzamos'
      this.label3 = 'para '
      this.destaque3 = 'cambiar el mundo'
      this.text2 =
        '¿Qué significa agricultura?, siendo el estudio / teoría y práctica de la agricultura y la ganadería, traduciéndose así como técnicas agrícolas (cultivo de plantas y hortalizas en general) y da ganadería que es la cría de animales (porcinos, vacas / bueyes, pájaros, etc.). La agricultura en Brasil hoy está muy presente, siendo por tanto de gran importancia los mayores ingresos por exportaciones del país.Está presente en ustedes que cultivan hortalizas como lechuga y rúcula para su propio consumo o para la venta a personas que cuidan pollos para huevos o vacas para consumo de leche, donde miramos vemos agricultura, desde la cerveza de cebada de la festividad hasta la pan de cada día con café.'

      // Parte 3
      this.label4 = 'Hacemos del '
      this.destaque4 = 'medio ambiente'
      this.label5 = 'nuestra '
      this.destaque5 = ' forma de vida'
      this.text3 =
        'Como plantar algo em sua casa? É simples com uma terra adubada ou substrato você já terá uma excelente terra para o plantio de sua hortaliça, tais como alface, tomate, cheiro verde etc. Se o plantio for em larga escala é mais fácil usar esterco bovino, ou até mesmo de cavalo, se tiver acesso a esses animais lembre-se que o fertilizante tem que ser “curtido” meio que deixado em repouso (descansando por algum tempo), se você cultivar galinhas vale a pena por cerassem no chão, mesmo assim deve deixar o adubo natural descansar.Se não tem acesso a esses adubos naturais outra opção é fazer em casa mesmo com coisas que geralmente vão para o lixo, como cascas de banana, cascas de ovos e borra de café (sendo mais eficiente se a água não tiver sido pré adoçada), esses 3 ingredientes formam o famoso NPK.'
    }

    // cor
    if (this.Dark_mode) {
      this.mainColor = '#001219'
    } else {
      this.mainColor = '#e7e7e7'
    }
  },
  methods: {
    ...mapMutations({
      PageOn: 'Header/Page_on_sobre',
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
