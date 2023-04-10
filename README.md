###### :cactus:  MongoDB_lecture

[app.js] 추가하세요

``` js
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

```
위의 내용을 postman으로 만들어봅니다.   

<img width="523" alt="스크린샷 2023-03-25 오전 11 25 46" src="https://user-images.githubusercontent.com/48478079/227681951-83222236-dca3-41f3-8c84-799d0eeb683f.png">
