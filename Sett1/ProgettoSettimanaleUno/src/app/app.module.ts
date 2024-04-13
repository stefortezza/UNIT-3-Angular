import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { AudiComponent } from './components/audi/audi.component';
import { Error404Component } from './components/error404/error404.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { FooterComponent } from './components/footer/footer.component';
import { FordComponent } from './components/ford/ford.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';



const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'fiat',
    component: FiatComponent,
  },
  {
    path: 'ford',
    component: FordComponent,
  },
  {
    path: 'audi',
    component: AudiComponent,
  },
  {
    path: 'ford/:brand',
    component:FordComponent
  },
  {
    path: 'fiat/:brand',
    component:FiatComponent,
  },
  {
    path: 'audi/:brand',
    component: AudiComponent,
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AudiComponent,
    Error404Component,
    FiatComponent,
    FooterComponent,
    FordComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
