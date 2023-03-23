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

- 스키마를 사용하지 않는다는 것은 다양한 형태의 데이터를 저장할 수 있다는 말이며, 데이터 모델의 유연한 변과가 가능하다. 데이터모델이 변경가능하고 필드를 쉽게 확장할 수 있다.
- json 구조이기 때문에 데이터를 직관적으로 이해할 수 있다
- 비효율적인 key 중복입력될 수 있다.
- 많은 인덱스를 사용할 수 있다
- memory  mapped (데이터 쓰기에 os의 가상 메모리에 데이터를 넣은 후 비동기로 디스크에 기록하는 방식)을 사용한다.
- os의 메모리를 활용하기 때문에 메모리가 차면 하드디스크로 데이터처리를 하여 속도가 급격히 느려지나


<img width="500" alt="스크린샷 2023-03-23 오후 3 03 15" src="https://user-images.githubusercontent.com/48478079/227118618-f2e757fc-383c-4803-9361-cb59d96358e6.png">      

간단한 document의 구조를 아래와 같다.  
``` 
{
   _id: ObjectId(7df78ad8902c)
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100, 
   comments: [	
      {
         user:'user1',
         message: 'My first comment',
         dateCreated: new Date(2011,1,20,2,15),
         like: 0 
      },
      {
         user:'user2',
         message: 'My second comments',
         dateCreated: new Date(2011,1,25,7,45),
         like: 5
      }
   ]
}

```  
MongoDB에는 12bytes의 hexadecimal값으로 이루어진 _id가 자동으로 생성되며 각 document에서 유일한 값을 가지고 있습니다.
12bytes 중 timestamp로4byes, machine id로 3byte, MongoDB서버의 프로세스 id로 2bytes, 나머지 3bytes는 순차번호입니다. 이것은 레코드가 생성될때마다 값이 높아지는 것입니다.  



## JSON 표기법
- 각 객체는 {  } (중괄호)로 시작하고 끝난다.
- 문자열과 값으로 구성되어 있고 콜론(:)으로 구분한다
- 각 멤버는 콤마(,)로 구분
- 값으로는 object, string, number, array, boolearn, null 사용
- 문자는 따옴표를 사용하여 표기
- 배열은 [  ] (대괄호)로 시작
