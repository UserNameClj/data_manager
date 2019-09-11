<template>
  <div class="left-nav">
    <el-menu
      router
      :default-active="$route.name || defaultActive"
      class="stu-left-nav"
      @open="handleOpen"
      @close="handleClose"
      @select="test('default-active')"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="Home">
        <i class="el-icon-menu"></i>
        <span slot="title" v-text="homeTitle"></span>
      </el-menu-item>
      <el-menu-item index="UnGraduStu">
        <i class="el-icon-setting"></i>
        <span slot="title" v-text="undergraduateStuden"></span>
      </el-menu-item>
      <el-menu-item index="GraduStu">
        <i class="el-icon-setting"></i>
        <span slot="title" v-text="graduateStuden"></span>
      </el-menu-item>
      <el-menu-item index="WorkerMan">
        <i class="el-icon-setting"></i>
        <span slot="title" v-text="workerMan"></span>
      </el-menu-item>
      <el-menu-item index="Teacher">
        <i class="el-icon-setting"></i>
        <span slot="title" v-text="teacher"></span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "LeftNav",
  data() {
    return {
      defaultActive:"Home",
      homeTitle: "首页",
      undergraduateStuden: "本科生",
      graduateStuden: "研究生",
      workerMan: "毕业生",
      teacher: "老师",
      msg: "这是左菜单",
      router: true
    };
  },
  methods: {
    handleOpen() {
      console.log(111);
    },
    handleClose() {
      console.log(222);
    },
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
}
</style>
