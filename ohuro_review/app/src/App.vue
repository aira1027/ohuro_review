<template>
  <div id="app">
    <navbar/>
    <!--router-viewは使ってない?デフォルトで存在していたので一応残す-->
    <router-view/>
    <reviewform/>
    <!--<reviewdetails/>-->
  </div>
</template>

<script>
import navbar from "@/components/Navbar"
import Reviewform from '@/components/Reviewform.vue'
// import reviewdetails from '@/components/Reviewdetails.vue'

export default {
  components: {
    navbar,
    Reviewform
    // reviewdetails
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
