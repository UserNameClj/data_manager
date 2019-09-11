<template>
  <div class="header"></div>
</template>

<script>
export default {
  name: "StuHeader",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 60px;
  width: 100%;
  background-color: #ff0000;
}
</style>
