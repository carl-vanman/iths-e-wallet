<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/AddCard">addCard</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

* {
  box-sizing: border-box;
  font-family: PT Mono,monospace;
}

#app {
  width: 24rem;
  height: 100vh;
  margin: 0 auto;
  padding: 1rem;
}
</style>
