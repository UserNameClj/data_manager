<template>
  <div class="header" :class="acitveTheme">
    <div class="float-left log-name" v-text="SYSTEM_NAME">
    </div>
    <div class=" admin-scope" @mouseover="_mouseOnAdmin()" @mouseleave="_mouseLeaveAdmin()">
      <div name="admin" class="admin">
        <span>{{userBox}}</span>
        <span>{{user}}</span>
        <div class="change-theme-scope" v-if="isHideLogout" v-for="(theme,index) in themes" :key="index">
          <span :class="{'curren-theme':index==currenIndex}" @click="_choseTheme(index)">{{theme}}</span>
        </div>
        <div class="logout-scope" v-if="isHideLogout" >
          <span>{{logoOut}}</span>
        </div>
      </div>
    </div>
    <div class="float-clear"></div>
  </div>
</template>

<script>
import Pubsub from 'pubsub-js';
export default {
  name: "StuHeader",
  data(){
    return {
         "SYSTEM_NAME":"School Management System",
         userBox:'用户：',
         user:'Admin',
         logoOut:'退出登录',
         isHideLogout:false,
         themes:['主题：黑夜','主题：白天'],
         currenIndex:'0',
         acitveTheme:'black-theme'
    }
  },
  props: {
    msg: String
  },
  methods: {
    _mouseOnAdmin(){
      this.isHideLogout=true;
    },
    _mouseLeaveAdmin(){
      this.isHideLogout=false;
    },
    _choseTheme(i){
      this.currenIndex = i;
      if(i==0){
        this.acitveTheme='black-theme' 
      }else{
        this.acitveTheme='white-theme'
      }
     Pubsub.publish('CurrenTheme',this.currenIndex)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 60px;
  line-height: 60px;
  width: 100%;
  border-bottom: #dddddd solid 1px
}
.log-name{
  min-width: 140px;
  height: 60px;
  padding: 0px 30px;
  font-size: 28px;
  font-family:Arial, Helvetica, sans-serif;
}
.admin-scope{
  min-width: 140px;
  max-width: 160px;
  min-height: 60px;
  padding: 0px 30px;
  margin: 0px 30px;
  position: absolute;
  right: 30px;
  z-index: 9999;
}
.curren-theme{
  color: #989322
}
.logout-scope,.change-theme-scope{
  cursor: pointer;
}
.admin-scope span{
  display: inline-flex;
  height: 60px;
}
.admin-scope:hover{
  background: #cccccc;
}
</style>
