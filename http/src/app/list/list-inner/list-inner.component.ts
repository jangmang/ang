import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-list-inner',
    template: `
    자식컴포넌트
    <p *ngIf="todoId">파라미터값 <strong style="color:red;">'{{ todoId }}'</strong>을 전달받았습니다.</p>
    <p *ngIf="!todoId">전달받은 파라미터값이 없습니다.</p>
  `,
    styles: []
})
export class ListInnerComponent implements OnInit {
    todoId: number;
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        //this.todoId = +this.route.snapshot.paramMap.get('id'); // 한번만 (특정시점)
        this.route.paramMap
            .subscribe(params => this.todoId = +params.get('id')); // 반복 (옵저버블스트림)
    }

}
