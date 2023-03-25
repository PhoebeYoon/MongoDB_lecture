###### :cactus:  MongoDB_lecture

### 데이타베이스 생성
 
 - use blog ( 데이터베이스 이름을 use로 입력한 후 새 데이터베이스를 변경하거나 작성할 수 있습니다 )
 - db.createCollection("posts") (createCollection() 데이터베이스 메서드를 사용하여 컬렉션을 만들 수 있습니다)
 - insertOne()
 - insertMany() 
 - find()
 - findOne()
 - updateOne()
 - updateMany()
 - deleteOne()
 - deleteMany()
 - $set
 - $pop
 - $pull
 - $push
 - $limit
 - $sort
 - $count
 - MongoDB Drivers 


### MongoDB 복제
- Master-Slave 구조 구성
- 데이터복사본을 slave에 배치하여 장애에 따른 데이터손실없이 slave 데이터사용이 가능
- master에 장애가 발생했을때 slave에서 master를 선출할 수 있다.

### MongoDB 실행 ( shell에서 )
>use mydb
>show dbs
>db.movie.insert({"name":"tutorials point"})

>use mydb  // 삭제하기 원하는 디비를 열고
>db.dropDatabase() // 디비를 삭제


