((window)=>{
    var comOne ={
        template:'<div>组件一</div>'
    };
    var comTwo ={
        template:'<div>组件二</div>'
    }
    window.router = new VueRouter({
        routes:[
            {
                path:'/comOne',
                component:comOne
            },
            {
                path:'/comTwo',
                component:comTwo
            }
        ]
    })
})(window)