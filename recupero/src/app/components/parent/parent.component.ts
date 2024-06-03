import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
    //number: number = 2 + 3
    //todayTask = 'Calcola il risultato di questa operazione: ' + this.number;

    values = [
        'nome 1',
        'nome 2',
        'nome 3',
        'nome 4',
        'nome 5'
    ]
}
