###### :cactus:  MongoDB_lecture

## Collecion 과 Documents

<img width="495" alt="스크린샷 2023-03-23 오후 9 55 22" src="https://user-images.githubusercontent.com/48478079/227210835-4ef62b22-1052-4b3b-96b0-8f127b9082f4.png">   

``` json
{
  "title": "My first blog post",
  "author" : "Hong",
  "tags":["video games","reviews"],
  "likes" : 20,
  "body":"lorem lorem"
}
```    
빨간색 테두리안에 있는 것을 document(문서)라고 하고  Documents는 json 처럼 key와 value로 되어 있지만 실제는 bson이라고 부르는 binary json으로 저장되어 있습니다.  
그리고 document에는 특별한 ``` _id : ObjectId("ai51eg8H9Pk12")``` 가 있다고 앞의 수업에서 언급했습니다.   
이 id로 인해 모든 문서는 분별될 수 있고 유일해집니다.   
문서의 속성이 가질 수 있는 속성에는 또한 문서를 속성으로 가질 수 있습니다 이것은 nested document라고 부릅니다.

``` json
{
  "title": "My first blog post",
  "author" : {
    "name" :"Hong",
    "email" :"hong@naver.com",
    "role" :"game reviewer"
   },
  "tags":["video games","reviews"],
  "likes" : 20,
  "body":"lorem lorem"
}
```   
위의 예제에서 author속성는 name, email, role 이라는 속성을 가지고 있습니다. nested document 입니다.

이제 shell에서 데이터베이스를 만들어보겠습니다.   
기억하시죠. db.컬렉션이름.insert()를 사용했던거요. 

## MongoDB CRUD Operations 
CRUD 는 create, read, update, and delete documents 를 말합니다.   지금 여기에서는  Create만 언급하겠습니다. 


```
test> show dbs
test> use mdb
mdb> db.inventory.insert({ item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" })
mdb> db.inventory.insertOne(  { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" })

mdb> db.inventory.insertMany( [  <-- 엔터 그럼 다음줄에  ... 이 나타나는데 계속 입력을 받겠다는 의미입니다
... { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
... { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
... { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
... ])
결과로 아래처럼 나타납니다 
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("6430dc92f9af582f019f05e6"),
    '1': ObjectId("6430dc92f9af582f019f05e7"),
    '2': ObjectId("6430dc92f9af582f019f05e8")
  }
} 
acknowledged: true 는 성공적으로 실행했다는 의미이며  
insertedIds 각 문서에 대한 _id값을 포함하는 배열를 리턴합니다.  

mdb> db.getCollectionNames()
mdb> db.inventory.find() <-- inventory 컬렉션에 들어있는 모든 데이터를 출력합니다. 
```   
컬렉션이름을 언급하면서 데이터를 삽입했습니다. 당연히 컬렉션이 만들어지고 데이타 (문서)가 해당 컬렉션에 삽입되었습니다.    
insert(), insertOne(), insertMany() 를 사용해 보았는데 이름에서 알수있듯이 One이 붙은 것은 하나만 삽입, Many가 붙은것은 여러개를 삽입하겠다는 것입니다. 그래서 Many가 사용된 형식을 보면 대괄호[ ]로 데이타를 둘러쌓습니다. 

여기까지 잘 따라오셨다면 앞의 사용된 데이터를 복사해 두세요. 복습하겠습니다.     
``` 
mdb> db.inventory.drop() 
mdb> db.getCollectionNames()
```  
inventory 컬렉션을 먼저 삭제합니다.   

```
mdb> db.inventory.insert( [
...    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
...    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
...    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
...    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
...    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
... ]);


mdb> db.inventory.insertMany( [
...    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
...    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
...    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
...    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
...    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
... ]);

mdb> db.inventory.find() 
mdb> db.inventory.drop() 
```
둘다 사용가능하지만 Many가 들어가면 더 직관적으로 알수있으니 Many를 많이 사용합니다.  

