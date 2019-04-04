import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { TodosComponent } from './todo/todos/todos.component';

const routes: Routes = [
    {path:'', component:MainPageComponent},
    {path:'todo', component:TodosComponent}
];

@NgModule({
  imports: [
      RouterModule.forRoot(
          routes,
          //{ enableTracing: true}
        )
      ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
