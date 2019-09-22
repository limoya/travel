<template>
  <div class="">
    <home-header ></home-header>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapState} from "vuex"
  import HomeHeader from './components/HomeHeader'
  // import HomeIcons from "./components/Icons"


  export default {
    name: "Home",
    components: {HomeHeader},
    data(){
      return {
        lastCity: ''
      }
    },
    comments: {
      HomeHeader
    }
  }
</script>

<style scoped>

</style>
