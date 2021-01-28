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
      let currentActive = this.cards.find(card => card.active === true);
      let toBeActive = this.cards.find(card => card.id === id);
      currentActive.active = false
      toBeActive.active = true
    },
    setRemoveCard() {
      if(this.cards.length === 1) {
        alert("Sorry, but you need to have at least one Card")
      } else {
      let pos = this.cards.map(function(e) { return e.active; }).indexOf(true);
      this.cards.splice(pos, 1)
      this.cards[0].active = true
      }
    },
  },
  router,
  render: h => h(App)
}).$mount('#app')

