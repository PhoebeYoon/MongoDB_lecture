###### :cactus:  MongoDB_lecture
   

## bookstore.books database 만들어보세요
<img width="400" alt="스크린샷 2023-04-08 오후 12 50 10" src="https://user-images.githubusercontent.com/48478079/230701960-fb5df902-2c21-4eac-9916-d537a9cb3e57.png">



1.
<img width="251" alt="스크린샷 2023-03-23 오후 10 28 34" src="https://user-images.githubusercontent.com/48478079/227219065-8616ab9e-636c-4e57-9bc8-c27c233aecf1.png">   

2. 
<img width="375" alt="스크린샷 2023-03-23 오후 10 28 52" src="https://user-images.githubusercontent.com/48478079/227219118-48ec5985-5833-4edb-9eae-b0fc31198816.png">   

3. 📁books > "ADD DATA" 클릭 > "Insert Document" 선택 > 이미 삽입되어 있는 id를 삭제합니다.(삭제해도 나중에 삽입됩니다.) > 아래의 내용을 삽입합니다.  

```
{
"title" :"Name of Wind",
"author":"Patric Rothfus",
"pages": 500,
"genres":["fantasy","magical"],
"rating":9
}
```   
4. insert 버튼클릭  

<img width="246" alt="스크린샷 2023-03-23 오후 10 38 03" src="https://user-images.githubusercontent.com/48478079/227221306-d5c0631a-362d-4241-89f8-5d419ec6e03f.png"> 
id가 자동으로 삽입되어 있습니다.    

   
   
      
✏️  여러개의 데이타를 삽입할 수 있는데 이때는 "Insert Document" 팝업창안에 내용을 삭제한 뒤  [  ] (대괄호)를 먼저 삽입하고 그 안에 { },{ } 식으로 넣어줍니다. json 형식대로 넣어줍니다. 

```
[
 {
   "title":"The Final Empire",
   "author":"Brandon Sanderson",
   "pages":450, 
   "genres":["fantasy","dystopian"], 
   "rating": 8
 },
{
  "title":"The way of King" ,
  "author":"Brandon Sanderson",
  "pages":300,
  "genres":["fantasy","dystopian"],
  "rating":9
} 
 ]

```

입력후 데이타에 마우스를 올리면 아래와 같은 아이콘들이 나타납니다. 보시면 어떤것인지 알 수 있을 것입니다.   
<img width="410" alt="스크린샷 2023-03-24 오전 10 37 58" src="https://user-images.githubusercontent.com/48478079/227402533-e8204f93-e8a0-4c9f-ad41-ad3e0396e1a6.png">


여기까지 잘 따라오셨나요 ?    





### MongoDB compass에서 filter 사용하기  

<img width="527" alt="스크린샷 2023-03-24 오전 10 40 04" src="https://user-images.githubusercontent.com/48478079/227402957-5ed2f37d-8280-4007-b784-1eabffe16dea.png">

위의 이미지에서 ```Type a query: { field :'value' } ``` 부분에 원하는 쿼리를 입력합니다. 다음과 같이 한번 시도해 봅시다. 
``` {rating:7} ```  한 개의 데이터가 검색됩니다.      




이전수업에서 했던 MongoDB Compass 화면에서 하단의  ' MONGOSH '에 마우스를 위치한 후 위로 클릭드래그하면 터미널처럼 보이는 검정색 화면이 나타납니다. 

<img width="477" alt="스크린샷 2023-03-24 오전 11 07 22" src="https://user-images.githubusercontent.com/48478079/227406033-c9b0e7b7-bac2-451f-b947-aa67bb859ce0.png">



<img width="171" alt="스크린샷 2023-03-24 오전 11 15 00" src="https://user-images.githubusercontent.com/48478079/227407106-a78c2c37-6adc-499c-9186-5fb3f160021a.png">

여기서도 같은 명령어를 시도해 봅니다. 결과는 동일합니다.   이렇게해서 우리는 3가지 방법으로 실행하는 것을 경험했습니다.   



## shell 를 이용하여 MongoDB의 명령어를 익혀봅시다
터미널창에서 'mongosh' 엔터 
```   
test> show dbs
use bookstore
show collections
db.books
db.books.insertOne({ title:"The Color of Magic", author:"Terry Pratchett", pages:300, rating:7, genres :["fantasy","magic"]  })
```     
#### 1. 한개의 데이터 입력하기   
insertOne()는 하나의 데이터를 입력하겠다는 뜻입니다. 잘 입력되었다면  다음과 같이 출력됩니다. 
```
{
  acknowledged: true,
  insertedId: ObjectId("641d0c33a0139faf66b2f990")
}
```    
id는 자동으로 생성됩니다. 

