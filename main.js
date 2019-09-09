// import VueRouter from "vue-router"


Vue.component('title-a', {
    template: '<div><p>{{component}},</p></div>',
    data() {
        return {
            component: '我开始做组件了'
        }
    }
})
var localCompon = {
    template: '<div><div>{{lacalData}}</div></div>',
    data() {
        return {
            lacalData:'这是局部组件'
        }
    }

}
var app = {
    template: 
    `<div>
    <self-header></self-header>
    <self-conten></self-conten>
    <self-footer></self-footer>
    </div>`,
    data() {
        return {
            lacalData:'这是局部组件'
        }
    }

}


var vm = new Vue({
    el: '#app',
    router:router,
    template:'<app/>',
    data: {
        theme: "列表渲染项目练习",
        doData: '',
        dirtyLang: 'tmd nizhenshi bs bt'
    },
    components: {
        app:app

    }
})