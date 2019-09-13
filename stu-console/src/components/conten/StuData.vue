<template>
  <div class="stu-data">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: "StuData",
  data() {
    return {
      msg: "这是内容栏"
    };
  },
  components: {}
};
</script>

<style scoped>
.stu-data {
  flex: 1;
  height: 100%;
  background-color: #33d48f;
}
</style>
