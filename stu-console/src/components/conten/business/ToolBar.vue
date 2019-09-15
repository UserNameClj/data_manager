<template>
  <div class="tool-bar" :class="currenTheme">
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
import PubSub from 'pubsub-js'
export default {
  name: "ToolBar",
  data() {
    return {
      searchMsg: "",
      holderText: "搜索学生姓名或者学号",
      searchBtn: "搜索",
      currenTheme:"black-theme"
    };
  },
  components: {},
  methods: {
    search() {

      var searchValue=this.searchMsg.trim();
      if(searchValue){
        PubSub.publish('SearchValue',searchValue)
      }
      this.searchMsg = "";
      this.$refs.search.focus();
    }
  },
  mounted () {
    this.$refs.search.focus();
    PubSub.subscribe('CurrenTheme',(msg,i)=>{
      if(i==0){
        this.currenTheme='black-theme';
      }else{
        this.currenTheme='white-theme';
      }
    })
  }
};
</script>

<style scoped>
.tool-bar {
  width: 100%;
  height: 80px;
  text-align: center;
  line-height: 80px;
}
.tool-bar .search-scope {
  width: 30%;
  padding: 0px 20px;
}
</style>
