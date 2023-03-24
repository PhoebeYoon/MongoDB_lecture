###### :cactus:  MongoDB_lecture

## MongoDB Drivers
https://www.mongodb.com/docs/drivers/ 접속하면 응용프로그램과 MongoDB를 연결해서 개발을 할수있다. 우리는 Node.js를 사용할 것입니다.  
#### 우리는 Node.js가 이미 설치되었다는 가정하에 다음 내용을 진행하겠습니다. 
1. 실습할 폴더를 만듭니다 ( 예, project-mongo ) 
2. vs code를 실행합니다
3. vs code의 터미널창을 열고 ``` npm init ``` 
4. 기본설정으로 진행합니다 그러면 package.json 파일이 만들어집니다.
5. app.js파일를 생성합니다.  
6. 터미널에서 ``` npm install express --save ```  (express 패키지를 설치합니다 )
7. 아래와같이 작성합니다. 

[app.js]   
``` js 
const express = require('express')
// 초기화 app && 미들웨어
const app = express()
app.listen(3000, ()=>{
  console.log("port 3000 작동중")
})

// 라우터
app.get("/books",(req,res) =>{
  res.json({msg : "welcome to the api"})
})
``` 
8. 터미널창에서 nodemon를 설치합니다 ``` npm install -g nodemon ```
9. ```nodemon app```  여기까지하면 터미널창에 위에서 [app.js]에서 작성한 내용중 "port 3000 작동중" 메시지가 나옵니다 
10. 브라우저를 열고 url에 ``` http://localhost:3000/books ``` 접속합니다. 
11. 그러면 [app.js] 에서 입력한 라우터의 메시지 '{"msg":"welcome to the api"}'가 브라우저에 나타나면 성공한 것입니다. 
12. vs code의 터미널에서 다른 터미널창을 추가합니다. 여기에서 mongodb를 설치할 예정입니다.
13. ``` npm install mongodb --save ```
14. 설치후 package.json 파일에 "mongodb": "^5.1.0" 있을 것입니다. 
 
## MongoDB 연결하기
[db.js]
``` js
const { MongoClient} = require('mongodb')
let dbConnetion
module.exports = {
  connetToDb: (cb)=>{ 
    MongoClient.connet('mongodb://localhost:27017/bookstore')
    .then( (client)=>{ 
      dbConnetion= client.db()
      return cb()
     })
     .catch(err=>{
      console.log(err)
      return cb(err)
     })
  },
  getDb:()=> dbConnetion
}
```
작성한 후에 [app.js]의 내용을 변경합니다. 
``` js
const express = require('express')
const { connectToDb, getDb} = require('./db')

// 초기화 app && 미들웨어
const app = express()

// db 연결
let db
connectToDb((err) =>{ 
  if( !err) {
    app.listen(3000, ()=>{
      console.log("port 3000 작동중")
    })
    db=getDb()
  }
})
// 라우터
app.get("/books",(req,res) =>{
  res.json({msg : "welcome to the api"})
})
```

## MongoDB에서 cursor란?
- MongoDB에서 find() 메소드 실행후에 반환되는 문서의 MongoDB의 컬렉션입니다.
- 자동으로 반복실행합니다  
- 이것은 특정 인덱스값을 가리키는 포인터와 같습니다.
- find() 메소드후 반환되는 모든 문서가 가상 cursor에 저장됩니다.



