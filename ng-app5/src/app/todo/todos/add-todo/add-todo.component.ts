import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-add-todo',
    template: `
    <button (click)="addTodo(newText)">+</button>
    <input type="text" placeholder="할일을 입력하세요" [(ngModel)]="newText">
  `,
    styles: []
})
export class AddTodoComponent implements OnInit {

    @Output() onTodoAdded = new EventEmitter();

    newText: string; 

    constructor() { }

    ngOnInit() {
        this.newText = '';
    }

    addTodo(newText) {
        if(this.newText == ''){
            alert('할일을 입력해주세요');
            return false;
        }

        this.onTodoAdded.emit(newText);

        // this.todos.push({
        //     id: this.todos.length+1,
        //     text: newText
        // });

        this.newText = '';
    }



}
