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



 
