<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
html {
  font-family: sans-serif, Arial, Helvetica;
  font-size: 16px;
  word-spacing: 1px;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  /* -webkit-text-size-adjust: 100%; */
  /* -ms-text-size-adjust: 100%; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  border: 0;
}
.title {
  display: block;
  font-weight: 300;
  font-size: 30px;
}

.subtitle {
  font-weight: 300;
  font-size: 22px;
}

/* esqueletos */
Create_loguin {
  padding: 0 1%;
  border: 2px solid;
}
</style>
