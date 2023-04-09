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
