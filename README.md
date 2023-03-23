###### :cactus:  MongoDB_lecture

## MongoDB 특징
1. key-value
2. 스키마를 고정하지 않은 형테로 스키마 변경으로 오는 문제가 없고, 데이터를 구조화하여 json 형태로 저장
3. json - javascript object notation ( 자바스크립트 오브젝트 표기법)
4. join이 불가능하기 때문에 join이 필요없도록 데이터 설계
5. 메모리맵 형태의 파일엔진 db이기 때문에 메모리에 의존적으로 메모리 크기가 성능을 좌우한다.
6. 로그데이터, 이벤트 참여내역, 세션들 쌓아놓고 삭제가 없는 경웨 적합, 트랜잭션이 중요한 금융, 결제, 회원정보등에는 부적합
7. Document 데이터모델은 속성과 값의 쌍으로 이루어져 있기 때문에 하나의 document에 필요한 정보를 모두 담아야 한다. 
8. 속성은 문자열, 숫자, 날짜, 배열, 다른 Document도 가능
9. one query로 모두 해결되게끔 collection model 설계
10. join이 불가능하므로 미리 embedding 시켜야 한다.   



<img width="500" alt="스크린샷 2023-03-23 오후 3 03 15" src="https://user-images.githubusercontent.com/48478079/227118618-f2e757fc-383c-4803-9361-cb59d96358e6.png">    
<img width="170" alt="스크린샷 2023-03-23 오후 3 09 47" src="https://user-images.githubusercontent.com/48478079/227118669-731a6fe9-5360-4ddf-8cfb-54507a279c02.png">


## JSON 표기법
- 각 객체는 {  } (중괄호)로 시작하고 끝난다.
- 문자열과 값으로 구성되어 있고 콜론(:)으로 구분한다
- 각 멤버는 콤마(,)로 구분
- 값으로는 object, string, number, array, boolearn, null 사용
- 문자는 따옴표를 사용하여 표기
- 배열은 [  ] (대괄호)로 시작
