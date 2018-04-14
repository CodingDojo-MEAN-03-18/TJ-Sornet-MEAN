import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  emails: Array<any> = [
    {
      address: "bill@gates.com", importance: true, subject: "New Windows", content: "Windows XI will launch in year 2100."
    },
    {
      address: "ada@lovelace.com", importance: true, subject: "Programming", content: "Enchantress of numbers."
    },
    {
      address: "john@carmac.com", importance: false, subject: "Updated Algo", content: "New algorithm for shadow volumes."
    },
    {
      address: "gabe@newel.com", importance: false, subject: "HL3!", content: "Just kidding."
    },

  ];
}
