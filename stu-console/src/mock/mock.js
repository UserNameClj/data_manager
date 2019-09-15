const Mock = require('mockjs');
const Random = Mock.Random;


const produceData = function (opt) {
  console.log('opt', opt);
  let articles = [];
  for (let i = 0; i < 30; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), // Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage
    }
    articles.push(newArticleObject)
  }
  return {
    data: articles
  }
}
// var class_data = function () {
//   let class_array = [];
//   for (let i = 0; i < 4; i++) {
//     class_array.push({
//       session: 2015 + i,
//       subject: [{
//         name: 'huaxue',
//         class: ['class1', 'class2']
//       }, {
//         name: 'jisuanji',
//         class: ['class1', 'class2','class3']
//       }, {
//         name: 'shuli',
//         class: ['class1', 'class2']
//       }]
//     })
//   }
//   return class_array
// }
Mock.mock('/test', /post|get/i, produceData)
Mock.mock('/user', 'get', [1, 2, 3, 4])

var test = Mock.mock({
  "code": '0',
  "massge|10": [{
    "id|+1": 13040201,
    "name": '@cname'
  }]
})

var subject_msg = Mock.mock({
  "subject": ''
})

var schoolMsg = Mock.mock('/school/message', 'get', {
  code:0,
  "data|4": [{
    "session|+1": 2015,
    'subject': [{
      "name": "shuxue",
      "classNum|1-3": 1,
      "classId|+1":1
    }, {
      "name": "jisuanji",
      "classNum|1-3": 1,
      "classId|+1":100
    }, {
      "name": "huaxue",
      "classNum|1-3": 1,
      "classId|+1":1000
    }]
  }]
})

var classMsg=Mock.mock('/class/message',/get|post/,{
  code:0,
  total:30,
  "data|20-30":[
    { 
      "studentId|+1":15040201,
      "name":'@cname',
      "QQ|100000000-1000000000":9,
      "nation":'汉族',
      "sex|1":['girl','box'],
      "bornTime":"@date(\"yyyy-MM-dd\")",
      "status|1":['normal','suspension','expulsion'],
      "hometown":"@province",
      "photo":"@image"
    }
  ]
})

// console.log(classMsg)