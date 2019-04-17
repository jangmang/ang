import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../todo.interface';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-list',
    template: `
    <ul>
        <li *ngFor="let todo of todos"><a [routerLink]="['/list', todo.id]">{{ todo.content }}</a></li>
        <li><a routerLink="/list">파라미터없는 서브링크</a></li>        
    </ul> 
    
    <hr/>
    <router-outlet></router-outlet>

    <p *ngIf="todoId">파라미터값 <strong style="color:red;">'{{ todoId }}'</strong>을 전달받았습니다.</p>
  `,
    styles: []
})
export class ListComponent implements OnInit {

    todos: Todo[];
    content: string;
    todoId: number;

    constructor(private todo: TodoService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.todo.getAll()
            .subscribe(
                todos => this.todos = todos,
                error => console.error('[TodoService.getAll]', error)
            );

        this.todoId = +this.route.snapshot.paramMap.get('id');        
    }    
}
