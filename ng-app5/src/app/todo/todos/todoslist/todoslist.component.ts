import { Component, OnInit, Input } from '@angular/core';
import { TodoModel } from '../../share/todo-model';

@Component({
    selector: 'app-todoslist',
    template: `
    <input type="checkbox" id="{{ idx }}"> <label for="{{ idx }}">{{ todo.text }}</label>
  `,
    styles: [

    ]
})
export class TodoslistComponent implements OnInit {
    
    @Input() todo: TodoModel;
    @Input() idx: number;
    constructor() { }

    ngOnInit() {
    }

}
