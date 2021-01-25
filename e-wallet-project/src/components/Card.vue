<template>
  <div>
        <p v-if="card.number"> {{ cardNumber }} </p>
  </div>
</template>

<script>
export default {
    props: {
        card: Object
    },
    computed: {
        cardNumber(){
        return this.card.number.match(/.{1,4}/g).join(' ')
    },
    },
}
</script>

<style>

</style>