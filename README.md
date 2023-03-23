###### :cactus:  MongoDB_lecture

## MongoDB Atlas
(멀티 클라우드 애플리케이션 데이터 플랫폼 )

우리는 MongoDB Community Server 를 이용한 것입니다 아래의 링크를 클릭해서 로컬에 설치하도록 하겠습니다.
### 설치방법 (mac 버전입니다 )
- https://www.mongodb.com/try/download/community   
- Version, Platform , Package를 본인에게 맞게 선택하세요
- Mac 프로에서 설치시 '확인되지 않은 개발자'로 나오면서 설치가 되지 않는다면 사과 > 시스템설정 > 개인정보 보호 및 보안 > 보안 : App Store 로 바꿔서 실행하세요

- /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
-. 1를 설치하고 나면  "Next steps:"라고 하면서 터미널에서 2개의 명령어를 실행하여 PATH에 추가하라고 합니다. 이것까지 실행하고 난 뒤에 3번으로 넘어가시면 됩니다. 
- brew tap mongodb/brew
- brew install mongodb-community
