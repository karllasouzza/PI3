<template>
  <div class="container">
    <div class="content first-content">
      <div class="first-column">
        <h2 class="title title-primary">Seja Bem Vindo!</h2>
        <p class="description description-primary">Faça Login</p>
        <button class="btn btn-primary">Entrar</button>
      </div>
      <div class="second-column">
        <h2 class="title title-second">Criar Conta</h2>

        <br />
        <form class="form">
          <label class="label-input" for="">
            <input type="text" placeholder="Nome" required="required" />
          </label>

          <label class="label-input" for="">
            <input type="text" placeholder="Sobrenome" required="required" />
          </label>

          <label class="label-input" for="">
            <input id="date" class="date" type="date" required="required" />
          </label>

          <label class="label-input" for="">
            <select class="select">
              <option disabled selected required="required">Genêro:</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="indefinido">Indefinido</option>
            </select>
          </label>

          <label class="label-input" for="">
            <input type="email" placeholder="Email" required="required" />
          </label>

          <label class="label-input" for="">
            <input
              type="password"
              placeholder="Criar Senha"
              required="required"
            />
          </label>

          <label class="label-input" for="">
            <input
              type="password"
              placeholder="Confirmar Senha"
              required="required"
            />
          </label>

          <button class="btn btn-second" value="Logar">Cadastrar</button>
        </form>
      </div>
      <!-- second column -->
    </div>
    <!-- first content -->
    <div class="content second-content">
      <div class="first-column">
        <h2 class="title title-primary">Conecte-se conosco</h2>
        <p class="description description-primary">Crie uma conta</p>
        <button class="btn btn-primary">Cadastrar</button>
      </div>
      <div class="second-column">
        <h2 class="title title-second">Faça Login</h2>
        <br />
        <form class="form">
          <label class="label-input" for="">
            <input type="email" placeholder="Email" required="required" />
          </label>

          <label class="label-input" for="">
            <input type="password" placeholder="Senha" required="required" />
          </label>

          <a class="password" href="#">Esqueceu sua senha?</a>
          <button class="btn btn-second">Entrar</button>
        </form>
      </div>
      <!-- second column -->
    </div>
    <!-- second-content -->
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150vh;
  background-color: #ecf0f1;
}

