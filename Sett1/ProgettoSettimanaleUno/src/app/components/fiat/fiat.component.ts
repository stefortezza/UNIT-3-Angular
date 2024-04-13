import { Component } from '@angular/core';
import { Interfaces } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrls: ['./fiat.component.scss']
})
export class FiatComponent{
  cars!: Interfaces[];
  Fiat: Interfaces[] = [];
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
      if (this.cars[i].brand === "Fiat") {
        this.Fiat.push(this.cars[i]);
      }
    }
    this.selectRandomCars();
  }
  selectRandomCars(): void {
    if (this.Fiat.length >= 3) {
      const indices: number[] = [];
      while (indices.length < 3) {
        const index = Math.floor(Math.random() * this.Fiat.length);
        if (!indices.includes(index)) {
          indices.push(index);
        }
      }
      const selectedCars = [
        this.Fiat[indices[0]],
        this.Fiat[indices[1]],
        this.Fiat[indices[2]],
      ];
      this.Fiat = selectedCars;
    }
  }
  
}
