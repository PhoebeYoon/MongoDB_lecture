###### :cactus:  MongoDB_lecture

## operator 는 $ 시작한다 
find({ rating : {   } }) rating이 7보다 크다. 연산자는 $로 시작, gt는 greater than으로 7는 포함되지 않는다. 
```
bookstore> db.books.find({rating: {$gt:7 } })
``` 

```  
bookstore> db.books.find({rating: {$lt:7 } })
bookstore> db.books.find({rating: {$lte:7 } })
bookstore> db.books.find({rating: {$gte:7 } })
```   
조건을 2개  
```
bookstore> db.books.find({ rating: { $gt:7},author:"Brandon Sanderson" })
```     

ratin이 7과 9사이를 검색하고자 한다면  find({ $or:[ ] })로 시작   
```
bookstore> db.books.find({ $or:[ {rating : 7}, {rating:9} ]} ) 
bookstore> db.books.find({ $or:[ {rating : {$gte:7} },{rating:9} ]} )
bookstore> db.books.find({ $or:[ {pages : {$lt:200} },{ pages:{$gt:800} } ]}) 
bookstore> db.books.find({ $or:[ {pages : {$lt:200} },{ pages:{$gt:800} } ]}).count()
```

## 배열에 사용하는 연산자들 ( $in, $nin )
- rating이 3~6 사이의 것들을 검색
```
bookstore> db.books.find({rating: { $in:[4,5,6]}})
```
- rating이 6,7,8이 아닌 것들을 검색
```
 db.books.find({rating: { $nin:[6,7,8]}})
```  
- bookstore> db.books.find({genres:"fantasy"})   
<img width="300" alt="스크린샷 2023-03-24 오후 5 41 19" src="https://user-images.githubusercontent.com/48478079/227469630-16d7e456-5645-46c8-8d8b-332ad62265e9.png">


  결과로 'fantasy'가 나오기도 하지만 genres에 다른 값이 있는 것도 포함되어 있다.   
  만약에 genres:fantasy만 있는것으로 검색하려면 아래와 같이 주어야 한다.   
``` 
bookstore> db.books.find({genres:["fantasy"]})
```   
genres가 "fantasy" 와 "magic" 2개를 만족하는 경우를 검색.  
```
bookstore> db.books.find({genres:["fantasy","magic"]})
```   
genres에 "fantasy"가 포함되어 있는 모든 것을 검색 
```
bookstore> db.books.find({genres:{$all: ["fantasy"]} })
bookstore> db.books.find({genres:{$all: ["fantasy","fairy tale"]} })
```
위의 문장에서 "bookstore> db.books.find({genres:{$all: ["fantasy","fairy tale (공백)"]} })" 을 넣으면 검색되지 않으니 주의하세요  
 
## document안에 document형식으로 들어있는 것들 검색
- books 안에 reviews는 다시 document형식으로 되어있다. 이 reviews안에 있는 name속성으로 검색을 해봅시다. 자바스크립트에서 객체를 접속할때 (.) dot 연산자를 사용한다는 것을 기억하고 다음과 같이 입력해봅시다.  (속성의 이름은 quotation으로 감싸야 합니다 )
```
bookstore> db.books.find({ rating:7 } ) 
bookstore> db.books.find({ "reviews.name" : "kim" })
```
위에서 첫째줄은 quotation으로 감싸지 않아도 되지만 아랫줄은 quotation으로 감싸야합니다.  그리고 첫글자가 대문자 "Kim"로 시작하면 검색되지 않습니다.  



     


