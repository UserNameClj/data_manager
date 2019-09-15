<template>
  <div class="footer" :class="currenTheme">
    <div class="copy-right">{{COPY_RIGHT}}</div>
  </div>
</template>

<script>
import Pubsub from "pubsub-js";
import axios from "axios";
export default {
  name: "StuFooter",
  data() {
    return {
      COPY_RIGHT: "Copyright © 2011-2019 langjiang. 当前呈现版本 1.0.0",
      currenTheme: "black-theme",
      mag: "这是脚部组件"
    };
  },
  components: {},
  mounted() {
    PubSub.subscribe("CurrenTheme", (msg, i) => {
      if (i == 0) {
        this.currenTheme = "black-theme";
      } else {
        this.currenTheme = "white-theme";
      }
    });
    axios.get('/class/message').then(response=>{
      // console.log(response,1)

    },error=>{
      console.log(error,2)
    })
  }
};
</script>

<style scoped>
.footer {
  border-top: 1px solid #dddddd;
  line-height: 30px;
  z-index: 10001
}
.copy-right {
  text-align: center;
}
</style>
