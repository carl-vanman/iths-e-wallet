<template>
  <div>
      <Card v-bind:card="card" v-for="card in cards" :key="card.id" />
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
    components: { 
        Card
    },
    props: {
        cards: Array
    }
}
</script>

<style>

</style>