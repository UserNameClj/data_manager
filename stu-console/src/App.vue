<template>
  <div id="app">
    <StuHeader></StuHeader>
    <StuConten></StuConten>
    <StuFooter></StuFooter>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
  </div>
</template>
<script>

// import HelloWorld from "@/components/HelloWorld.vue";
import StuHeader from "@/components/header/Header.vue";
import StuConten from "@/components/conten/Conten.vue";
import StuFooter from "@/components/footer/StuFooter.vue";
export default {
  data() {
    return {
      mag: "hello vue"
    };
  },
  components: {
    // HelloWorld,
    StuHeader,
    StuConten,
    StuFooter
  }
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.black-theme {
  background-color: #545c64 !important;
  color: #fff !important;
}
@import './style/font-awesome-4.7.0/css/font-awesome.css'

</style>
