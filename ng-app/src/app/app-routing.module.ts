import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todo/todos/todos.component';
import { MainlistComponent } from './mainlist/mainlist.component';

const routes: Routes = [
    { path: '', component: MainlistComponent},
    { path: 'todo', component: TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
