###### :cactus:  MongoDB_lecture



## Data type

1. String - 데이터를 저장하는 데 가장 일반적으로 사용되는 데이터 유형입니다. MongoDB의 문자열은 UTF-8이어야 합니다.  ( 이것은 가장 일반적으로 사용되는 MongoDB 데이터 유형이며, BSON 문자열은 UTF-8입니다. 각 프로그래밍 언어의 드라이버는 BSON을 직렬화 및 직렬화 해제하는 동안 언어의 문자열 형식에서 UTF-8로 변환됩니다.) 
2. Integer - 숫자 값을 저장하는 데 사용됩니다. 정수는 서버에 따라 32비트 또는 64비트일 수 있습니다.  
3. Boolean - 부울(참/거짓) 값을 저장하는 데 사용됩니다.  
4. Double - 부동 소수점 값을 저장하는 데 사용됩니다.  
5. Min/Max keys - 가장 낮은 BSON 요소 및 가장 높은 BSON 요소와 값을 비교하는 데 사용됩니다.  
6. Array - 배열, 목록 또는 여러 값을 하나의 키에 저장하는 데 사용됩니다.  
7. Timestamp - ctimestamp. 이것은 문서가 수정되거나 추가되었을 때 기록하는 데 유용할 수 있습니다.  
8. Object- 이 데이터 유형은 내장된 문서에 사용됩니다.  
9. Null - 이 유형은 Null 값을 저장하는 데 사용됩니다.  
10. Symbol - 이 데이터 형식은 문자열과 동일하게 사용되지만 일반적으로 특정 기호 유형을 사용하는 언어에 사용됩니다.  
11. Date- 현재 날짜 또는 시간을 UNIX 시간 형식으로 저장하는 데 사용됩니다. 날짜 개체를 만들고 일, 월, 년을 넘겨 날짜 시간을 지정할 수 있습니다.  
12. Object ID - 이 데이터 유형은 문서의 ID를 저장하는 데 사용됩니다.  
13. Binary data - 이진 데이터를 저장하는 데 사용됩니다.  
14. Code - JavaScript 코드를 문서에 저장하는 데 사용됩니다.  
15. Regular expression - 이 데이터 유형은 정규식을 저장하는 데 사용됩니다.   


##### :walking: 데이터 타입을 이용한 작은 연습을 해보겠습니다  
```
test> var df = BinData(1,"123as3d")
test> db.BinaryCollection.insert({_id:ObjectId(), comments:"This is am example", valueBinary:df })
test> db.BinaryCollection.find()
```

여기서 BinData() - Creates a binary data object이며  사용된 BinaryCollection는 임의의 컬렉션이름입니다.  
BinData의 옵션은 링크 https://www.mongodb.com/docs/manual/reference/method/BinData/ 에서 찾아보세요  




아래의 내용에서는 회색으로 되어 있는 부분에 어떤 내용이 표현되어 있는지 보시면 됩니다. 그리고 "x"는 그냥 key로 , 형식에 맞추어 쓰고자해서 넣은것이고 여기서 별다른 의미는 없습니다.    
- null : null 값과 존재하지 않는 필드를 표현할때 사용,  ``` "MobNo" ; null ``` 이런식으로 저장할 수 있다
- 날짜  
```  
test>var date1 = Date()
test>var date2 = new Date()
test>var date3= ISODate()

test>var myDate = new Date();
test>var myDateInitUsingISODateWrapper = ISODate();
```
- undefined 도 값으로 저장할 수 있다. ``` 생략 "duration" : undefined  ```


## shell 에서 스크립트 실행하기 및 종료
```
> mongosh   <-- 시작
test> exit  <-- 종료
```       

### shell 명령어들
 - 첨부된 pdf 파일을 다운로드 하세요. 아주 기본 명령어들입니다. 명령어의 형태가 쉽고 단순합니다. 




 

