import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ListInnerComponent } from './list/list-inner/list-inner.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { AuthGuard } from './auth/auth.guard'; //canActivate

const routes: Routes = [
    {path:'', redirectTo:'/list', pathMatch:'full'},
    {   
        path:'list', 
        component:ListComponent,  
        data: {animation: 'heroes'},      
        children: [
            {path:'', component:ListInnerComponent},
            {path:':id', component:ListInnerComponent}               
        ]        
    },
    //{path:'list/:id', component:ListComponent},
    // {path:'listinner', component:ListInnerComponent},
    // {path:'listinner/:id', component:ListInnerComponent},
    {path:'detail', component:DetailComponent, data: {animation: 'hero'}, canActivate: [AuthGuard]}, //canActivate
    {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
