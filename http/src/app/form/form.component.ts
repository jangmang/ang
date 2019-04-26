import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from './password-validator';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    userForm: FormGroup;

    constructor() { }

    ngOnInit() {
        this.userForm = new FormGroup({
            userid: new FormControl('', [
                Validators.required,
                Validators.pattern('[a-zA-Z0-9]{4,10}')
            ]),
            passwordGroup: new FormGroup({
                password: new FormControl('', Validators.required),
                confirmPassword: new FormControl('', Validators.required)            
            }, PasswordValidator.match),

        });
        
    }

    // 템플릿에서 폼 모델에 접근할 수 있도록 컴포넌트 클래스에 getter를 정의한다.
    get userid(){
        return this.userForm.get('userid');
    }

    get passwordGroup() {
        return this.userForm.get('passwordGroup');
    }

    get password() {
        return this.userForm.get('passwordGroup.password');
    }

    get confirmPassword() {
        return this.userForm.get('passwordGroup.confirmPassword');
    }

}
