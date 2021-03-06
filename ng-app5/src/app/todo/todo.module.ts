import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';
import { TodoslistComponent } from './todos/todoslist/todoslist.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [TodosComponent, TodoslistComponent, AddTodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [TodosComponent]
})
export class TodoModule { }
