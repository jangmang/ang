import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Todo } from './todo.interface';

@Injectable({
    providedIn: 'root' //서비스 프로바이더 범위가 최상위
})
export class TodoService {
    url = 'http://localhost:3000/todos';

    constructor(private http: HttpClient) { }

    remove(id: number){
        const url = `${this.url}/${id}`;
        return this.http.delete(url)
            .pipe(catchError(this.handleError));
    }

    toggle(todo: Todo){
        const payload = {
            completed: !todo.completed
        }
        const url = `${this.url}/${todo.id}`;
        return this.http.patch<Todo>(url, payload)
            .pipe(catchError(this.handleError));
    }

    change(todo: Todo) {
        const payload = {
            content: 'Angular',
            completed: !todo.completed
        };

        const url = `${this.url}/${todo.id}`;
        return this.http.put<Todo>(url, payload)
            .pipe(catchError(this.handleError));
    }

    //서버에 모든 todo를 요청한다.
    getAll(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.url)
            .pipe(catchError(this.handleError));
    }

    add(content: string): Observable<Todo> {
        /* 서버로 전송할 요청 페이로드. id는 json-server에 의해 자동 생성된다. */
        const payload = { content, completed: true };
        return this.http.post<Todo>(this.url, payload)
            .pipe(catchError(this.handleError));
    }

    // 에러 핸들러 함수
    private handleError(error: HttpErrorResponse) {
        let message = '';
        if (error.error instanceof ErrorEvent) {
            // 클라이언트 측의 에러
            console.error(`Client-side error: ${error.error.message}`);
            message = error.error.message;
        } else {
            // 백엔드 측의 에러
            console.error(`Server-side error: ${error.status}`);
            message = error.message;
        }

        // 사용자에게 전달할 메세지를 담은 옵저버블 반환
        return throwError({
            title: 'Something wrong! please try again later.',
            message
        });
    }

}
