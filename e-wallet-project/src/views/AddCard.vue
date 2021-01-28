<template>
  <div>
    <header>
      <Top />
    </header>
    <main>
      <Card v-bind:card="card" />
      <CardForm 
        v-bind:card="card"
        v-on:addCard="pushCard()"
        />
    </main>
  </div>
</template>

<script>

import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardForm from '@/components/CardForm.vue'

export default {

  components: {
    Top,
    Card,
    CardForm
  },
  data() {
    return {
      card: {
        holder: "",
        vendor: "",
        number: "",
        validMonth: "",
        validYear: "",
      }
  }},
  computed: {
    newCard() {
      return {
          id: Date.now(),
          holder: this.card.holder,
          vendor: this.card.vendor,
          number: this.card.number,
          validMonth: this.card.validMonth,
          validYear: this.card.validYear,
          active: false
      }
    },
  },
  methods: {
    pushCard() {
      this.$root.setAddCard(this.newCard)
    },
  },
}
</script>

<style>
</style>