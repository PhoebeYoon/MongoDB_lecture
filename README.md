###### :cactus:  MongoDB_lecture



### 1. index 연습을 위해   
인덱스는 처음 db를 만들 때 자동으로 생성되는 system.indexes 컬렉션에 저장됩니다

```
use bookstore
bookstore>db.books.getIndexes()
```

stores라는 컬렉션을 생성하고 아래의 데이터를 입력하세요.  

```
[
     { name: "Java Hut", description: "Coffee and cakes" },
     { name: "Burger Buns", description: "Gourmet hamburgers" },
     { name: "Coffee Shop", description: "Just coffee" },
     { name: "Clothes Clothes Clothes", description: "Discount clothing" },
     { name: "Java Shopping", description: "Indonesian goods" }
   ]

```  
index 생성을 하려면  db.컬렉션이름.createIndex()입력합니다. 

형식은 ``` db.collection.createIndex(keys, options, commitQuorum) ``` 

인덱스를 생성할때는 
```
bootstore>db.stores.createIndex( { name: 1} )
```  
workbench를 실행시켜서, 해당 컬렉션을 클릭한 후 중앙에 있는 탭중 'Indexes'를 클릭해서 인덱스가 생성된 것을 확인합니다. 
이때 생성된 index는 우리가 일반적으로 알고 있는 빠른 검색을 위한 그 인덱스로 'Type'이 'REGULAR'로 되어 있습니다 이것은 아래에서 언급할 텍스트인덱스와는 다른 것입니다.  


### 특정 인덱스 삭제
db.컬렉션.dropIndex(필드이름);


### 모든 인덱스 삭제
db.컬렉션.dropIndexes();


### 이제 택스트 색인을 생성해 보겠습니다  
<b>$text</b> : 텍스트 색인으로 인덱싱된 필드의 내용에 대해 텍스트 검색을 수행합니다 

형식: 
```
{
  $text:
    {
      $search: <string>
    }
}
```  


<b>$search</b> : MongoDB가 구문 분석하고 텍스트 색인을 쿼리하는 데 사용하는 일련의 용어입니다. MongoDB는 구문으로 지정되지 않는 한 용어에 대한 논리적 OR 검색을 수행합니다



아래의 명령 중 첫번째 명령를 실행하고 workbench 에서 해당 컬렉션에서 Indexes 탭을 확인해 보면 Type : TEXT로 되어 있습니다.  
이제 아래 내용을 실행하고 결과를 확인합니다.  

```
db.stores.createIndex( { name: "text"} ) 
# db.stores.createIndex( { name: "text", description: "text" } )
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




### 2. 한글이 들어간 내용을 검색 
첨부된 파일을 다운로드 받아 restaurant 컬렉션을 만들고 데이터를 삽입합니다.   

```
db.restaurant.find()
db.restaurant.createIndex({"shop_name":"text", "menu":"text"})
db.restaurant.getIndexes()
db.restaurant.find({$text: { $search:"버거킹"}})

db.restaurant.find({$text: { $search:"콜라 와퍼"}})  <-- "콜라 와퍼가 포함되지 않은 것도 검색됩니다.
( 이유는 한글검색에는 구분자 기반(공백문자) 기준으로 인덱싱하기 때문입니다 )

( 그래서 입력한 문장 자체를 포함한 것을 찾을 땐 \"검색어\" 으로 해야 합니다)
db.restaurant.find({$text: { $search:" \"콜라 와퍼\" "}})

```

### 컬렉션 이름 바꾸기    
db.원래 컬렉션이름.renameCollection(새로운 컬렉션이름)

