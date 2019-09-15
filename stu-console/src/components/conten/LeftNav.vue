<template>
  <div class="left-nav">
    <el-menu
      router
      :default-active="$route.name || defaultActive"
      class="stu-left-nav"
      :class="currenTheme"
      @select="test('default-active')"
      :text-color="currenColor"
      active-text-color="#ffd04b"
      
    >
      <el-menu-item :index="leftNav.route" v-for="(leftNav , index) in leftNavData" :key="index">
        <i :class="leftNav.icon" class="menu-icon"></i>
        <span slot="title" v-text="leftNav.title"></span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  // <!-- background-color="#545c64"
  //     text-color="#fff" -->
import PubSub from 'pubsub-js'
export default {
  name: "LeftNav",
  data() {
    return {
      leftNavData:[
        {title:'首页',icon:'fa fa-university fa-2x',route:'Home'},
        {title:'本科生',icon:'fa fa-graduation-cap fa-2x',route:'StudentMsg'},
        {title:'研究生',icon:'fa fa-graduation-cap fa-2x',route:'MasterMsg'},
        {title:'毕业生',icon:'fa fa-users fa-2x',route:'WorkerMan'},
        {title:'老师',icon:'fa fa-text-width fa-2x',route:'TeacherMsg'}
        ],
      defaultActive:"Home",
      msg: "这是左菜单",
      currenTheme:'black-theme',
      currenColor:'#fff',
      router: true
    };
  },
  methods: {
    test(m){
      // console.log(this.$route)
    }
  },
  components: {},
  mounted () {
    PubSub.subscribe('CurrenTheme',(msg,i)=>{
      if(i==0){
        this.currenTheme='black-theme';
        this.currenColor='#fff'
      }else{
        this.currenTheme='white-theme';
        this.currenColor='#000000'

      }
    })
  }
};
</script>

<style scoped>
.left-nav {
  width: 240px;
}
.left-nav .stu-left-nav {
  padding-top: 100px;
  height: calc(100% - 91px);
  width: 240px;
  position: fixed;
  left: 0px;
  top: 60px
}
.menu-icon{
  width: 60px;
}
</style>
