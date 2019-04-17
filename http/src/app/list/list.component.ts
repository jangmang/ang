import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../todo.interface';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';

import * as $ from 'jquery'; //제이쿼리
import 'slick-carousel';

@Component({
    selector: 'app-list',
    template: `
    <ul>
        <li *ngFor="let todo of todos"><a [routerLink]="['/list', todo.id]">{{ todo.content }}</a></li>
        <li><a routerLink="/list">파라미터없는 서브링크</a></li>        
    </ul> 
    
    <hr/>
    <router-outlet></router-outlet>

    <p *ngIf="todoId">파라미터값 <strong style="color:red;">'{{ todoId }}'</strong>을 전달받았습니다.</p>
    
    <h2 class="title">Integrate jQuery plugin</h2>

    <div class="carousel-container" #carousel>
      <div class="carousel-item" *ngFor="let item of carouselItems">
        {{ item }}
      </div>
    </div>
  `,
    styles: [`
    /* Slick Custom Theme */
    .carousel-container .carousel-item {
      position: relative;
      color: white;
      background-color: #3498db;
      min-height: 250px;
      text-align: center;
    }

    .carousel-container {
      width: 500px;
      margin: 0 auto;
    }

    .carousel-item {
      font-size: 10em;
      line-height: 250px;
    }
  `]
})
export class ListComponent implements OnInit {

    todos: Todo[];
    content: string;
    todoId: number;

    carouselItems: string[] = ['1', '2', '3'];
    @ViewChild('carousel') carousel: ElementRef;

    constructor(private todo: TodoService, private route: ActivatedRoute) {
        console.log();
    }

    ngOnInit() {
        this.todo.getAll()
            .subscribe(
                todos => this.todos = todos,
                error => console.error('[TodoService.getAll]', error)
            );

        this.todoId = +this.route.snapshot.paramMap.get('id');
    }

    ngAfterViewInit() {
        $(this.carousel.nativeElement).slick();
    }
}
