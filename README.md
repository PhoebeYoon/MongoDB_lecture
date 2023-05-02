###### :cactus:  MongoDB_lecture

## 배열에서 사용하는 요소찾기    
첨부된 파일을 다운로드 하여 shools 컬렉션을 만들고 데이터를 삽입한 후 아래의 예제를 실행합니다.  



- $elemMatch  
배열 필드가 포함된 문서를 지정된 모든 쿼리 기준과 일치하는 하나 이상의 요소와 일치시킵니다.    
```js
db.schools.find({zipcode:"63109"},{ students: {$elemMatch:{school:102}} })
db.school.find({zipcode:"63109"},{ students: {$elemMatch:{school:102, age:{ $gt:10}}} })

```



## Nested documents 의 형태는, 
``` json
{

  "title": "Dune",
  "author": "Frank Herbert",
  "pages": 500,
  "genres": [
    "sci-sf",
    "dystopian"
  ],
  "rating":10,
  "reviews":[
    {"name":"Kim",  "body","Lorem lorem..."},
    {"name":"Park", "body","Lorem lorem..."},
    {"name":"Lee",  "body","Lorem lorem..."}
  ]
}
```  
이와 같은 형태이다.  여기서 "reviews"는 또다른 json 형태로 되어있다. 아래와 같이 내용을 추가해보자.   
``` 
bookstore> db.books.insertMany([
{
   title:"The name of the Wind",
   author:"Patrick Rothfuss",
   pages:500,
   rating:6,
   genres:[
     "fantasy",
     "magic"
     ],
   reviews:[
     {
     name:"kim",
     body :"one of my favs"
     },
     {
     name:"park",
     body :"really good book"
     }
   ]
  },
{
   title:"The name of the Wind",
   author:"Patrick Rothfuss",
   pages:500,
   rating:6,
   genres:[
     "fantasy",
     "magic"
     ],
   reviews:[
     {
     name:"kim",
     body :"one of my favs"
     },
     {
     name:"park",
     body :"really good book"
     }
   ]
  }])
```
