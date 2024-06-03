import { Component } from '@angular/core';

@Component({
    selector: 'app-items-list',
    templateUrl: './items-list.component.html',
    styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent {
    items = ['Mario', 'Pippo', 'Anna', 'Maria'];

    addItem(newItem: string) {
        this.items.push(newItem);
    }
}
