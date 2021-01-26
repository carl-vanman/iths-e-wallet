<template>
<section>
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
        <br>
        <label for="card-holder">
            Card holder
        </label>
        <br>
        <input 
            type="text"
            name="card-holder"
            placeholder="Firstname Lastname"
            v-model="card.holder"
        >
        <br>
        <label for="month">Month</label>
        <select
            name="month"
            v-model="card.validMonth"
        >
            <option value=""></option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>
        <label for="year">Year</label>
        <select
            name="year"
            v-model="card.validDay"
        >
            <option value=""></option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
        </select>
    </form>
    <button @click.prevent="hlick">Add Card</button>
</section>
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