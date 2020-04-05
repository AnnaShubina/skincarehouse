<template>
  <div id="app">
    <div class="layout">
      <Header/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header";

  export default {
    name: 'app',
    components: {
      Header
    },
    data() {
      return {}
    },
    mounted() {

    }
  }
</script>
<style lang="sass">
  @import "assets/scss/style.scss"
</style>
