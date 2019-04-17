import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'http';

    
    constructor(private router: Router) {}
    gotoTodo(){
        this.router.navigate(['detail']);
    }
}
