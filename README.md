###### :cactus:  MongoDB_lecture

### 컬렉션목록보기
bookstore> show collections   
bookstore> db.getCollectionNames()  

### shell 에서 find() 연습하기
- bookstore> db.books.find()
모든 내용 보여줍니다. 

- bookstore> db.books.find({rating:9})
- bookstore> db.books.find({author:'Terry Pratchett'})
- bookstore> db.books.find({author:'Terry Pratchett', rating:7 })
- bookstore> db.books.find({author:'Terry Pratchett'}, {rating:0}) ( rating 만 제외하고 출력 )
- bookstore> db.books.find({author:'Brandon Sanderson'})
- bookstore> db.books.find({author:'Brandon Sanderson'}, {title:1,author:1})   
``` ( 2번째 옵션은,  author:'Brandon Sanderson'에 해당하는 내용 중에서 title과 author항목만 출력하고 나머지는 보이지 않게 합니다.  여기서 title:1 을 주는 것은 해당 field가 true ( 1 ) 이라는 의미 입니다. 아래와 같이 true로 바꾸어도 같은 결과입니다. 하지만 1 대신 0을 입력하면 false의 의미이니 결과는 달라집니다.   ```
- bookstore> db.books.find({author:'Brandon Sanderson'}, {title:true,author:true})
- bookstore> db.books.find({author:'Brandon Sanderson'}, {title:false,author:false})     
``` 이렇게하면 title, author를 뺀 나머지 내용이 출력됩니다. (이렇게는 사용하지 않습니다. 그냥 title:1 를 설명하고자 하는 것입니다 ) ```


- bookstore> db.books.find({}, {title:1, author:1})   
```( 모든 collection중에서 title, author만 출력해줍니다 )   ```
- bookstore> db.books.findOne({_id:ObjectId("641d2b40a0139faf66b2f997")})    
  ``` 특정한 데이터만 검색, (위의 출력 중 id 값 중 하나를 선택하세요 ) ```
- bookstore> db.books.find().count()
``` 참조되는 문서의 수를 셉니다 ```
- bookstore> db.books.find({author:"Brandon Sanderson"}).count()
- bookstore> db.books.find().limit(3) 
``` 처음부터 3개가 출력됩니다 ```
- bookstore> db.books.find().sort()
- bookstore> db.books.find().sort({title:1})  ``` 기준을 넣고자 할때 sort({ 기준}) , 오름차순 ```
- bookstore> db.books.find().sort({title:-1}) ``` 내림차순 ``` 
- bookstore> db.books.find().sort({title:1}).limit(3)   



### $regex : 정규 표현식과 맞는 도큐먼트 선택(regular expression)

db.컬렉션.find({필드 : {$regex: 정규표현식}})   
|문자열 패턴 기호 | 설명 |
|--- |---|
| /a/ | /와/사이의 문자열('a')이 한개이상 존재 (1~n)
| /^a/ | ^ 기호 바로 뒤의 문자('a')로 문자열이 시작
| /a$/ | 문자('a')로 문자열이 끝남|
|[a,s,...] | 대괄호안에 있는 문자 (a,s ...)들이 존재하는지 검색 | 



``` 

bookstore> db.books.find({ "reviews.name":{$regex:'Kim'}})  <-- Kim 대문자 K로 시작하는
bookstore> db.books.find({ "reviews.name":{$regex:'Kim',"$options":'i'}})  <-- option를 추가해서 대소문자 구분없이 찾음
bookstore> db.books.find({ "reviews.name":/kim/i}) <-- 간단히 이렇게도 가능합니다.


bookstore> db.books.find({"author":/bell/i}) <-- bell 이 포함된
bookstore> db.books.find({ "genres":{$regex:/^a/}  }) <-- a로 시작하는 
bookstore> db.books.find({title :{$regex:/^A/} }) 
bookstore> db.books.find({title :{$regex:/^D/} })
bookstore> db.books.find({ "genres":{$regex:'action'}})
bookstore> db.books.find({title :{$regex:/color/} })
bookstore> db.books.find({title :{$regex:/color/i} })
bookstore> db.books.find({title :{$regex:/col/i} })
```


📝 참조)
https://www.mongodb.com/docs/manual/reference/method/db.collection.find/

## 배열에서 사용하는 요소찾기
- $elemMatch 

