import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  city: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  getWeather(data: string) {
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?appid=fbce7df393a3e510aa1b6814249ea5f0&&q=${data}`)
    .subscribe(
      (city: any[]) => { this.city.next(city); }
    );
  }

}
