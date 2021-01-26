import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      cards: [
        {
          id: "432984728397",
          holder: "The name",
          vendor: "bitcoin",
          number: "XXXX23323ZZFFFF8",
          validMonth: "12",
          validDay: "5",
          active: false
        },
        {
          id: "432984728392",
          holder: "The name",
          vendor: "bitcoin",
          number: "4345435FFFF",
          validMonth: "12",
          validDay: "5",
          active: true
        },
        {
          id: "432984728393",
          holder: "The name",
          vendor: "bitcoin",
          number: "Carl Vänman",
          validMonth: "12",
          validDay: "5",
          active: false
        }
      ],
  }},
  methods: {
    setAddCard(data) {
      this.cards.push(data)
    },
    setCardToActive(id) {
      let hejsan = this.cards.find(card => card.active === true);
      let hejsan2 = this.cards.find(card => card.id === id);
      hejsan.active = false
      hejsan2.active = true
    },
  },
  router,
  render: h => h(App)
}).$mount('#app')

