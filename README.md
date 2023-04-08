###### :cactus:  MongoDB_lecture


## 용어설명
1. Document : 몽고디비의 핵심은 정렬된 키와 연결된 값의 집합으로 이루어진 Document(도큐먼트)입니다. 몽고디비의 도큐먼트는 자바스크립트의 객체형태인 key/value로 이루어져있습니다.
2. Collection:  MongoDB Document의 그룹입니다. Document들이 Collection내부에 위치하고 있습니다. Database는 Collection들의 물리적인 컨테이너입니다. 
   - Collection은 동적스키마를 가집니다. 하나의 Collection내 도큐먼트들이 모두 다른 구조를 가질 수 있다는 의미입니다.  
     (예, {"greeting" : "Hello world", "views": 3} {"signoff" : "Good night"} 도큐먼트 양식이 다를 수 있습니다. 
3. 네이밍 : Collection은 이름으로 식별됩니다. utf-8문자열이 적용됩니다.    
   (데이터베이스이름이나 컬렉션이름, 필드명 등을 따로 구별하지 말고 아래와 같은 규칙으로 만들어주시면 됩니다)
	- Camel case 또는 소문자로 작성해주세요. 
	- 첫글자는 소문자로, 영문자, 숫자를 조합해서 사용하되 공백이 없어야 합니다.
	- 키워드는 사용할 수 없지만 '  _ ' , ' - '은 사용가능합니다.
	- 특수문자는 사용할 수 없습니다 ( /\.< > ? | 뭐 이런것들)
	- 대소문자를 구분하니 주의하세요
	- 몽고디비의 버전에 따라 필드명에 .과 $가 사용가능합니다 ( 3.6버전이상)
	- 64바이트 미만입니다

4. subcollection( 서브컬렉션 ) : 서브컬렉션의 네임스페이스에 .(마침표) 문자를 사용해 컬렉션을 체계화합니다.  
  ( 서브컬렉션이란 하나의 컬렉션을 체계화하는 방법으로 컬렉션안에 다른 컬렉션을 속성으로 갖는 것입니다. 자바스크립트를 예로 들면, 객체안에 있는 속성를 접근하기 위해서 사용했던 방법으로 . 을 사용했듯이)

 
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
11. 데이터형과 대소문자를 구분합니다. {"count" : 5} 와 {"count" : "5"} 다릅니다. 또한 {"count" : 5}와 {"Count" : 5}도 다릅니다
12. 키가 중복될 수 없습니다. {"greeting" : "Hello world", "greeting" :"Hi, MongoDB"} (올바른 표현이 아닙니다)
13. MongoDB는 같은 document에 다른 fields를 가질 수 있지만 같은 collection안에 있는 documents는 같은 목적를 제공하기 위해 저장됩니다

## 장-단점
- 스키마를 사용하지 않는다는 것은 다양한 형태의 데이터를 저장할 수 있다는 말이며, 데이터 모델의 유연한 변과가 가능하다. 데이터모델이 변경가능하고 필드를 쉽게 확장할 수 있다.
- json 구조이기 때문에 데이터를 직관적으로 이해할 수 있다
- 비효율적인 key 중복입력될 수 있다.
- 많은 인덱스를 사용할 수 있다
- memory  mapped (데이터 쓰기에 os의 가상 메모리에 데이터를 넣은 후 비동기로 디스크에 기록하는 방식)을 사용한다.
- os의 메모리를 활용하기 때문에 메모리가 차면 하드디스크로 데이터처리를 하여 속도가 급격히 느려집니다




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
- MongoDB에는 12bytes의 hexadecimal값으로 이루어진 _id가 자동으로 생성되며 각 document에서 유일한 값을 가지고 있습니다.
12bytes 중 timestamp로4bytes, machine id로 3byte, MongoDB서버의 프로세스 id로 2bytes, 나머지 3bytes는 순차번호입니다. 이것은 레코드가 생성될때마다 값이 높아지는 것입니다.  
- MongoDB안의 데이터베이스는 the physical container of the data. Then, in a single MongoDB server, multiple database are available, and each database has a file system and set of files in it. 


## MongoDB는 embedded 데이터모델과 정규화데이터모델의 2가지 유형의 데이터 모델을 제공한다. 
1. embedded 모델은 관련데이터를 하나의 문서에 모두 포함하는 형태로 비정규화된 데이터 모형이다.
``` 
{
	_id: ,
	Emp_ID: "10025AE336"
	Personal_details:{
		First_Name: "Radhika",
		Last_Name: "Sharma",
		Date_Of_Birth: "1995-09-26"
	},
	Contact: {
		e-mail: "radhika_sharma.123@gmail.com",
		phone: "9848022338"
	},
	Address: {
		city: "Hyderabad",
		Area: "Madapur",
		State: "Telangana"
	}
}
```

2. 정규화데이터모델
이 모델에서는 참조를 사용하여 원본 문서의 하위문서를 참조한다. 예를들면, 앞의 문서을 아래와 같이 할 수도 있다. 
 
Employee:

```
{
	_id: <ObjectId101>,
	Emp_ID: "10025AE336"
}
```   

Personal_details:    
```
{
	_id: <ObjectId102>,
	empDocID: " ObjectId101",
	First_Name: "Radhika",
	Last_Name: "Sharma",
	Date_Of_Birth: "1995-09-26"
}
```    
Contact:   
 ``` 
 {
	_id: <ObjectId103>,
	empDocID: " ObjectId101",
	e-mail: "radhika_sharma.123@gmail.com",
	phone: "9848022338"
}
```   

Address:      
```   
   {
	_id: <ObjectId104>,
	empDocID: " ObjectId101",
	city: "Hyderabad",
	Area: "Madapur",
	State: "Telangana"
}
``` 

## JSON ( JavaScript Object Notation) 표기법
- 각 객체는 {  } (중괄호)로 시작하고 끝난다.
- JSON 배열은 대괄호 블록 [  ]으로 표기합니다
- 문자열과 값으로 구성되어 있고 콜론(:)으로 구분한다
- 속성은 쌍따옴표(")로 묶어 표기하며,속성이 여러개이면 콤마(,)로 구분합니다.
- 값으로는 object, string, number, array, boolearn, null 사용
- 문자는 따옴표를 사용하여 표기


> :pencil: Kib (키비바이트 )
키비바이트(영어: Kibibyte, KiB) 또는 킬로 이진 바이트(Kilo binary byte)는 정보나 컴퓨터 저장장치의 단위이다.
1 킬로 이진 바이트 = 210 바이트 = 1,024 바이트
킬로 이진 바이트와 비슷한 동의어인 킬로바이트는 상황(이진 접두어 참조)에 따라서 103 바이트 = 1,000 바이트로 사용된다.
이런 용어의 사용은 일반 저장 미디어에서 분명한 킬로바이트 의미로 되돌려서 혼동되는 것을 방지하려는 의도에서였다. 그러므로 킬로 이진 바이트 용어는 1,024 바이트를 의미하도록 개발되었다. (참조: https://ko.wikipedia.org/wiki/키비바이트)

