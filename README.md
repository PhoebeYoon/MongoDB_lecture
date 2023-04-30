###### :cactus:  MongoDB_lecture


## 삭제 api를 만들어 보겠습니다  

우선 서버에 삭제를 원할때 어떻게 해야 하는지 알려줘야 하니까 app.js에 삭제시 요령(?)를 추가하고 postman으로 어떤 데이터를 삭제할지 알려줄 예정입니다.  


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

## Delete api 만들기   
아래의 이미지처럼 'GET' 아니라 메서드를 'DELETE'를 선택하고 url에 지우고자하는 document의 id값을 추가해주면 됩니다.  

<img width="1119" alt="스크린샷 2023-03-25 오전 10 56 50" src="https://user-images.githubusercontent.com/48478079/227679963-64f071bf-2402-4829-bfc8-a2c98e662b88.png">   
'acknowledged:true' 가 나오면 성공적으로 삭제가 이루어진것입니다.  

