# 캐시답 랜딩 웹페이지

* https://www.cashdab.org  
* https://cashdab.org  
* https://cashdab.bizcowork.co.kr  
* https://mobi-319901.web.app

# 준비

```bash
brew install nodejs && \
npm i -g firebase-tools && \
curl -fsSL https://bun.sh/install | bash
```

```bash
bun install
```

# 개발시 로컬 실행

```bash
bun start
```

## HTML 파일 웹브라우저로 렌더링

1. VSCode 확장 중 Live Preview 설치
2. 왼쪽 File explorer 패널에서 웹브라우저에서 렌더링을 원하는 html 파일 선택
3. 마우스 오른쪽 클릭 후 Show Preview 메뉴 선택

# 빌드

```bash
bun run build
```

# 배포

```bash
bun run deploy
```
