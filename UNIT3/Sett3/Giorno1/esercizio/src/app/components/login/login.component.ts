import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/interface/login.interface';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

    loginForm!: NgForm;
    username = '';
    password = '';
    loggedUser!: Login;
    logged: boolean = false

    submit(form: NgForm) {
        this.loginForm = form;
        this.loggedUser = form.value;
        this.logged = true;
        console.log(this.loggedUser);
    }

}
