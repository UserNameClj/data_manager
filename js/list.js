        // 编写添加自己指令,去除字符串的数字指令，全局添加指令
        Vue.directive('text-tri', {
            //一般操作css就使用bind
            bind(el) {
                el.style.color = 'blue'
            },
            //一般事操作js内容使用inserted
            inserted: function (el, binding) {
                el.innerHTML = binding.value.replace(/[1-9]/g, '')
            }
        })
        Vue.directive('self-focus', {
            inserted(el, binding) {
                el.focus();
                console.log('引用聚焦成功')
            }
        })
        // 定义过滤器,全局过滤器学习
        Vue.filter('hideDirty',function(value){
            return value.toString().toLowerCase().replace(/tmd|bs|bt/g,'***')
        })
        // 定义全局组件学习
    
   