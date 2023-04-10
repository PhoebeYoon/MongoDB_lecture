const express = require('express')
const { ObjectId} = require('mongodb')
const { connectToDb, getDb} = require('./db')


// 초기화 app && 미들웨어
const app = express()
app.use(express.json())

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
// 1개의 문서만 가져오기
app.get('/books/:id', (req, res) => {
 //   console.log(req.params.id)

  if (ObjectId.isValid(req.params.id)) {
    db.collection('books')
      .findOne({_id: new ObjectId(req.params.id)})
      .then(doc => {
        res.status(200).json(doc)
      })
      .catch(err => {
        res.status(500).json({error: 'Could not fetch the document'})
      })
      
  } else {
    res.status(500).json({error: 'Could not fetch the document'})
  }

})

// POST
app.post('/books', (req,res)=>{
 const book = req.body

 db.collection('books')
 .insertOne(book)
 .then(result =>{
    res.status(201).json(result)
 })
 .catch(err =>{
  res.status(500).json({err :'Could not create a new document'})
 })

})

// delete
app.delete('/books/:id', (req, res) => {

  if (ObjectId.isValid(req.params.id)) {
  db.collection('books')
    .deleteOne({ _id: new ObjectId(req.params.id) })
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(500).json({error: 'Could not delete document'})
    })

  } else {
    res.status(500).json({error: 'Could not delete document'})
  }
})

// patch
app.patch('/books/:id', (req, res) => {
  const updates = req.body

  if (ObjectId.isValid(req.params.id)) {

    db.collection('books')
      .updateOne({ _id: new ObjectId(req.params.id) }, {$set: updates})
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        res.status(500).json({error: 'Could not update document'})
      })

  } else {
    res.status(500).json({error: 'Could not update document'})
  }
})

