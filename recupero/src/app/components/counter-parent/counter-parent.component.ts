import { Component, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
    selector: 'app-counter-parent',
    templateUrl: './counter-parent.component.html',
    styleUrls: ['./counter-parent.component.scss'],
})
export class CounterParentComponent {
    @ViewChild(CounterComponent) private counterComponent = {} as CounterComponent;

    increase() {
        this.counterComponent.increase();
    }

    decrease() {
        this.counterComponent.decrease();
    }

}
