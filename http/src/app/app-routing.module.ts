import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ListInnerComponent } from './list/list-inner/list-inner.component';

const routes: Routes = [
    {path:'', redirectTo:'/list', pathMatch:'full'},
    {   
        path:'list', 
        component:ListComponent,
        children: [
            {path:'', component:ListInnerComponent},
            {path:':id', component:ListInnerComponent}               
        ]
    },
    //{path:'list/:id', component:ListComponent},
    // {path:'listinner', component:ListInnerComponent},
    // {path:'listinner/:id', component:ListInnerComponent},
    {path:'detail', component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
