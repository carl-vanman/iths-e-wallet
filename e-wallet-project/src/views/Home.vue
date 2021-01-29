/* active status måste läggas till på kortet som skapas  */
<template>
  <div class="home">
    <header>
      <Top />
    </header>
    <main>
      <div 
          @mouseover="hovering" 
          @mouseout="hovering"
          >
          <div
          :class="{ delBtn: isHovering }"
          @click="removeCard()">
          </div>
        <Card  
          v-bind:card="activeCard"
        />
      </div>
      <CardStack v-bind:cards="cards" />
    </main>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardStack from '../components/CardStack.vue'

export default {
  name: 'Home',

  components: {
    Top, Card,
    CardStack
  },
  data() {return {
    isHovering: false
  }},
  computed: {
    cards() {
      return this.$root.cards
    },
    activeCard() {
      return this.cards.find(card => card.active === true); 
    },
  },
  methods: {
    hovering() {
      this.isHovering = !this.isHovering
    },
    removeCard() {
      this.$root.setRemoveCard()
    }
  }
}
</script>
<style scoped>
/* Delete btn */
  .delBtn {
    position: relative;
  }

  .delBtn::before {
    content: '';
    position: absolute;
    background-color: #000;
    opacity: 0.8;
    width: 32px;
    height: 32px;
    right: -10px;
    top: -10px;
    border-radius: 100%;
    cursor: pointer;
  }

  .delBtn::after {
    content: 'x';
    position: absolute;
    font-size: 24px;
    right: -1.75px;
    top: -1.5px;
    color: #fff;
    line-height: 50%;
    cursor: pointer;
  }
</style>