###### :cactus:  MongoDB_lecture

## MongoDB Atlas
(멀티 클라우드 애플리케이션 데이터 플랫폼 )

우리는 MongoDB Community Server 를 이용한 것입니다 아래의 링크를 클릭해서 로컬에 설치하도록 하겠습니다.
### MongoDB 커뮤니티 설치방법 (mac 버전입니다 )
- https://www.mongodb.com/try/download/community   
- Version, Platform , Package를 본인에게 맞게 선택하세요
- Mac 프로에서 설치시 '확인되지 않은 개발자'로 나오면서 설치가 되지 않는다면 사과 > 시스템설정 > 개인정보 보호 및 보안 > 보안 : App Store 로 바꿔서 실행하세요

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
3. mongosh 엔터   
실행되면 검정화면에 노란색 줄무늬와 함께 ``` test> ``` 가 나옵니다 
<img width="273" alt="스크린샷 2023-03-23 오후 9 45 28" src="https://user-images.githubusercontent.com/48478079/227207744-7ee146d5-628c-44e5-af66-8d9f3ea17aad.png">
