###### :cactus:  MongoDB_lecture

## MongoDB Drivers
https://www.mongodb.com/docs/drivers/ 접속하면 응용프로그램과 MongoDB를 연결해서 개발을 할수있습니다.   

위의 사이트를 접속하고, 우리는 Node.js를 사용할 예정이니  
node.js Driver (왼쪽 메뉴 중)선택 >'Fundamentals '> 'Connect to MongoDB' > 'How to Connect to MongoDB'를 선택합니다.   
일단 뭐 연결을 해야 다음 작업을 계속할 수 있으니 mongodb와 연결하는 것부터 보겠습니다.   
 _(그리고 이쯤에서 다시 말씀드리는데 node.js나 서버의 작동에 대해 적정한 수준의 경험이 없다면, 이해가 좀 어려울수 있습니다.)_

#### - 그럼 왜 driver라는 것을 사용하는건가요
위에 적힌 사이트를 방문하면 왼쪽에 C Driver, C++ Driver, Java Drivers, PHP Driver, Python Drivers등등이 있습니다. 그럼 이 driver라는 것이 대체 무슨 역할을 하는지 비유로 설명드리겠습니다.   


아마 사용하는 컴에 여러가지 장치 예를들면 프린터, 드로잉 타블렛등을 사용해보신 분들이라면 해당 기기를 구매해서 전원 on 하고 내 컴퓨터에 꽂는다고 바로 사용할 수 있는 것이 아니라는 것을 아실 것입니다. 사용하는 컴퓨터에게 현재 어떤 기기 (키보드, 마우스, 타블렛, 프린터 등등)가 연결되어 있는지 알려주고 이것을 관리하도록 해야 하는데, 이런 역할을 하는 것이 driver라는 것입니다.  새로운 기기를 구매해서 사용할때 이 driver라는 것이 자동설치가 되어서 아마 인식하지 못하는 분들이 있으실것입니다.  마찬가지로 이런 역할을 하는 것이 mongodb에도 필요한데  그것이 위에 언급된 것입니다. 
<img width="500" alt="스크린샷 2023-04-09 오전 10 47 23" src="https://user-images.githubusercontent.com/48478079/230750062-f3bc89f1-75ec-4e07-8163-022077a67241.png">


#### - mongoose라는 것이 있는데 이게 MongoDB Driver모듈입니다. 
이것은 데이터베이스 연결, 스키마정의, 스키마에서 모델로 변환, 모델을 이용해 데이터를 다루는데 프로미스와 콜백도 사용가능합니다.   위에서 언급한 순서를 따라가면 'Connection URL' 이라는 페이지가 나오는데 잠시 설명하도록 하겠습니다 ( 설명이 길어서 오프라인 설명드립니다 )





> ODM ( Object Document Mapping)으로해 객체와 문서를 1대1로 매칭시켜줍니다. mongodb에 있는 데이터를 node.js에서 javascript객체로 사용할 수 있도록 해줍니다. 아무로 실습을 진행하면서 다시 언급될 것입니다.   

 
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
실행시, ``` nodemon app 엔터 ```  

## MongoDB에서 cursor란?
- MongoDB에서 find() 메소드 실행후에 반환되는 문서의 MongoDB의 컬렉션입니다.
- 이것은 특정 인덱스값을 가리키는 포인터와 같습니다.
- find()메소드는 결과를 반복하는데 사용할 수 있는 cursor object를 반환합니다 
- cursor는 불러온 모든 레코드를 반환하는데 사용된 포인터입니다.  그래서 인덱스를 설정하고 갯수를 셀수 있습니다. 
- cursor를 이용하여 불러온 내용을 읽을 수도 있습니다. 
- 다음을 실행해 봅니다
``` 
use bookstore
var cur=db.books.find() 
cur.next() # 첫번째 document가 출력됩니다
cur.next() # 두번째 document가 출력됩니다

``` 
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
