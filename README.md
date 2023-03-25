###### :cactus:  MongoDB_lecture


우리는 MongoDB Community Server 를 이용한 것입니다 아래의 링크를 클릭해서 로컬에 설치하도록 하겠습니다.
### MongoDB 설치방법 (mac 버전입니다 )

- https://www.mongodb.com/try/download/community   
- Version, Platform , Package를 본인에게 맞게 선택하세요
- 윈도우 사용자는 3. 📎 으로 넘어가세요  
- Mac에서 설치시 '확인되지 않은 개발자'로 나오면서 설치가 되지 않는다면 사과 > 시스템설정 > 개인정보 보호 및 보안 > 보안 : App Store 로 바꿔서 실행하세요

- ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" ``` 
- 위의 내용을 실행하고 비번과 계속하려면 Enter를 입력하라고 나옵니다. Enter를 하고 잠시기다리면  "Next steps:"라고 하면서 터미널에서 2개의 명령어를 실행하여 PATH에 추가하라고 합니다.  
이 부분이 잘 해야 합니다. 이미 터미널창에 있을 것입니다. 그곳에서 ``` vi ~/.zshrc  ``` 엔터   
그럼 vi편집기로 넘어갑니다  당황하지말고 알파벳  ```  e ```  편집명령을 줍니다. 혹시 삽입을 할때는 ```i ```를 사용합니다  
그리고 비슷한 path 가 있는 부분을 찾아 그곳에 공간을 만들고    
```    
HOMEBREW_HOME = 여기에 터미널창에 나온 경로를 적어줍니다
MYSQL_HOME = /usr/local/mysql
export PATH=${PATH}:${HOMEBREW_HOME}/bin:${MYSQL_HOME}/bin
```  
을 입력합니다. esc를 한번 클릭하고 ``` :wq ```를 연달아 누릅니다. 그럼 저장하고 빠져나오게 됩니다.  

- 잘 되었는지 확인하기위해 ``` brew -v ```  숫자가 나오면 잘 된것입니다. 이제 mongoDB를 설치하도록 하겠습니다. 
1. brew tap mongodb/brew
2. brew install mongodb-community    
3. mongosh 엔터 📎   
실행되면 검정화면에 노란색 줄무늬와 함께 ``` test> ``` 가 나옵니다 
<img width="273" alt="스크린샷 2023-03-23 오후 9 45 28" src="https://user-images.githubusercontent.com/48478079/227207744-7ee146d5-628c-44e5-af66-8d9f3ea17aad.png">   
여기까지는 shell 방식으로 설치를 한것입니다     

MongoDB는 자바스크립트 플랫폼을 이용하기 때문에 일반 터미널에서 아래와 같이 사용할 수도 있습니다.
``` 
test> for(var i=0; i<3; i++) {print("i=" + i)} 
test> let name ="Hong gil dong"
test> name
```


아래와 같이 실행해봅니다. default인것이 출력됩니다.   디비를 보여달라고 할때 use를 사용합니다.
```
test> show dbs 
admin
config
local
```
디비를 만들거나 사용하고자 할때 use 명령을 사용합니다.  
아래의 예를 보시기 바랍니다.  방금 mydb라는 디비를 생성했습니다. 그러나 collection를 보여달라고 (show  collections ) 하면 collection이 없기때문에 아무내용도 나오질 않습니다.  
현재 사용 중인 디비를 알려면 db라고 입력하면 됩니다.   
```
test> use mydb
mydb> show collections
mydb> db
```   
자, 여기서 정리를 하자면,  

```  
test> cls - 터미널화면을 지울때 
test> show dbs - 현재 디비들을 보여줍니다 
test> use mydb - db를 생성했다고 생각되지만 
mydb> show dbs - mydb가 목록에 없습니다. 
mydb> db - 현재 사용중인 디비를 확인했을때 mydb가 출력되지만 진짜 생성된것은 아닙니다 
최소 1개이상의 document가 추가되어야 그때 진짜 생성되는 것입니다.   
mydb> db.콜렉션이름.insert() - insert() 명령을 사용해서 문서를 생성하면 디비와 collection이 만들어집니다.
이렇게 입력하고 난후 아래와 같은  acknowledged:true 가 나오면 생성이 되었다는 뜻입니다. 
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("641ef51108f43add046642b8") }
}
이때 collection도 생성됩니다  콜렉션의 이름을 books라고 가정해보겠습니다. 
mydb> db.books.insert({ title: "The Lord of Rings", author: "Lee", price: 100 } )
mydb> show dbs - 목록에 mydb가 보입니다 

mydb> db.getCollectionNames() - 현재 디비의 collection 이름 알아내기 ['books']가 출력도비니다.
mydb> db.books.drop() - 현재 디비의 collection 삭제할때 콜렉션을 적습니다 
mydb> db.getCollectionNames() - []가 나옵니다.
mydb> db.dropDatabase() - 현재 디비삭제
mydb> 이렇게 나오지만 
mydb> show dbs - mydb가 목록에 없습니다
mydb> help- 입력하면 명령어에 대한 설명을 볼 수 있습니다. 
mydb> exit - mongosh 상태에서  빠저나가기가 됩니다 
```