MongoDB Compass를 실행해서 보면 지금 입력한 내용이 추가되어 있습니다.  
만약에 collection부분에 books가 아닌 다른 이름을 삽입한다면 어떻게 될까요? insertOne()를 사용하면 collection를 하나 생성할 수도 있습니다. 
```
bookstore> db.authors.insertOne({name:'Hong', age : 30})
bookstore> demo ={"title":"Spon", "author":"Barn The Spoon","pages":345,"genres":['non-fiction',"bio"]}
bookstore> db.books.insertOne(demo)
```   
이렇게하고 compass 확인해보면 새로운 collection이 만들어져 있습니다. compass에서 보이지 않는다면 refresh를 하면 됩니다.  
<img width="200" alt="스크린샷 2023-03-24 오전 11 43 17" src="https://user-images.githubusercontent.com/48478079/227410999-bb1341c7-726d-42f3-bd3e-b9f5fe7fd979.png">

이제 삭제해 보도록 하겠습니다. 문서를 삭제할때는 'delete' 이고 collection를 삭제할때는 'drop' 이라는 명령입니다. 

<img width="445" alt="스크린샷 2023-03-24 오전 11 45 56" src="https://user-images.githubusercontent.com/48478079/227411328-8339e004-80b0-45e6-b492-3054db566715.png">


<img width="200" alt="스크린샷 2023-03-24 오전 11 46 06" src="https://user-images.githubusercontent.com/48478079/227411319-07517b80-187c-4c35-aa95-364517bb4ece.png">
collection를 삭제할때는 gitHub처럼 이름을 다시 한번 입력해야 삭제됩니다.

<img width="300" alt="스크린샷 2023-04-08 오후 7 51 32" src="https://user-images.githubusercontent.com/48478079/230717304-f12ca026-e4fd-4787-97a5-7f619e4d874a.png">


#### 2. 여러개의 데이터 입력하기    
``` 
bookstore> db.books.insertMany([{ "title": "The Light Fantastic", "author": "Terry Pratchett", "pages": 250,"genres": [ "fantasy" ], "rating":6 }, 
{"title": "Dune","author": "Frank Herbert", "pages": 500,"genres": ["sci-sf","dystopian"],"rating":10} ])
```     
이렇게 입력하면   

<img width="282" alt="스크린샷 2023-03-24 오후 12 05 44" src="https://user-images.githubusercontent.com/48478079/227413989-d032691b-eabc-4e33-817f-50613957326e.png">   
입력이 잘 되었다는 의미로 acknowledged :true가 나오고 id 값이 자동생성됩니다.      
여기까지 잘 따라오셨다면 13개의 문서가 있을 것입니다.      



:cookie: shell 에서 아래와 같이 여러줄에 거쳐서 내용을 입력할 수도 있습니다. ... (점3개) 나온다는 것 미리 숙지하시고요. 여러개 입력하니까 대괄호 들어갑니다. 이거 빠뜨리면 ' MongoInvalidArgumentError: Argument "docs" must be an array of documents' 라고 에러메시지 나옵니다. 
```
bookstore> db.books.insertMany([ 엔터
... { {"title": "Dune","author": "Frank Herbert", "pages": 500,"genres": ["sci-sf","dystopian"],"rating":10} ,
...{ "title": "The Light Fantastic", "author": "Terry Pratchett", "pages": 250,"genres": [ "fantasy" ], "rating":6 }
... ])
```    
데이터를 입력한 후에 MongoDB compass화면에서 Documents의 갯수에 차이가 나면 아래 이미지의 빨간 테두리안의 리플레시를 클릭합니다  

<img width="400" alt="스크린샷 2023-03-24 오후 1 55 58" src="https://user-images.githubusercontent.com/48478079/227428477-adb0e512-f0b5-4137-a63c-99f7723e22b5.png">

3. find() 메소드를 이용하여 collection 내의 document를 읽을 수 있습니다. 
``` js
test> use bookstore
bookstore> db.getCollectionNames()
bookstore> db.books.find()
```
4. db.collection이름.find(query, projection)       
- query :Option. document selection criteria(기준). criteria 없이 collection내의 모든 document를 select하는 경우에는 생략하거나 { }를 전달한다. 
- projection : Option으로 document select 결과에 포함될 field이다.  
- id는 자동으로 출력되므로 출력에서 제외하고 싶다면 false로 지정해야 한다

``` 
bookstore> db.books.find({},{"title":1})  
bookstore> db.books.find({},{"title":1,"author":1}) 
bookstore> db.books.find({},{"title":1,"author":1, _id:0})
bookstore> db.books.find({},{"title":true,"author":true, _id:0})
bookstore> db.books.find(
... {},
... { _id:0,
... title :1}
... )

``` 
