(()=>{
    var title = `<div class='app-title'><router-view></router-view></div>`;
    window.appTitle={
        template:title,
        data(){
            return {
                data:'这是题目'
            }
        }
    }
})()