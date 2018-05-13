import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth.service';

import { User } from '../../user';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  user = new User();

  registrationErrors: string[] = [];

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(user: User) {
    console.log('registering user', user);

    this.auth.register(user).subscribe(
      () => {
        this.router.navigateByUrl('main');
      },
      error => {
        console.log(error);
      }
    );
  }

}
