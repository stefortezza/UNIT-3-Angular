import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemOutputComponent } from './components/item-output/item-output.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterParentComponent } from './components/counter-parent/counter-parent.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'parent',
        component: ParentComponent,
    },
    {
        path: 'itemsList',
        component: ItemsListComponent,
    },
    {
        path: 'counter',
        component: CounterParentComponent,
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        ParentComponent,
        ChildComponent,
        ItemsListComponent,
        ItemOutputComponent,
        CounterComponent,
        CounterParentComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(routes),
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
