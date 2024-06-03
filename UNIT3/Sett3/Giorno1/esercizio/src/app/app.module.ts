import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        LoginComponent,
        SignupComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
