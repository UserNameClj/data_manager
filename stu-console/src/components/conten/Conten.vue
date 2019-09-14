<template>
  <div class="conten" :class="currenTheme">
    <LeftNav></LeftNav>
    <StuData></StuData>
    
  </div>
</template>

<script>
import LeftNav from "./LeftNav.vue";
import StuData from "./StuData.vue";
import PubSub from "pubsub-js"
export default {
  name: "StuConten",
  data() {
    return {
      mag: "这是内容栏",
      currenTheme:'black-theme'
    };
  },
  components: {
    LeftNav,
    StuData
  },
  methods: {
    
  },
  mounted () {
    PubSub.subscribe("CurrenTheme",(msg,i)=>{
      if(i==0){
        this.currenTheme = 'black-theme';
      }
      else{
        this.currenTheme = 'white-theme'
      }
    })
  }
};
</script>

<style scoped>
.conten {
  height: calc(100vh - 107px);
  width: 100vw;
  overflow: auto;
  display: flex;
}
</style>
