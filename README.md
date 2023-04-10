###### :cactus:  MongoDB_lecture

[app.js] 
```js
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
```
위의 delete 메소드를 postman으로 만들어보겠습니다.    

## delete api 만들기  
<img width="1119" alt="스크린샷 2023-03-25 오전 10 56 50" src="https://user-images.githubusercontent.com/48478079/227679963-64f071bf-2402-4829-bfc8-a2c98e662b88.png">
