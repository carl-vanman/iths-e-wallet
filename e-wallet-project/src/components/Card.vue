<template>
    <article class="card" v-bind:class="card.vendor">
        <header class="col-2 row-2">
                <img class="chip" v-if="card.vendor === 'bitcoin'" src="@/assets/chip-dark.svg" alt="">
                <img class="chip" v-else src="@/assets/chip-light.svg" alt="">
                <div>
                    <img v-if="card.vendor === 'bitcoin'" src="@/assets/vendor-bitcoin.svg" alt="">
                    <img v-else-if="card.vendor === 'blockchain'" src="@/assets/vendor-blockchain.svg" alt="">
                    <img v-else-if="card.vendor === 'evil'" src="@/assets/vendor-evil.svg" alt="">
                    <img v-else-if="card.vendor === 'ninja'" src="@/assets/vendor-ninja.svg" alt="">
                </div>
        </header>
        <section class="number col-2" v-if="card.number"> {{ cardNumber }} </section>
        <section class="number col-2" v-else></section>
        <section class="info col-2">
            <aside class="holder">
                <span>Cardholder name</span>
                <p class="output-text"> {{ card.holder }} </p>
            </aside>
            <aside class="valid">
                <span>Valid until</span>
                <p class="output-text" v-if="card.validMonth || card.validDay">{{card.validMonth}}/{{card.validYear}}</p>
                <p class="output-text" v-else> MM/YY</p>
            </aside>
        </section>
    </article>
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

<style scoped>
* {
    box-sizing: border-box;
}

.card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 2.8rem;
    gap: 0.5rem 0;
    width: 100%;
    height: 224px;
    padding: 1rem;
    border-radius: 0.6rem;
    background: linear-gradient(237.75deg,hsla(0,0%,100%,.24),hsla(0,0%,100%,0)),#d0d0d0;
    box-shadow: 0 0 0.5rem rgba(0,0,0,.4);
    text-shadow: -1px -1px 2px hsla(0,0%,100%,.4);
}

header {
    display: flex;
    justify-content: space-between;
}

.number {
    font-size: 1.6rem;
    margin: 8px 0 0;
    color: #fff;
}

.chip {
    align-self: flex-end;
}

.info {
    display: flex;
    justify-content: space-between;
}

span {
    display: block;
    text-transform: uppercase;
    font-size: 0.7rem;
    margin: 0 0 0.25rem;
}

.output-text {
    text-transform: uppercase;
    margin: 0;
    padding: 0;
}

.valid {
    text-align: end;
}

.evil {
    background: linear-gradient(248.3deg,rgba(0,0,0,.16),transparent),#f33355;
    color: #fff;
}
.blockchain {
    background: linear-gradient(248.52deg,rgba(0,0,0,.15) 1.49%,transparent),#8b58f9;
    color: #fff;
}
.bitcoin {
    background: linear-gradient(.689turn,hsla(0,0%,100%,.15),hsla(0,0%,100%,0) 99.07%),#ffae34;
    color: #222;
}
.ninja {
    background: linear-gradient(248.3deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0)),#222;
    color: #fff;
}

</style>