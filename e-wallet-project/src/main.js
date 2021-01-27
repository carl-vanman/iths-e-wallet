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
          holder: "Nils Holmenberg",
          vendor: "blockchain",
          number: "2222233233388768",
          validMonth: "12",
          validYear: "05",
          active: false
        },
        {
          id: "432984728392",
          holder: "Petter Svenson",
          vendor: "bitcoin",
          number: "1232434565475487",
          validMonth: "12",
          validYear: "05",
          active: false
        },
        {
          id: "432984728393",
          holder: "Eric Ericsson",
          vendor: "ninja",
          number: "5846096837542854",
          validMonth: "12",
          validYear: "05",
          active: false
        },
        {
          id: "432984728394",
          holder: "Rickard Wallin",
          vendor: "evil",
          number: "3454675864356785",
          validMonth: "12",
          validYear: "05",
          active: true
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

