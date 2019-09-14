<template>
  <div class="data-scope" :class="currenThemeClass">
    <el-cascader
      class="class-select"
      v-model="className"
      :options="classItem"
      :props="{ expandTrigger: 'hover' }"
      @change="handleChange"
    ></el-cascader>
    <el-table
      :data="tableData"
      border
      style="width: 95%"
      cell-class-name="table-scope"
      :row-style="currenTheme"
      :header-cell-style="currenTheme"
    >
      <el-table-column prop="id" label="ID" width></el-table-column>
      <el-table-column prop="name" label="姓名" width></el-table-column>
      <el-table-column prop="date" label="日期" width></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <div class="page-view">
      <el-pagination
        background
        :page-sizes="[10,20,30]"
        layout="total,prev, pager, next,sizes"
        :total="50"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
import Axios from "axios";
var blackTheme = {
  background: "#545c64",
  color: "#000000",
  height: "30px"
};
var whiteTheme = {
  background: "#fffffd",
  color: "#000000",
  height: "30px"
};
var addClassMsg = (arr, data) => {
  arr.push({
    value: data,
    label: data,
    children: []
  });
};

export default {
  name: "DataBar",
  data() {
    return {
      className: [],
      classItem: [],
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      currenThemeClass: "black-theme",
      currenTheme: blackTheme
    };
  },
  components: {},
  methods: {
    getClassMsg() {
      Axios.get("/class/massage").then(res => {
        var data = res.data;
        if (data.code == 0) {
          var classList = [];
          data.data.map((x, i) => {
            addClassMsg(classList, x.session);
            x.subject.map((sub, j) => {
              addClassMsg(classList[i].children, sub.name);
              for (let k = 0; k < sub.classNum; k++) {
                classList[i].children[j].children.push({
                  value: "class" + (k - 0 + 1),
                  label: k - 0 + 1 + "班",
                  classId:sub.id
                });i9
              }
            });
          });
        }
        this.classItem = classList;
      });
    },
    handleChange() {
      console.log(222);
    }
  },
  mounted() {
    PubSub.subscribe("CurrenTheme", (msg, i) => {
      if (i == 0) {
        this.currenThemeClass = "black-theme";
        this.currenTheme = blackTheme;
      } else {
        this.currenThemeClass = "white-theme";
        this.currenTheme = whiteTheme;
      }
    });
    this.getClassMsg();
  }
};
</script>

<style scoped>
.data-scope {
  flex: 1;
  padding-bottom: 60px;
}
.class-select {
  margin: 20px 40px;
}
.page-view {
  margin: 20px 40px;
}
</style>
