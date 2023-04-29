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

위의 결과에서 score: 2.25, score:1.5, score0.75가 나온다.  
이것이 의미하는 것은 우리가 $search에서 주었던 검색용어들이 해당 문서에서 얼마나 가깝게 있는지를 수치로 표현해주는 것이다.  

세개의 단어, java hut coffee라는 단어가 첫번째 출력내용에서는 모두 포함되어 있어서 가장 높은 값을 얻었고, 2번째 결가물은 coffee가 2개 있어서, 3번째는 java 라는 1개의 단어만 발견되기 때문에 가장 낮은 점수를 받았다고 생각하면 된다.  

모든 단어가 들어가 있는 경우 4점이 나온다.  



