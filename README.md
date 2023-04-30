###### :cactus:  MongoDB_lecture

## update api를 만들어보겠습니다.  

서버에 특정 document에 update가 발생하면 어떻게해야 하는지 행동요령(?) 기술하고 postman으로 request를 보낼 예정입니다.


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
필요한 특정 id는 모든 것을 보여주는 api결과중에서 임의로 선택하시면 됩니다.  


<img width="523" alt="스크린샷 2023-03-25 오전 11 25 46" src="https://user-images.githubusercontent.com/48478079/227681951-83222236-dca3-41f3-8c84-799d0eeb683f.png">

id를 제대로 넣었다면 'acknowledge:true'가 출력될 것입니다. 
api가 성공적으로 실행된 것입니다. 


