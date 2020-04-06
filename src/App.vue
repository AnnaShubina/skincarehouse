<template>
  <div id="app">
    <div class="layout">
      <Header/>
      <router-view></router-view>
      <Footer/>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import { disableOutline} from "./components/mixins/disableOutline";
  import Footer from "./components/Footer";

  export default {
    name: 'app',
    mixins: [disableOutline],
    components: {
      Footer,
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
