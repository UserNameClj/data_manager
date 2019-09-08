Vue.component('self-header', {
    template: `   
 <header>
    {{data}}
</header>`,
data(){
    return {
        data:'头部组件'
    }
}
})