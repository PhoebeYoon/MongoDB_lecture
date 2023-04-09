###### :cactus:  MongoDB_lecture

지난 수업에 이어집니다.  user에 대한 정보를 입력할때 조건을 줄수있습니다. 예를 들어 email를 입력할때 'Worker1'로 입력했지만 만약 소문자로 'worker1'로 입력하는 경우도 있겠지요. 그래서 아예 이것을 같은방식으로 통일시키면 좋을듯합니다. 이럴때 스키마에 형식을 지정해주는 것입니다. 아래처럼요.   
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
  user.createAt =5
  await user.save()
  console.log(user)
} catch (e){
    console.log(e.message)
  }
}  
```
