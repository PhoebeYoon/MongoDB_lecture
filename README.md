###### :cactus:  MongoDB_lecture

### 기본 CRUD
- db.person.save({"name":"John"}) - create
- db.person.find()  - Read
- db.users.update( { old } , { new }) - Update
- db.users.remove({"name":"John"}) - Delete

### MongoDB 복제
- Master-Slave 구조 구성
- 데이터복사본을 slave에 배치하여 장애에 따른 데이터손실없이 slave 데이터사용이 가능
- master에 장애가 발생했을때 slave에서 master를 선출할 수 있다.

### MongoDB 실행 ( shell에서 )
-db 조회 : 
show dbs , 
use test 
show collections
- json 형태로 
