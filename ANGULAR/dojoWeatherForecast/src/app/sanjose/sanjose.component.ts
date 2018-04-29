import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  city: any[] = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getWeather('san jose');
    this._dataService.city.subscribe(
      (city) => { this.city = city; }
    );
  }

}
