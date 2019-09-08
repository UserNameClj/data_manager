Vue.component('self-conten',{
    template:`    
<div id="conten">
    <div class="left-menu">{{data}}</div>
    <div class="data-zone"></div>
</div>`,
data(){
    return {
        data:'内容组件'
    }
}
})