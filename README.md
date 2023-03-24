###### :cactus:  MongoDB_lecture


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
빨간색 테두리안에 있는 것을 document(문서)라고 하고  Documents는 json 처럼 key와 value로 되어 있지만 실제는 bson이라고 부르는 binary json으로 저장되어 있습니다 
그리고 document에는 특별한 ``` _id : ObjectId("ai51eg8H9Pk12")``` 가 있다고 앞의 수업에서 언급했습니다.  이 id로 인해 모든 문서는 분별될 수 있고 유일해집니다 
문서는 속성가 가질 수 있는 속성에는 또한 문서를 속성으로 가질 수 있습니다 이것은 nested document라고 부릅니다.

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

## MongoDB compass 설치하기 
https://www.mongodb.com/try/download/compass   다운로드 후 어플리케이션으로 이동하고 실행합니다. 

<img width="315" alt="스크린샷 2023-03-23 오후 10 18 05" src="https://user-images.githubusercontent.com/48478079/227216244-6ca4fc6c-cbd0-4bb0-bbdc-1f7ac3c6a935.png">

녹색의 connet 버튼 클릭  
<img width="349" alt="스크린샷 2023-03-23 오후 10 22 46" src="https://user-images.githubusercontent.com/48478079/227217406-eaf35754-7e44-4788-b504-bbbca8e6bbff.png">

 
이렇게 나오지 않는다면 메뉴에서 (윈도우 경우) 'Services > MondoDB server를 찾아 실행중인지 확인 '   

## database 만들어보기  
1. 
<img width="251" alt="스크린샷 2023-03-23 오후 10 28 34" src="https://user-images.githubusercontent.com/48478079/227219065-8616ab9e-636c-4e57-9bc8-c27c233aecf1.png">   

2. 
<img width="375" alt="스크린샷 2023-03-23 오후 10 28 52" src="https://user-images.githubusercontent.com/48478079/227219118-48ec5985-5833-4edb-9eae-b0fc31198816.png">   

3. 📁books > "ADD DATA" 클릭 > "Insert Document" 선택 > 이미 삽입되어 있는 id를 삭제합니다.(삭제해도 나중에 삽입됩니다.) > 아래의 내용을 삽입합니다.  

```
{
"title" :"Name of Wind",
"author":"Patric Rothfus",
"pages": 500,
"genres":["fantasy","magical"],
"rating":9
}
```   
4. insert 버튼클릭  

<img width="246" alt="스크린샷 2023-03-23 오후 10 38 03" src="https://user-images.githubusercontent.com/48478079/227221306-d5c0631a-362d-4241-89f8-5d419ec6e03f.png"> 
id가 자동으로 삽입되어 있습니다.    

   
   
      
✏️  여러개의 데이타를 삽입할 수 있는데 이때는 "Insert Document" 팝업창안에 내용을 삭제한 뒤  [  ] (대괄호)를 먼저 삽입하고 그 안에 { },{ } 식으로 넣어줍니다. json 형식대로 넣어줍니다. 

```
[
 {
   "title":"The Final Empire",
   "author":"Brandon Sanderson",
   "pages":450, 
   "genres":["fantasy","dystopian"], 
   "rating": 8
 },
{
  "title":"The way of King" ,
  "author":"Brandon Sanderson",
  "pages":300,
  "genres":["fantasy","dystopian"],
  "rating":9
} 
 ]

```

입력후 데이타에 마우스를 올리면 아래와 같은 아이콘들이 나타납니다. 보시면 어떤것인지 알 수 있을 것입니다.   
<img width="410" alt="스크린샷 2023-03-24 오전 10 37 58" src="https://user-images.githubusercontent.com/48478079/227402533-e8204f93-e8a0-4c9f-ad41-ad3e0396e1a6.png">

### MongoDB compass에서 filter 사용하기  

<img width="527" alt="스크린샷 2023-03-24 오전 10 40 04" src="https://user-images.githubusercontent.com/48478079/227402957-5ed2f37d-8280-4007-b784-1eabffe16dea.png">

위의 이미지에서 ```Type a query: { field :'value' } ``` 부분에 원하는 쿼리를 입력합니다. 다음과 같이 한번 시도해 봅시다. 
``` {rating:7} ```  한 개의 데이터가 검색됩니다.      
