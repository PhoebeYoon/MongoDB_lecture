###### :cactus:  MongoDB_lecture

####  다른 방법으로 MongoDB 경험해보기 
우리는 이미 shell를 이용해서 디비를 만들고 컬렉션에 문서를 삽입까지 해 보았습니다. 이번에는 mongodb compass라는 것을 이용해 보도록 하겠습니다. mongodb compass에 대한 자세한 내용이 아니라 이전 shell 에서 했던 실습을 compass를 사용해서 해보는 것입니다.

## MongoDB compass 설치하기   
Compass는 MongoDB 데이터를 쿼리, 최적화 및 분석할 수 있는 대화형 도구입니다. 중요한 인사이트를 찾아내고, 드래그 앤 드롭으로 파이프라인을 구축하는 등 여러 가지 기능을 제공합니다.   
https://www.mongodb.com/try/download/compass 다운로드 후 어플리케이션으로 이동하고 실행합니다. 
<img width="600" alt="스크린샷 2023-04-08 오후 12 43 27" src="https://user-images.githubusercontent.com/48478079/230701733-9b68148d-46be-4271-aa6b-27b28a10752d.png">

 화면 중앙에 있는  local 주소를 확인하세요. 본인컴의 url 입니다. 그리고  오른쪽에 있는 녹색의 connet 버튼 클릭합니다.   
 그러면 왼쪽위에 녹색바탕에 compass라고 적힌 부분에 localhost:27017이라고 바뀌었습니다.  
 
 <img width="250" alt="스크린샷 2023-04-08 오후 12 46 23" src="https://user-images.githubusercontent.com/48478079/230701841-cb38af39-41c2-4e19-8577-afc7571e93b5.png">

 
이렇게 나오지 않는다면 메뉴에서 (윈도우 경우) 'Services > MondoDB server를 찾아 실행중인지 확인 '   

## database 만들어보기  
1. 
<img width="400" alt="스크린샷 2023-04-08 오후 12 50 10" src="https://user-images.githubusercontent.com/48478079/230701960-fb5df902-2c21-4eac-9916-d537a9cb3e57.png">

2. 
<img width="381" alt="스크린샷 2023-04-08 오후 12 53 12" src="https://user-images.githubusercontent.com/48478079/230702069-82c2682f-e248-40d6-829e-d6ed91cc5e4b.png">
아까 사용했던 데이터 중 1개를 먼저 입력해 보세요. 아마도  여러분은 이런 <img width="364" alt="스크린샷 2023-04-08 오후 1 02 37" src="https://user-images.githubusercontent.com/48478079/230702353-b26b34de-33cc-4306-9772-29b0abbd3e61.png">경고메시지가 나올것입니다.   
이 에러메시지가 사라지게 해보세요. 데이터를 어떻게 입력해야 하는지 잠시 생각해보시기 바랍니다.  

3. 그냥 습관적으로 복사붙여넣기를 하다보면 알아야 내용을 놓칠수가 있습니다. 여러번 시도해보신 분들만 아래 내용대로 해 보세요 
```
{ 
"item": "journal", 
"qty": 25, 
"size": { "h": 14, "w": 21, "uom": "cm" }, 
"status": "A" 
}
```     
shell에서 입력했던것과 비슷해보이지만 키값을 더블쿼테이션마크로 감쌌습니다. 이제 녹색의 Insert버튼이 열릴것입니다.    
자 이번에는 나머지 데이터를 모두 입력해 보세요. 여기서도 잠시 시간을 드리겠습니다. 여러개의 데이터라고 말씀드렸어요. 

자 여러번 시도해 보신 분들만 아래 내용을 참조해서 입력해보세요. 그리고 어떤부분을 놓쳤는지도 아시게 될것예요. 

```
[
{ "item": "notebook", "qty": 50,  "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "A" },
{ "item": "paper",    "qty": 100, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "D" },
{ "item": "planner",  "qty": 75,  "size": { "h": 22.85, "w": 30, "uom": "cm" }, "status": "D" },
{ "item": "postcard", "qty": 45,  "size": { "h": 10, "w": 15.25, "uom": "cm" }, "status": "A" }
]
```





