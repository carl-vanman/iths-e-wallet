/* v-if="window.location.href === 'http://localhost:8080/AddCard' */

<template>
  <div class="card">
    <div>
      <h1> {{ title }} </h1>
      <p> {{ subTitle }} </p>
    </div>
  </div>
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
<style>
</style>