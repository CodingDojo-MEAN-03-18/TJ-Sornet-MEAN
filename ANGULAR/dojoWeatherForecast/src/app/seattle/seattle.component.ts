import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  city: any[] = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getWeather('seattle');
    this._dataService.city.subscribe(
      (city) => { this.city = city; }
    );
  }

}
