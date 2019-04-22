import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../todo.interface';
import { TodoService } from '../todo.service';

import * as $ from 'jquery'; //제이쿼리

//import { Observable } from 'rxjs';

// interface Todo {
//     id: number;
//     content: string;
//     completed: boolean;
// }

@Component({
    selector: 'app-detail',
    template: `
    <input type="text" [(ngModel)]="content" placeholder="todo">
    <button (click)="addTodo()">Add</button>
    <ul #ulh>
        <li *ngFor="let todo of todos" [class.completed]="!todo.completed">
            <a routerLink="/list/{{todo.id}}">{{ todo.content }}</a>
            <button (click)="changeTodo(todo)">Change</button>
            <button (click)="toggleTodo(todo)">Toggle</button>
            <button (click)="removeTodo(todo.id)">delete</button>
        </li>        
    </ul>    
    <pre>{{ todos | json }}</pre>
  `,
    styles: [`
        .completed {text-decoration: line-through;}
    `]
})
export class DetailComponent implements OnInit {
    todos: Todo[];
    content: string;

    //url = 'http://localhost:3000/todos';

    @ViewChild('ulh') ulh: ElementRef;

    constructor(private todo: TodoService) { 

         console.log($("ul").height());
    }

    ngOnInit() {
        this.todo.getAll()
            .subscribe(
                todos => this.todos = todos,
                error => console.error('[TodoService.getAll]', error)
            );

        console.log($("ul").height());
    }

    ngAfterViewInit(){console.log($("ul").height())}

    ngAfterViewChecked(){console.log($("ul").height())}

    


    addTodo() {
        if (!this.content) {
            alert('입력해주세요');
            return;
        }

        this.todo.add(this.content)
            .subscribe(
                todo => this.todos = [...this.todos, todo],
                error => console.error('[TodoService.add]', error)
            );

        this.content = '';
    }

    // todo의 내용 전체를 갱신하여 템플릿에 반영한다.
    changeTodo(todo: Todo) {
        this.todo.change(todo)
            .subscribe(
                newTodo => this.todos = this.todos.map(
                    todo => todo.id === newTodo.id ? newTodo : todo
                ),
                error => console.error('[TodoService.change]', error)
            );
    }
    
    toggleTodo(todo: Todo){
        this.todo.toggle(todo)
            .subscribe(
                newTodo => this.todos = this.todos.map(
                    todo => todo.id === newTodo.id ? newTodo : todo
                ),
                error => console.error('[TodoService.toggle]', error)
            );
    }

    removeTodo(id: number){
        this.todo.remove(id)
            .subscribe(
                () => this.todos = this.todos.filter(todo => todo.id !== id),
                error => console.error('[TodoService.remove]', error)
            )
    }

    // private getTodos(): Observable<Todo[]> {
    //     return this.http.get<Todo[]>(this.url);        
    // }

    // private addTodo(): Observable<Todo> {
    //     const payload = { content: this.content, completed: false };
    //     return this.http.post<Todo>(this.url, payload);
    // }


}
