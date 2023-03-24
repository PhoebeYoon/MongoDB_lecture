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
