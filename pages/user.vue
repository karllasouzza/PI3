<template>
  <section>
    <main>
      <BigTitle
        class="title"
        :text="changeOfForm ? 'Fazer login' : 'Criar Conta'"
        color="Color_000"
      />

      <!-- Muda de conta -->
      <div class="container-change-account">
        <Title
          :text="changeOfForm ? 'Não tem uma conta? ' : 'Já tem uma conta? '"
          color="Color_000"
        />
        <button
          @mouseover="buttonHover = true"
          @mouseleave="buttonHover = false"
          :style="buttonHover ? { color: Color_976 } : { color: Color_238 }"
          @click="changeForm"
          accesskey="t"
        >
          {{ changeOfForm ? 'Criar conta' : 'Faça login' }}
        </button>
      </div>

      <!-- Formulário de login -->
      <form
        :style="changeOfForm ? 'display: flex;' : 'display: none;'"
        @submit.prevent="loginToAccount"
      >
        <input
          v-model="userLogin"
          ref="ref_userLogin"
          type="email"
          placeholder="Dígite seu e-mail."
        />

        <!-- Olho para ver senha -->
        <svg
          @click="changePasswordVisibility"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 16.5 11.3"
          xml:space="preserve"
          height="1em"
          width="2em"
          class="eye"
        >
          <path
            :style="passwordVisible ? { fill: Color_976 } : { fill: Color_238 }"
            d="M8.3,0C4.5,0,1.3,2.3,0,5.6c1.3,3.3,4.5,5.6,8.3,5.6s7-2.3,8.3-5.6C15.2,2.3,12,0,8.3,0z M8.3,9.4c-2.1,0-3.8-1.7-3.8-3.8
	s1.7-3.8,3.8-3.8S12,3.6,12,5.6S10.3,9.4,8.3,9.4z M8.3,3.4C7,3.4,6,4.4,6,5.6s1,2.3,2.3,2.3s2.3-1,2.3-2.3S9.5,3.4,8.3,3.4z"
          />
        </svg>
        <input
          v-model="userPassword"
          ref="ref_userPassword"
          :type="showPassword"
          placeholder="Dígite sua senha."
        />

        <br />

        <nuxt-link to="" class="link-for-help" :style="{ color: Color_238 }"
          >Esqueceu a senha?</nuxt-link
        >
        <nuxt-link to="" class="link-for-help" :style="{ color: Color_238 }"
          >Precisa de ajuda?</nuxt-link
        >

        <br />

        <button
          type="submit"
          @mouseover="AccessAccountButton = true"
          @mouseleave="AccessAccountButton = false"
          :style="
            AccessAccountButton
              ? { backgroundColor: Color_976, color: Color_fff }
              : { backgroundColor: Color_238, color: Color_fff }
          "
        >
          Fazer login
        </button>
      </form>

      <!-- Formulário de cadastro -->
      <form
        :style="changeOfForm ? 'display: none;' : 'display: flex;'"
        @submit.prevent="registerAccount"
      >
        <input
          v-model="userName"
          ref="ref_userName"
          type="text"
          placeholder="* Nome"
        />
        <input
          disabled
          v-model="lastName"
          ref="ref_lastName"
          type="text"
          placeholder="* Sobrenome - Desabilitado"
        />
        <input
          disabled
          v-model="dateOfBirth"
          ref="ref_dateOfBirth"
          type="date"
          placeholder="* Data de nascimento - Desabilitado"
        />
        <select disabled v-model="genre" ref="ref_genre">
          <option value="">Selecione seu Gênero - Desabilitado</option>
          <option value="female">Feminino</option>
          <option value="male">Masculino</option>
          <option value="lgbtqia">lgbtqia+</option>
          <option value="nenhum">prefiro não dizer</option>
        </select>
        <input
          v-model="email"
          ref="ref_email"
          type="email"
          placeholder="* E-mail"
        />
        <input
          v-model="password"
          ref="ref_password"
          type="password"
          placeholder="* Senha"
        />
        <input
          v-model="confirmPassword"
          ref="ref_confirmPassword"
          type="password"
          placeholder="* Confirme sua senha"
        />

        <button
          type="submit"
          @mouseover="AccessAccountButton = true"
          @mouseleave="AccessAccountButton = false"
          :style="
            AccessAccountButton
              ? { backgroundColor: Color_976, color: Color_fff }
              : { backgroundColor: Color_238, color: Color_fff }
          "
        >
          Criar conta
        </button>
      </form>
    </main>
  </section>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import Title from '../components/Title'
import BigTitle from '../components/BigTitle'

