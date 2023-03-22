###### :cactus:  MongoDB_lecture

MongoDB는 C++로 만들어진 Document-Oriented Cross-platform Database입니다.  이것은 Not Only Sql중의 하나로 기존의 RDBMS의 한계를 극복하기 위해 만들어진 새로운 형태의 데이터저장소입니다. 관계형 DB가 아니기 때문에 RDBMS처럼 고정된 스키마마 join이 존재하지 않습니다.

여기에 말하는 Document는 우리가 흔히 생각하는 워드나 엑셀에서 사용되는 것을 말하는 것이 아니라 RDBMS의 레코드와 비슷한 개념으로 key-value쌍으로 이루어져 있습니다 

MongoDB에는 12bytes의 hexadecimal값으로 이루어진 _id가 자동으로 생성되며 각 document에서 유일한 값을 가지고 있습니다.
12bytes 중 timestamp로4byes, machine id로 3byte, MongoDB서버의 프로세스 id로 2bytes, 나머지 3bytes는 순차번호입니다. 이것은 레코드가 생성될때마다 값이 높아지는 것입니다.  


Collection는 MongoDB Document의 그룹입니다. Document들이 Collection내부에 위치하고 있습니다. Database는 Collection들의 물리적인 컨테이너입니다. Database는 파일시스템에 여러파일
Document는 동적인 스키마를 가지고 있습니다.



## 설치방법
MongoDB 공식 홈페이지의 다운로드 페이지에서 MSI 파일로 설치하면
C:\Program Files\MongoDB\Server\3.2\bin\ 에 설치됩니다.
