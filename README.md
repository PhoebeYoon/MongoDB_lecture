###### :cactus:  MongoDB_lecture

MongoDB는 C++로 만들어진 Document-Oriented Cross-platform Database입니다.  이것은 Not Only Sql중의 하나로 기존의 RDBMS의 한계를 극복하기 위해 만들어진 새로운 형태의 데이터저장소입니다. 관계형 DB가 아니기 때문에 RDBMS처럼 고정된 스키마나 join이 존재하지 않습니다. 
MongoDB를 사용하는 이유 중 하나는 최신 객체지향 언어를 사용하는 개발자의 관점에 매우 적합합니다. 

> 스키마란 ? 개체의 특성을 나타내는 속성(Attribute)과, 속성들의 집합으로 이루어진 개체(Entity), 개체 사이에 존재하는 관계(Relation)에 대한 정의와 이들이 유지해야 할 제약 조건을 기술한 것입니다.

MongoDB는 고정된 스키마가 없기 때문에 필요할때마다 쉽게 field를 추가,삭제할 수 있습니다.  또한 분산확장에 유리하다. 즉 document 지향 데이터모델은 데이터를 여러 서버에 더 쉽게 분산하게 해줍니다.

> 여기에 말하는 Document는 우리가 흔히 생각하는 워드나 엑셀에서 사용되는 것을 말하는 것이 아니라 RDBMS의 레코드와 비슷한 개념으로 key-value쌍으로 이루어져 있습니다 (json과 비슷하다고 생각하세요 )


## 설치방법
MongoDB 공식 홈페이지의 다운로드 페이지에서 MSI 파일로 설치하면
C:\Program Files\MongoDB\Server\3.2\bin\ 에 설치됩니다.

## Before you start 
이 과정은 프로그래밍 언어를 알고 있어야 가능하며, node에 대한 체험이 있어야 합니다. 그리고 json에 대해 학습을 한후에 이 과정을 하실 것을 권장합니다 

## 수업은 이렇게 진행되요
1. MongoDB는 뭔가요
2. MongoDB 설치하기
3. Collection & Documents
4. Using MongoDB compass
5. MongoDB 셀 이용하기
6. 새 Document 추가하기
7. Finding Documents
8. Sorting & Limiting Data
9. Nested Documents
10. Operator & Complex Queries
11. Using $in & $nin
12. Quering Arrays
13. Deleting Documents
14. Updating Documents
15. MongoDB Drivers
16. MongoDB 연결하기
17. Cursors & Fetching Data
18. Finding Single Documents
19. Using POSTMAN
20. Handing POST Requests
21. Handling DELETE Requests
22. PATCH Requests
23. Pagination
24. Indexes
25. MongoDB Atlas

## 경험할 Tools
- 몽고디비 shell, 
- POSTMAN (포스트맨은 개발자들이 API를 디자인하고 빌드하고 테스트하고 반복하기 위한 API 플랫폼 )
- MongoDB Atlas(클라우드 데이터베이스 플랫폼)
- mongoose는 몽고DB와 Express.js 웹 애플리케이션 프레임워크 간 연결을 생성하는 자바스크립트 객체 지향 프로그래밍 라이브러리이다.


[ Moongo DB ]     
<img width="400" alt="스크린샷 2023-04-06 오후 4 50 55" src="https://user-images.githubusercontent.com/48478079/230311317-99b1560c-3a67-466f-9887-6164a7eda3e3.png">
