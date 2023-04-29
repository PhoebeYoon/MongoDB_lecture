###### :cactus:  MongoDB_lecture



## index 연습을 위해 
store라는 컬렉션을 생성하고 아래의 데이터를 입력하세요.  

```
[
     { name: "Java Hut", description: "Coffee and cakes" },
     { name: "Burger Buns", description: "Gourmet hamburgers" },
     { name: "Coffee Shop", description: "Just coffee" },
     { name: "Clothes Clothes Clothes", description: "Discount clothing" },
     { name: "Java Shopping", description: "Indonesian goods" }
   ]

```  

아래의 명령을 실행해서 결과를 확인하세요  

```
db.stores.createIndex( { name: "text", description: "text" } )
db.stores.find({ $text: {$search: "Coffee" } })
db.stores.find({ $text: {$search: "Java Hut Coffee" } })
db.stores.find(
   { $text: { $search: "java hut coffee" } },
   { score: { $meta: "textScore" } }
).sort( { score: { $meta: "textScore" } } )
```



