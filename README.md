###### :cactus:  MongoDB_lecture

## POSTMAN 이란
api를 구축하고 사용하기 위한 api 플랫폼입니다. api 라이프사이클의 각 단계를 간소화하고 협업을 간소화하여 더 나은 api를 빠르게 만들수 있습니다.  말이 좀 어렵죠?  

HTTP를 이용하여 클라이언트와 서버가 통신을 하는데 이때 사용하는 메서드는 GET / POST / PUT / DELETE 입니다. 아마 어딘가에서 한번쯤은 들었을 REST가 여기서 나오는 것입니다      
REST는 Representational State Transfer의 약자이다. 이것은 URI 를 자원으로 하고 HTTP method를 이용하여 뭔가를 표현한다는 의미입니다     
HTTP의 메소드는 위에서 언급한 GET(조회) / POST(등록) / PUT(수정) / DELETE (삭제) 입니다.     
여기서 POSTMAN이 무슨 역할을 하냐면 바로 http 메소드를 도와주는 프로그램입니다. 어떻게 도와주냐?  테스팅을 해볼 수 있게 하는 gui툴 입니다. 


## 설치하기 
https://www.postman.com/ 접속하시고 본인의 운영체제에 맞게 다운로드 후 설치하세요 
( 회원가입이 필요할 수 있습니다 )  
실행후에는 아래와 같은 화면이 나타납니다   


<img width="369" alt="스크린샷 2023-03-25 오전 10 00 24" src="https://user-images.githubusercontent.com/48478079/227671685-d10c9464-787c-4d47-b7cd-7511a2084fb3.png">'

## 시작하기
1. File > New Tab 또는 아래의 이미지처럼 + 클릭합니다 

<img width="550" alt="스크린샷 2023-03-25 오전 10 02 46" src="https://user-images.githubusercontent.com/48478079/227672788-c2300abd-7e83-4790-abfe-b93e16361cc6.png">

2.  브라우저에서 사용했던 url를 GET 옆에 적어주고 Send 버튼을 클릭하면 아래쪽에 데이타가 쭈욱 나타납니다. 
<img width="694" alt="스크린샷 2023-03-25 오전 10 15 03" src="https://user-images.githubusercontent.com/48478079/227674888-544228ac-f17f-452e-ad81-037b943ab281.png">

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
위의 내용을 POSTMAN으로 만들어보겠습니다 

<img width="537" alt="스크린샷 2023-03-25 오전 10 40 55" src="https://user-images.githubusercontent.com/48478079/227679034-51169747-3272-47f2-af2f-aeb23bd52d0d.png">    
Send버튼 후에 아래쪽부분에서 insertedId까지 나왔다면   
왼쪽메뉴에서 모든 문서를 보여주는 url를 선택한 뒤 해당 문서가 삽입되어 있는지 확인합니다  
