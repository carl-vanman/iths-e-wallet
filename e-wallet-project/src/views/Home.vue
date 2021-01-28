/* active status måste läggas till på kortet som skapas  */
<template>
  <div class="home">
    <Top />
    <div 
        @mouseover="hovering" 
        @mouseout="hovering"
        :class="{ hover: isHovering }"
        @click="removeCard()"
        >
      <Card  
        v-bind:card="activeCard"
      />
    </div>
    <CardStack v-bind:cards="cards" />
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

  .hover {
    position: relative;
  }

  .hover::before {
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

  .hover::after {
    content: 'x';
    position: absolute;
    font-size: 24px;
    right: -2px;
    top: -2px;
    color: #fff;
    line-height: 50%;
    cursor: pointer;
  }

</style>