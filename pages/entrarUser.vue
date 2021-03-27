<template class="fundo">
  <section>
    <div class="main-container">
      <div class="form-container">
        <h1>{{ visibleTitle }}</h1>

        <!-- Ja tem conta -->
        <div class="enter-account">
          <p>{{ accountExchange ? 'Não' : 'Já' }} tem uma conta?</p>
          <p>
            <button
              class="btn1"
              :style="{ color: Color_238 }"
              @click="changeAccount"
            >
              {{ accountExchange ? 'Criar conta' : 'Faça login' }}
            </button>
          </p>
        </div>

        <!-- Formulário de Login -->
        <div
          :style="accountExchange ? 'display: block;' : 'display: none;'"
          class="container-form-user"
        >
          <form @submit.prevent="validationFormLogin">
            <input
              type="email"
              id="accountEmail"
              placeholder="E-mail"
              v-model="accountEmail"
              class="inputs"
            />
            <input
              type="password"
              id="accountPassword"
              placeholder="Senha"
              v-model="accountPassword"
              class="inputs"
            />
            <p>
              <button class="btn" type="submit">Fazer login</button>
            </p>
          </form>

          <nuxt-link to="">Esqueceu a senha?</nuxt-link>
          <nuxt-link to="">Precisa de ajuda?</nuxt-link>
        </div>

        <!-- Formulário de criar conta -->
        <div
          :style="accountExchange ? 'display: none;' : 'display: block;'"
          class="container-form-user"
        >
          <form @submit.prevent="registerUser">
            <input
              type="text"
              id="name"
              placeholder="Nome"
              v-model="name"
              class="inputs"
            />

            <input
              type="text"
              id="lastName"
              placeholder="Sobrenome"
              v-model="lastName"
              class="inputs"
            />

            <input
              type="date"
              id="birth"
              placeholder="Data Nascimento"
              v-model="birth"
              class="inputs"
            />

            <select
              id="genre"
              class="inputs"
              placeholder="Genêro"
              v-model="genre"
              name="genre"
            >
              <option value="">Selecione seu genêro</option>
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
              <option value="3">Prefiro não declarar</option>
            </select>

            <input
              type="email"
              id="email"
              placeholder="E-mail"
              v-model="email"
              class="inputs"
            />

            <input
              type="password"
              id="password"
              placeholder="Senha"
              v-model="password"
              class="inputs"
            />

            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirme sua senha"
              v-model="confirmPassword"
              class="inputs"
            />
            <p>
              <button class="btn" type="submit">Criar conta</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      accountExchange: true,
      visibleTitle: 'Fazer login',

      // Valida para o usuário logar
      accountEmail: '',
      accountPassword: '',

      // para cadastro de usuário
      name: '',
      lastName: '',
      birth: '',
      genre: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    changeAccount() {
      if (this.accountExchange) {
        this.visibleTitle = 'Criar conta'
      } else {
        this.visibleTitle = 'Fazer login'
      }
      this.accountExchange = !this.accountExchange
    },

    validationFormLogin() {
      if (!this.accountEmail) {
        return console.log('Seu e-mail não está preenchido.')
      } else if (!this.accountPassword) {
        return console.log('Sua senha não está preenchido.')
      }

      // Aqui será onde mandará para um arquivo os dados para ser pega a req
      console.log('Sua req foi enviada!')
    },

    registerUser() {
      // Verifica nome e sobrenome
      if (!this.name) {
        return console.log('Nome precisa ser preenchido.')
      } else if (!this.lastName) {
        return console.log('Sobrenome precisa ser preenchido.')
      } else if (this.name.length < 3 || this.lastName.length < 3) {
        console.log(
          'nome ou sobrenome é muito pequeno. Deve ser maior de 3 caracteres!'
        )
      }

      // Verifica se foi colocado data de aniversário
      if (!this.birth) {
        console.log('Obrigatório por sua idade.')
      }

      // Verifica o gênero
      if (!this.genre) {
        console.log('Obrigatório colocar seu gênero.')
      }

      // Verificação de email
      const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
      if (!this.email) {
        console.log('Obrigatório coloar e-mail.')
      } else if (!regexEmail.test(this.email)) {
        console.log(
          'Esse e-mail não atende ao requisitos necessário, tente novamente.'
        )
      }

      // Verificação de senha
      if (!this.password) {
        console.log('Obrigatório ter senha.')
      } else if (!this.password.length < 7) {
        console.log('A senha não pode ser menor que 7 caracteres.')
      } else if (!this.confirmPassword) {
        console.log(
          'O campo de confirmar senha precisa estar preenchido exatamente igual a senha.'
        )
      } else if (this.password !== this.confirmPassword) {
        console.log('A Senha não está igual na confirmação de senha.')
      }
    },
  },
  computed: {
    ...mapState({
      Color_238: (state) => state.Colors.Color_238,
    }),
  },
}
</script>

<style>
section {
  display: grid;
  grid-template-rows: 55px 27em;
}

section .main-container,
section .main-container .form-container {
  grid-row: 2/3;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

section .main-container .form-container {
  background-color: rgba(219, 215, 215, 0.842);
  border-radius: 0 10px 0px 10px;

  height: 97%;
  width: 50%;

  margin: 0 auto;

  flex-direction: column;
}

section .main-container .form-container h1,
section .main-container .form-container div {
  margin: 0.2em 0;
}

section .main-container .form-container .enter-account {
  display: flex;
  flex-direction: row;
}

section .main-container .form-container .container-form-user,
section .main-container .form-container .container-form-user form {
  display: flex;
  flex-direction: column;
}

section .main-container .form-container .container-form-user form .inputs {
  width: 25rem;
  margin: 5px auto;
  padding: 10px;
  border-radius: 10px;
  border: none;
  margin-bottom: 5px;
  font-size: 12px;
  vertical-align: middle;
}
.btn {
  border-radius: 15px;
  background-color: green;
  color: white;
  width: 25rem;
  height: 30px;
}
.btn1 {
  background-color: rgb(219, 221, 219);
}
</style>
