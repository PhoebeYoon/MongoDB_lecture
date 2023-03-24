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
insertOne()는 하나의 데이터를 입력하겠다는 뜻입니다. 잘 입력되었다면  다음과 같이 출력됩니다. 
```
{
  acknowledged: true,
  insertedId: ObjectId("641d0c33a0139faf66b2f990")
}
```    
id는 자동으로 생성됩니다. 

MongoDB Compass를 실행해서 보면 지금 입력한 내용이 추가되어 있습니다.  
