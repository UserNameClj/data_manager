(()=>{
    var title = `<div class='app-data'>{{data}}</div>`;
    window.appData={
        template:title,
        data(){
            return {
                data:'这是放数据的地方'
            }
        }
    }
})()