import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  city: any[] = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getWeather('chicago');
    this._dataService.city.subscribe(
      (city) => { this.city = city; console.log(city); }
    );

  }

}
