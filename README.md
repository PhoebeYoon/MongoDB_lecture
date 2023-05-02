###### :cactus:  MongoDB_lecture



## indexes

특정한 문서에 접속하게     
<img width="300" alt="스크린샷 2023-04-10 오후 5 53 26" src="https://user-images.githubusercontent.com/48478079/230868767-c7b0a8d3-ee65-4c45-95e7-f139920e5513.png">
  
## index생성
```
bookstore>db.books.createIndex({rating:8})
bookstore>db.books.getIndexes() 
```   
인덱스 생성시에 특별한 이름을 주지 않으면 검색했던 그것으로 이름이 지어집니다. 

## index 삭제
``` 
db.books.dropIndex({rating:8})
```  

``` 
bookstore>db.books.createIndex({ "bookname":"text"})
bookstore>db.books.getIndexes()
bookstore>db.books.dropIndex("bookname_text")
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



## explain  
db.collection.explain() 메서드는 최적화 관련 내용인 queryPlanner와 server 정보를 보여준다.   
( 즉 다양한 메서드의 쿼리 실행에 대한 정보를 반환하는 데 사용됩니다 )
queryPlanner — 기본 모드입니다. 이 수준에서  winning plan에 대한 정보를 알려주는데, 이것에는 사용된 인덱스, 컬렉션 스캔이 필요한지 (COLLSCAN) 등이 포함됩니다.
실행결과를 잘 보시면 서버에 대한 내용을 알 수 있습니다.


사용방법은  
``` db.collection.explain().명령어() ```
우리는  db.컬렉션.explain().find() 사용해 보겠습니다.   

우선 이해를 돕기 위해 아래의 명령을 실행해봅니다.  

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
위의 이미지에서 보여주는 정보중에, 
executionStats는  이 모드에는 쿼리 플래너에서 제공하는 모든 정보와 통계가 포함됩니다. 통계에는 검사 및 반환된 문서 수, 실행 시간(밀리초) 등의 세부 정보가 포함됩니다.
  



