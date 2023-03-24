###### :cactus:  MongoDB_lecture

## Nested documents 의 형태는, 
``` json
{
  "_id" : ObjectId("ai5eg8H9Pj12"),
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
이와 같다. 그런데 여기서 "reviews"는 또다른 json 형태로 되어있다. 그래서 이것을 분리하여 reviews부분을 다른 document로 만들 수 있을것이다.  
