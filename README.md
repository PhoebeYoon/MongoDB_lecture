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


### MongoDB에서 문서의 부분적인 변경을 할때 효율적으로 수행할 수 있는 Field Update Operator는 아래와 같습니다.  
|명령어 | 설명 | 
|---|---|
|$set | document에서 특정 키의 값을 수정합니다. 특정 키가 존재하지 않다면 새롭게 생성합니다.특정 키의 데이터형도 수정할 수 있습니다 |
|$unset | document에서 특정 키와 값을 모두 제거합니다 |
|$nc|  배열에 사용되는 제한자로써, 지정된 키가 존재하는지 확인할 수 있습니다. |
|$inc | 이미 존재하는 필드의 값을 증가시킵니다. 만약 필드가 존재하지 않는다면 필드를 생성합니다  int, long, double 의 자료형에만 사용이 가능합니다|
| $push | 배열에 사용되는 제한자로써, 지정된 키가 존재할 때 해당 키(배열)의 끝에 요소를 추가하며 지정된 키가 존재 하지 않으면 새로운 배열을 추가합니다.  |
|$pull | 배열에 사용되는 제한자로써, 지정된 키에 대한 요소를 삭제합니다. |
|$each | $addToSet과 함께 사용되는 제한자로써, 여러 개의 값을 중복되지 않게 배열에 추가합니다. |
|$pop | 배열을 스택이나 큐처럼 활용할 수 있습니다 |


### $inc 
```
bookstore> db.books.find({author:"Terry Pratchet"})
bookstore> db.books.updateOne({author:"Terry Pratchet"},{$inc:{pages: 1}})
```
<img width="324" alt="스크린샷 2023-03-24 오후 7 29 27" src="https://user-images.githubusercontent.com/48478079/227497973-01e61f93-9ea5-404d-941e-1fae4972cebf.png">

find() 명령의 결과로 2개의 출력결과를 얻는데 2번째 명령을 실행하면 그 2개의 결과중에서 첫번째것에 숫자가 1 증가합니다. 

<img width="324" alt="스크린샷 2023-03-24 오후 7 32 35" src="https://user-images.githubusercontent.com/48478079/227498230-d42226fc-764b-4926-9208-abc922a65ae0.png">     
마이너스값을 입력하면  감소시킬 수도 있습니다   

```
bookstore> db.books.updateOne({author:"Terry Pratchet"},{$inc:{pages: -11}})
```   

### $pull  
특정 필드를 검색해서 id와 genres값을 확인합니다. 그리고 pull에 그 genres값중 하나를 입력합니다.  
```
bookstore> db.books.updateOne({_id:ObjectId("641d72e412e5a0ec4283ac9e")}, {$pull: {genres:"fantasy"  }} )
```    
결과를 확인해보면 그 genres 중 하나가 삭제된것을 확인합니다.   

