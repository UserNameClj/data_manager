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
      style="width: 95%"
      border
      cell-class-name="table-scope"
      :row-style="currenTheme"
      :header-cell-style="currenTheme"
      max-height="270"
      size="mini"
    >
      <el-table-column label="学号">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.studentId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="民族">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.nation}}</span>
        </template>
      </el-table-column>
      <el-table-column label="出生日期">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.bornTime}}</span>
        </template>
      </el-table-column>
      <el-table-column label="贯籍">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.hometown}}</span>
        </template>
      </el-table-column>
      <el-table-column label="QQ">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.QQ}}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.status | filterStudenState}}</span>
        </template>
      </el-table-column>
      <el-table-column label="照片">
        <template slot-scope="scope">
          <a :href="scope.row.photo"  target="_Blank">{{photo}}</a>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="eidtStudenMsg(scope.$index, scope.row)">{{eidt}}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="page-view">
      <el-pagination
        background
        :page-sizes="[10,20,30]"
        :total="total"
        @current-change="changePage()"
        layout="total,prev, pager, next,sizes"
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
  height: "18px"
};
var whiteTheme = {
  background: "#fffffd",
  color: "#000000",
  height: "18px"
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
      tableData: [],
      currenThemeClass: "black-theme",
      photo:'相片',
      eidt:'编辑',
      total:0,
      currenTheme: blackTheme
    };
  },
  filters:{
    filterStudenState(value){
      if(value==='normal'){
        return '正常'
      }else if(value ==='suspension'){
        return '休学'
      }else if(value ==='expulsion'){
        return '退学'
      }
      return ''
    }
  },
  methods: {
    eidtStudenMsg(i, data) {
      console.log(i, data);
    },
    changePage(p){
      this.getClassMsg()
    },
    getShoolMsg() {
      Axios.get("/school/message").then(
        res => {
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
                    classId: sub.classId
                  });
                }
              });
            });
          }
          this.classItem = classList;
        },
        error => {
          return 0;
        }
      );
    },
    getClassMsg() {
      Axios.get("/class/message").then(
        res => {
          var data = res.data;
          if (data.code == 0) {
            this.total = data.total
            this.tableData = data.data;
          } else {
            return 0;
          }
        },
        error => {
          console.log(error, "000");
        }
      );
    },
    handleChange() {
      this.getClassMsg()
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
    PubSub.subscribe('SearchValue',(even,data)=>{
      this.getClassMsg()
    })
    this.getShoolMsg();
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
.el-pagination.is-background .el-pagination__total{
  color: #000000
}
</style>
