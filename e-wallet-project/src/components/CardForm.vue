<template>
  <div>
      <form>
        <label for="card-number">
            Card Number
        </label>
        <br>
        <input 
            type="text" 
            name="card-number" 
            placeholder="XXXX XXXX XXXX XXXX"
            maxlength="16"
            v-model="card.number"
        >
        <button @click.prevent="hlick">Add Card</button>
    </form>
  </div>
</template>

<script>
export default {
    props: {
        card: Object
    },
    methods: {
        hlick() {
            this.$emit('hlick')
            this.$router.push('/')
        }
    }

}
</script>

<style>

</style>