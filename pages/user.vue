<template>
  <section>
    <main :as="PageOn()" :style="{ background: Color_fff + 'cc' }">
      <BigTitle
        class="title"
        :text="changeOfForm ? L_login : L_create_acount"
        :color="Color_000"
      />

      <!-- Muda de conta -->
      <div class="container-change-account">
        <Title
          :text="changeOfForm ? Label_N_conta : Label_S_conta"
          :color="Color_000"
        />
        <button
          :style="buttonHover ? { color: '#00cc00' } : { color: '#00b33c' }"
          accesskey="t"
          @mouseover="buttonHover = true"
          @mouseleave="buttonHover = false"
          @click="changeForm"
        >
          {{ changeOfForm ? L_create_acount : L_login }}
        </button>
      </div>

      <!-- Formulário de login -->
      <form
        :style="changeOfForm ? 'display: flex;' : 'display: none;'"
        @submit.prevent="loginToAccount"
      >
        <input
          ref="ref_userLogin"
          v-model="userLogin"
          type="email"
          :placeholder="P_email"
        />

        <!-- Olho para ver senha -->
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 16.5 11.3"
          xml:space="preserve"
          height="1em"
          width="2em"
          class="eye"
          @click="changePasswordVisibility"
        >
          <path
            :style="passwordVisible ? { fill: Color_976 } : { fill: Color_238 }"
            d="M8.3,0C4.5,0,1.3,2.3,0,5.6c1.3,3.3,4.5,5.6,8.3,5.6s7-2.3,8.3-5.6C15.2,2.3,12,0,8.3,0z M8.3,9.4c-2.1,0-3.8-1.7-3.8-3.8
	s1.7-3.8,3.8-3.8S12,3.6,12,5.6S10.3,9.4,8.3,9.4z M8.3,3.4C7,3.4,6,4.4,6,5.6s1,2.3,2.3,2.3s2.3-1,2.3-2.3S9.5,3.4,8.3,3.4z"
          />
        </svg>
        <input
          ref="ref_userPassword"
          v-model="userPassword"
          :type="showPassword"
          :placeholder="P_senha"
        />

        <br />

        <nuxt-link to="" class="link-for-help" :style="{ color: '#00b33c' }">
          {{ Label_E_senha }}</nuxt-link
        >
        <nuxt-link to="" class="link-for-help" :style="{ color: '#00b33c' }">{{
          Label_help
        }}</nuxt-link>

        <br />

        <button class="btn-hover color-1" type="submit">
          {{ B_login }}
        </button>
      </form>

      <!-- Formulário de cadastro -->
      <form
        :style="changeOfForm ? 'display: none;' : 'display: flex;'"
        @submit.prevent="registerAccount"
      >
        <input
          ref="ref_userName"
          v-model="userName"
          type="text"
          :placeholder="P_nome"
        />
        <input
          ref="ref_lastName"
          v-model="lastName"
          type="text"
          :placeholder="P_S_name"
        />
        <input
          ref="ref_dateOfBirth"
          v-model="dateOfBirth"
          type="date"
          :placeholder="P_date"
        />
        <select ref="ref_genre" v-model="genre">
          <option value="">{{ O_S_genero }}</option>
          <option value="female">{{ O_feminino }}</option>
          <option value="male">{{ O_masculino }}</option>
          <option value="lgbtqia">{{ O_lgbt }}</option>
          <option value="nenhum">{{ O_null }}</option>
        </select>
        <input
          ref="ref_email"
          v-model="email"
          type="email"
          :placeholder="P_I_email"
        />
        <input
          ref="ref_password"
          v-model="password"
          type="password"
          :placeholder="P_password"
        />
        <input
          ref="ref_confirmPassword"
          v-model="confirmPassword"
          type="password"
          :placeholder="P_R_password"
        />

        <button type="submit" class="btn-hover color-1">
          {{ B_create_acount }}
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
  name: 'User',
  components: {
    BigTitle,
    Title,
  },
  data: () => ({
    changeOfForm: true,

    buttonHover: false,

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

    // Labels
    Label_N_conta: '',
    Label_S_conta: '',
    L_login: '',
    L_create_acount: '',
    Label_E_senha: '',
    Label_help: '',

    // Placeholder
    P_nome: '',
    P_S_name: '',
    P_I_email: '',
    P_password: '',
    P_R_password: '',
    P_date: '',
    P_email: '',
    P_senha: '',

    // Botoes
    B_login: '',
    B_create_acount: '',

    // Option/Select
    O_S_genero: '',
    O_feminino: '',
    O_masculino: '',
    O_lgbt: '',
    O_null: '',
  }),
  computed: {
    ...mapState({
      // Cores
      Color_000: (state) => state.Colors.Color_000,
      Color_238: (state) => state.Colors.Color_238,
      Color_976: (state) => state.Colors.Color_976,
      Color_fff: (state) => state.Colors.Color_fff,
      Color_00f: (state) => state.Colors.Color_00f,

      // Idiomas
      idioma: (state) => state.Acessibilidade.idioma,
    }),
  },
  created() {
    // Portugues
    if (this.idioma === 'pt') {
      this.Label_N_conta = 'Não tem uma conta? '
      this.Label_S_conta = 'Já tem uma conta? '
      this.L_login = 'Faça login'
      this.L_create_acount = 'Criar conta'
      this.Label_E_senha = ' Esqueceu a senha?'
      this.Label_help = 'Precisa de ajuda?'
      this.P_nome = '* Nome'
      this.P_S_name = '* Sobrenome'
      this.P_I_email = '* E-mail'
      this.P_password = '* Senha'
      this.P_R_password = '* Confirme sua senha'
      this.P_date = '* Data de nascimento'
      this.P_email = 'Dígite seu e-mail.'
      this.P_senha = 'Dígite sua senha.'
      this.B_login = 'Fazer login'
      this.B_create_acount = 'Criar conta'
      this.O_S_genero = 'Selecione seu Gênero'
      this.O_feminino = 'Feminino'
      this.O_masculino = 'Masculino'
      this.O_lgbt = 'LGBTQIA+'
      this.O_null = 'prefiro não dizer'
    }
    // Ingles
    else if (this.idioma === 'en') {
      this.Label_N_conta = 'Do not have an account?'
      this.Label_S_conta = 'Already have an account?'
      this.L_login = 'Login'
      this.L_create_acount = 'Create an account'
      this.Label_E_senha = 'Forgot password?'
      this.Label_help = 'Need help?'
      this.P_nome = '* Name'
      this.P_S_name = '* Surname'
      this.P_I_email = '* E-mail'
      this.P_password = '* Password'
      this.P_R_password = '* Confirm your password'
      this.P_date = '* Date of birth'
      this.P_email = 'Type your e-mail.'
      this.P_senha = 'Type your password.'
      this.B_login = 'Login'
      this.B_create_acount = 'Create an account'
      this.O_S_genero = 'Select your Genre'
      this.O_feminino = 'Feminine'
      this.O_masculino = 'Masculino'
      this.O_lgbt = 'LGBTQIA+'
      this.O_null = 'Prefer not to say'
    }
    // Espanhol
    else {
      this.Label_N_conta = '¿No tienes una cuenta?'
      this.Label_S_conta = '¿Ya tienes una cuenta?'
      this.L_login = 'Registrarse'
      this.L_create_acount = 'Crea una cuenta'
      this.Label_E_senha = 'olvido la contraseña?'
      this.Label_help = '¿Necesita ayuda?'
      this.P_nome = '* Nombre'
      this.P_S_name = '* Apellido'
      this.P_I_email = '* Correo electrónico'
      this.P_password = '* Contraseña'
      this.P_R_password = '* Confirmar la contraseña'
      this.P_date = '* Fecha de nacimiento'
      this.P_email = 'Escriba su correo electrónico.'
      this.P_senha = 'Escribe tu contraseña.'
      this.B_login = 'Hacer login'
      this.B_create_acount = 'Crea una cuenta'
      this.O_S_genero = 'Seleccione su género'
      this.O_feminino = 'Feminino'
      this.O_masculino = 'Masculino'
      this.O_lgbt = 'LGBTQIA+'
      this.O_null = 'prefiero no decirlo'
    }
  },
  methods: {
    ...mapActions({
      set_Erro: 'Notificacoes/setErro',
      set_Sucess: 'Notificacoes/setSucess',
      SetUser: 'Usuario/SetUser',
    }),
    ...mapMutations({
      notf_erro_true: 'Notificacoes/notf_erro_true',
      notf_erro_false: 'Notificacoes/notf_erro_false',
      notf_sucess_false: 'Notificacoes/notf_sucess_false',
      notf_sucess_true: 'Notificacoes/notf_sucess_true',
      PageOn: 'Header/Page_on_login',
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
    async loginToAccount() {
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

      // Manda a requisição e valida se usuário existe.
      await this.$axios
        .$post('/api/user/login', {
          email: this.userLogin,
          password: this.userPassword,
        })
        .then((userData) => {
          // Se usuário existir entrará neste método onde passará tudo por vuex
          this.notf_sucess_true()
          this.set_Sucess({
            mensagemSucess: 'Logado com sucesso',
          })

          // Aqui deverá mandar para o vuex.
          // userData é o parâmetro que receberá o objeto retornado da api.
          this.SetUser({
            User: userData,
          })
          return console.log('Validado', userData)
        })
        .catch(() => {
          // Caso usuário não exista ele mostrará um erro!
          this.notf_erro_true()
          this.set_Erro({
            mensagemErro: 'E-mail ou senha está incorreto.',
          })
        })
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
          mensagemErro: 'Formato de nome invalido.',
        })
        return
      } else if (!this.lastName) {
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
          mensagemErro: 'Formato de E-mail inválido.',
        })
        return
      }

      // Verificação da Senha
      if (!this.password) {
        this.$refs.ref_password.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro: 'Senha obrigatoria.',
        })
        return
      } else if (this.password.length <= 7) {
        this.$refs.ref_password.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro: 'Senha de 7(sete) caracteres obrigatoria.',
        })
        return
      } else if (this.password !== this.confirmPassword) {
        this.$refs.ref_confirmPassword.focus()
        this.notf_erro_true()
        this.set_Erro({
          mensagemErro: 'Obrigatorio senhas iguais.',
        })
        return
      }

      // Realiza o cadastro, se der certo ele funcionará senão dará um erro
      // Os dados devem ter o mesmo nome do que é aceito pelo banco
      await this.$axios
        .$post('/api/user', {
          name: this.userName,
          last_name: this.lastName,
          date_of_birth: this.dateOfBirth,
          genre: this.genre,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.notf_sucess_true()
          this.set_Sucess({
            mensagemSucess: 'Cadrastro realizado.',
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
}
</script>

<style scoped>
section {
  background-image: url('../assets/img/user-page/Conta-destop.jpg');
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

  border-radius: 20px;

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
  border-radius: 20px;

  font-size: 12pt;
  padding: 0.5em;
}

section main form button {
  width: 300px;
  height: 40px;
  border-radius: 20px;
  margin: 0.5em 0;
  font-weight: bolder;
  font-family: 'Montserrat';
  font-size: 17px;
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
@media (max-width: 768px) {
  section {
    background-image: url('../assets/img/user-page/Conta-tablet.jpg');
  }
}
@media (max-width: 425px) {
  section {
    background-image: url('../assets/img/user-page/Conta-mobile.jpg');
  }
}
</style>
