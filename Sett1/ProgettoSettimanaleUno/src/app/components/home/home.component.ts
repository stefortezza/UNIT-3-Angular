import { Component, OnInit } from '@angular/core';
import { Interfaces } from 'src/interfaces/interfaces';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  marchi: Interfaces[] = [];
  logoArray: string[] = [];
  selectedCars: Interfaces[] = [];

  constructor() {}

  ngOnInit(): void {
    this.fetchCars(); 
  }

  fetchCars(): void {
    import("../../../assets/db.json")
      .then((data:any) => {
        this.marchi = data.brandLogo;
        this.selectedCars = data;
        this.selectRandomCars(); 
        
      })
      .catch((error) => {
        console.error('Errore durante il recupero dei dati delle auto:', error);
      });
  }

  

  selectRandomCars(): void {
    if (this.selectedCars.length >= 2) {
      const index1 = Math.floor(Math.random() * this.selectedCars.length);
      let index2 = Math.floor(Math.random() * this.selectedCars.length);
      while (index2 === index1) {
        index2 = Math.floor(Math.random() * this.selectedCars.length);
      }
      this.selectedCars = [
        this.selectedCars[index1],
        this.selectedCars[index2],
      ];
    }
  }
}

