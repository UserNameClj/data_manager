<template>
  <div class="data-scope" :class="currenThemeClass">
    <el-cascader
      class="class-select"
      v-model="className"
      :options="classItem"
      :props="{ expandTrigger: 'hover' }"
      @change="handleChange"
     
    ></el-cascader>
    <el-table :data="tableData" border style="width: 95%"
     :row-style="currenTheme"
     :cell-mouse-enter = "enterCell"
     :header-cell-style="currenTheme">
      <el-table-column prop="id" label="ID" width=""></el-table-column>
      <el-table-column prop="name" label="姓名" width=""></el-table-column>
      <el-table-column prop="date" label="日期" width=""></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
var blackTheme = {
  background: "#545c64",
  color: "#fff",
  height: "30px"
};
export default {
  name: "DataBar",
  data() {
    return {
      className: ["2013", "jisuanji", "class1"],
      classItem: [
        {
          value: "2013",
          label: "2013",
          children: [
            {
              value: "jisuanji",
              label: "计算机",
              children: [
                {
                  value: "class1",
                  label: "一班"
                },
                {
                  value: "class2",
                  label: "二班"
                }
              ]
            }
          ]
        },
        {
          value: "2014",
          label: "2014",
          children: [
            {
              value: "jisuanji",
              label: "计算机",
              children: [
                {
                  value: "class1",
                  label: "一班"
                },
                {
                  value: "class2",
                  label: "二班"
                },
                {
                  value: "class1",
                  label: "三班"
                }
              ]
            }
          ]
        }
      ],
      tableData: [
        {
            id:1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
            id:2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
            id:3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
            id:5,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      currenTheme:blackTheme,
     currenThemeClass:'black-theme'
    };
  },
  components: {},
  methods: {
    handleChange() {
      console.log(222);
    },
    enterCell(row){
        console.log(1,2,3,4)
    }
  }
};
</script>

<style scoped>
.data-scope {
  flex: 1;
  background: #ddf444;
}
.class-select {
  margin: 20px 40px;
  
}

</style>
