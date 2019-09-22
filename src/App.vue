<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import Home from './pages/home/Home'
  import City from './pages/city/City'

export default {
}

</script>