export default {
  name: 'user',
  components: {
    BigTitle,
    Title,
  },
  data: () => ({
    changeOfForm: true,

    buttonHover: false,
    AccessAccountButton: false,

    // Dados para ver senha
    passwordVisible: false,
    showPassword: 'password',

    // Dados dos campos do formulário de login
    userLogin: '',
    userPassword: '',

    // Dados dos campos dos formulário de registro
    userName: '',
    lastName: '',
    dateOfBirth: '',
    genre: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),
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
    }),

    // Muda de formulário
    changeForm() {
      this.changeOfForm = !this.changeOfForm
    },
    // Visibilidade de senha
    changePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible

      if (this.passwordVisible) {
        return (this.showPassword = 'text')
      } else {
        return (this.showPassword = 'password')
      }
    },

    // Função para verificar se usuário existe
    loginToAccount() {
      // userLogin e userPassword
      if (!this.userLogin) {
        this.$refs.ref_userLogin.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro: 'Preicsa ter e-mail preenchido.',
        })
        return
      } else if (!this.userPassword) {
        this.$refs.ref_userPassword.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro: 'Necessário ter a senha preenchida.',
        })
        return
      }

      console.log('Verificando se esse usuário existe!')
    },

    // Função para registrar usuário
    async registerAccount() {
      // Verificação de nome e sobrenome
      if (!this.userName) {
        this.$refs.ref_userName.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro: 'Obrigatório colocar o nome.',
        })
        return
      } else if (this.userName.length < 3) {
        this.$refs.ref_userName.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro: 'Nome está pequeno demais, utilize um nome maior.',
        })
        return
      } /* else if (!this.lastName) {
        this.$refs.ref_lastName.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro: 'Obrigatório colocar o sobrenome.',
        })
        return
      } else if (this.lastName.length < 3) {
        this.$refs.ref_lastName.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro:
            'Sobrenome está pequeno demais, utilize um sobrenome maior.',
        })
        return
      }

      // Verificação de idade
      if (!this.dateOfBirth) {
        this.$refs.ref_dateOfBirth.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro: 'Obrigatório colocar a data de nascimento.',
        })
        return
      }

      const year = new Date().getUTCFullYear()
      const userYear = new Date(this.dateOfBirth).getFullYear()
      const userYearResult = year - userYear
      if (userYearResult > 120) {
        this.$refs.ref_dateOfBirth.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro: 'Idade inválida, coloque uma idade correspondente.',
        })
        return
      }

      // Verificação do Gênero
      if (!this.genre) {
        this.$refs.ref_genre.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro: 'Obrigatório colocar gênero.',
        })
        return
      }
      */

      // Verificação do E-mail
      const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
      if (!this.email) {
        this.$refs.ref_email.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro: 'Obrigatório colocar o e-mail.',
        })
        return
      } else if (!regex.test(this.email)) {
        this.$refs.ref_email.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro: 'E-mail inválido.',
        })
        return
      }

      // Verificação da Senha
      if (!this.password) {
        this.$refs.ref_password.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro: 'Necessário haver uma senha.',
        })
        return
      } else if (this.password.length <= 7) {
        this.$refs.ref_password.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro: 'A senha precisa ser maior que 7(sete) caracteres.',
        })
        return
      } else if (this.password !== this.confirmPassword) {
        this.$refs.ref_confirmPassword.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro: 'Necessário que o confirmar senha seja igual a senha.',
        })
        return
      }

      // Realiza o cadastro, se der certo ele funcionará senão dará um erro
      await this.$axios
        .$post('/api/user', {
          name: this.userName,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.notf_sucess_true()
          this.set_Sucess({
            mensagemSucess: 'Você foi cadastrado com sucesso.',
          })

          // Limpa os campos do formulário
          this.userName = ''
          this.lastName = ''
          this.dateOfBirth = ''
          this.genre = ''
          this.email = ''
          this.password = ''
          this.confirmPassword = ''
        })
        .catch(() => {
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro:
              'Houve um erro ao se registrar, tente novamente mais tarde.',
          })
        })
    },
  },
  computed: {
    ...mapState({
      // Cor preta
      Color_000: (state) => state.Colors.Color_000,
      // Cor Verde claro
      Color_238: (state) => state.Colors.Color_238,
      // Cor verde escuro
      Color_976: (state) => state.Colors.Color_976,
      // Cor de branco
      Color_fff: (state) => state.Colors.Color_fff,
    }),
  },
}
</script>

<style scoped>
section {
  background-image: url('../assets/img/user-page/background-user-page.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 100%;
  width: 100%;
}

/* Css básico para atribuir display flex no section, main e 
container-change-account (Botão de trocar conta) */
section,
section main,
section main .container-change-account {
  display: flex;
  justify-content: center;
  align-items: center;
}

section main {
  flex-direction: column;

  background-color: #ffffff93;
  border-radius: 0 20px;

  margin: 6em 0;
  padding: 1em;

  /* Animação quando entra na página */
  animation: animationForm 1s forwards;
}

/* Classes do título e troca de conta */
section main .title {
  font-size: 40px;
  font-weight: 700;
}

section main span {
  font-size: 18px;
  font-weight: 400;

  margin: 1em 0;
}
/* / */

section main .container-change-account button {
  font-size: 18px;
  font-weight: 400;

  background-color: transparent;
  border: none;
}

/* Classe do formulário de logar na conta */
section main form {
  display: flex;
  flex-direction: column;
}

section main form input,
section main form select {
  width: 300px;
  height: 40px;

  margin: 0.5em 0;

  background: rgba(242, 242, 242, 0.7);
  border-radius: 0px 20px;

  font-size: 12pt;
  padding: 0.5em;
}

section main form button {
  width: 300px;
  height: 40px;

  border-radius: 20px;
  margin: 0.5em 0;

  cursor: pointer;
}

/* classe do olho */
section main form .eye {
  position: relative;
  top: 2.3em;
  left: 16em;

  cursor: pointer;
}

section main form .link-for-help {
  text-decoration: none;
  text-align: center;

  margin-bottom: 1em;
}
/* / */

@keyframes animationForm {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media (max-width: 425px) {
  section main form .eye {
    top: 2.5em;
    left: 18em;
  }
}
</style>
