<template>
  <div class="work-man-scope">
    <ToolBar></ToolBar>
    <data-bar></data-bar>
  </div>
</template>

<script>
import ToolBar from './ToolBar';
import DataBar from "./DataBar"
export default {
  name: "WorkerMan",
  data() {
    return {
      roles:'毕业生'
    };
     },
  components: {
    ToolBar,
    DataBar
  }
};
</script>

<style scoped>
.work-man-scope{
  display: flex;
  flex-direction: column;
  height: 100%;
}

.work-man-data-scope{
  width: 100%;
  flex: 1;
  background: gray;
}
</style>
