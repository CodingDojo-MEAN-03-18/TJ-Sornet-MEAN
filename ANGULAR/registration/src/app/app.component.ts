import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  submitted = false;
  user: User = new User();
  users: Array<User> = [];

  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    console.log(this.users);
    this.users.unshift(this.user);
    this.user = new User();
    this.submitted = true;
    form.reset();
  }
}
