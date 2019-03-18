# Angular CLI 알아보기

### 설치하기
```
npm install -g @angular/cli    // 설치하기 
ng --version 		       // 설치버전확인
```
### 프로젝트만들기
```
ng new {디렉토리명}  // 프로젝트 만들기
ng serve --open     // 브라우저 시작
```
#### src구조
- [main.ts] 
  > 첫시작스크립트
- [app.module.ts] 
  > 기본 component와 module을 선언 
- [style.css] 
  > 공통css
- [app] 
  > 사용될 module.ts와 component(html, ts, css)파일
- [asset] 
  > img
- [environments] 
  > build된 환경변수들이 environments.prod.ts에서 environments.ts로 덮어씌워짐

#### Module이란
- 세부 구현이 숨겨지고 공개API를 이용해 다른코드에서 재사용 가능한 코드(변수의 스콥이 모듈로 제한)

#### Component이란
- 자신만의 template와 로직을 가지고 있다.


=================================================================================================

# Todo list 예제만들기



![title](https://github.com/jangmang/pub/blob/master/1.PNG "es6")


