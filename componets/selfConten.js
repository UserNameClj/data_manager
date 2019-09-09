Vue.component('self-conten', {
    template: `    
<div id="conten">
    <div class="left-menu">     
        <router-link to="/comOne">组件一</router-link>
         <router-link to="/comTwo">组件二</router-link>
    </div>
    <div class="data-zone">
    <app-title></app-title>
    <app-data></app-data>
    </div>
</div>`,
    data() {
        return {
            data: '内容组件'
        }
    },
    components:{
        'app-title':appTitle,
        'app-data':appData
    }
})