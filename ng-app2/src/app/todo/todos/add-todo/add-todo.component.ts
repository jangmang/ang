import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-add-todo',
    template: `
    <button (click)="addTodo(newText)">+</button>
    <input type="text" placeholder="할일을 추가해주세요" [(ngModel)]="newText">
  `,
    styles: []
})
export class AddTodoComponent implements OnInit {

    @Output() onTodoadd = new EventEmitter;
    newText : string;

    constructor() { }

    ngOnInit() {
        this.newText = '';
    }

    addTodo(newText) {
        if (this.newText == '') {
            alert('할일을 입력하세요.');
            return false;
        }
        this.onTodoadd.emit(newText);        
        this.newText = '';
    }

}
