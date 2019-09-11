<template>
  <div class="footer">
    {{ mag }}
  </div>
</template>

<script>
export default {
  name: "StuFooter",
  data() {
    return {
      mag: "这是脚部组件"
    };
  },
  components: {}
};
</script>

<style scoped>
.footer {
  height: 45px;
  width: 100vw;
  background-color: #ddf000;
}
</style>
