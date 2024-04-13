import { Component } from '@angular/core';
import { Interfaces } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.scss']
})
export class AudiComponent {
  cars!: Interfaces[];
  Audi: Interfaces[] = [];
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
      if (this.cars[i].brand === "Audi") {
        this.Audi.push(this.cars[i]);
      }
    }
    this.selectRandomCars();
  }

  selectRandomCars(): void {
    if (this.Audi.length >= 3) {
      const indices: number[] = [];
      while (indices.length < 3) {
        const index = Math.floor(Math.random() * this.Audi.length);
        if (!indices.includes(index)) {
          indices.push(index);
        }
      }
      const selectedCars = [
        this.Audi[indices[0]],
        this.Audi[indices[1]],
        this.Audi[indices[2]],
      ];
      this.Audi = selectedCars;
    }
  }
}

