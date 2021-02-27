<template>
  <header :style="{ background: Background_header, color: Color_header }">
    <nav>
      <div v-for="(Logo_content, index) in Logo" :key="index" class="Logo">
        <!-- Svg -->

        <Nlink
          :text="Logo_content.conteudo"
          :link="Logo_content.Link"
          :acess="Logo_content.key"
          :style="{ color: Color_logo }"
        />
      </div>
      <ul>
        <li v-for="(buttons, index) in Botoes" :key="index">
          <Nlink
            :text="buttons.conteudo"
            :link="buttons.Link"
            :acess="buttons.key"
            :style="{ color: Color_buttons }"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      Botoes: [
        { conteudo: 'Inicio', Link: '/', key: '1' },
        { conteudo: 'Blog', Link: '/blog', key: '2' },
        { conteudo: 'Sobre', Link: '/sobre', key: '3' },
        { conteudo: 'Contato', Link: '/contato', key: '4' },
        {
          conteudo: 'Banco de sementes',
          Link: '/banco de sementes',
          key: 'ctr+',
        },
      ],
      Logo: [{ conteudo: 'Nome do site', Link: '/', key: '1' }],
      Background_header: '#007f5f',
      Color_header: '#fff',
      Color_buttons: '#fff',
      Color_logo: ' #fff  ',
    }
  },
}
</script>

<style scoped>
header {
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 80%;
  position: fixed;
  top: 0%;
  left: 0;
  right: 0;
}
nav,
ul {
  width: 100%;
  height: 100%;
  padding: 0 0 0 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
}
ul {
  width: 50%;
  padding: 0;
}
ul > li {
  width: auto;
  height: auto;
  display: inline-block;
}

.Logo {
  display: flex;
  width: auto;
  height: auto;
  justify-content: self-start;
}
a {
  font-weight: bold;
  text-decoration: none;
}
</style>
