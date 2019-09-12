<template>
  <div class="left-nav">
    <el-menu
      router
      :default-active="$route.name || defaultActive"
      class="stu-left-nav"
      @select="test('default-active')"
      background-color="#545c64"
      text-color="#fff"
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
      router: true
    };
  },
  methods: {
    test(m){
      console.log(this.$route)
    }
  },
  components: {}
};
</script>

<style scoped>
.left-nav {
  width: 240px;
  height: 100%;
  background-color: #ff00ff;
}
.left-nav .stu-left-nav {
  height: 100%;
  padding-top: 100px;
}
.menu-icon{
  width: 60px;
}
</style>
