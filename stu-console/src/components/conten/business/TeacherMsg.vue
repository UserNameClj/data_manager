<template>
  <div class="teacher-scope">
    <tool-bar></tool-bar>
    <data-bar></data-bar>
  </div>
</template>

<script>
import ToolBar from './ToolBar';
import DataBar from "./DataBar"
export default {
  name: "TeacherMsg",
  data() {
    return {
      msg: "laoshiyemian"
    };
     },
  components: {
    ToolBar,
    DataBar
  }
};
</script>

<style scoped>
.teacher-scope{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.teacher-msg-data{
  flex: 1;
  background: #00dcdd
}
</style>
