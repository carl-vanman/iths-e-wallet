<template>
    <div class="card-stack">
        <section>
            <ul>
                <li class="stack" v-for="card in cards" :key="card.id" @click="message(card.id)">
                    <Card v-bind:card="card" />
                </li>
            </ul>
        </section>
        <button 
            class="cta"
            @click.prevent="toCardForm"
        >
        Add Card
        </button>
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
        },
        toCardForm() {
            this.$router.push('AddCard')
        },
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
    }
    /* ul, li {
        margin:0px;
    } */
    .stack {
        position: relative;
        width: 100%;
        margin-top: -10rem;
        cursor: pointer;
    }

    li:first-child {
        margin-top: 32px;
    }
</style>