###### :cactus:  MongoDB_lecture

[app.js]

```js
const express = require('express')
const { ObjectId } = require('mongodb')
const { getDb, connectToDb } = require('./db')

// init app & middleware
const app = express()
app.use(express.json())

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
  
  const page = req.query.p || 0 
  const booksPerPage =3

  let books = []

  db.collection('books')
    .find()
    .sort({author: 1})
    .skip(page*booksPerPage)
    .limit(booksPerPage)
    .forEach(book => books.push(book))
    .then(() => {
      res.status(200).json(books)
    })
    .catch(() => {
      res.status(500).json({error: 'Could not fetch the documents'})
    })
})

app.get('/books/:id', (req, res) => {

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

app.post('/books',(req, res)=>{ 
  const book = req.body

  db.collection('books')
  .insertOne(book)
  .then(result => {
    res.status(201).json(result)

  })
  .catch(err => {
    res.status(500).json({ err:'Could not create a new document'})
  })
})

app.delete('/books/:id', (req, res) =>{

  if (ObjectId.isValid(req.params.id)) {
    db.collection('books')
      .deleteOne({_id: new ObjectId(req.params.id)})
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        res.status(500).json({error: 'Could not delete the document'})
      })
      
  } else {
    res.status(500).json({error: 'Not a valid doc id'})
  }
})

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

```
하고 나서 postman에서 ``` ?p=0```, ``` ?p=1``` , ``` ?p=2``` 로 한 페이지가 3개의 문서가 나타난다.   

<img width="536" alt="스크린샷 2023-03-25 오후 12 09 38" src="https://user-images.githubusercontent.com/48478079/227688881-c666b3d0-c838-4c15-9f49-211ffae3a050.png">
