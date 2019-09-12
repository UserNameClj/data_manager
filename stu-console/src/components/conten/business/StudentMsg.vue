<template>
  <div class="student-scope">
    <tool-bar></tool-bar>
    <data-bar></data-bar>
  </div>
</template>

<script>
import ToolBar from "./ToolBar";
import DataBar from "./DataBar"
export default {
  name: "StudentMsg",
  data() {
    return {
      msg: "在校生",
 
    };
  },
  components: {
    ToolBar,
    DataBar
  },
  methods: {

  }
};
</script>

<style scoped>
.student-scope {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.student-msg-data {
  flex: 1;
  background: #ddf444;
}
</style>
