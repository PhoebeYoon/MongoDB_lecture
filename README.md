###### :cactus:  MongoDB_lecture

## 3가지 방법으로 MongoDB 경험해보기 

이전수업에서 했던 MongoDB Compass 화면에서 하단의  ' MONGOSH '에 마우스를 위치한 후 위로 클릭드래그하면 터미널처럼 보이는 검정색 화면이 나타납니다. 

<img width="477" alt="스크린샷 2023-03-24 오전 11 07 22" src="https://user-images.githubusercontent.com/48478079/227406033-c9b0e7b7-bac2-451f-b947-aa67bb859ce0.png">

```
test> show dbs (데이터베이스를 모두 보여준다)
test> use bookstore ( 원하는 데이터베이스로 바꾼다 ) 실행 후 'switched to db bookstore' 라고 출력된다 
test> use mydb ( 심지어 존재하기 않는 데이터베이스 이름을 적어도 실행된다)
```     
지난 수업에서 했던 터미널창을 이용해서 mongosh 명령을 하면 비슷한 화면이 나왔습니다.  

<img width="171" alt="스크린샷 2023-03-24 오전 11 15 00" src="https://user-images.githubusercontent.com/48478079/227407106-a78c2c37-6adc-499c-9186-5fb3f160021a.png">

여기서도 같은 명령어를 시도해 봅니다. 결과는 동일합니다.   이렇게해서 우리는 3가지 방법으로 실행하는 것을 경험했습니다.   


터미널창에서 'help' 입력하면 명령어에 대한 설명을 볼 수 있습니다. 'cls' 입력하면 터미널창 내용이 클리어됩니다. 

- show dbs
- use bookstroe
- show collections
- help
- cls
- exit ( compass 창이 아닌 일반 터미널에서 exit하면 mongosh 실행 후 나타났던 상태에서 빠저나가기가 됩니다 

## shell 를 이용하여 MongoDB의 명령어를 익혀봅시다
터미널창에서 'mongosh' 엔터 
```   
test> show dbs
use bookstore
show collections
db.books
db.books.insertOne({ title:"The Color of Magic", author:"Terry Pratchett", pages:300, rating:7, genres :["fantasy","magic"]  })
```     
1. 한개의 데이터 입력하기   
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
```   
이렇게하고 compass 확인해보면 새로운 collection이 만들어져 있습니다. compass에서 보이지 않는다면 refresh를 하면 됩니다.  
<img width="200" alt="스크린샷 2023-03-24 오전 11 43 17" src="https://user-images.githubusercontent.com/48478079/227410999-bb1341c7-726d-42f3-bd3e-b9f5fe7fd979.png">

이제 실습을 위해 삭제해 보도록 하겠습니다. 문서를 삭제할때는 'delete' 이고 collection를 삭제할때는 'drop' 이라는 명령입니다. 

<img width="445" alt="스크린샷 2023-03-24 오전 11 45 56" src="https://user-images.githubusercontent.com/48478079/227411328-8339e004-80b0-45e6-b492-3054db566715.png">


<img width="200" alt="스크린샷 2023-03-24 오전 11 46 06" src="https://user-images.githubusercontent.com/48478079/227411319-07517b80-187c-4c35-aa95-364517bb4ece.png">
collection를 삭제할때는 gitHub처럼 이름을 다시 한번 입력해야 삭제됩니다.

2. 여러개의 데이터 입력하기    
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

<img width="377" alt="스크린샷 2023-03-24 오후 1 55 58" src="https://user-images.githubusercontent.com/48478079/227428477-adb0e512-f0b5-4137-a63c-99f7723e22b5.png">

