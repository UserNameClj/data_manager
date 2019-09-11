<template>
  <div class="conten">
    <LeftNav></LeftNav>
    <StuData></StuData>
  </div>
</template>

<script>
import LeftNav from "./LeftNav.vue";
import StuData from "./StuData.vue";
export default {
  name: "StuConten",
  data() {
    return {
      mag: "这是内容栏"
    };
  },
  components: {
    LeftNav,
    StuData
  }
};
</script>

<style scoped>
.conten {
  height: calc(100vh - 105px);
  width: 100vw;
  display: flex;
}
</style>
