const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:String,
  age : {
    type :Number,
    min:1,
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