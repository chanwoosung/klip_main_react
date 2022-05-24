# 코드 확인법

json-server 와 npm run start를 한 터미널 내에서 한 번에 실행을 위하여 concurrently를 설치 하였습니다.

터미널에서  `npm install concurrently`를 먼저 설치바랍니다.

json-server 는 localhost의 9000번 포트에서 실행 될 것입니다.

설치 후에 `npm run test`를 통해 실행합니다.

## 미구현 항목

`faker.js`를 통해 데이터를 넣어야한다고 기재되어있었으나 faker.js 내부의 에러인지 CORB 에러로 인해 이미지가
출력되지 않고있습니다.
이에 대한 에러 처리는 마땅한 이미지가 없기에 현재 X 이미지로 onError 처리 해놓았습니다.
슬라이드 메뉴에는 넣을 컨텐츠와 이미지가 없기에 애니메이션만 구현했습니다.