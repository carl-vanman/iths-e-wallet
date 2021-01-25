<template>
  <div>
          <!-- <p v-if="card.active"> {{card.holder}}{{cardNumber}}</p> -->
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
.active-card{
    font-size: 100px;
}
</style>