<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: 'TT Norms Pro';
  src: url('../src/assets/font/TTNormsPro-Regular.woff2') format('woff2'),
       url('../src/assets/font/TTNormsPro-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'TT Norms Pro';
  src: url('../src/assets/font/TTNormsPro-Bold.woff2') format('woff2'),
       url('../src/assets/font/TTNormsPro-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

body {
  margin: 0;
  font-family: 'TT Norms Pro', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Анимация плавного перехода */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Глобальные стили */
p {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

h1,
h2,
h3 {
  margin: 0;
}

.flex {
  display: flex;
}

.list-reset {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
