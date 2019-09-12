<template>
  <div class="tool-bar" :class="currenThemeClass">
    <el-row class="search-btn">
      <el-input
        v-model="searchMsg"
        class="search-scope"
        :placeholder="holderText"
        autocomplete
        ref="search"
      ></el-input>
      <el-button round @click.stop="search()" @keyup.enter="search()">{{searchBtn}}</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ToolBar",
  data() {
    return {
      searchMsg: "",
      holderText: "搜索学生姓名或者学号",
      searchBtn: "搜索",
      currenThemeClass:"black-theme"
    };
  },
  components: {},
  methods: {
    search() {
      console.log(this.searchMsg.trim());
      this.searchMsg = "";
      this.$refs.search.focus();
    }
  },
  mounted () {
    this.$refs.search.focus();
  }
};
</script>

<style scoped>
.tool-bar {
  width: 100%;
  height: 80px;
  background-color: pink;
  text-align: center;
  line-height: 80px;
}
.tool-bar .search-scope {
  width: 30%;
  padding: 0px 20px;
}
</style>
