/* v-if="window.location.href === 'http://localhost:8080/AddCard' */

<template>
    <section class="top">
      <header>
        <h1> {{ title }} </h1>
      </header>
      <p> {{ subTitle }} </p>
    </section>
</template>

<script>
export default {
  beforeMount() {
    this.title = this.topPage.title
    this.subTitle = this.topPage.subTitle
    this.topPage.state = true
  },
  data() {
    return {
      title: '',
      subTitle: '',
      topData: [
        {
          name: 'Home',
          title: 'E-wallet',
          subTitle: 'Active Card',
          state: false
        },
        {
          name: 'AddCard',
          title: 'Add New Card',
          subTitle: 'New Card',
          state: false
        }
      ],
    }
  },
  computed: {
    currentPage() {
      return this.$route.name
    },
    topPage() {
      return this.topData.find(element => element.name === this.currentPage)
    }
  },
}
</script>
<style scoped>
  section {
    text-align: center;
  }

  h1 {
    font-family: 'Source Sans Pro';
    font-size: 32px;
    margin: 24px 0;
  }
  
  p {
    font-size: 0.8rem;
    color: rgba(0,0,0,.4);
    font-weight: 600;
    margin: 4px 0;
  }
  h1, p {
    text-transform: uppercase;
  }
</style>