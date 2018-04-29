import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  user: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  getUser(username: string) {
    this._http.get(`https://api.github.com/users/${username}`)
    .subscribe(
      (user: any[]) => { this.user.next(user); }
    );
    console.log(this.user);
  }
}
