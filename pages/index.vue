<template>
  <main>
    <!-- Baner -->
    <div class="baner">
      <div>
        <p>
          <TitleBorder :text="baner_title1" :color="Color_fff" />
          <TitleBorder :text="baner_title2" :color="Color_fff" />
        </p>
        <ButtonSmall
          :text="baner_button"
          :background="Color_238"
          :color="Color_fff"
          to="/"
        />
      </div>
    </div>

    <!-- Sobre -->
    <div class="sobre">
      <div class="img" />
      <div>
        <TitleBorder :text="sobre_title1" :color="Color_000" />
        <span>{{ sobre_texto }}</span>
        <ButtonSmall
          :text="sobre_button"
          :background="Color_238"
          :color="Color_fff"
          to="/"
        />
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      // Baner
      baner_title1: 'Plante arvores',
      baner_title2: 'Colha humanidade',
      baner_button: 'Explorar',

      // Sobre
      sobre_title1: '"Como vemos o mundo"',
      sobre_texto:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque magnam, nemo delectus minima natus perspiciatis veritatis iure et labore magni culpa asperiores temporibus rerum aspernatur, fuga corrupti nobis ullam! Nam!',
      sobre_button: 'Ver mais',
    }
  },
  computed: {
    ...mapState({
      Color_fff: (state) => state.Colors.Color_fff,
      Color_000: (state) => state.Colors.Color_000,
      Color_238: (state) => state.Colors.Color_238,
    }),
  },
}
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 40px 1fr 1fr 40px;
  grid-template-rows: 50vh 50vh 450px 50vh 100vh;
}

/* Baner */
.baner {
  grid-row: 1/3;
  grid-column: 1/5;
  width: 100%;
  height: 100%;
  background-image: url(assets/img/Inicio/Fotos/1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 40% 30% 30%;
}
.baner div {
  grid-row: 2;
  grid-column: 1/5;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 40px;
}
.baner > div > p {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
}
.baner > div > p > span {
  font-size: 35px;
}

/* Sobre  */
.sobre {
  grid-row: 3/4;
  grid-column: 2/4;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
}
.sobre > .img {
  width: 350px;
  height: 350px;
  grid-column: 1;
  border-radius: 5px;
  margin: auto;
  background: #000000f8 url(assets/img/Inicio/Fotos/terra.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.sobre > div {
  width: 100%;
  height: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.sobre > div > span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78%;
  text-align: center;
}
.sobre > div > span:first-child {
  font-size: 30px;
}

/* responsividade antecipada para prevençao de bugs/quebras indevidas */
@media (max-width: 890px) {
  main {
    grid-template-columns: 20px 1fr 1fr 20px;
  }

  /* Sobre  */
  .sobre > img {
    width: 260px;
    height: 260px;
  }
  .sobre > div > span:first-child {
    font-size: 27px;
  }
}

/* responsividade antecipada para prevençao de bugs/quebras indevidas */
@media (max-width: 800px) {
  .sobre > .img {
    width: 300px;
    height: 300px;
  }
}
/* Responsividade - Tablet */
@media (max-width: 768px) {
  main {
    grid-template-columns: 20px 1fr 1fr 20px;
    grid-template-rows: 50vh 50vh 100vh 50vh 100vh;
  }
  /* Baner */
  .baner {
    background-image: url(assets/img/Inicio/Fotos/1-tablet.jpg);
  }
  .baner > div > p > span {
    font-size: 30px;
  }
  /* Sobre */
  .sobre {
    grid-template-rows: 50vh 50vh;
  }
  .sobre > .img {
    width: 100%;
    height: 230px;
    grid-row: 1;
    grid-column: 1/3;
    margin: 0;
    margin-top: auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .sobre > div {
    width: 100%;
    height: 85%;
    grid-row: 2;
    grid-column: 1/3;
  }
}

/* responsividade antecipada para prevençao de bugs/quebras indevidas */
@media (max-width: 466px) {
  .sobre > div > span:first-child {
    font-size: 24px;
  }
}

/* Responsibilidade - Mobile */
@media (max-width: 425px) {
  /* Baner */
  .baner {
    background-image: url(assets/img/Inicio/Fotos/1-mobile.jpg);
  }
  .baner > div > p > span {
    font-size: 28px;
  }
  .baner {
    grid-template-rows: 45% 30% 25%;
  }
  .baner > div {
    padding: 0 30px;
    justify-content: space-around;
  }
  /* Sobre */
  .sobre > div > span {
    width: 100%;
  }
}

/* responsividade antecipada para prevençao de bugs/quebras indevidas */
@media (max-width: 325px) {
  main {
    grid-template-columns: 10px 1fr 1fr 10px;
  }
}
</style>
