import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  city: any[] = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getWeather('dallas');
    this._dataService.city.subscribe(
      (city) => { this.city = city; }
    );
  }

}
