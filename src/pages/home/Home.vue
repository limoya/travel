<template>
  <div class="">
    <home-header ></home-header>
    <home-swiper :list="swiperList"></home-swiper>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import HomeHeader from './components/HomeHeader'
  import HomeSwiper from "./components/Swiper"
  // import HomeIcons from "./components/Icons"

  import $ajax from '@/assets/ajax.js'

  export default {
    name: "Home",
    components: {HomeHeader,HomeSwiper},
    data(){
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
        lastCity: ''
      }
    },
    computed:{
      ...mapState(["city"])
    },
    methods: {
      getHomeInfo(){
        $ajax.get("/api/index.json?city" + this.city).then(this.getHomeInfoSucc).catch(this.getHomeInfoSucc);
      },
      getHomeInfoSucc (res) {
        res = res.data;
        if(res && res.ret && res.data){
          const data = res.data;
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
        if(!this.swiperList || this.swiperList.length == 0){
          this.swiperList.push({
            id: '1',
            imgUrl: 'src/assets/logo.png'
          },{
            id: '2',
            imgUrl: 'src/assets/logo.png'
          },{
            id: '3',
            imgUrl: 'src/assets/logo.png'
          })
        }
      }
    },
    mounted(){
      //获取所有数据
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    width :100%
    height :0
    overflow :hidden
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
