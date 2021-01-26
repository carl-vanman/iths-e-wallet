<template>
    <article class="card">
        <header class="col-2">
            <img class="chip" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iODQiIHZpZXdCb3g9IjAgMCA1MCA4NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iNDQiIHdpZHRoPSI1MCIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9IiNFQ0U2REYiLz4KPGxpbmUgeTE9IjU2LjUiIHgyPSIxOCIgeTI9IjU2LjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjExIi8+CjxsaW5lIHgxPSIzMyIgeTE9IjU2LjUiIHgyPSI1MCIgeTI9IjU2LjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjExIi8+CjxsaW5lIHgxPSIzMi41IiB5MT0iNDQiIHgyPSIzMi41IiB5Mj0iODQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjExIi8+CjxsaW5lIHkxPSI3MC41IiB4Mj0iMTgiIHkyPSI3MC41IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMC4xMSIvPgo8bGluZSB4MT0iMzIiIHkxPSI3MC41IiB4Mj0iNTAiIHkyPSI3MC41IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMC4xMSIvPgo8bGluZSB4MT0iMTguNSIgeTE9IjQ0IiB4Mj0iMTguNSIgeTI9Ijg0IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMC4xMSIvPgo8ZyBvcGFjaXR5PSIwLjUiPgo8cGF0aCBkPSJNMzIuODQ4NyAyNi41MDA5QzMzLjUyNjcgMjcuMTY1NyAzMy41MjY3IDI4LjI0NDEgMzIuODQ4NyAyOC45MDk3QzMyLjE2OTggMjkuNTc1MyAzMS4wNjkzIDI5LjU3NTMgMzAuMzkxMyAyOC45MDk3QzI3LjQxNjkgMjUuOTk0MSAyMi41Nzc4IDI1Ljk5NDEgMTkuNjAzOCAyOC45MDk3QzE4LjkyNDkgMjkuNTc1MyAxNy44MjQgMjkuNTc1MyAxNy4xNDYgMjguOTA5N0MxNi44MDY3IDI4LjU3NzEgMTYuNjM3OCAyOC4xNDIzIDE2LjYzNzggMjcuNzA0OUMxNi42Mzc4IDI3LjI2OTIgMTYuODA3MiAyNi44MzMxIDE3LjE0NiAyNi41MDA5QzIxLjQ3NTYgMjIuMjU2NyAyOC41MTkxIDIyLjI1NjcgMzIuODQ4NyAyNi41MDA5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM4LjgxODYgMjEuMDczQzM5LjQ5NjcgMjEuNzM4MSAzOS40OTY3IDIyLjgxNyAzOC44MTg2IDIzLjQ4MjZDMzguMTM5NyAyNC4xNDgyIDM3LjAzOTcgMjQuMTQ4MiAzNi4zNjEyIDIzLjQ4MjZDMzAuMDk1NiAxNy4zMzkgMTkuOTAwNCAxNy4zMzkgMTMuNjM0OCAyMy40ODI2QzEyLjk1NjMgMjQuMTQ4MiAxMS44NTU0IDI0LjE0ODIgMTEuMTc3OCAyMy40ODI2QzEwLjgzODYgMjMuMTUgMTAuNjY4MyAyMi43MTM1IDEwLjY2ODMgMjIuMjc3OEMxMC42NjgzIDIxLjg0MTIgMTAuODM4NiAyMS40MDYgMTEuMTc3OCAyMS4wNzNDMTQuODY5IDE3LjQ1MzggMTkuNzc3MiAxNS40NjA4IDI0Ljk5NzggMTUuNDYwOEMzMC4yMTg0IDE1LjQ2MDggMzUuMTI2NiAxNy40NTM4IDM4LjgxODYgMjEuMDczWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQ0LjI4NjYgMTUuMDIwNEM0NC45NjUgMTUuNjg1NiA0NC45NjUgMTYuNzY0NCA0NC4yODY2IDE3LjQyOTZDNDMuNjA4MSAxOC4wOTQ4IDQyLjUwODEgMTguMDk0OCA0MS44Mjk2IDE3LjQyOTZDMzcuMzMzMiAxMy4wMjE4IDMxLjM1NTQgMTAuNTk0NSAyNC45OTc0IDEwLjU5NDVDMTguNjM5NCAxMC41OTQ1IDEyLjY2MiAxMy4wMjE4IDguMTY2NTEgMTcuNDI5NkM3LjQ4NzE1IDE4LjA5NDggNi4zODcxNSAxOC4wOTQ4IDUuNzA5MTEgMTcuNDI5NkM1LjM2OTg3IDE3LjA5NyA1LjIwMDQ3IDE2LjY2MDkgNS4yMDA0NyAxNi4yMjQ4QzUuMjAwNDcgMTUuNzg5MSA1LjM3MDMxIDE1LjM1MyA1LjcwOTExIDE1LjAyMDRDMTAuODYxMSA5Ljk2OTAxIDE3LjcxMTkgNy4xODc1MiAyNC45OTc0IDcuMTg3NTJDMzIuMjg0MiA3LjE4NzUyIDM5LjEzNDYgOS45NjkwMSA0NC4yODY2IDE1LjAyMDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+Cjwvc3ZnPgo=" alt="chip">
        </header>
        <section class="number col-2" v-if="card.number"> {{ cardNumber }} </section>
        <section class="number col-2" v-else></section>
        <section class="info col-2">
            <aside class="holder">
                <span>Cardholder name</span>
                <p> {{ card.holder }} </p>
            </aside>
            <aside class="valid">
                <span>Valid until</span>
                <p v-if="card.validMonth || card.validDay">{{card.validMonth}}/{{card.validDay}}</p>
                <p v-else> MM/YY</p>
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
header {
    grid-row: auto / span 2;
    display: flex;
}
.card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 2.8rem;
    gap: 0.5rem 0;
    background: linear-gradient(237.75deg,hsla(0,0%,100%,.24),hsla(0,0%,100%,0)),#d0d0d0;
    max-width: 24rem;
    height: 14rem;
    border-radius: .6rem;
    padding: 1rem;
    box-shadow: 0 0 0.5rem rgba(0,0,0,.4);
    text-shadow: -1px -1px 2px hsla(0,0%,100%,.4);
}

.number {
    font-size: 1.6rem;
    margin: 8px 0 0 0;
    color: #222;
}

.chip {align-self: flex-end;}

.info {
    display: flex;
    justify-content: space-between;
}

span {
    display: block;
    text-transform: uppercase;
    font-size: .7rem;
    margin: 0 0 .25rem;
}

p {
    text-transform: uppercase;
    margin: 0;
    padding: 0;
}

.valid {
    text-align: end;
}

.col-2 {
    grid-column: auto / span 2;
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