###### :cactus:  MongoDB_lecture

지난 수업에 이어집니다.  
user에 대한 정보를 입력할때 조건을 줄수있습니다. 예를 들어 email를 입력할때 'Worker1'로 입력했지만 만약 소문자로 'worker1'로 입력하는 경우도 있겠지요. 그래서 아예 이것을 같은방식으로 통일시키면 좋을듯합니다. 이럴때 스키마에 형식을 지정해주는 것입니다. 아래처럼요.   
12. [ User.js ]
``` js
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:String,
  age : {
    type :Number,
    min:0,
    max:100
   },
  email:{
    type: String,
    minLength: 15,
    require:true,
    lowercase: true,
  },
  createAt : {  
    type: Date ,
   // default: new Date(),
   immutable: true,
    default : ()=> Date.now()
  },
  updateAt : {  
    type: Date ,
    default : ()=> Date.now()
  },
  hobbies : [String],
  address :{
    city:String,
    street:String
  }
})
module.exports = mongoose.model('User', userSchema) 
```    
- mail 항목에는 입력된 내용을 모두 소문자로 변경하는 lowercase :true,  그리고 필수항목으로 하고 싶으면 require:true, 최소길이을 정하고 싶으면 minLength: 15로 합니다.
- 생성된 날짜를 시스템적으로 기록하고 싶으면, default: new Date() 또는 default: ()=> Date.now() 하면 됩니다. 
- 또한 CreateAt과 updateAt이 있는데 날짜를 변경하고 싶지 않으면 'immutable: true'를 적습니다.
- age에는 입력하는 최소값과 최대값을 설정하는 것이 좋겠죠! (최소) min:1, (최대) max:100 으로 합니다. 

13. [script.js]파일을 바꿔보도록 하겠습니다. 
```js
const mongoose = require('mongoose')
const User = require("./User")
mongoose.connect('mongodb://localhost/testdb')

run()
async function run(){
  try{
    const user = await User.create({
      name:'Hong', 
      age: 27,
      email: 'Test@company.co.kr',
      hobbies:['Weight Lifting','Bowling'],
      address:{city:'Jeju', street :'Dulegil 3ro'
     },
  })
  await user.save()
  console.log(user)
} catch (e){
    console.log(e.message)
  }
}  
```     
콘솔창에 출력된 내용을 보면   
<img width="360" alt="스크린샷 2023-04-09 오후 8 03 57" src="https://user-images.githubusercontent.com/48478079/230768831-4c26d19c-081b-4ec0-965f-7b7f2c99f5ee.png">

13. 이제 찾기( findById)를 사용해보도록 하겠습니다.    
기존 내용을 주석처리하고 아래 내용을 입력합니다. 그리고 기존 문서중에서 아무 _id를 복사해서 넣어주세요   

[script.js]   
```js
const mongoose = require('mongoose')
const User = require("./User")
mongoose.connect('mongodb://localhost/testdb')

run()
async function run(){
try {
  const user = await User.findById('64329547f32467280adacb27')
  console.log(user)
} catch (e){
  console.log(e.message)
}
}
```    
<img width="350" alt="스크린샷 2023-04-09 오후 8 15 12" src="https://user-images.githubusercontent.com/48478079/230769319-6748d48f-356a-4635-bad9-8be9ee42f2d1.png">

14. id말고 name으로 검색해 보겠습니다.
기존 코드 중에서 findById 를 주석처리하고 아래 내용으로 변경해 보도록 하겠습니다. 
```  const user = await User.find({ name :'Lee'})  ``` 
15. ``` const user = await User.findOne({ name :'Lee'}) ```   
16. ``` const user = await User.exists({name:"Lee"} ) ``` id값이 출력되는지 확인합니다 
17. ```const user= await User.deleteOne({name :'Lee'}) ```   

### where는 쿼리를 만들고 전달된 조건을 적용한 다음 쿼리를 반환합니다
https://mongoosejs.com/docs/api/model.html 사이트에서 더 많은 명령어들을 찾을 수 있습니다.
( Model.where() 부분을 참조하시면 됩니다.)     
[script.js] 에서 async function run(){} 부분에 넣으시면 됩니다   
1. ``` const user = await User.where('name').equals('Park') ```  
2. 
``` 
const user = await User.where('age')
.gt(20)
.lt(40)
.where('name')
.equals("Cho")
```    
이번 수업은 여기까지 진행합니다. 이제 mongoDB의 대략적인 것을 이해하고 경험도 하셨을 것입니다.    
다음 수업에서는 localhost를 이용한 코드로 진행하겠습니다.   

