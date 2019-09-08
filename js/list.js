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
        var vm = new Vue({
            el: '#app',
            data: {
                theme: "列表渲染项目练习",
                doData: '',
                listData: window.sessionStorage.listData && JSON.parse(window.sessionStorage.listData) || [],
                hideClose: -1,
                allText: '选择所有',
                all: false
            },
            methods: {
                record(db, i) {
                    var dbData = db.trim()
                    dbData && this.listData.push({
                        id: i,
                        list: dbData,
                        hasSelect: false
                    });
                    this.doData = ''
                },
                mouseOnList(i) {
                    this.hideClose = i
                },
                delTask(i) {
                    this.listData.splice(i, 1)
                },
                selectAll() {
                    this.all = !this.all;

                    function choseBox(flag) {
                        for (var i = 0; i < this.listData.length; i++) {
                            this.listData[i].hasSelect = flag
                        }
                    }
                    if (this.all) {
                        choseBox.call(this, true)
                    } else {
                        choseBox.call(this, false)
                    }
                }
            },
            watch: {
                listData: {
                    handler(){
                        window.sessionStorage.listData = JSON.stringify(this.listData);
                        var checkRight = 0;
                        for (var i = 0; i < this.listData.length; i++) {
                            if (this.listData[i].hasSelect) {
                                checkRight++;
                            }
                        }
                        if (checkRight == this.listData.length) {
                            this.all = true;
                            
                        } else {
                            this.all = false;
                        }
                    },
                    immediate:true,
                    deep:true
                },

            }
        })