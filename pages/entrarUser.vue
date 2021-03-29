<template>
  <section>
    <div class="main-container">
      <div class="form-container">
        <h1>{{ visibleTitle }}</h1>

        <!-- Ja tem conta -->
        <div class="enter-account">
          <p>{{ accountExchange ? 'Não' : 'Já' }} possui conta?</p>
          <p>
            <a
              class="text"
              :style="{ color: Color_238 }"
              @click="changeAccount"
            >
              {{ accountExchange ? 'Criar conta' : 'Fazer login' }}
            </a>
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
              placeholder="*Email"
              v-model="accountEmail"
              class="inputs"
            />
            <p>
              <input
                type="password"
                id="accountPassword"
                placeholder="*Senha"
                v-model="accountPassword"
                class="inputs"
              />
            </p>

            <p>
              <button class="btn" type="submit">Entrar</button>
            </p>
          </form>
          <p>
            <nuxt-link to="" class="text1">Esqueceu a senha?</nuxt-link>
            <nuxt-link to="" class="text1">Precisa de ajuda?</nuxt-link>
          </p>
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
              placeholder="*Nome"
              v-model="name"
              class="inputs"
            />

            <input
              type="text"
              id="lastName"
              placeholder="*Sobrenome"
              v-model="lastName"
              class="inputs"
            />

            <input
              type="date"
              id="*date"
              placeholder="*Data Nascimento"
              v-model="nascimento"
              class="inputs"
            />

            <select
              id="genre"
              class="inputs"
              placeholder="*Genêro"
              v-model="genre"
              name="genre"
            >
              <option value="">*Selecione seu genêro</option>
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
              <option value="3">Prefiro não declarar</option>
            </select>

            <input
              type="email"
              id="email"
              placeholder="*Email"
              v-model="email"
              class="inputs"
            />

            <input
              type="password"
              id="password"
              placeholder="*Senha"
              v-model="password"
              class="inputs"
            />

            <input
              type="password"
              id="confirmPassword"
              placeholder="*Confirme sua senha"
              v-model="confirmPassword"
              class="inputs"
            />
            <p>
              <button class="btn" type="submit">Cadastrar</button>
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

<style>
section {
  widows: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 55px 27em;
  background-image: url(../assets/img/Inicio/Fotos/4.jpg);
  background-repeat: no-repeat;
  background-position: center;
  padding: 60px;
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
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 2px 30px 2px 30px;

  height: 100%;
  width: 40%;

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
  border-radius: 0px 20px 0px 20px;
  border: none;
  margin-bottom: 5px;
  font-size: 12px;
  vertical-align: middle;
  background: rgba(255, 255, 255, 0.726);
  color: black;
}
.btn {
  border-radius: 15px;
  background-color: #238e23;
  color: white;
  width: 25rem;
  height: 30px;
  border-radius: 0px 20px 0px 20px;
}
.text {
  color: #238e23;
}
.text1 {
  color: #238e23;
  align-items: center;
}
</style>
