###### :cactus:  MongoDB_lecture
## shell 에서 find() 연습하기

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
- 



📝 참조)
https://www.mongodb.com/docs/manual/reference/method/db.collection.find/
