###### :cactus:  MongoDB_lecture
 
MongoDB 명령 매뉴얼 : https://www.mongodb.com/docs/manual/  또는   
mongodb 사이트 > Resources > Server > Reference ( 왼쪽패널)
 
#### 우리는 Node.js가 이미 설치되었다는 가정하에 다음 내용을 진행하겠습니다. 
1. 실습할 폴더를 만듭니다 ( 예, project-mongo ) 
2. vs code를 실행합니다
3. vs code의 터미널창을 열고 ``` npm init ``` 
4. 기본설정으로 진행합니다 그러면 package.json 파일이 만들어집니다. 
5. 터미널에서 ``` npm install express --save ```  (express 패키지를 설치합니다 )
6. app.js파일를 생성합니다. 
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
app.get("./books",(req,res) =>{
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
  connectToDb: (cb)=>{ 
    MongoClient.connect('mongodb://localhost:27017/bookstore')
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
  // getDb:()=> { 
  //   console.log("-------")
  //   console.log(dbConnetion) 리턴 DB connection
  // }
  
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
app.get("./books",(req,res) =>{
  res.json({msg : "welcome to the api"})
})
```
실행시, ``` nodemon app 엔터 ```  


## books collection의 데이터 가져오기 

[app.js]의 내용을 변경해줍니다.  
``` js
const express = require('express')
const { getDb, connectToDb } = require('./db')

// init app & middleware
const app = express()

// db connection
let db

connectToDb((err) => {
  if(!err){
    app.listen('3000', () => {
      console.log('app listening on port 3000')
    })
    db = getDb()
  }
})

// routes
app.get('/books', (req, res) => {
  let books = []

  db.collection('books')
    .find() 
    .sort({author: 1})
    .forEach(book => books.push(book))
    .then(() => {
      res.status(200).json(books)
    })
    .catch(() => {
      res.status(500).json({error: 'Could not fetch the documents'})
    })
})

```   
실행시에는 브라우저의 url에 ``` http://localhost:3000/books ``` 입력후에 브라우저 내용에 모든 document의 내용이 보여지면 됩니다.  
<img width="231" alt="스크린샷 2023-03-25 오전 9 18 07" src="https://user-images.githubusercontent.com/48478079/227666831-ea551dde-49a9-479c-afa4-815cec4a18aa.png">

📝 db.collection('books') books 컬렉션에 접속해서 find()를 실행하시만 그 안의 데이터를 가져오는것이 아니라 cursor라는 것을 반환합니다. 우리가 사용하는 마우스의 cursor 가 아닙니다.  



## MongoDB에서 cursor란?
- MongoDB에서 find() 메소드 실행후에 반환되는 문서의 MongoDB의 컬렉션입니다.
- 이것은 특정 인덱스값을 가리키는 포인터와 같습니다.
- find()메소드는 결과를 반복하는데 사용할 수 있는 cursor object를 반환합니다 
- cursor는 불러온 모든 레코드를 반환하는데 사용된 포인터입니다.  그래서 인덱스를 설정하고 갯수를 셀수 있습니다. 
- cursor를 이용하여 불러온 내용을 읽을 수도 있습니다. 
- 다음을  쉘로 실행해 봅니다
``` 
test>use bookstore
bookstore>var cur=db.books.find() 
bookstore>cur.next() # 첫번째 document가 출력됩니다
bookstore>cur.next() # 두번째 document가 출력됩니다
``` 
