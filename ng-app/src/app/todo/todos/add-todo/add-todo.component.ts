import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-add-todo',
    template: `
    <button (click)="addTodo(newText)">추가</button>
    <input type="text" placeholder="할일 추가" [(ngModel)]="newText">    
  `,
    styles: []
})
export class AddTodoComponent implements OnInit {

    @Output() onTodoAdded = new EventEmitter();
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
