<template>
  <div class="master-scope">
    <tool-bar></tool-bar>
    <data-bar></data-bar>
  </div>
</template>

<script>
import ToolBar from "./ToolBar";
import DataBar from "./DataBar"
export default {
  name: "MasterMsg",
  data() {
    return {
      msg: "硕士生"
    };
  },
  components: {
    ToolBar,
    DataBar
  }
};
</script>

<style scoped>
.master-scope {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.master-msg-data {
  flex: 1;
  background-color: #0ddff5;
}
</style>
