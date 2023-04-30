###### :cactus:  MongoDB_lecture

## POSTMAN 이란
api를 구축하고 사용하기 위한 api 플랫폼입니다. api 라이프사이클의 각 단계를 간소화하고 협업을 간소화하여 더 나은 api를 빠르게 만들수 있습니다.  말이 좀 어렵죠?  

HTTP를 이용하여 클라이언트와 서버가 통신을 하는데 이때 사용하는 메서드는 GET / POST / PUT / DELETE 입니다. 아마 어딘가에서 한번쯤은 들었을 RESTful이 여기서 나오는 것입니다      
REST는 Representational State Transfer의 약자이다. 이것은 URI 를 자원으로 하고 HTTP method를 이용하여 뭔가를 표현한다는 의미입니다     
HTTP의 메소드는 위에서 언급한 GET(조회) / POST(등록) / PUT(수정) / DELETE (삭제) 입니다.     
여기서 POSTMAN이 무슨 역할을 하냐면 바로 http 메소드를 도와주는 프로그램입니다. 어떻게 도와주냐?  테스팅을 해볼 수 있게 하는 gui툴 입니다. 


## 설치하기 
https://www.postman.com/downloads/ 접속하시고 본인의 운영체제에 맞게 다운로드 후 설치하세요 
( 회원가입이 필요할 수 있습니다 )  



실행후에는 아래와 같은 화면이 나타납니다 > Workspaces 선택 > My Workspace 클릭      
<img width="270" alt="스크린샷 2023-04-30 오전 10 27 14" src="https://user-images.githubusercontent.com/48478079/235331205-42d2620a-0a38-4f70-b668-d0d514103978.png">    <img width="270" alt="스크린샷 2023-04-30 오전 10 27 24" src="https://user-images.githubusercontent.com/48478079/235331210-e7330b1c-a09a-4043-a605-f6f8adcbfb76.png">    


## 시작하기

1. 이어서 나오는 화면에서 'Overview' 옆에  :heavy_plus_sign: 클릭  

<img width="369" alt="스크린샷 2023-03-25 오전 10 00 24" src="https://user-images.githubusercontent.com/48478079/227671685-d10c9464-787c-4d47-b7cd-7511a2084fb3.png"> 


또는 햄버거메뉴 > File > New  > 'HTTP Request' 선택  

<img width="550" alt="스크린샷 2023-03-25 오전 10 02 46" src="https://user-images.githubusercontent.com/48478079/227672788-c2300abd-7e83-4790-abfe-b93e16361cc6.png">

2.  브라우저에서 사용했던 url를 GET 옆에 적어주고 Send 버튼을 클릭하면 아래쪽에 데이타가 쭈욱 나타납니다. 
<img width="694" alt="스크린샷 2023-03-25 오전 10 15 03" src="https://user-images.githubusercontent.com/48478079/227674888-544228ac-f17f-452e-ad81-037b943ab281.png">

>:volcano: 주의하세요 서버가 작동중이 아니라면 'Error:connect ECONNREFUSED 127.0.0.1:3000' 뭐 이런 메시지가 나옵니다. 우리의 예제에서는 터미널에서 'nodemon app 엔터' 했던거 기억나시죠? 이거해야 서버가 작동하도록 했잖아요  

3. save버튼 - New Collection - ( 이름 bookstore ) - Save - 왼쪽메뉴에 나타남    
<img width="515" alt="스크린샷 2023-03-25 오전 10 20 36" src="https://user-images.githubusercontent.com/48478079/227676723-5c4d47a7-b92a-49b1-b009-bb9154594620.png">     
이제 이 api를 선택할때마다 내용을 입력하지 않고도 조금전의 그 결과를 얻을 수 있습니다.   

4. 1개의 문서를 api 만들기
<img width="548" alt="스크린샷 2023-03-25 오전 10 30 10" src="https://user-images.githubusercontent.com/48478079/227678067-c8aed73d-e5b0-42ee-8b0f-af371a7ae98d.png">

5. POST 방식으로 
[app.js] 내용을 변경합니다
```
// 미들웨어 부분에 추가하세요
app.use(express.json())

// POST
app.post('/books', (req,res)=>{
 const book = req.body

 db.collection('books')
 .insertOne(book)
 .then(result =>{
    res.status(201).json(result)
 })
 .catch(err =>{
  res.status(500).json({err :'Could not create a new document'})
 })
})

```   
위의 내용을 POSTMAN으로 만들어보겠습니다. 추가할 내용에는 아래 데이터를 사용하세요    
```
{
"title" : "구름빵",
"author" :"황미나",
"rating":9,
"pages": 35,
"genres" :[
    "fantasy",
    "children"
],
"reviews":[
    {
        "name":"Yoon",
        "body":"Worth to read"
    },
    {
        "name":"kim",
        "body": "Very good"
    }
]
} 
```



<img width="537" alt="스크린샷 2023-03-25 오전 10 40 55" src="https://user-images.githubusercontent.com/48478079/227679034-51169747-3272-47f2-af2f-aeb23bd52d0d.png">    
Send버튼 후에 아래쪽부분에서 insertedId까지 나왔다면   
왼쪽메뉴에서 모든 문서를 보여주는 url를 선택한 뒤 해당 문서가 삽입되어 있는지 확인합니다. (보이지 않는다면 해당 탭을 닫고 다시 request를 보내면 됩니다 )   



이제 1개의 문서만 불러오겠습니다.  
get명령을 이용하여 검색해 봅니다. 생성된 "Id" 를 사용하면 됩니다 아래와 같이 url옆에 해당 id를 붙여넣습니다.      

<img width="400" alt="스크린샷 2023-04-10 오후 4 48 23" src="https://user-images.githubusercontent.com/48478079/230853955-422b1bc5-2bd9-4f6e-aa3b-4dee874aff7f.png">

