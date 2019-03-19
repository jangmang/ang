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

#### Angular 바인딩의 개념
```
- {{ 템플릿 표현식 }} 
    <h1>{{title}}</h1>
  
- [속성]="템플릿 표현식"
    <todo [todo]="wordk">
  
- (이벤트)="템플릿 문장"
    <button (click)="handle()">
  
- [(ngModel)]="템플릿 표현식" 
    <input type="text" [(ngModel)]="name">
```



<br><br><hr/><br><br>




# 더브리즈 Dev Weekly - Angular TodoList 예제만들기

### 0. 완성된 모습
![title](https://github.com/jangmang/ang/blob/master/ex.jpg "ex")
> 기대되는 학습효과
- Angular CLI의 전반적인 사용법
- 모듈, 컴포넌트, 클래스 생성 및 사용법
- ngFor문, (click)바인딩, NgModel 양방향바인딩 등
- 분리된 컴포넌트간의 접근법
- Router 사용법
- Pipe 사용법

<br>

### 1. 모듈/컴포넌트 생성
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

### 2. /todo/todos/todos.component.html
```
<div class="title">
    <h1>나의 일정</h1>
    <h2>3월 18일</h2>
</div>
<div class="todo_list">
    <div>
        <input type="checkbox"> 운동하기
    </div>
    <div>
        <input type="checkbox"> 공부하기
    </div>
</div>
<div class="btn_add">
    <input type="text" placeholder="할일 추가">
</div>
```

### 3. /todo/todos/todos.component.ts
```
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {    
    ***
    todos: {
        id: number,
        text: string
    }[];
   
    constructor() {
        this.todos = [
            {id:1, text:"운동하기"},
            {id:2, text:"공부하기"},
        ];
    }
    ***
    ngOnInit() {
    }
}
```

### 4. /todo/todos/todos.component.html
```
<div class="title">
    <h1>나의 일정</h1>
    <h2>3월 18일</h2>
</div>
<div class="todo_list">
    <div *ngFor="let todo of todos">
        <input type="checkbox" id="{{todo.id}}"><label for="{{todo.id}}">{{ todo.text }}</label>
    </div>
</div>
<div class="btn_add">
    <input type="text" placeholder="할일 추가" [(ngModel)]="newText">
</div>
```

### 5. /todo/todos/todos.component.ts
```
newText = '';
```

### 6. /todo/todo.module.ts
ngModel사용을 위해 FormsModule을 추가해준다.<br>
https://angular.kr/guide/template-syntax
```
import { FormsModule } from '@angular/forms'
imports: [
    FormsModule 
],
```

### 7. /todo/todos/todos.component.html
```
<button (click)="addTodo(newText)">추가</button> 
```

### 8. /todo/todos/todos.component.ts
```
addTodo(newText: string) {
    if(this.newText=="") {
        alert('할일을 입력해주세요.');
        return false;
    }
    this.todos.push({
        id: this.todos.length+1,
        text: newText
    });
    this.newText = '';
}
```

<br><hr/><br>

## 자식요소에서 부모요소를 받아오기 위해 분리해보겠습니다.

### 9. todolist 컴포넌트 생성
```
ng generate component todo/todos/todolist --inline-template --inline-style // 인라인템플릿 형식으로 생성
```

### 10. /todo/todos/todos.component.html
```
<input type="checkbox" id="{{todo.id}}"><label for="{{todo.id}}">{{ todo.text }}</label>
```
을 잘라낸다.

### 11. /todo/todos/todolist/todolist.component.ts
template에 붙혀넣는다
```
<input type="checkbox" id="{{todo.id}}"><label for="{{todo.id}}">{{ todo.text }}</label> 
```

### 12. /todo/share 폴더생성후
```
ng generate class todo/share/todomodel
```

### 13. /todo/share/todomodel.ts
```
export class Todomodel {
    id: number;
    text: string;
}
```

### 14. /todo/todos/todolist/todolist.component.ts
```
import { Todomodel } from '../../share/Todomodel';
@Input() todo: Todomodel; //input 데코레이터사용
```

### 15. /todo/todos/todos.component.ts
```
import { Todomodel } from '../../share/Todomodel';
todos: Todomodel[];
```

### 16. /todo/todos/todos.component.html
```
<app-todolist [todo]="todo"></app-todolist> //속성바인딩
```

<br><hr/><br>

## 부모요소에서 자식요소를 받아오기 위해 분리해보겠습니다.

### 17. add-todo 컴포넌트 생성

```
ng g c todo/todos/add-todo --inline-template --inline-style
```

### 18. /todo/todos/todos.commonent.html
```
<button (click)="addTodo(newText)">추가</button>
<input type="text" placeholder="할일 추가" [(ngModel)]="newText">
```
를 잘라낸다.
```
<app-add-todo></app-add-todo> 
```
로 교체한다.

### 19. /todo/todos/add-todo/add-todo.component.ts
- template에 붙혀넣는다.
```
<button (click)="addTodo(newText)">추가</button>
<input type="text" placeholder="할일 추가" [(ngModel)]="newText">
```

### 20. /todo/todos/todos.component.ts
- addTodo() 함수를 잘라낸다.
- /todo/todos/add-todo/add-todo.component.ts 에 붙혀넣는다.

### 21. /todo/todos/add-todo/add-todo.component.ts 
```
export class AddTodoComponent implements OnInit {

    @Output() onTodoAdded = new EventEmitter(); // 상단 import가 @angular/core에 추가되야함.
    newText: '';

    constructor() { }

    ngOnInit() {
    }

    addTodo(newText: string) {
        if (this.newText == "") {
            alert('할일을 입력해주세요.');
            return false;
        }
        this.onTodoAdded.emit(newText);
        this.newText = '';
    }
}
```

### 22. /todo/todos/todos.commonent.html 
```
<app-add-todo (onTodoAdded)="addTodo($event)"></app-add-todo>   
```

### 23. /todo/todos/todos.commonent.ts
```
addTodo(text: string) {
    this.todos.push({
        id:this.todos.length+1,
        text:text
    });
}
```

## 초기화 버튼 추가하기

### 24. /todo/todos/todos.commonent.html  
```
<a href="javascript:;" (click)="clear()" class="btn_re"><i class="fas fa-redo-alt"></i></a>
```

### 25. index.html
```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
```

### 26. /todo/todos/todos.commonent.ts
```
clear(){
    this.todos = [];
}
```

## 삭제 버튼 추가하기

### 27. /todo/todos/todos.commonent.html  
https://fontawesome.com/icons?d=gallery&m=free
- 이미지파일없이 css아이콘을 제공하는 사이트
```
<div class="todo_list" >
    <div *ngFor="let todo of todos">
        <app-todolist [todo]="todo"></app-todolist>
        <button (click)="clearTodo(todo)"><i class="fas fa-backspace"></i></button> <!-- 추가하기 -->
    </div>
</div>
```

### 28. /todo/todos/todos.commonent.ts
```
clearTodo(todo){
    let idx = this.todos.findIndex(function(item){
        return item.id === todo.id;
    });
    this.todos.splice(idx,1); 
}
```

<br><hr/><br>

## 라우터 알아보기

### 29.  mainlist 컴포넌트 추가
```
ng g c mainlist
```

### 30. app-routing.module.ts
```
const routes: Routes = [
    { path: '', component: MainlistComponent},
    { path: 'todo', component: TodosComponent}
];
```

### 31. app.component.html
```
<h1>안녕하세요 Todo list입니다.</h1>

<a routerLink="/">Main</a>
<a routerLink="/todo">Todo</a>

<router-outlet></router-outlet>
```

<br><hr/><br>

## 파이프 알아보기

### 32. /todo/todos/todos.component.ts
```
today: Date = new Date();
```

### 33. /todo/todos/todos.component.html
```
<h2>{{ today | date:'yy년 M월 d일' }}</h2>

{{ todos | json }}
```

<br><hr/><br>

## 전체 스타일

### 34. src/style.css
```
/* You can add global styles to this file, and also import other style files */
* {margin:0; padding:0; box-sizing: border-box; outline:none;}
body {background:#eee;}
button {border:0; padding:0; background:none;}
h1, h2 {font-weight:normal; font-size:30px;}
a {display:inline-block; width:50%; color:#000; text-align:center; text-decoration:none; padding:10px 0; border-left:1px solid #ccc; background:#fff}
a:hover, a:focus {color:#fff; border-left:1px solid #540094; background:#540094}
.title {color:#fff; padding:30px 20px; background: linear-gradient( to right, #540094, #973ff7 )}
.todo_list {background:#fff;}
.todo_list > div {position:relative; padding:10px; border-bottom:1px solid #333}
.todo_list > div label {padding-left:10px;}
.todo_list > div input {position:relative;}
.todo_list > div input:before {content:''; display:block; position:absolute; top:50%; left:50%; width:20px; height:20px; margin:-10px 0 0 -10px; border:1px solid #ccc; border-radius:20px; background:#fff}
.todo_list > div input:checked:after {content:''; display:block; position:absolute; top:50%; left:50%; width:10px; height:10px; margin:-5px 0 0 -5px; border:1px solid #973ff7; border-radius:10px; background:#973ff7}
.todo_list > div button {position:absolute; right:10px; top:0; width:40px; height:40px; font-size:20px; color:#540094}
.todo_list > div button:hover {color:red}
.btn_add {position:relative; padding:10px; border-bottom:1px solid #ccc; background:#fff}
.btn_add button {position:absolute; left:10px; top:10px; width:30px; height:30px; color:#fff; font-size:20px; border-radius:20px; border:0; background:darkblue;}
.btn_add input {width:100%; height:30px; padding-left:50px; border:0; }
.btn_re {width:100%; font-size:20px; color:#000; text-align:center; text-decoration:none; padding:10px 0; border-left:1px solid #ccc; border:0; background:#fff}
.btn_re:hover, .btn_re:focus {color:#fff; border-left:1px solid #540094; background:#540094}
```

# END
