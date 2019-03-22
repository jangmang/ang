import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    newText : string;
    todos: {
        id: number,
        text: string
    }[];

    constructor() { 
        this.todos = [
            {id :1, text:"운동하기"},
            {id :2, text:"공부하기"}
        ]
    }

    ngOnInit() {
        this.newText = ''; 
    }
    addTodo(newText) {
        if(this.newText == ''){
            alert('할일을 입력해주세요.');
            return false;
        }
        this.todos.push({
            id:this.todos.length+1,
            text:newText
        });
        this.newText = '';
    }

}
