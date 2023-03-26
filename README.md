###### :cactus:  MongoDB_lecture

## 데이터형
- null : null 값과 존재하지 않는 필드를 표현할때 사용
 ```{x : null } {"x" : true }```
- 숫자 : 64비트 부동소수점 수를 기본으로 사용합니다. 
```{ "x" : 3.14 } { "x" : 3 } {"x" : NumberInt("3") } {"x": NumberLong("3")}```
- 문자열 : 어떤 utf-8 문자열이든 문자열형으로 표현할 수 있습니다. 
``` { "x" : "Seoul" }```
- 날짜 : 1970년 1월1일의 시간을 1/1000초 단위로 나타내는 64비트 정수로 날짜를 저장합니다 
``` {"x" : new Date() } ```
- 정규표현식 : 쿼리는 자바스크립트의 정규 표현식 문법을 사용할 수 있습니다
``` { "x" : /foobar/i } ```
- 배열
``` { "x" : ["a","b","c"] } ```
- 내장 도큐먼트 : 도큐먼트는 부모 도큐먼트의 값으로 내장된 도큐먼트 전체를 포함할 수 있습니다
``` {"x" : {"foo" :"bar"} ```
- 객체 ID : 객체 ID는 도큐먼트용 12바이트 ID 입니다.
``` {"x" : ObjectID()} ```
- 이진데이터 : 이진데이터는 임의의 바이트 문자열이며 shell에서는 조작이 불가능합니다. 
            이진 데이터는 데이터베이스에 utf-8이 아닌 문자열을 저장하는 유일한 방법입니다. 
- 코드 : 쿼리와 도큐먼트는 임의의 자바스크립트 코드를 포함할 수 있습니다.
``` {"x" :function() { } } ``` 


## shell 에서 스크립트 실행하기 및 종료
```> mongosh demo1.js ```    
```test> load("demo3.js") ``` 결과로 ture가 나옵니다   
```test> exit ```  종료할때    





### shell 명령어들
 
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



 

