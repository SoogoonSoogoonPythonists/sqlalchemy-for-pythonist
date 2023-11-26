# SQLAlchemy 가이드 문서에 기여하는 방법

먼저, 귀한 시간을 내어 SQLAlchemy 가이드에 기여해주셔서 감사합니다.

어떠한 형태로든지 이 프로젝트에 기여해주시는 것은 매우 감사한 일입니다. 이 [목차](#목차)를 보시고, 어떤 방법으로 이 프로젝트에 기여하실 수 있는지, 어떻게 관리되는지 살펴보세요. 이 프로젝트는 여러분들의 기여를 기다립니다. 🎉

## 목차

- [질문 있습니다](#질문-있습니다)
- [기여하고 싶어요](#기여하고-싶어요)
- [버그 리포팅](#버그-리포팅)
- [개선안 제안하기](#개선안-제안하기)
- [코드 기여방안 안내](#코드-기여방안-안내)
- [문서 기여방안 안내](#문서-기여방안-안내)
- [스타일 가이드](#스타일-가이드)
- [커밋 메시지](#커밋-메시지)
- [프로젝트 팀 채널에 참여하세요](#프로젝트-팀-채널에-참여하세요)


## 질문 있습니다

> 질문하시면, 기본적으로 해당 [문서](/README.md)를 읽고 오셨음을 가정합니다.

질문하기 전에 도움이 될 만한 기존 [이슈](/issues)를 검색하는 것이 가장 좋습니다. 적절한 이슈를 찾았지만 여전히 설명이 필요한 경우 이 이슈에 질문을 작성할 수 있습니다. 또한 인터넷에서 먼저 답을 검색하는 것이 좋습니다.

그런 다음에도 여전히 질문이 필요하고 설명이 필요한 경우 다음을 권장합니다:

- [새 이슈](/issues/new)를 엽니다.
- 어떤 문제가 발생했는지 가능한 한 많은 컨텍스트를 제공해 주세요.
- 관련성이 있다고 판단되는 경우 프로젝트 및 플랫폼 버전(`Node.js`, `yarn` 정보 등)을 알려주세요.

그러면 최대한 빨리 문제를 살펴볼 수 있습니다.

## 기여하고 싶어요

> ### 법적 내용 고지
>
> 이 프로젝트에 기여한다는 것은 콘텐츠의 100%를 본인이 작성했으며, 콘텐츠에 필요한 권리를 보유하고 있으며, 기여한 콘텐츠가 프로젝트 라이선스에 따라 제공될 수 있다는 데 동의함을 의미합니다.

### 버그 리포팅

#### 버그 리포트를 제출하기 전

좋은 버그 리포트는 다른 사람들이 더 많은 정보를 얻기 위해 여러분을 쫓아다녀야 하는 상황을 만들지 않아야 합니다. 따라서 신중하게 조사하고 정보를 수집한 후 버그 리포팅 문서에 문제를 자세히 설명해 주시기 바랍니다. 잠재적인 버그를 최대한 빨리 수정할 수 있도록 다음 단계를 미리 완료해 주세요.

- 최신 버전을 사용하고 있는지 확인해 주세요.
- 호환되지 않는 환경 구성 요소/버전을 사용하는 등 사용자 측의 오류가 아닌 실제 버그인지 확인합니다([문서](/README.md)를 읽어보시기 바랍니다). 추가적인 지원을 찾고 있다면 [이 섹션](#질문-있습니다)을 확인해 보세요).
- 다른 사용자가 현재 겪고 있는 것과 동일한 문제를 경험했는지(이미 해결되었을 수도 있음) 확인하려면 [GitHub 이슈](/issues)에서 해당 버그나 오류에 대한 버그 리포트가 이미 존재하지 않는지 확인해 주세요.
- 또한 인터넷(StackOverflow 포함)에서 검색하여 GitHub 커뮤니티 외부의 사용자가 해당 문제에 대해 논의했는지 확인해 주세요.
- 버그에 대한 정보를 수집하세요:
    - 스택 추적(트레이스백)
    - OS, 플랫폼 및 버전(Windows, Linux, macOS, x86, ARM)
    - 관련성이 있다고 판단되는 경우 인터프리터, 컴파일러, SDK, 런타임 환경, 패키지 관리자 버전.
    - 입력 및 출력
- 문제를 안정적으로 재현할 수 있나요? 그리고 이전 버전에서도 재현할 수 있나요?

#### 버그 리포트는 어떻게 제출하나요?

> 민감한 정보를 포함한 보안 관련 문제, 취약성 또는 버그를 이슈 트래커나 다른 공개적인 곳에 보고해서는 안 됩니다. 대신 민감한 버그는 [Slack 채널](https://join.slack.com/t/soogoonx2pythonists/shared_invite/zt-t8kvz57l-j~qJOhSP47annEB31QOLIQ)을 통해 보내주시기 바랍니다.

저희는 버그와 오류를 추적하기 위해 GitHub 이슈를 사용합니다. 프로젝트에 문제가 발생하면 다음과 같이 진행해주세요:

- [이슈를 엽니다](/issues/new). (이 시점에서는 버그인지 아닌지 확신할 수 없으므로 아직 버그에 대해 이야기하지 말고 이슈에 레이블을 지정하지 마세요.)
- 예상되는 동작과 실제 동작을 설명해 주세요.
- 가능한 한 많은 컨텍스트를 제공하고 다른 사람이 직접 문제를 재현하기 위해 따를 수 있는 *재현 단계*를 설명해 주세요. 여기에는 일반적으로 코드가 포함됩니다. 좋은 버그 리포트를 작성하려면 문제를 분리하고 축소된 테스트 케이스를 만들어야 합니다.
- 이전 섹션에서 수집한 정보를 제공해 주세요.

신고가 접수되면:

- 프로젝트 팀에서 그에 따라 문제에 라벨을 붙입니다.
- 이후 처리 사항에 따라 별도의 태그가 붙여집니다.

### 개선안 제안하기

이 섹션에서는 완전히 새로운 기능 및 기존 기능에 대한 사소한 개선 사항을 포함하여 `CONTRIBUTING.md` 에 대한 개선 제안을 제출하는 방법을 안내합니다. 이 가이드라인을 따르면 관리자와 커뮤니티가 제안을 이해하고 관련 제안을 찾는 데 도움이 됩니다.

#### 개선안을 제안하시기 전

- 최신 버전을 사용하고 있는지 확인해 주세요.
- [문서](/README.md)를 주의 깊게 읽고 해당 기능이 이미 개별 설정에 포함되어 있는지 확인합니다.
- [이슈 검색](/issues) 후, 개선 사항이 이미 제안되었는지 확인합니다. 이미 제안되었다면 새 이슈를 여는 대신 기존 이슈에 댓글을 추가해 주세요.
- 여러분의 아이디어가 프로젝트의 범위와 목표에 맞는지 확인해 주세요. 프로젝트 개발자에게 이 기능의 장점을 설득할 수 있는 강력한 사례를 만드는 것은 여러분의 몫입니다. 일부 사용자가 아닌 대다수의 사용자에게 유용한 기능을 원한다는 점을 명심해 주세요. 소수의 사용자만 타겟팅하는 경우 애드온/플러그인 라이브러리를 작성하는 것을 고려해 주세요.

#### 좋은 개선안을 제출하는 방법

개선안은 [GitHub issues](/issues) 로 트래킹 됩니다.

- 제안을 식별할 수 있도록 이슈에 **명확하고 요점이 정리된 제목**을 사용해 주세요.
- 제안된 개선 사항에 대한 **단계별 설명**을 최대한 자세하게 제공해 주세요.
- 현재 동작을 **설명**하고 대신 어떤 동작이 표시되기를 기대했는지**와 그 이유를 설명해 주세요. 이 시점에서 어떤 대안이 효과가 없는지도 설명할 수 있습니다.
- 단계를 설명하거나 제안과 관련된 부분을 지적하는 데 도움이 되는 스크린샷과 애니메이션 GIF를 **포함**할 수 있습니다. macOS 및 Windows에서는 [이 도구](https://www.cockos.com/licecap/)를, Linux에서는 [이 도구](https://github.com/colinkeenan/silentcast) 또는 [이 도구](https://github.com/GNOME/byzanz)를 사용하여 GIF를 녹화할 수 있습니다. 
- 이 개선 사항이 대부분의 CONTRIBUTING.md 사용자에게 **왜 유용한지** 설명해 주세요. 또한 이 문제를 더 잘 해결하고 영감을 줄 수 있는 다른 프로젝트에 대해서도 언급할 수 있습니다.

### 코드 기여방안 안내

코드 기여 방안은 아래와 같이 진행됩니다.

1. 이슈 생성
2. PR 리뷰
3. 머지

### 문서 기여방안 안내

문서를 개선하기 위해 로컬에서 `vuepress`를 구동하여 확인해볼 수 있습니다.

이를 위해 로컬에서 구동하는 방법을 기술합니다.

#### 로컬 구동방법

#### 사전 설치

- Node.js 18 LTS 이상의 [Node.js](https://nodejs.org/en) 런타임
    - [(추천) `nvm`](https://github.com/nvm-sh/nvm)
- [yarn](https://classic.yarnpkg.com/en/docs/install)

#### 설치 방법

아래 명령어를 입력하여, 필요한 라이브러리를 모두 설치합니다.

```shell
nvm install --lts=Hydrogen # 18.x 버전, 혹은 그 이상
nvm use --lts=Hydrogen
```

```shell
npm install --global yarn   # yarn 패키지 관리자 설치
```

```shell
yarn install    # yarn 패키지 관리자를 이용한 라이브러리 설치
```

#### 구동 방법

- 로컬 구동[1]
```shell
yarn dev
```

- 로컬 빌드
```shell
yarn build
```

## 스타일 가이드

이 구절에서는 본 프로젝트의 스타일 가이드에 대해 기술합니다.

### 커밋 메시지

아래 룰을 지켜서 커밋 메시지를 작성해 주세요.

- `[제목]` 은 영어로 작성합니다.
- 커밋의 제목부분은 "_~한다_" 형식으로 기재합니다.
- 추가적인 작업내용은 아래와같이 기재합니다.

```
[제목] ~를 ~한다

- 작업내용 1을 기재한다
- 작업내용 2를 기재한다
```

## 프로젝트 팀 채널에 참여하세요

README 페이지에 가이드된 Slack 워크스페이스로 오시면 됩니다([📎 슬랙 채널 참여](https://join.slack.com/t/soogoonx2pythonists/shared_invite/zt-t8kvz57l-j~qJOhSP47annEB31QOLIQ)).

[1]: `Node.js` 18.x의 경우, 아래 내용을 환경 변수로 담아주어야 정상작동을 합니다. ([참고 링크](https://github.com/SoogoonSoogoonPythonists/sqlalchemy-for-pythonist/pull/30#issue-2010749637))