import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { CookieService } from 'ngx-cookie';
import { User } from './user';

@Injectable()
export class AuthService {
  // private base = '/api/auth/';
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(user: User) {
    return this.http.post('login', user);
  }

  register(user: User) {
    return this.http.post('register', user);
  }

  logout() {
    return this.http.delete('logout');
  }

  isAuthed(): boolean {
    const expired = parseInt(this.cookieService.get('expiration'), 10);
    const userID = this.cookieService.get('userID');
    const session = this.cookieService.get('session');

    return session && expired && userID && expired > Date.now();
  }

}
