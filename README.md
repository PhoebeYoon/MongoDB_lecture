###### :cactus:  MongoDB_lecture

[app.js]에 다음의 내용을 추가해줍니다.  

``` js
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

```
실행시에는 ``` http://localhost:3000/books/641c5c4a4b4ae7c5cd55f79a ```  
doucment 중 하나를 선택하고 거기에 있는 id값을 사용합니다. 브라우저에 해당 document만 출력됩니다
