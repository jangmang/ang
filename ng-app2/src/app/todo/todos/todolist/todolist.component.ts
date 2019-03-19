import { Component, OnInit, Input } from '@angular/core';
import { Todmodel } from '../../share/todmodel';

@Component({
    selector: 'app-todolist',
    template: `
    <input type="checkbox" id="{{ todo.id }}"><label for="{{ todo.id }}">{{ todo.text }}</label>
  `,
    styles: []
})
export class TodolistComponent implements OnInit {

    @Input() todo: Todmodel; 

    constructor() { }

    ngOnInit() {
    }

}
