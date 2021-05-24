<template>
  <div
    v-if="Visible"
    class="abaCep"
    :style="{ color: Color_000, background: Color_fff }"
  >
    <!-- Imagem -->
    <div class="icon">
      <label>Fechar</label>
      <label>{{ Imagem }}</label>
      <div class="img" :as="imgSelect()">
        <div :style="{ borderColor: M00 }" @click="M_img = '0000'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 63.48 105.53"
            overflow="visible"
          >
            <path
              class="st0"
              d="M11.22 38.8c.03.01.06.03.09.04 5.67 2.68 11.1 2.27 14.24 1.69l-3.19-5.61c-2.93 1.44-10.58-.57-10.58-.57l.26-1.64 8.85.27-5.64-6.02-8.04-.16-.46-1.37 6.4-.1-8.34-4.99.52-.93 6.64 3.04-.37-2.32 1.08.05.8 3.34 7.35 4.77-.64-6.03 1.03-.65 1.2 8.01c2.37 2.3 4.72 7.19 5.81 9.66.14-.17.28-.34.41-.55 2.92-4.41 1.63-11.83-2.27-16.25-4.02-4.54-9.93-4.93-15.15-5.27-4.06-.27-7.44.25-9.69.75L0 18.47c1.03 3.5 2.05 6.99 3.08 10.49 1.25 4.25 4.13 7.93 8.14 9.84zM27.58 17.73c.01.03.02.05.03.08 1.83 4.58 5.17 7.26 7.3 8.61l1.17-4.94c-2.46-.74-5.79-6-5.79-6l1.03-.8 4.95 4.9-.02-6.49-4.55-4.42.47-1.03 3.74 3.37-2.13-7.34.8-.26 2.2 5.31 1.03-1.54.6.61-1.33 2.36 1.68 6.69 2.86-3.82.94.18-3.6 5.26c.13 2.6-1.14 6.67-1.83 8.68.17-.03.34-.05.53-.1 4.05-.98 7.28-5.94 7.4-10.58.12-4.77-3.08-8.16-5.9-11.16-2.2-2.33-4.42-3.84-5.98-4.76L32.02 0c-1.28 2.56-2.57 5.13-3.85 7.69-1.56 3.13-1.87 6.79-.59 10.04zM14.25 49.68c.02-.02.05-.03.07-.05 4.23-2.73 8.59-2.98 11.15-2.84l-1.95 4.8c-2.48-.84-8.36 1.57-8.36 1.57l.38 1.27 7.01-1.14-3.85 5.38-6.37.98-.22 1.14 5.1-.59-6.11 4.84.51.69 4.97-3.12-.05 1.89.86-.15.29-2.74L23 57.03l.13 4.86.89.41.11-6.5c1.65-2.08 3-6.22 3.6-8.3.13.12.26.24.39.4 2.79 3.2 2.54 9.24-.1 13.17-2.72 4.03-7.38 4.96-11.5 5.78-3.21.64-5.94.58-7.78.42l-1.28-.24 1.35-8.67c.55-3.51 2.45-6.74 5.44-8.68zM42.33 28.03c-.02.02-.04.04-.06.05-3.78 3.32-5.21 7.45-5.78 9.95l5.15-.56c-.13-2.62 3.79-7.61 3.79-7.61l1.12.71L43.53 37l6.23-2.24 2.69-5.86 1.15.1-1.96 4.74 6.33-4.55.52.68-4.36 3.92 1.83.47-.38.78-2.72-.47L47 38.46l4.64 1.45.15.96-6.28-1.67c-2.45 1.02-6.8 1.18-8.97 1.2.08.16.16.31.27.48 2.32 3.56 8.19 4.97 12.69 3.5 4.62-1.51 6.79-5.74 8.71-9.48 1.49-2.91 2.19-5.56 2.54-7.37l.12-1.29c-2.9-.36-5.8-.72-8.71-1.07-3.52-.44-7.14.52-9.83 2.86zM48.81 54.16c-.01.02-.03.03-.04.05-2.59 3.14-3.2 6.63-3.34 8.7l4.04-1.11c-.44-2.07 2.05-6.57 2.05-6.57l.99.42-1.58 5.53 4.69-2.59 1.39-5.03.94-.07-.96 4.04 4.47-4.45.5.48-2.98 3.7 1.52.14-.2.68-2.23-.03-4.18 3.87 3.9.56.24.75-5.24-.52c-1.83 1.13-5.28 1.82-7.01 2.11.09.11.17.23.28.35 2.31 2.54 7.19 2.92 10.6 1.16 3.5-1.8 4.69-5.47 5.74-8.7.82-2.52 1.03-4.72 1.08-6.22l-.07-1.05-7.1.27c-2.88.08-5.65 1.31-7.5 3.53z"
            />
            <path
              d="M36.01 29.89c.67.34-6.17 9.44-3.23 16.67 1.65 4.07 3.67 6.61 3.67 6.61 1.16 1.47 2.12 2.29 2.83 4.15.86 2.27.48 3.83 1.01 3.95.71.16 2.23-2.44 2.59-5.16.32-2.45-.37-4.48-.89-5.64l1.16-1.45c.56 1.16 1.64 3.79 1.38 7.26-.09 1.22-.34 4.3-2.49 7.08-.32.41-.61.73-.82.94.44.66.86 1.35 1.23 2.09 3.78 7.47 1.72 15.65.29 19.8l-4.91-2.2c1.02-3.13 1.85-6.99 1.92-11.39.01-.77.05-5.56-1.28-9.95-.19-.61-.56-1.81-1.27-3.28-.77-1.59-1.52-2.64-2.12-3.52-1.26-1.84-2.87-4.4-3.55-5.78-2.49-5.06-.67-10.85-.14-12.52 1.42-4.51 4.21-7.87 4.62-7.66z"
              fill="#946137"
            />
            <path
              d="M60.72 73.95H27.33c-.56 0-1.02.46-1.02 1.02v4.79c0 .56.46 1.02 1.02 1.02h1.3l3.24 22.59c.18 1.24 1.15 2.15 2.29 2.15h19.49c1.12 0 2.07-.88 2.28-2.09l3.8-22.66h1c.56 0 1.02-.46 1.02-1.02v-4.79a1.03 1.03 0 00-1.03-1.01z"
              fill="#9d1915"
            />
          </svg>
        </div>
        <div :style="{ borderColor: M01 }" @click="M_img = '0001'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50.11 55.17"
            overflow="visible"
          >
            <style>
              .st0 {
                fill: #6f944d;
              }
            </style>
            <path
              class="st0"
              d="M13.38 9.96c-.15-.4-.35-.8-.63-1.18-.56-.78-.92-.8-2.55-2.2-.55-.47-1.3-1.23-2.81-2.76-.96-.96-1.44-1.46-1.89-2.29A8.01 8.01 0 014.87 0c-.25.31-.6.75-.99 1.31-.51.75-1.22 1.91-1.91 3.56C.53 8.33-.3 10.32.11 12.86c.13.8.52 3.23 2.63 4.93.42.34 2.34 1.89 4.93 1.48.93-.15 1.68-.52 2.28-.93l-4.86-3.45c2.79.9 2.79.57 2.79.57-3.45-5.91-1.97-8.37-1.97-8.37.64 4.38 4.21 8.35 5.73 9.86l.22-.22c.79-.84 1.31-1.89 1.56-3.02.04-.19.09-.39.13-.58.24-1.05.21-2.16-.17-3.17zM16.86 14.3c.13-.35.31-.69.55-1.03.49-.68.8-.69 2.21-1.91.47-.41 1.13-1.07 2.44-2.39.83-.83 1.25-1.27 1.64-1.99.29-.53.45-1 .55-1.32.22.27.52.65.85 1.14.44.65 1.06 1.66 1.66 3.09 1.25 3 1.97 4.72 1.61 6.93-.11.69-.45 2.8-2.28 4.27-.37.3-2.03 1.64-4.27 1.28-.81-.13-1.45-.45-1.98-.81l4.21-2.99c-2.42.78-2.42.5-2.42.5 2.99-5.13 1.71-7.27 1.71-7.27-.56 3.8-3.65 7.24-4.97 8.56l-.19-.19a5.647 5.647 0 01-1.36-2.62c-.04-.17-.07-.33-.11-.5-.21-.91-.18-1.87.15-2.75zM33.53 36.88c-.13-.75-.92-1.23-2.48-2.18-1.21-.74-1.84-1.11-2.77-1.21-1.28-.13-2.33.28-2.65.42-1.48.61-1.5 1.38-2.54 1.53-.76.11-1.12-.26-2.54-.79-1.31-.49-2.98-1.12-4.27-.88-.4.07-.8.24-1.17.47l-.34-1.55C13.55 26.41 19 21.98 19 21.98c-1.78.41-5.59 5.39-5.59 5.39 1.93-6.31-2.32-9.42-2.32-9.42 1.98 5.87 1.36 5.25-.07 9.89-1.08 3.49 1.07 7.52 2.19 9.31 0 .16.02.32.07.47 1.12 3.53 15.21 4.6 19.03 1.39.38-.31 1.39-1.16 1.22-2.13z"
            />
            <path
              d="M14.34 35.72c1.84-.95 4.03-.79 5.88.16 1.49.77 3.29 1.33 5.26 1.1 3.09-.37 3.7-2.36 7.85-3.73 1.18-.39 4.53-1.35 8.49-.48 2.01.44 4.71 1.03 6.58 3.49 2.5 3.27 1.56 7.25 1.43 7.77-.78 3.07-2.92 4.8-4.68 6.19-3.88 3.05-7.94 3.76-10.63 4.2-4.66.77-10.51 1.73-16.1-1.59-.81-.48-7.11-4.34-7.46-10.39-.05-.89-.18-3.15 1.35-5.08.6-.74 1.31-1.27 2.03-1.64z"
              fill="#725d4f"
            />
            <path
              d="M14.94 47.29c.3.83 3.36 4.15 9.87 5.21 6.02.98 10.94-.64 13.42-1.7 5.39-2.31 8.12-5.81 8-6.58-.06-.4-.3-.56-.3-.56-.31-.22-.78-.05-.94.01-1.69.61-3.16 2.53-3.16 2.53-1.37 1.8-3.25 2.48-6.11 3.51-3.08 1.12-5.68 1-8.05.89-3.57-.16-6.52-.29-8.33-1.8-.27-.22-1.33-.81-3.45-1.99-.25-.14-.8-.44-.99-.26-.17.17-.02.6.04.74z"
              fill="#fff"
            />
          </svg>
        </div>
        <div :style="{ borderColor: M02 }" @click="M_img = '0002'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 45.44 60.79"
            overflow="visible"
          >
            <style>
              .st0 {
                fill: #76b82d;
              }
            </style>
            <path
              class="st0"
              d="M21.35 15.9c-.24-.64-.57-1.28-1.01-1.89-.9-1.25-1.47-1.27-4.06-3.51-.87-.75-2.08-1.96-4.49-4.39-1.52-1.54-2.29-2.35-3.01-3.67C8.25 1.47 7.95.6 7.77 0c-.4.49-.96 1.2-1.57 2.1-.82 1.19-1.96 3.04-3.06 5.68C.83 13.3-.49 16.47.17 20.54c.21 1.27.84 5.15 4.19 7.87.67.54 3.73 3.01 7.87 2.36 1.49-.23 2.68-.84 3.65-1.49l-7.75-5.51c4.46 1.44 4.46.92 4.46.92-5.51-9.44-3.15-13.37-3.15-13.37 1.03 6.99 6.73 13.33 9.14 15.75.12-.12.25-.24.36-.36 1.25-1.34 2.1-3.02 2.5-4.82.07-.31.14-.62.21-.92.36-1.69.31-3.46-.3-5.07zM26.92 22.83c.21-.55.49-1.11.87-1.64.78-1.08 1.27-1.1 3.53-3.04.75-.65 1.8-1.7 3.89-3.81 1.32-1.33 1.99-2.04 2.62-3.18.46-.84.72-1.6.87-2.11.35.43.83 1.04 1.36 1.82.71 1.04 1.7 2.64 2.65 4.93 2 4.79 3.15 7.54 2.58 11.07-.18 1.11-.73 4.47-3.64 6.82-.58.47-3.23 2.61-6.82 2.05-1.29-.2-2.32-.73-3.16-1.29l6.73-4.78c-3.87 1.25-3.87.8-3.87.8 4.78-8.19 2.73-11.6 2.73-11.6-.89 6.06-5.84 11.56-7.93 13.66l-.31-.31c-1.09-1.17-1.82-2.62-2.17-4.18l-.18-.8c-.33-1.47-.28-3.01.25-4.41zM30.34 35.09s-8.7 7.08-6.74 17.1l1.31 5.99-2.79 2.61s-6.79-8.93-4.51-16.34 3.27-6.43.11-15.8c0 0 6.78 4.96 3.7 15.03 0 .01 6.07-7.94 8.92-8.59z"
            />
          </svg>
        </div>
        <div :style="{ borderColor: M03 }" @click="M_img = '0003'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44.77 63.36"
            overflow="visible"
          >
            <path
              class="st0"
              d="M35.29 50.95c1.73-.18 3.11-.63 4.02-.99.82-.45 2.16-1.3 3.34-2.8.73-.93 2.1-2.67 2.12-5.23.01-.57-.01-2.95-1.74-4.85-1.42-1.56-3.19-1.89-5.23-2.27-3.73-.7-6.55.25-7.13.45-1.46.52-2.71.96-3.71 2.2-1.98 2.43-1.23 5.71-1.06 6.44.6 2.61 2.22 4.17 2.96 4.85.75.7 2.02 1.85 3.94 2.2.89.17 1.62.09 2.49 0z"
            />
            <path
              fill="white"
              d="M41.58 43.25c.12-.05 1.19-.58 1.36-1.67.19-1.21-.87-2.32-1.97-2.58-.7-.16-1.79-.08-2.27.68-.56.88.06 2.07.61 2.65.85.93 2.05.93 2.27.92z"
            />
            <circle fill="white" cx="41.51" cy="45.53" r="1.14" />
            <path
              class="st0"
              d="M9.73 50.58c1.74-.18 3.13-.63 4.04-.99.83-.45 2.17-1.31 3.35-2.82.73-.94 2.11-2.69 2.13-5.26.01-.58-.01-2.97-1.75-4.88-1.43-1.57-3.2-1.9-5.26-2.29-3.75-.71-6.59.25-7.17.46-1.47.52-2.72.97-3.74 2.21C-.66 39.45.09 42.75.26 43.49c.6 2.63 2.24 4.19 2.97 4.88.76.7 2.03 1.86 3.96 2.21.94.16 1.66.09 2.54 0z"
            />
            <path
              fill="white"
              d="M16.06 42.83c.12-.05 1.2-.59 1.37-1.68.19-1.22-.87-2.33-1.98-2.59-.7-.16-1.8-.08-2.29.69-.56.88.06 2.08.61 2.67.86.92 2.06.92 2.29.91z"
            />
            <circle fill="white" cx="15.98" cy="45.12" r="1.14" />
            <path
              class="st0"
              d="M21.99 63.25c-1.9-.2-3.41-.69-4.41-1.08-.9-.49-2.36-1.43-3.66-3.08-.8-1.02-2.3-2.93-2.33-5.74-.01-.63.01-3.24 1.91-5.32 1.56-1.71 3.49-2.07 5.74-2.49 4.09-.77 7.19.28 7.82.5 1.6.57 2.97 1.05 4.07 2.41 2.17 2.66 1.35 6.26 1.16 7.07-.65 2.87-2.44 4.57-3.24 5.32-.83.77-2.22 2.03-4.32 2.41-.99.18-1.78.1-2.74 0z"
            />
            <g>
              <path
                fill="white"
                d="M15.09 54.81c-.13-.06-1.31-.64-1.5-1.83-.21-1.33.95-2.54 2.16-2.83.76-.18 1.96-.08 2.49.75.61.96-.07 2.27-.67 2.91-.92 1.01-2.23 1-2.48 1z"
              />
              <circle fill="white" cx="15.18" cy="57.3" r="1.25" />
            </g>
            <path
              d="M41.28 34.55c-.43-.49-.97-.67-1.26-.76-1.06-.33-2.11-.5-3.06-.58-.1-.15-.22-.29-.36-.42l-9.84-9.11a2.37 2.37 0 00-.6-.41c-1.25-6.82-4.17-13.5-8.37-21.09C16.68.17 15.82-.4 14.42.26c-1.42.66-1.77 1.75-.69 3.64 2.79 4.89 4.99 9.34 6.48 13.69-.19.16-.37.36-.54.58-4.25 5.49-8.15 5.91-11.95 13.98-.13.27-.23.51-.31.74-.41.07-.64.13-.64.13-.66.17-1.63.45-2.74.97-.7.32-1.15.95-1.17 1.63-.01.55.27.95.41 1.12.66.79 1.74.67 1.83.66l2.19-.66c.04.23.19 1.03.91 1.68.68.6 1.44.69 1.68.71.31-.05.78-.18 1.27-.51.89-.6 1.22-1.47 1.32-1.78 1.49 1.05 3.22.7 3.76-.2.44-.73.13-1.87-.46-2.54-.44-.49-.98-.67-1.27-.76-.38-.12-.75-.21-1.12-.29 2.92-4.88 4.44-6.46 8.31-10.09 1.31 6.44.95 13.01-1.47 20.84-1.06.09-2.22.28-3.41.64-.32.1-.91.29-1.39.83-.64.73-.98 1.97-.5 2.77.59.99 2.47 1.37 4.1.22.11.34.47 1.29 1.44 1.94.53.36 1.05.5 1.39.55.26-.02 1.09-.12 1.83-.78.79-.7.96-1.58 1-1.83l2.38.72c.1.01 1.28.15 2-.72.15-.18.46-.62.44-1.22-.02-.74-.52-1.42-1.27-1.77-1.22-.56-2.27-.87-2.99-1.05 0 0-.15-.04-.42-.09 1.35-4.74 2-9.07 2.01-13.23l3.59 3.32c-.26.1-.53.22-.81.35-.69.32-1.15.94-1.16 1.62-.01.55.27.95.4 1.11.65.79 1.73.67 1.82.66l2.17-.66c.04.23.19 1.03.91 1.67.67.6 1.43.69 1.67.71.31-.05.78-.18 1.26-.51.89-.6 1.21-1.46 1.31-1.77 1.48 1.05 3.2.7 3.74-.2.44-.73.13-1.86-.45-2.53z"
              fill="#6f944d"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- box inputs -->
    <span class="resposta">
      <div class="I">
        <!-- Titulo -->
        <label for="title">{{ Label_titulo }}</label>
        <input
          id="title"
          ref="ref_title"
          v-model="title"
          type="text"
          class="inputT"
        />

        <!-- Descriçao -->
        <label for="Desc">{{ Label_desc }}</label>
        <textarea
          id="Desc"
          ref="ref_desc"
          v-model="descricao"
          class="desc"
          cols="30"
          rows="10"
        ></textarea>

        <!-- Preço -->
        <label for="preco">{{ Label_preco }}</label>
        <input
          id="preco"
          ref="ref_preco"
          v-model="preco"
          type="Number"
          class="inputT"
        />
      </div>

      <span class="enviar btn-hover color-1" @click="valid()">{{
        Finish
      }}</span>
    </span>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      // labels
      Preco: '',
      resposta: '',
      Label_titulo: '',
      Label_desc: '',
      Label_preco: '',
      Finish: '',
      Imagem: '',

      //  models
      title: '',
      descricao: '',
      preco: 0,

      // Imagem selecionada
      M_img: '0000',
      M00: 'black',
      M01: 'black',
      M02: 'black',
      M03: 'black',
    }
  },
  computed: {
    ...mapState({
      Visible: (state) => state.Produtos.On_Off,

      Color_000: (state) => state.Colors.Color_000,
      Color_fff: (state) => state.Colors.Color_fff,
      Dark: (state) => state.Colors.Dark_mode,
      idioma: (state) => state.Acessibilidade.idioma,
    }),
  },
  created() {
    if (this.idioma === 'pt') {
      this.Label_titulo = '* Título do produto'
      this.Label_desc = '* Descrição do produto'
      this.Label_preco = '* Preço do produto'
      this.Finish = 'Criar produto'
      this.Imagem = 'Escolha um Ícone'
    } else if (this.idioma === 'en') {
      this.Label_titulo = '* Product title'
      this.Label_desc = '* Product description'
      this.Label_preco = '* Price of the product'
      this.Finish = 'Create product'
      this.Imagem = 'Choose an Icon'
    } else {
      this.Label_titulo = '* Titulo del producto'
      this.Label_desc = '* Descripción del producto'
      this.Label_preco = '* Precio del producto'
      this.Finish = 'Crear producto'
      this.Imagem = 'Elige un icono'
    }
  },
  methods: {
    ...mapMutations({
      notf_erro_true: 'Notificacoes/notf_erro_true',
      notf_erro_false: 'Notificacoes/notf_erro_false',
      notf_sucess_false: 'Notificacoes/notf_sucess_false',
      notf_sucess_true: 'Notificacoes/notf_sucess_true',
    }),
    ...mapActions({
      set_Erro: 'Notificacoes/setErro',
      set_Sucess: 'Notificacoes/setSucess',
    }),
    imgSelect() {
      if (!this.Dark) {
        if (this.M_img === '0000') {
          this.M00 = 'green'
          this.M01 = '#000'
          this.M02 = '#000'
          this.M03 = '#000'
        } else if (this.M_img === '0001') {
          this.M00 = '#000'
          this.M01 = 'green'
          this.M02 = '#000'
          this.M03 = '#000'
        } else if (this.M_img === '0002') {
          this.M00 = '#000'
          this.M01 = '#000'
          this.M02 = 'green'
          this.M03 = '#000'
        } else {
          this.M00 = '#000'
          this.M01 = '#000'
          this.M02 = '#000'
          this.M03 = 'green'
        }
      }
      if (this.Dark) {
        if (this.M_img === '0000') {
          this.M00 = 'green'
          this.M01 = '#fff'
          this.M02 = '#fff'
          this.M03 = '#fff'
        } else if (this.M_img === '0001') {
          this.M00 = '#fff'
          this.M01 = 'green'
          this.M02 = '#fff'
          this.M03 = '#fff'
        } else if (this.M_img === '0002') {
          this.M00 = '#fff'
          this.M01 = '#fff'
          this.M02 = 'green'
          this.M03 = '#fff'
        } else {
          this.M00 = '#fff'
          this.M01 = '#fff'
          this.M02 = '#fff'
          this.M03 = 'green'
        }
      }
    },

    valid() {
      if (this.idioma === 'pt') {
        if (!this.title) {
          this.$refs.ref_title.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'O campo "Titulo" é obrigatório!',
          })
          return false
        } else if (this.title.length >= 60) {
          this.$refs.ref_title.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'Título muito grande! tente resumi-lo',
          })
          return false
        }
        if (!this.descricao) {
          this.$refs.ref_desc.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'O campo "Descrição" é obrigatório!',
          })
          return false
        } else if (this.descricao.length >= 100) {
          this.$refs.ref_desc.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'Descrição muito grande! tente resumi-la!',
          })
          return false
        }
        if (!this.preco) {
          this.$refs.ref_preco.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'O campo "Preço" é obrigatório!',
          })
          return false
        } else if (this.preco <= '0') {
          this.$refs.ref_preco.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'O tipo de preço do produto invalido!',
          })
          return false
        }

        // Limpando os dados apos td correto
        this.preco = 0
        this.title = ''
        this.descricao = ''

        // FreedBack de sucesso
        this.notf_sucess_true()
        this.set_Sucess({
          mensagemSucess: 'Produto criado.',
        })
        return true
      }
      //
      // Ingles
      else if (this.idioma === 'en') {
        if (!this.title) {
          this.$refs.ref_title.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'The "Title" field is mandatory!',
          })
          return false
        } else if (this.title.length >= 60) {
          this.$refs.ref_title.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'Title too big! try to summarize it',
          })
          return false
        }
        if (!this.descricao) {
          this.$refs.ref_desc.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'The "Description" field is mandatory!',
          })
          return false
        } else if (this.descricao.length >= 100) {
          this.$refs.ref_desc.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'Very big description! try to summarize it!',
          })
          return false
        }
        if (!this.preco) {
          this.$refs.ref_preco.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'The "Price" field is mandatory!',
          })
          return false
        } else if (this.preco <= '0') {
          this.$refs.ref_preco.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'The price type of the product is invalid!',
          })
          return false
        }

        // Limpando os dados apos td correto
        this.preco = 0
        this.title = ''
        this.descricao = ''

        // FreedBack de sucesso
        this.notf_sucess_true()
        this.set_Sucess({
          mensagemSucess: 'Product created!',
        })
        return true
      }
      //
      // Espanhol
      else {
        if (!this.title) {
          this.$refs.ref_title.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: '¡El campo "Título" es obligatorio!',
          })
          return false
        } else if (this.title.length >= 60) {
          this.$refs.ref_title.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: '¡Título demasiado grande! intenta resumirlo',
          })
          return false
        }
        if (!this.descricao) {
          this.$refs.ref_desc.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: '¡El campo "Descripción" es obligatorio!',
          })
          return false
        } else if (this.descricao.length >= 100) {
          this.$refs.ref_desc.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: '¡Muy gran descripción! ¡Intenta resumirlo!',
          })
          return false
        }
        if (!this.preco) {
          this.$refs.ref_preco.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: '¡El campo "Precio" es obligatorio!',
          })
          return false
        } else if (this.preco <= '0') {
          this.$refs.ref_preco.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: '¡El tipo de precio del producto no es válido!',
          })
          return false
        }

        // Limpando os dados apos td correto
        this.preco = 0
        this.title = ''
        this.descricao = ''

        // FreedBack de sucesso
        this.notf_sucess_true()
        this.set_Sucess({
          mensagemSucess: 'Producto creado',
        })
        return true
      }
    },
  },
}
</script>

