import { Component, OnInit, Input } from '@angular/core';
import { TodoModel } from '../../share/todo-model';

@Component({
    selector: 'app-todoslist',
    template: `
    <input type="checkbox" id="{{ todo.id }}"> <label for="{{ todo.id }}">{{ todo.text }}</label>
  `,
    styles: [

    ]
})
export class TodoslistComponent implements OnInit {
    
    @Input() todo: TodoModel;
    constructor() { }

    ngOnInit() {
    }

}
