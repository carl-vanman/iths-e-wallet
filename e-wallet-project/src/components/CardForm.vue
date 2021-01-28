<template>
<section>
    <form class="card-form">
        <div class="card-number col-2">
            <label for="card-number">
                Card Number
            </label>
            <input 
                type="text" 
                name="card-number" 
                placeholder="XXXX XXXX XXXX XXXX"
                maxlength="16"
                v-model="card.number"
            >
        </div>
        <div class="card-holder col-2">
            <label for="card-holder">
                Card holder
            </label>
            <input 
                type="text"
                name="card-holder"
                placeholder="Firstname Lastname"
                v-model="card.holder"
            >
        </div>
        <div class="form-month">
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
        </div>
        <div class="form-year">
            <label for="year">Year</label>
            <select
                name="year"
                v-model="card.validYear"
            >
                <option value=""></option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
            </select>
        </div>
        <div class="form-vendor col-2">
            <label for="vendor">Vendor</label>
            <select
                name="vendor"
                v-model="card.vendor"
            >
                <option value=""></option>
                <option value="bitcoin">Bitcoin Inc</option>
                <option value="blockchain">Blockchain Inc</option>
                <option value="evil">Evil Corp</option>
                <option value="ninja">Ninja Bank</option>
            </select>
        </div>
    </form>
    <button class="cta" @click.prevent="addCard">Add New Card</button>
</section>
</template>

<script>
export default {
    props: {
        card: Object
    },
    methods: {
        addCard() {
            this.$emit('addCard')
            this.$router.push('/')
        }
    },
}
</script>

<style scoped>
.card-form {
    margin: 2rem 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 1rem;
}

.form-month {
    grid-column-start: 1;
}

input, select {
    border: 1px solid #000;
    border-radius: .25rem;
    padding: .5rem;
    height: 2.6rem;
    margin: 0 0 .8rem;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    width: 100%;
}

label {
    text-transform: uppercase;
    font-size: .7rem;
    margin: 0 0.25rem;
}

</style>