<style scoped>
.abaCep {
  width: 700px;
  height: 465px;
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 1%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
}

.recall {
  width: 400px;
  align-self: center;
  margin: auto 0 0;
  padding: 2%;
  border-radius: 10px;
}
.inputT {
  width: 70%;
  height: 40px;
  border-radius: 10px;
  background: #e8f0fe;
  border: none;
  padding: 2%;
}

.inputT::placeholder {
  color: green;
}
.enviar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  border: none;
  border-radius: 10px;
  padding: 4%;
  margin: 2% 0 0;
  cursor: pointer;
}

#Desc {
  width: 70%;
  border-radius: 10px;
  border: none;
  background: #e8f0fe;
  padding: 2%;
}
.resposta div.I {
  width: 100%;
  height: 76%;
  display: flex;
  flex-flow: wrap;
  align-content: space-between;
  align-items: center;
  justify-content: center;
}
label {
  font-weight: bold;
  margin: 2%;
  width: 70%;
  padding: 1%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.resposta {
  width: 300px;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
}
.img {
  width: 400px;
  height: 300px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  padding: 1rem;
}
.img > div {
  width: 80%;
  height: 80%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  cursor: pointer;
  border: 1px solid black;
}
.img > div > svg {
  width: 60px;
  height: 60px;
}

.custo {
  width: 100%;
  height: 35px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: text;
}

@media (max-width: 720px) {
  .enviar {
    width: 90%;
    height: auto;
  }
  .img {
    width: 100%;
    height: 200px;
  }
  .recall {
    width: 100%;
    align-self: center;
    padding: 2%;
    margin: 2%;
    border-radius: 10px 0 10px 0;
  }
  .inputT {
    width: 90%;
  }
  label {
    width: 100%;
  }
  .icon {
    width: 90%;
    height: 38%;
  }
  .resposta div.I {
    width: 100%;
    height: 81%;
    display: flex;
    flex-flow: wrap;
    align-content: space-around;
    /* align-items: unset; */
    justify-content: flex-start;
  }
  .abaCep {
    width: 90%;
    height: 833px;
    position: absolute;
    top: 80%;
    border-radius: 20px;
    flex-wrap: nowrap;
  }

  span.resposta {
    width: 80%;
    margin-bottom: 10px;
  }
  .img > div > svg {
    width: 35px;
    height: 35px;
  }
}
</style>
