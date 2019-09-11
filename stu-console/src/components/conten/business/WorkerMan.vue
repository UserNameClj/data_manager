<template>
  <div class="work-man-scope">
    <ToolBar></ToolBar>
    <div class="data-scope"></div>
  </div>
</template>

<script>
import ToolBar from './ToolBar'
export default {
  name: "WorkerMan",
  data() {
    return {
      roles:'毕业生'
    };
     },
  components: {
    ToolBar
  }
};
</script>

<style scoped>
.work-man-scope{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.tool-bar{
  width: 100%;
  height: 80px;
  background-color: pink;
}
.data-scope{
  width: 100%;
  flex: 1;
  background: gray;
}
</style>
