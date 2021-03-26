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
          <form @submit.prevent>
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
              id="date"
              placeholder="Data Nascimento"
              v-model="nascimento"
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

      accountEmail: '',
      accountPassword: '',
      name: '',
      lastname: '',
      date: '',
      genre: '',
      email: '',
      password: '',
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
      return console.log('Fui validado')
    },
  },
  computed: {
    ...mapState({
      Color_238: (state) => state.Colors.Color_238,
    }),
  },
}
</script>

<style scoped>
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
