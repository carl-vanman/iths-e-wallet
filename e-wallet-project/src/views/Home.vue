/* active status måste läggas till på kortet som skapas  */



<template>
  <div class="home">
    <Top />
    <Card v-bind:card="activeCard"/>
    <br>
    <br>
    <br>
    <br>
    <CardStack v-bind:cards="cards" />
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardStack from '../components/CardStack.vue'

export default {
  name: 'Home',

  components: {
    Top, Card,
    CardStack
  },
  data() {return {
  }},
  computed: {
    cards() {
      return this.$root.cards
    },
    activeCard() {
      return this.cards.find(card => card.active === true); 
    },
  }
}
</script>
