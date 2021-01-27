<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/AddCard">addCard</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

* {
  box-sizing: border-box;
  font-family: PT Mono,monospace;
}

body {
  margin: 0;
}

#app {
  width: 24rem;
  height: 100vh;
  margin: 0 auto;
  padding: 1rem;
}

.col-2 {
  grid-column: auto / span 2;
}

.row-2 {
    grid-row: auto / span 2;
}

.cta {
    display: grid;
    place-items: center;
    height: 4rem;
    width: 100%;
    margin: 2rem 0;
    border: .125rem solid #000;
    border-radius: .5rem;
    background-color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
}

.cta:hover {
    background-color: #000;
    color: #fff;
}

</style>
