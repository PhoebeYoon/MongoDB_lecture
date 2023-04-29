###### :cactus:  MongoDB_lecture



## indexes

특정한 문서에 접속하게     
<img width="300" alt="스크린샷 2023-04-10 오후 5 53 26" src="https://user-images.githubusercontent.com/48478079/230868767-c7b0a8d3-ee65-4c45-95e7-f139920e5513.png">


## explain  
db.collection.explain() 메서드는 aggregate(), count(), find(), group(), remove() 및 update()와 같은 다양한 메서드의 쿼리 실행에 대한 정보를 반환하는 데 사용됩니다.
```
bookstore> db.books.find({rating: {$gt:5}})
bookstore> db.books.explain().find({rating: {$gt:5}})
```   
실행결과를 보면   

<img width="450" alt="스크린샷 2023-04-10 오후 6 07 12" src="https://user-images.githubusercontent.com/48478079/230871000-03ffdfeb-eeac-4a69-b7d2-bf4f25e33c46.png">

``` 
bookstore>db.books.find({ rating:8}).explain('executionStats')
```  


<img width="230" alt="스크린샷 2023-03-25 오후 12 23 32" src="https://user-images.githubusercontent.com/48478079/227689479-1f7f24d4-833e-415f-8c07-7c3a9bb62a6e.png"> <img width="200" alt="스크린샷 2023-03-25 오후 12 29 09" src="https://user-images.githubusercontent.com/48478079/227689670-2c160196-3065-42ab-95b2-f8cec0abe337.png">
  
  
## index생성
```
bookstore>db.books.createIndex({rating:8})
bookstore>db.books.getIndexes() 
```  
위에 있는 결과와 확인해 보세요   
<img width="300" alt="스크린샷 2023-04-10 오후 6 11 52" src="https://user-images.githubusercontent.com/48478079/230871913-7138fe85-9ba2-4650-af57-5aaf201b7f54.png">     
위에서 실행했던 명령어를 다시 실행해보고 그 결과를 확인해 보도록 합니다. 
  
```
bookstore> db.books.find({ rating:8}).explain('executionStats')
```
<img width="220" alt="스크린샷 2023-04-10 오후 6 14 02" src="https://user-images.githubusercontent.com/48478079/230872682-6d7fb7d0-9057-4f92-a74b-86a8e664b58a.png">     
totalDocsExamined 항목을 보면 차이가 있다.  

## index 삭제
``` 
db.books.dropIndex({rating:8})
```

## $text에 대해 알아보겠습니다.  
MongoDB는 문자열 내용에 대한 텍스트 검색 쿼리를 지원하는 텍스트 색인을 제공합니다
find에서 많이 사용하는 것중에 $text가 있는데 이것은 인덱스로 접근해야 하기 때문에 이번에 살펴보겠습니다.     
우선 인덱스를 생성해야 합니다.  

$search // 검색에 사용할 키워드 조건

``` 
bookstore>db.books.createIndex( { author:"text" })
bookstore>db.books.find({ $text: { $search :"Patric"})
bookstore>db.books.find({ $text: { $search :"patric"})
```
결과를 확인하세요  

만들어진 인덱스를 확인하고, 삭제해 보겠습니다. 

``` 
bookstore>db.books.getIndexes()
bookstore>db.books.dropIndex('위에서 보여준 인덱스 이름')


```



