import { Component, OnInit } from '@angular/core';
import { Todmodel } from '../share/todmodel';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    newText = '';
    today: Date = new Date();
    
    todos: Todmodel[];

    constructor() {
        this.todos = [
            { id:1, text:"운동하기" },
            { id:2, text:"공부하기" },
            { id:3, text:"공부하기" },
        ];
    }

    ngOnInit() {
    }

    addTodo(text: string) {
        this.todos.push({
            id: this.todos.length + 1,
            text: text
        });
    }
  

}
