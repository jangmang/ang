import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';

import { slideInAnimation } from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [ slideInAnimation ]
})
export class AppComponent {
    title = 'http';
        
    constructor(private router: Router, private location:Location) {
        
    }

    gotoTodo(){
        this.router.navigate(['detail']);
    }

    goBack(): void {
        this.location.back();
    }

    getAnimationData(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
