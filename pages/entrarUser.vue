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
        <br />

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
              class="inputs2"
            />
            <p>
              <input
                type="password"
                id="accountPassword"
                placeholder="*Senha"
                v-model="accountPassword"
                class="inputs2"
              />
            </p>
            <br />

            <p>
              <button class="btn" type="submit">Entrar</button>
            </p>
          </form>
          <br />

          <p>
            <nuxt-link to="" class="text1">Esqueceu a senha?</nuxt-link>
            <br />
            <nuxt-link to="" class="text1">Precisa de ajuda?</nuxt-link>
          </p>
        </div>

        <!-- Formulário de criar conta -->
        <div
          :style="accountExchange ? 'display: none;' : 'display: block;'"
          class="container-form-user"
        >
          <form @submit.prevent>
            <div class="caixa">
              <input
                type="text"
                id="name"
                placeholder="*Nome"
                v-model="name"
                class="inputs1"
              />

              <input
                type="text"
                id="lastName"
                placeholder="*Sobrenome"
                v-model="lastName"
                class="inputs1"
              />
              <p>
                <input
                  type="date"
                  id="*date"
                  placeholder="*Data Nascimento"
                  v-model="nascimento"
                  class="inputs1"
                />

                <select
                  id="genre"
                  class="inputs1"
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
                  class="inputs2"
                />

                <input
                  type="password"
                  id="password"
                  placeholder="*Senha"
                  v-model="password"
                  class="inputs2"
                />

                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="*Confirme sua senha"
                  v-model="confirmPassword"
                  class="inputs2"
                />
                <br />
              </p>

              <p>
                <button class="btn" type="submit">Cadastrar</button>
              </p>
            </div>
            <br />
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
  border-radius: 0 20px 0 20px;

  height: 115%;
  width: 40%;

  margin: 3px auto;

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
  align-items: stretch;
}
section .main-container .form-container .container-form-user form .inputs1 {
  width: 13rem;
  margin: 0 auto;
  padding: 15px;
  border-radius: 0px 20px;
  border: none;
  margin-bottom: 3px;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.726);
  color: black;
  align-items: center;
  justify-content: center;
}
section .main-container .form-container .container-form-user form .inputs2 {
  width: 26.4rem;
  margin: 0;
  padding: 15px;
  border-radius: 0px 20px;
  border: none;
  margin-bottom: 3px;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.726);
  color: black;
  align-items: center;
  display: block;
}
section .main-container .form-container .container-form-user form .btn {
  border-radius: 15px;
  background-color: #238e23;
  color: white;
  width: 26.1rem;
  height: 40px;
  border-radius: 0px 20px;
}
section .main-container .form-container .container-form-user form .text {
  color: #238e23;
}
.text1 {
  color: #238e23;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 3px;
  margin: 5px;
  display: flex;
}
.caixa {
  justify-content: center;
  float: right;
  padding: 28px;
  margin: 15px;
}
</style>
