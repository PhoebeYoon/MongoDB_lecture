###### :cactus:  MongoDB_lecture

## Document를 업데이트
### shell에서 한개의 document를 업데이트 
업데이트는 뭘할지를 찾아서 어떻게 바꿀지를 적어야 합니다. 업데이트할 대상은 id로 찾고 rating의 숫자를 바꿔보겠습니다.  
한개의 document를 변경할때는 updateOne() 와 특정필드의 변경을 위해 $set 연산자를 사용합니다. 
``` 
bookstore> db.books.updateOne({ _id:ObjectId("641d72e412e5a0ec4283ac9e")},  {$set:{rating:8, pages:320}})
```   
성공했다면 
```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
``` 
와 같이 출력될것이다.  

### shell 에서 여러개의 document를 업데이트

```
bookstore> db.books.find({author:"Terry Pratchett"}) 
bookstore> db.books.updateMany({author:"Terry Pratchett"}, {$set: {author:"Terry Pratchet"} })
```  
' matchedCount: 2 ' 가 출력된다면 2개의 문서를 바꾼것이다. 
