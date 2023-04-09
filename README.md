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


#### - mongoose라는 것이 있는데 이게 MongoDB Driver모듈입니다. 
이것은 데이터베이스 연결, 스키마정의, 스키마에서 모델로 변환, 모델을 이용해 데이터를 다루는데 프로미스와 콜백도 사용가능합니다.  위에서 언급한 순서를 따라가면 'Connection URL' 이라는 페이지가 나옵니다.    

<img width="500" alt="스크린샷 2023-04-09 오전 10 47 23" src="https://user-images.githubusercontent.com/48478079/230750062-f3bc89f1-75ec-4e07-8163-022077a67241.png">    

이것은 node.js 드라이버를 사용해서 MongoDB 인스턴스에 연결하는 방법을 설명하는 것으로 이 URI연결 드라이버가 MonogoDB에 연결할때 사용되는 명령어 집합입니다. 



> ODM ( Object Document Mapping)으로해 객체와 문서를 1대1로 매칭시켜줍니다. mongodb에 있는 데이터를 node.js에서 javascript객체로 사용할 수 있도록 해줍니다. 아무로 실습을 진행하면서 다시 언급될 것입니다.   

## MongoDB Drivers를 사용해서 간단한 예제를 진행보도록 하겠습니다
이 예제는 mongosh를 이용해서 기초적인 mongoDB을 경험한 다음에 실습하도록 합니다.   
1. script.js 파일을 만들고, 터미널에서   ```  npm init -y ``` 실행합니다 
2. package.json파일이 생성됩니다. 
3. 터미널에서  ``` npm i mongoose  ```
4. package-lock.json 과 📁node_modules 가 생성되어 있습니다
5. 터미널에서 ```npm i --save-dev nodemon ```    
6. package.json 파일을 열어서 ``` "scripts": {  "devStart": "nodemon script.js" },```  변경해줍니다  
  이렇게 주면 'npm run devStart'라고 주면 우리의 어플리케이션이 실행됩니다 
7. [script.js] 에 " console.log('이게 보이나요? ') " 입력한 뒤 터미널에서 npm run devStart 엔터하면 콘솔창에 '이게 보이나요'라는 문구가 출력되는지 확인하세요 


#### 여기서 mongoDB 의 스키마와 모델에 대해 알아보겠습니다  
우리는 mongodb에는 스키마가 없다고 설명했습니다. 스키마가 없기 때문에 데이터를 유연하게 처리할 수 있지만 스키마가 없기 때문에 겪어야하는 문제들이 있었습니다. mongodb에서는 문서에 아무내용이나 넣어도 심지어 같은 필드이지만 자료형이 다른것도 허용되고 오타가 입력되어서 오류로 인식하지 않기때문에 혼란스러운면이 있었습니다. 그래서 mongoose에 Schema를 적용해서 데이터 구조를 정의할 수 있게 하였습니다.   

그래서 mongoose 에서는 스키마(schema)와 모델(model)이라는 개념이 존재하는데 스키마는 해당 컬렉션의 문서에 어떤 종류의 값이 들어가는지를 정의하고 모델은 스키마를 통해서 만드는 인스턴스입니다.

8. 데이터베이스를 연결하고 Schema를 작성해보도록 하겠습니다. User.js 파일을 생성합니다.    

[User.js]    
```
const mongoose = require('mongoose')
// 스키마 생성
const userSchema = new mongoose.Schema({
  name:String,
  age : Number
})
// model() 함수입니다. 스키마를 통해서 인스턴스를 만듭니다. userSchema 스키마를 이용해 User 라는 인스턴스를 생성했습니다 
module.exports = mongoose.model('User', userSchema) 
```    
module.export는 이미 node.js에서 다루기 때문에 여기서는 설명을 생략합니다.     
이제 script.js 내용을 바꿔야 하겠지요. User.js에서 디비를 접속하는 코드를 생성했으니 서버에도 이 사실을 알려야겠지요. 아래와 같이 추가해줍니다  

[script.js]    
``` js
const mongoose = require('mongoose')
const User = require("./User")
mongoose.connect('mongodb://localhost/testdb')
// 새로운 문서생성
const user = new User({name:'Cho', age: 24})
// 새로운 유저를 생성했지만 아직 디비에 저장되지는 않았습니다. 
user.save().then(()=> console.log('New 유저가 생성됨'))
```  

여기까지 하고 터미널을 보면 'New 유저가 생성됨' 문구가 출력됩니다.  여기까지 잘 되었나요?    
그럼 여기서 MongoDB Compass 를 실행시켜서 보면 아래와 같이 컬렉션과 문서가 생성되어 있을 것입니다.   

<img width="500" alt="스크린샷 2023-04-09 오후 3 32 11" src="https://user-images.githubusercontent.com/48478079/230758268-cc0386de-9cee-4e70-bcd7-4b7180b7527f.png">

9. 프로미스를 이용해서 작성해보았는데 이제 async function으로 만들어보겠습니다.   
[script.js]를 아래처럼 변경해주세요 

``` js
const mongoose = require('mongoose')
const User = require("./User")
mongoose.connect('mongodb://localhost/testdb')

run()
async function run(){
  const user = new User({name:'Kang', age: 31})
  await user.save()
  console.log(user)
}
```    

실행되었다면 터미널에 아래와 같이 나옵니다.     
<img width="300" alt="스크린샷 2023-04-09 오후 3 39 14" src="https://user-images.githubusercontent.com/48478079/230758480-fea999a7-7e65-4801-92e1-2d162c026de4.png">     
여기에 있는 _v는_ mongoose가 트래킹하는 정보(versioning) 이니까 우리는 신경쓰지 않아도 됩니다.  

10. 9번에 내용중 새로운 user를 생성하는 다른 방법은 create() 이용하는 것입니다.   
``` js
const mongoose = require('mongoose')
const User = require("./User")
mongoose.connect('mongodb://localhost/testdb')

run()
async function run(){
  const user = await User.create({name:'Park', age: 38})
  // const user = new User({name:'Kang', age: 31})
  // await user.save()
  console.log(user)
}

```

