import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';
import { TodolistComponent } from './todos/todolist/todolist.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';

@NgModule({
  declarations: [TodosComponent, TodolistComponent, AddTodoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TodosComponent]
})
export class TodoModule { }

