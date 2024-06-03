// Questo è il componente CHILD di counter-parent
import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
    message: string = 'Contatore: 0';
    count: number = 0;

    increase() {
        this.count = this.count + 1;
        this.message = `Contatore: ${this.count}`;
    }

    decrease() {
        this.count = this.count - 1;
        this.message = `Contatore: ${this.count}`;
    }
}
