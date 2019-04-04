import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../share/todo-model';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

    todos: TodoModel[];

    today: Date = new Date();

    idx: number;

    currentHero: [
        { name: string }

    ]
    constructor() {
        this.todos = [
            { text: "운동하기" },
            { text: "공부하기" },
        ];

        setInterval(() => { this.today = new Date() }, 1000);
    }

    ngOnInit() {

    }

    addTodo(event: string) {
        this.todos.push({
            text: event
        });
    }

    clear() {
        this.todos = [];
    }

    clearTodo(idx) {
        this.todos.splice(idx, 1);
    }
}


