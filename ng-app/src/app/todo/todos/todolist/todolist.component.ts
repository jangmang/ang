import { Component, OnInit, Input } from '@angular/core';
import { Todomodel } from '../../share/Todomodel';

@Component({
    selector: 'app-todolist',
    template: `
    <input type="checkbox" id="{{todo.id}}"><label for="{{todo.id}}">{{ todo.text }}</label>
  `,
    styles: []
})
export class TodolistComponent implements OnInit {
    @Input() todo: Todomodel;
    
    constructor() { }

    ngOnInit() {
    }

}
