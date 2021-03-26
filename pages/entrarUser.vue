<template>
  <section>
    <div class="main-container">
      <div class="form-container">
        <h1>{{ visibleTitle }}</h1>

        <!-- Ja tem conta -->
        <div class="enter-account">
          <p>Já tem uma conta?</p>
          <button @click="changeAccount">Faça login</button>
        </div>

        <!-- Formulário de Login -->
        <div
          :style="accountExchange ? 'display: block;' : 'display: none;'"
          class="container-form-user"
        >
          <form @submit.prevent="validationFormLogin">
            <label for="accountEmail">E-mail</label>
            <input type="email" id="accountEmail" />
            <label for="accountPassword">Senha</label>
            <input type="password" id="accountPassword" />

            <button type="submit">Fazer login</button>
          </form>

          <nuxt-link to="">Esqueceu a senha?</nuxt-link>
          <nuxt-link to="">Precisa de ajuda?</nuxt-link>
        </div>

        <!-- Formulário de criar conta -->
        <div
          :style="accountExchange ? 'display: none;' : 'display: block;'"
          class="container-form-user"
        >
          <form>
            <label for="name">Nome</label>
            <input type="text" id="name" />

            <label for="lastName">Sobrenome</label>
            <input type="text" id="lastName" />

            <label for="nascimento">Data de nascimento</label>
            <input type="text" id="nascimento" />

            <label for="genre">Gênero</label>
            <input type="text" id="genre" />

            <label for="email">E-mail</label>
            <input type="email" id="email" />

            <label for="password">Senha</label>
            <input type="password" id="password" />

            <label for="confirmPassword">Confirme sua senha</label>
            <input type="password" id="confirmPassword" />

            <button type="submit">Criar conta</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      accountExchange: true,
      visibleTitle: 'Fazer login',
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
  background-color: rgba(187, 23, 23, 0.842);
  border-radius: 0 10px 0px 10px;

  height: 80%;
  width: 40%;

  margin: 2em 0;

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
</style>
