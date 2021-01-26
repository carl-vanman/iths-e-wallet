<template>
  <div>
        <ul>
            <li v-for="card in cards" :key="card.id" @click="message(card.id)">
                <Card v-bind:card="card" />
            </li>
        </ul>
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
    },
    methods: {
        message(clickedCardId) {
            this.$root.setCardToActive(clickedCardId)
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
        
        /* To stack Cards */
        margin: 2rem 0 12rem;
        display: grid;
        grid-auto-rows: 4rem;
    }
    ul, li {
        margin:0px;
    }
</style>