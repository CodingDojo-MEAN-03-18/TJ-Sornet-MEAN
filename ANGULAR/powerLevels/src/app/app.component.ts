import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PowerComponent';
  power: number;
  powers = [
    {
      title: 'HumanComponent',
      level: 0
    },
    {
      title: 'SaiyanComponent',
      level: 0
    },
    {
      title: 'SuperSaiyanComponent',
      level: 0
    },
    {
      title: 'SuperSaiyanTwoComponent',
      level: 0
    },
    {
      title: 'SuperSaiyanThreeComponent',
      level: 0
    },
    {
      title: 'SuperSaiyanFourComponent',
      level: 0
    },
  ];

  onClick(event: Event, form: NgForm){
    event.preventDefault();
    (this.powers[0]).level = this.power * 1;
    (this.powers[1]).level = this.power * 10;
    (this.powers[2]).level = this.power * 90;
    (this.powers[3]).level = this.power * 150;
    (this.powers[4]).level = this.power * 250;
    (this.powers[5]).level = this.power * 500;
    form.reset();
  }
}
