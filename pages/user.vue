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
          type="email"
          placeholder="Dígite seu e-mail."
          required
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
          :type="showPassword"
          placeholder="Dígite sua senha."
          required
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
        <input v-model="userName" type="text" placeholder="* Nome" required />
        <input
          v-model="lastName"
          type="text"
          placeholder="* Sobrenome"
          required
        />
        <input
          v-model="dateOfBirth"
          type="date"
          placeholder="* Data de nascimento"
          required
        />
        <select v-model="genre" required>
          <option value="">Selecione seu Gênero</option>
          <option value="female">Feminino</option>
          <option value="male">Masculino</option>
          <option value="lgbtqia">lgbtqia+</option>
          <option value="nenhum">prefiro não dizer</option>
        </select>
        <input v-model="email" type="email" placeholder="* E-mail" required />
        <input
          v-model="password"
          type="password"
          placeholder="* Senha"
          required
        />
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="* Confirme sua senha"
          required
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
import { mapState } from 'vuex'
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
    dateOfBirth: Date,
    genre: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),
  methods: {
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
    loginToAccount() {
      // userLogin e userPassword
      console.log('Verificando se esse usuário existe!')
    },
    registerAccount() {
      if (this.userName.length < 3) {
        return console.log('Nome está pequeno demais, utilize um nome maior.')
      } else if (this.lastName.length < 3) {
        return console.log(
          'Sobrenome está pequeno demais, utilize um sobrenome maior.'
        )
      }

      const year = new Date().getUTCFullYear()
      const userYear = new Date(this.dateOfBirth).getFullYear()
      const userYearResult = year - userYear
      if (userYearResult > 120) {
        return console.log('Idade inválida, coloque uma idade correspondente.')
      }

      const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
      if (!regex.test(this.email)) {
        return console.log('E-mail inválido.')
      }

      if (!this.password) {
        return console.log('Necessário haver uma senha.')
      } else if (this.password.length <= 7) {
        return console.log('A senha precisa ser maior que 7(sete) caracteres.')
      } else if (this.password !== this.confirmPassword) {
        return console.log(
          'Necessário que o confirmar senha seja igual a senha.'
        )
      }
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

@media (max-width: 425px) {
  section main form .eye {
    top: 2.5em;
    left: 18em;
  }
}
</style>
