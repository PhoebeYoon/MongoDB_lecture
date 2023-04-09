###### :cactus:  MongoDB_lecture

## MongoDB Drivers
https://www.mongodb.com/docs/drivers/ 접속하면 응용프로그램과 MongoDB를 연결해서 개발을 할수있습니다.   

위의 사이트를 접속하고, 우리는 Node.js를 사용할 예정이니  
node.js Driver (왼쪽 메뉴 중)선택 >'Fundamentals '> 'Connect to MongoDB' > 'How to Connect to MongoDB'를 선택합니다.   
일단 뭐 연결을 해야 다음 작업을 계속할 수 있으니 mongodb와 연결하는 것부터 보겠습니다.   
 _(그리고 이쯤에서 다시 말씀드리는데 node.js나 서버의 작동에 대해 적정한 수준의 경험이 없다면, 이해가 좀 어려울수 있습니다.)_

#### - 그럼 왜 driver라는 것을 사용하는건가요
위에 적힌 사이트를 방문하면 왼쪽에 C Driver, C++ Driver, Java Drivers, PHP Driver, Python Drivers등등이 있습니다. 그럼 이 driver라는 것이 대체 무슨 역할을 하는지 비유로 설명드리겠습니다.   


아마 사용하는 컴에 여러가지 장치 예를들면 프린터, 드로잉 타블렛등을 사용해보신 분들이라면 해당 기기를 구매해서 전원 on 하고 내 컴퓨터에 꽂는다고 바로 사용할 수 있는 것이 아니라는 것을 아실 것입니다. 사용하는 컴퓨터에게 현재 어떤 기기 (키보드, 마우스, 타블렛, 프린터 등등)가 연결되어 있는지 알려주고 이것을 관리하도록 해야 하는데, 이런 역할을 하는 것이 driver라는 것입니다.  새로운 기기를 구매해서 사용할때 이 driver라는 것이 자동설치가 되어서 아마 인식하지 못하는 분들이 있으실것입니다.  마찬가지로 이런 역할을 하는 것이 mongodb에도 필요한데  그것이 위에 언급된 것입니다. 
<img width="500" alt="스크린샷 2023-04-09 오전 10 47 23" src="https://user-images.githubusercontent.com/48478079/230750062-f3bc89f1-75ec-4e07-8163-022077a67241.png">


#### - mongoose라는 것이 있는데 이게 MongoDB Driver모듈입니다. 
이것은 데이터베이스 연결, 스키마정의, 스키마에서 모델로 변환, 모델을 이용해 데이터를 다루는데 프로미스와 콜백도 사용가능합니다.   위에서 언급한 순서를 따라가면 'Connection URL' 이라는 페이지가 나오는데 잠시 설명하도록 하겠습니다 ( 설명이 길어서 오프라인 설명드립니다 )





> ODM ( Object Document Mapping)으로해 객체와 문서를 1대1로 매칭시켜줍니다. mongodb에 있는 데이터를 node.js에서 javascript객체로 사용할 수 있도록 해줍니다. 아무로 실습을 진행하면서 다시 언급될 것입니다.   

 
