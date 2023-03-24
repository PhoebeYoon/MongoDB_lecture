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

