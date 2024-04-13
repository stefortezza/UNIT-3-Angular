import { Component } from '@angular/core';
import { Interfaces } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrls: ['./ford.component.scss'],
})
export class FordComponent {
  cars!: Interfaces[];
  Ford: Interfaces[] = [];
  logo!: string;

  constructor() {
    this.getCars();
  }

  async getCars() {
    let response = await fetch('../assets/db.json');
    let data = await response.json();    
    this.cars = data;

    if(data) {
      this.getMarchio();
    }
  }

  getMarchio() {
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].brand === "Ford") {
        this.Ford.push(this.cars[i]);
      }
    }
    this.selectRandomCars();
  }

  selectRandomCars(): void {
    if (this.Ford.length >= 3) {
      const indices: number[] = [];
      while (indices.length < 3) {
        const index = Math.floor(Math.random() * this.Ford.length);
        if (!indices.includes(index)) {
          indices.push(index);
        }
      }
      const selectedCars = [
        this.Ford[indices[0]],
        this.Ford[indices[1]],
        this.Ford[indices[2]],
      ];
      this.Ford = selectedCars;
    }
  }
}