.content {
  background-color: #fff;
  border-radius: 15px;
  width: 960px;
  height: 90%;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.content::before {
  content: '';
  position: absolute;
  background-color: green;
  width: 40%;
  height: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  left: 0;
}
.field1 {
  position: relative;
  top: 40%;
  left: 40%;
}
.field {
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid rgb(233, 232, 232);
  width: 99%;
  height: 150px;
}
.title {
  font-size: 28px;
  font-weight: bold;
  text-transform: capitalize;
}
.title-primary {
  color: #fff;
}
.title-second {
  color: rgb(72, 112, 12);
}
.description {
  font-size: 14px;
  font-weight: 300;
  line-height: 30px;
}
.description-primary {
  color: #fff;
}
.description-second {
  color: yellowgreen;
}
.btn {
  border-radius: 15px;
  text-transform: uppercase;
  color: #fff;
  font-size: 10px;
  padding: 10px 50px;
  cursor: pointer;
  font-weight: bold;
  width: 150px;
  align-self: center;
  border: none;
  margin-top: 1rem;
}
.btn-primary {
  background-color: transparent;
  border: 1px solid #fff;
  transition: background-color 0.5s;
}
.btn-primary:hover {
  background-color: #fff;
  color: rgb(4, 71, 4);
}
.btn-second {
  background-color: green;
  border: 1px solid yellowgreen;
  transition: background-color 0.5s;
}
.btn-second:hover {
  background-color: #fff;
  border: 1px solid yellowgreen;
  color: green;
}

.flex-container {
  display: flex;
  border-radius: 20px 50px;
}
.first-content {
  display: flex;
}
.first-content .second-column {
  z-index: 11;
}
.first-column {
  text-align: center;
  width: 40%;
  z-index: 10;
}
.second-column {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  padding: 10px;
}

.form input {
  height: 45px;
  width: 100%;
  border: none;
  background-color: #ecf0f1;
}

.label-input {
  background-color: #ecf0f1;
  display: flex;
  align-items: center;
  margin: 8px;
}

/* second content*/

.second-content {
  position: absolute;
  display: flex;
}
.second-content .first-column {
  order: 2;
  z-index: -1;
}
.second-content .second-column {
  order: 1;
  z-index: -1;
}
.password {
  color: green;
  font-size: 14px;
  margin: 15px 0;
  text-align: center;
}
.password::first-letter {
  text-transform: capitalize;
}
.select {
  padding: 8px;
  color: gray;
  background-color: #eeeeee;
  border: 0px solid #dddddd;
  cursor: pointer;
  height: 40px;
  width: 98%;
}
.date {
  color: gray;
}

.sign-in-js .first-content .first-column {
  z-index: -1;
}

.sign-in-js .second-content .second-column {
  z-index: 11;
}
.sign-in-js .second-content .first-column {
  z-index: 13;
}

.sign-in-js .content::before {
  left: 60%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  animation: slidein 1.3s;

  z-index: 12;
}

.sign-up-js .content::before {
  animation: slideout 1.3s;

  z-index: 12;
}

.sign-up-js .second-content .first-column,
.sign-up-js .second-content .second-column {
  z-index: -1;
}

.sign-up-js .first-content .second-column {
  z-index: 11;
}

.sign-up-js .first-content .first-column {
  z-index: 13;
}

.sign-in-js .first-content .second-column {
  z-index: -1;
  position: relative;
  animation: deslocamentoEsq 1.3s;
}

.sign-up-js .second-content .second-column {
  position: relative;
  z-index: -1;
  animation: deslocamentoDir 1.3s;
}

/*Animação com Css */

@keyframes deslocamentoEsq {
  from {
    left: 0;
    opacity: 1;
    z-index: 12;
  }

  25% {
    left: -80px;
    opacity: 0.5;
  }

  50% {
    left: -100px;
    opacity: 0.2;
  }

  to {
    left: -110px;
    opacity: 0;
    z-index: -1;
  }
}

@keyframes deslocamentoDir {
  from {
    left: 0;
    z-index: 12;
  }

  25% {
    left: 80px;
  }

  50% {
    left: 100px;
  }

  to {
    left: 110px;
    z-index: -1;
  }
}

@keyframes slidein {
  from {
    left: 0;
    width: 40%;
  }

  25% {
    left: 5%;
    width: 50%;
  }

  50% {
    left: 25%;
    width: 60%;
  }

  75% {
    left: 45%;
    width: 50%;
  }

  to {
    left: 60%;
    width: 40%;
  }
}

@keyframes slideout {
  from {
    left: 60%;
    width: 40%;
  }

  25% {
    left: 45%;
    width: 50%;
  }

  50% {
    left: 25%;
    width: 60%;
  }

  75% {
    left: 5%;
    width: 50%;
  }

  to {
    left: 0;
    width: 40%;
  }
}

/*Versão Mobile*/
@media screen and (max-width: 1040px) {
  .content {
    width: 100%;
    height: 100%;
  }

  .content::before {
    width: 100%;
    height: 40%;
    top: 0;
    border-radius: 0;
  }
  .first-content,
  .second-content {
    flex-direction: column;
    justify-content: space-around;
  }

  .first-column,
  .second-column {
    width: 100%;
  }

  .sign-in-js .content::before {
    top: 60%;
    left: 0;
    border-radius: 0;
  }

  .form {
    width: 90%;
  }

  /* Animação Mobile com Css*/

  @keyframes deslocamentoEsq {
    from {
      top: 0;
      opacity: 1;
      z-index: 12;
    }

    25% {
      top: -80px;
      opacity: 0.5;
    }

    50% {
      top: -100px;
      opacity: 0.2;
    }

    to {
      top: -110px;
      opacity: 0;
      z-index: -1;
    }
  }

  @keyframes deslocamentoDir {
    from {
      top: 0;
      z-index: 12;
    }

    25% {
      top: 80px;
    }

    50% {
      top: 100px;
    }

    to {
      top: 110px;
      z-index: -1;
    }
  }

  @keyframes slidein {
    from {
      top: 0;
      height: 40%;
    }

    25% {
      top: 5%;
      height: 50%;
    }

    50% {
      top: 25%;
      height: 60%;
    }

    75% {
      top: 45%;
      height: 50%;
    }

    to {
      top: 60%;
      height: 40%;
    }
  }

  @keyframes slideout {
    from {
      top: 60%;
      height: 40%;
    }

    25% {
      top: 45%;
      height: 50%;
    }

    50% {
      top: 25%;
      height: 60%;
    }

    75% {
      top: 5%;
      height: 50%;
    }

    to {
      top: 0;
      height: 40%;
    }
  }
}

@media screen and (max-width: 740px) {
  .form {
    width: 50%;
  }
}

@media screen and (max-width: 425px) {
  .form {
    width: 100%;
  }
}

/* Css da página de formulario de contato*/
.first-content1 {
  display: flex;
}
.first-content1 .second-column1 {
  z-index: 11;
}
.first-column1 {
  text-align: center;
  width: 100%;
  z-index: 10;
}
.Container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ecf0f1;
}

.content1 {
  background-color: #fff;
  border-radius: 15px;
  width: 960px;
  height: 90%;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.content::before1 {
  content: '';
  position: absolute;
  background-color: #ffff;
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  left: 0;
}
.title1 {
  font-size: 28px;
  font-weight: bold;
  text-transform: capitalize;
}
.title-primary1 {
  color: green;
  text-align: center;
}
.flex-container {
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  border-radius: 5px;
}
.flex-container > div {
  background-color: #f1f1f1;
  width: 300px;
  margin: 5px;
  text-align: center;
  line-height: 90px;
  font-size: 18px;
}
</style>
