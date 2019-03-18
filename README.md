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
  첫시작스크립트
- [app.module.ts] 
  기본 component와 module을 선언 
- [style.css]
공통css
- [app] 
  사용될 module.ts와 component(html, ts, css)파일
- [asset] 
  img
- [environments] 
  build된 환경변수들이 environments.prod.ts에서 environments.ts로 덮어씌워짐

#### Angular Module의 개념
- 컴포넌트, 파이프, 서비스 등과 같은 앵귤러 애플리케이션의 주요부분을 기능단위로 그룹핑하게 해준다.
- 모든 앵귤러 애플리케이션은 하나의 Root Module을 가진다.
- 여러 Feature Module을 가질 수 있다.
- 재사용 할 수 있는 기능을 외부에 배포하기 위해 사용되기도 한다.

#### Angular Component의 개념
- 앵귤러의 핵심요소로 html요소들의 뷰와 로직으로 구성된 그룹

<br><br>
<hr/>
<br><br>

# Todo list 예제만들기

### 0. 완성된 모습
![title](https://github.com/jangmang/ang/blob/master/ex.JPG "ex")

### 1. 모듈만들기
```
ng generate module todo                                     // 모듈 생성
ng g c todo/todos --module todo/todo.module.ts --export     // 컴포넌트 생성 
```
> #### 모듈에 컴포넌트 선언된 모습
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component'; // todos컴포넌트 임포트

@NgModule({
  declarations: [TodosComponent], // todos 컴포넌트 선언
  imports: [
    CommonModule
  ],
  exports: [TodosComponent] // todos 익스포트
})
export class TodoModule { } 
```







