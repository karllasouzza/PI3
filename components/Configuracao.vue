<template>
  <main v-if="config" class="container">
    <section :style="{ background: Color_238 }">
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
            <div>
              <p class="label">{{ F_site }}</p>

              <Libras />
            </div>
          </div>
          <div class="inputs">
            <div>
              <p class="label">{{ FS_site }}</p>

              <FontSize />
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
        <div class="scroll">
          <div
            v-for="(O, index) in outros"
            :key="index"
            :style="{ background: Color_fff }"
          >
            <span class="Label" :style="{ color: Color_000 }">{{
              O.title
            }}</span>
            <span :style="{ color: Color_000 }">{{ O.text }}</span>
          </div>
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
      titulo2: '',
      M_cores: '',
      I_site: '',
      F_site: '',
      FS_site: '',

      outros: [],
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
      this.F_site = 'VLibras'
      this.FS_site = 'Tamanho da fonte'
      this.titulo2 = 'Acessibilidade'
      this.outros = []
      this.outros.push(
        { title: 'Inicio:', text: 'ALT+1' },
        { title: 'Blog:', text: 'ALT+2' },
        { title: 'Produtos:', text: 'ALT+3' },
        { title: 'Sobre:', text: 'ALT+4' },
        { title: 'Contatos:', text: 'ALT+5' },
        { title: 'Conecte se:', text: 'ALT+6' },
        { title: 'Configuração:', text: 'ALT+7' },
        { title: 'Carrinho:', text: 'ALT+8' }
      )
    }
    // Ingles
    else if (this.idioma === 'en') {
      this.titulo1 = 'Settings'
      this.button = 'Save'
      this.M_cores = 'Color mode'
      this.I_site = 'Language'
      this.F_site = 'VLibras'
      this.FS_site = 'Font size'
      this.titulo2 = 'Accessibility'
      this.outros = []
      this.outros.push(
        { title: 'Home:', text: 'ALT+1' },
        { title: 'Blog:', text: 'ALT+2' },
        { title: 'Products:', text: 'ALT+3' },
        { title: 'About:', text: 'ALT+4' },
        { title: 'Contact:', text: 'ALT+5' },
        { title: 'Login:', text: 'ALT+6' },
        { title: 'Settings:', text: 'ALT+7' },
        { title: 'Cart:', text: 'ALT+8' }
      )
    }
    // Espanhol
    else {
      this.titulo1 = 'Ajustes'
      this.button = 'Salvar'
      this.M_cores = 'Modo de color'
      this.I_site = 'Idioma'
      this.F_site = 'VLibras'
      this.FS_site = 'Tamaño de fuente'
      this.titulo2 = 'Accesibilidad'
      this.outros = []
      this.outros.push(
        { title: 'Casa:', text: 'ALT+1' },
        { title: 'Blog:', text: 'ALT+2' },
        { title: 'Productos:', text: 'ALT+3' },
        { title: 'Sobre:', text: 'ALT+4' },
        { title: 'Acerca de:', text: 'ALT+5' },
        { title: 'Acceso:', text: 'ALT+6' },
        { title: 'Ajustes:', text: 'ALT+7' },
        { title: 'Carro:', text: 'ALT+8' }
      )
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
  font-family: 'Montserrat';
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
  padding: 2px 0;
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
  transition: 0.6s ease-in-out;
}
button:hover {
  background: #23f323eb !important;
  transition: 0.6s ease-in-out;
}

/* Outros  */
section > div.outros {
  width: 28.5%;
  height: 100%;
  border-radius: 20px;
  padding: 1%;
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
div.scroll {
  width: 100%;
  height: 90%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
}
div.scroll::-webkit-scrollbar {
  width: 14px;
  background: transparent;
}
div.scroll::-webkit-scrollbar-thumb {
  background: #238e23eb;
  cursor: pointer;
  border-radius: 8px;
}

section > div.outros > div > div {
  width: 100%;
  min-height: 65px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 7px;
  cursor: pointer;
  margin: 5px 0;
}
section > div.outros > div > div:first-child {
  margin-top: 0px;
}
section > div.outros > div > div:hover {
  background: #238e23eb !important;
}
section > div.outros > div > div > span {
  font-weight: bold;
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
