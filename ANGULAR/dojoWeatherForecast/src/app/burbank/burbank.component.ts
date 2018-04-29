import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  city: any[] = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getWeather('burbank');
    this._dataService.city.subscribe(
      (city) => { this.city = city; }
    );
  }

}
