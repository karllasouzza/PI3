<template>
  <main :as="PageOn()" class="container">
    <section>
      <!-- formulario -->
      <div class="form" :style="{ background: Color_fff + '80' }">
        <!-- titulo  -->
        <Title :color="Color_000" :text="titulo1" />
        <form action="">
          <div class="inputs">
            <input
              id="nome"
              ref="ref_nome"
              v-model="nome"
              type="text"
              :placeholder="place_nome"
              @keypress.enter="Validacao()"
            />
            <input
              id="email"
              ref="ref_email"
              v-model="email"
              :placeholder="place_email"
              type="email"
              name=""
              @keypress.enter="Validacao()"
            />
            <select id="select" ref="ref_opcoes" v-model="opcoes" name="">
              <option
                v-for="(options, index) in option"
                :id="options.id"
                :key="index"
                :value="options.value"
              >
                {{ options.text }}
              </option>
            </select>
          </div>
          <textarea
            id="textarea"
            ref="ref_mensagem"
            v-model="mensagem"
            :placeholder="place_mensage"
            name=""
            cols="30"
            rows="10"
            @keypress.enter="Validacao()"
          ></textarea>
        </form>
        <button class="btn-hover color-1" @click="Validacao()">
          {{ button }}
        </button>
      </div>

      <div class="outros" :style="{ background: Color_fff + '80' }">
        <Title :text="titulo2" :color="Color_000" />
        <CardsOutros
          v-for="(op, index) in outros"
          :key="index"
          :text="op.text"
          :label="op.label"
        />
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
      nome: '',
      email: '',
      opcoes: '',
      mensagem: '',
      place_nome: '',
      place_email: '',
      place_mensage: '',
      option: [],

      // outros
      titulo2: '',
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
    }),
  },
  created() {
    // Portugues-br
    if (this.idioma === 'pt') {
      this.titulo1 = 'Formulário de contato'
      this.button = 'Enviar'
      this.option = []
      this.option.push(
        { value: '', text: '*Selecione uma categoria', id: 'option0' },
        { value: '1', text: 'O site nao abre', id: 'option1' },
        { value: '2', text: 'O site esta com bugs', id: 'option2' },
        { value: '3', text: 'Enviar um feedback', id: 'option3' }
      )
      this.titulo2 = 'Outras opções'
      this.outros = []
      this.outros.push(
        {
          label: 'Telefone:',
          text: '+55 (16) 999999999',
        },
        {
          label: 'Email:',
          text: 'exemplo@gmail.com',
        },
        {
          label: 'Facebook:',
          text: 'Facebook/example',
        },
        {
          label: 'Telegram:',
          text: 'tel.me/lalala',
        }
      )
      this.place_nome = '*Nome'
      this.place_email = '*Email'
      this.place_mensage = '*Mensagem'
    }
    // Ingles
    else if (this.idioma === 'en') {
      this.titulo1 = 'Contact Form'
      this.button = 'Submit'
      this.option = []
      this.option.push(
        { value: '', text: '*Select a category', id: 'option0' },
        { value: '1', text: 'The site does not open', id: 'option1' },
        { value: '2', text: 'The site is buggy', id: 'option2' },
        { value: '3', text: 'Send feedback', id: 'option3' }
      )
      this.titulo2 = 'Other options'
      this.outros = []
      this.outros.push(
        {
          label: 'Telephone:',
          text: '+55 (16) 999999999',
        },
        {
          label: 'E-mail:',
          text: 'exemplo@gmail.com',
        },
        {
          label: 'Facebook:',
          text: 'Facebook/example',
        },
        {
          label: 'Telegram:',
          text: 'tel.me/lalala',
        }
      )
      this.place_nome = '*Name'
      this.place_email = '*E-mail'
      this.place_mensage = '*Message'
    }
    // Espanhol
    else {
      this.titulo1 = 'Formulario de contacto'
      this.button = 'Enviar'
      this.option = []
      this.option.push(
        { value: '', text: '*Seleccione una categoría', id: 'option0' },
        { value: '1', text: 'El sitio no se abre', id: 'option1' },
        { value: '2', text: 'El sitio tiene errores', id: 'option2' },
        { value: '3', text: 'Envíe sus comentarios', id: 'option3' }
      )
      this.titulo2 = 'Otras opciones'
      this.outros = []
      this.outros.push(
        {
          label: 'Teléfono:',
          text: '+55 (16) 999999999',
        },
        {
          label: 'Correo electrónico:',
          text: 'exemplo@gmail.com',
        },
        {
          label: 'Facebook:',
          text: 'Facebook/example',
        },
        {
          label: 'Telegram:',
          text: 'tel.me/lalala',
        }
      )
      this.place_nome = '*Nombre'
      this.place_email = '*Correo electrónico'
      this.place_mensage = '*Mensaje'
    }
  },
  methods: {
    ...mapActions({
      set_Erro: 'Notificacoes/setErro',
      set_Sucess: 'Notificacoes/setSucess',
    }),
    ...mapMutations({
      notf_erro_true: 'Notificacoes/notf_erro_true',
      notf_erro_false: 'Notificacoes/notf_erro_false',
      notf_sucess_false: 'Notificacoes/notf_sucess_false',
      notf_sucess_true: 'Notificacoes/notf_sucess_true',
      PageOn: 'Header/Page_on_contato',
    }),
    // parte que copia na area de transferencia do user

    async Validacao() {
      // Portugues
      if (this.idioma === 'pt') {
        if (!this.nome) {
          this.$refs.ref_nome.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'O campo"nome" é obrigatorio.',
          })
          return false
        } else if (!this.validname(this.nome)) {
          this.$refs.ref_nome.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'Utilize um "Nome"válido.',
          })
          return false
        }
        // acaso o email nao esteja preenchido
        if (!this.email) {
          this.$refs.ref_email.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'O campo "Email" é obrigatorio',
          })
          return false
        }
        // se o email estiver preenchido mas de modo errado
        else if (!this.validEmail(this.email)) {
          this.$refs.ref_email.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'Utilize um "e-mail"válido.',
          })
          return false
        }

        if (!this.opcoes) {
          this.$refs.ref_opcoes.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'O campo "Categoria" é obrigatorio.',
          })
          return false
        }
        if (!this.mensagem) {
          this.$refs.ref_mensagem.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'O campo "Mensagem" é obrigatorio.',
          })
          return false
        }
        if (this.mensagem.length <= 30) {
          this.$refs.ref_mensagem.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'Por favor nos conte um pouco mais.',
          })
          return false
        }

        // acaso tudo esteja correto :)
        this.notf_sucess_true()
        this.set_Sucess({
          mensagemSucess: 'Mensagem enviada.',
        })
        //  se tudo estiver certo ira enviar o usuario para a tela inicial
        const success = await this.$axios.$post('/api/contacts', {
          name: this.nome,
          email: this.email,
          category: this.opcoes,
          message: this.mensagem,
        })

        // Se realmente for enviada ele limpa os campos
        if (success) {
          return (
            (this.nome = ''),
            (this.email = ''),
            (this.opcoes = ''),
            (this.mensagem = '')
          )
        }
      }
      // Ingles
      else if (this.idioma === 'en') {
        if (!this.nome) {
          this.$refs.ref_nome.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'The "name" field is required.',
          })
          return false
        } else if (!this.validname(this.nome)) {
          this.$refs.ref_nome.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'Use a valid "Name".',
          })
          return false
        }
        // acaso o email nao esteja preenchido
        if (!this.email) {
          this.$refs.ref_email.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'The "Email" field is mandatory.',
          })
          return false
        }
        // se o email estiver preenchido mas de modo errado
        else if (!this.validEmail(this.email)) {
          this.$refs.ref_email.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'Use a valid "email".',
          })
          return false
        }

        if (!this.opcoes) {
          this.$refs.ref_opcoes.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'The "Category" field is mandatory.',
          })
          return false
        }
        if (!this.mensagem) {
          this.$refs.ref_mensagem.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'The "Message" field is mandatory.',
          })
          return false
        }
        if (this.mensagem.length <= 30) {
          this.$refs.ref_mensagem.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'Please tell us a little more.',
          })
          return false
        }

        // acaso tudo esteja correto :)
        this.notf_sucess_true()
        this.set_Sucess({
          mensagemSucess: 'Message sent.',
        })
        //  se tudo estiver certo ira enviar o usuario para a tela inicial
        const success = await this.$axios.$post('/api/contacts', {
          name: this.nome,
          email: this.email,
          category: this.opcoes,
          message: this.mensagem,
        })

        // Se realmente for enviada ele limpa os campos
        if (success) {
          return (
            (this.nome = ''),
            (this.email = ''),
            (this.opcoes = ''),
            (this.mensagem = '')
          )
        }
      }
      // Espanhol
      else {
        if (!this.nome) {
          this.$refs.ref_nome.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'El campo de "nombre" es obligatorio.',
          })
          return false
        } else if (!this.validname(this.nome)) {
          this.$refs.ref_nome.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'Utilice un "Nombre" válido.',
          })
          return false
        }
        // acaso o email nao esteja preenchido
        if (!this.email) {
          this.$refs.ref_email.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'El campo "Correo electrónico" es obligatorio.',
          })
          return false
        }
        // se o email estiver preenchido mas de modo errado
        else if (!this.validEmail(this.email)) {
          this.$refs.ref_email.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'Utilice un "correo electrónico" válido.',
          })
          return false
        }

        if (!this.opcoes) {
          this.$refs.ref_opcoes.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'El campo "Categoría" es obligatorio.',
          })
          return false
        }
        if (!this.mensagem) {
          this.$refs.ref_mensagem.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'El campo "Mensaje" es obligatorio.',
          })
          return false
        }
        if (this.mensagem.length <= 30) {
          this.$refs.ref_mensagem.focus()
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'Cuéntanos un poco más.',
          })
          return false
        }

        // acaso tudo esteja correto :)
        this.notf_sucess_true()
        this.set_Sucess({
          mensagemSucess: 'Mensage enviada.',
        })
        //  se tudo estiver certo ira enviar o usuario para a tela inicial
        const success = await this.$axios.$post('/api/contacts', {
          name: this.nome,
          email: this.email,
          category: this.opcoes,
          message: this.mensagem,
        })

        // Se realmente for enviada ele limpa os campos
        if (success) {
          return (
            (this.nome = ''),
            (this.email = ''),
            (this.opcoes = ''),
            (this.mensagem = '')
          )
        }
      }
    },
    // nome > 3 sobrenome > 3
    validname(nome) {
      const na = /^([a-z]{3,})$/gi
      return na.test(nome)
    },
    // funçao contendo o regex para a validaçao do email
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
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
  background-image: url(../assets/img/Inicio/Fotos/contatos-desktop.jpg);
  background-position: center;
  background-size: cover;
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
textarea {
  width: 40%;
  height: 100%;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.726);
  padding: 2%;
}
input {
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.726);
  padding: 2%;
}
select {
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 15px;
  background: #fff;
  padding: 2%;
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
  height: 80px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5%;
  cursor: pointer;
  transition: ease-in-out 0.6s;
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
    margin-top: 20%;
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
    grid-template-rows: 216vh;
    grid-template-columns: 10px 0.5fr 1fr 1fr 1fr 1fr 0.5fr 10px;
  }
}
</style>
