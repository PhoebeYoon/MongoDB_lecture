###### :cactus:  MongoDB_lecture

[app.js]에 다음의 내용을 추가해줍니다.  

``` js
// 맨위의 추가하세요 
const { ObjectId} = require('mongodb')

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
doucment 중 하나를 선택하고 거기에 있는 id값을 사용합니다. 브라우저에 해당 document만 출력됩니다.   

<img width="500" alt="스크린샷 2023-04-10 오후 4 03 35" src="https://user-images.githubusercontent.com/48478079/230846480-dd1579a2-0c42-472c-bc6f-335134f42fc4.png">
