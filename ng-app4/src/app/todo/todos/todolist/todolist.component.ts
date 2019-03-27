import { Component, OnInit, Input } from '@angular/core';
import { TodoModel } from '../../share/todo-model';

@Component({
    selector: 'app-todolist',
    template: `
    <input type="checkbox" id="{{ todo.id }}" focusauto><label for="{{ todo.id }}">{{ todo.text }}</label>
  `,
    styles: [

    ]
})
export class TodolistComponent implements OnInit {

    @Input() todo: TodoModel;

    constructor() { }

    ngOnInit() {
    }

}
