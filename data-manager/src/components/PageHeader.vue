<template>
    <div class="header">
        <div class="logo float-left">
            {{logoName}}
        </div>
        <div class="float-right user-box" :class="{active:isHideLogou}" @mouseenter="mouseInUser()" @mouseleave="mouseOutUser()">
            <div class="user">{{user}}</div>
            <div class="user-name">{{userName}}</div>
            <div class="logout" v-if="isHideLogou">{{logout}}</div>
        </div>
        <div class="lang-box float-right" @mouseenter="mouseInLang()" @mouseleave="mouseOutLang()" :class="{active:isHideLang}">
            <div class="current-lang">{{currenLang}}</div>
            <div class="select-lang" v-for="lang in langs" v-if="isHideLang">{{lang}}</div>
        </div>
        <div class="float-clear"></div>
    </div>
</template>
<script>
  var reCurrentLang = (m)=>{
      console.log(m)
  }
export default {
    name:'PageHeader',
    data(){
        return {
            logoName:'掌灯者',
            user:'用户：',
            userName:'用户为空',
            logout:'注销用户',
            isHideLogou:false,
            isHideLang:false,
            currenLang:'中文',
            langs:['中文','English']
        }
    },
    methods: {
        mouseInUser(){
            this.isHideLogou = true;
        },
        mouseOutUser(){
            setTimeout(()=>{
                this.isHideLogou = false;
            },500)   
        },
        mouseInLang(){
            this.isHideLang = true;
        },
        mouseOutLang(){
            setTimeout(()=>{
                this.isHideLang = false;
            },500)
        }
    },
    mounted () {
        reCurrentLang(this.data)
    }
}
</script>
<style  scoped>
.header{
    height: 50px;
    width: 100%;
    background: red;
    position: relative;
    top: 0px;
    right: 0px;
}
.logo{
    height: 50px;
    width: 300px;
    font-size: 36px;
    font-weight: bold;
    line-height: 50px;
    padding: 0px 20px;
    
}
.user-box{
    width: 200px;
    margin: 0px 30px;
}
.user{
    height: 50px;
    display: inline-block;
    font-size: 18px;
    padding: 0px 10px 0px 5px;
    line-height: 50px;
}
.user-name{
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    display: inline-block;
}
.logout{
    height: 50px;
    font-size: 18px;
    padding: 0px 10px;
    word-spacing: 2px;
    line-height: 50px;
    cursor: pointer;
}
.active{
    background: #dddddd
}
.lang-box{
    width: 150px;
    margin: 0px 30px;
    padding: 0px 50px;
    }
.lang-box .current-lang{
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
}
.lang-box .select-lang{
    height: 50px;
    line-height: 50px;
    text-align: center
}
</style>