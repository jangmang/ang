import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../todo.interface';
import { TodoService } from '../todo.service';

@Component({
    selector: 'app-list',
    template: `
    <ul>
        <li *ngFor="let todo of todos">{{ todo.content }}</li>        
    </ul> 
  `,
    styles: []
})
export class ListComponent implements OnInit {

    todos: Todo[];
    content: string;

    constructor(private todo: TodoService) { }

    ngOnInit() {
        this.todo.getAll()
            .subscribe(
                todos => this.todos = todos,
                error => console.error('[TodoService.getAll]', error)
            );
    }    
}
