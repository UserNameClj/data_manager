const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')


var accept_log = function (log) {
    fs.appendFile('./log/accept_log.log', log, (err) => {
        if (err) throw err;
        console.log('数据已追加到文件');
    });
}

var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(function (req, res, next) {
    var time = new Date()
    next(time)
})
app.use(function (time,req, res, next) {
    if(req.url !== "/favicon.ico"){
        var requestType = req.method.toUpperCase()
        accept_log(`${time}:${requestType}-${req.host}${req.url}\r\n`)
    }
    next()
})

app.get('/school/message/:router', (req, res, next) => {
    console.log(req.params.router)
    res.send('success');
})
app.post('/school/message/:router',(req,res,next)=>{
    console.log(req.body);
    res.send('body')
})


app.listen(3000, function () {
    console.log('start server')
})