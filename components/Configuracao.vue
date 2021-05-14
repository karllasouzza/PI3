<template>
  <main v-if="config" class="container">
    <section :style="{ background: Color_238 + '80' }">
      <!-- formulario -->
      <div class="form">
        <!-- titulo  -->
        <Title :color="Color_000" :text="titulo1" />
        <form action="">
          <div class="inputs">
            <div>
              <p class="label">{{ M_cores }}</p>
              <Dark />
            </div>
            <div>
              <p class="label">{{ I_site }}</p>

              <Idioma />
            </div>
          </div>
        </form>
        <button
          :style="{
            background: Color_fff,
            color: Color_000,
            'font-family': fonte ? 'Arial' : 'Libras',
          }"
          @click="reload()"
        >
          {{ button }}
        </button>
      </div>

      <div class="outros" :style="{ background: Color_fff + '80' }">
        <Title :text="titulo2" :color="Color_000" />
        <div :style="{ background: Color_fff }">
          <span :style="{ color: Color_000 }">{{ F_site }}</span>

          <Libras />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      // formulario
      titulo1: '',
      button: '',

      // outros
      titulo2: 'Outras opções',
      M_cores: 'Modo de cor do site',
      I_site: 'Idioma do site',
      F_site: 'Libras',
    }
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

      // Idioma
      idioma: (state) => state.Acessibilidade.idioma,
      fonte: (state) => state.Acessibilidade.fonte,
      config: (state) => state.Header.config,
    }),
  },
  created() {
    // Portugues-br
    if (this.idioma === 'pt') {
      this.titulo1 = 'Configuração'
      this.button = 'Salvar'
      this.M_cores = 'Modo de cor'
      this.I_site = 'Idioma'
      this.F_site = 'Libras'
      this.titulo2 = 'Acessibilidade'
    }
    // Ingles
    else if (this.idioma === 'en') {
      this.titulo1 = 'Settings'
      this.button = 'Save'
      this.M_cores = 'Color mode'
      this.I_site = 'Language'
      this.F_site = 'Pounds'
      this.titulo2 = 'Accessibility'
    }
    // Espanhol
    else {
      this.titulo1 = 'Ajustes'
      this.button = 'Salvar'
      this.M_cores = 'Modo de color'
      this.I_site = 'Idioma'
      this.F_site = 'Libras'
      this.titulo2 = 'Accesibilidad'
    }
  },
  methods: {
    ...mapActions({}),
    ...mapMutations({}),
    reload() {
      location.reload()
    },
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 40px 1fr 1fr 1fr 1fr 1fr 1fr 40px;
  grid-template-rows: 100vh;
  background-position: center;
  background-size: cover;
  position: absolute;
}
section {
  width: 70%;
  height: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-row: 1/2;
  grid-column: 2/8;
  margin: auto;
  border-radius: 20px;
  z-index: 999;
}
/* formulario de contato  */
section .form {
  width: 70%;
  height: 100%;
  padding: 19.094px 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
}
.form span {
  width: 100%;
  height: 45px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  width: 100%;
  height: 58%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.inputs {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.inputs > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80px;
}
.label {
  font-weight: bold;
}
button {
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.226);
  padding: 1%;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

/* Outros  */
section > div.outros {
  width: 28.5%;
  height: 100%;
  background: revert;
  border-radius: 20px;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
section > div.outros > span {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
}
section > div.outros > div {
  width: 100%;
  height: 100px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 7px;
  cursor: pointer;
}

section > div.outros > div:hover {
  background: #238e23eb !important;
}
section > div.outros > div > span:first-child {
  font-weight: bold;
}
section > div.outros > div > span:last-child {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
section > div.outros > div > span > svg {
  width: 20px;
  height: 20px;
}
@media (max-width: 1107px) {
  section {
    width: 78%;
  }
}
@media (max-width: 1026px) {
  section {
    width: 100%;
    height: 800px;
    flex-direction: column;
  }
  section > div.outros {
    width: 70%;
    height: 100%;
    border-radius: 20px;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  section > div.outros > div {
    margin: 2% 6%;
  }
  .container {
    grid-template-rows: 200vh;
  }
}
@media (max-width: 768px) {
  .container {
    background-image: url(../assets/img/Inicio/Fotos/contatos-tablet.jpg);
  }
}
@media (max-width: 679px) {
  .container {
    grid-template-columns: 20px 0.5fr 1fr 1fr 1fr 1fr 0.5fr 20px;
  }
  section .form {
    width: 80%;
  }
  section > div.outros {
    width: 80%;
  }
}
@media (max-width: 575px) {
  section .form {
    width: 100%;
  }
  section > div.outros {
    width: 100%;
  }
}
@media (max-width: 425px) {
  .container {
    background-image: url(../assets/img/Inicio/Fotos/contatos-mobile.jpg);
  }
  form {
    flex-direction: column;
  }
  .inputs {
    width: 100%;
    height: 176px;
  }
  input {
    height: 37px;
  }
  form {
    height: 74%;
  }
  textarea {
    height: 40%;
    width: 100%;
  }
  section {
    width: 100%;
    margin-top: auto;
    margin-bottom: 3%;
    height: 983px;
    flex-direction: column;
    padding: 3%;
  }
  .container {
    grid-template-rows: 206vh;
  }
  .form span {
    height: 30px;
    font-size: 25px;
  }
}
@media (max-width: 348px) {
  .form span {
    height: 37px;
    font-size: 22px;
  }
  .container {
    grid-template-rows: 206vh;
    grid-template-columns: 10px 0.5fr 1fr 1fr 1fr 1fr 0.5fr 10px;
  }
}
</style>
