import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  switchbtn = [
    { status: "OFF", red: true, green: false},
    { status: "OFF", red: true, green: false},
    { status: "OFF", red: true, green: false},
    { status: "OFF", red: true, green: false},
    { status: "OFF", red: true, green: false},
    { status: "OFF", red: true, green: false},
    { status: "OFF", red: true, green: false},
    { status: "OFF", red: true, green: false},
    { status: "OFF", red: true, green: false},
    { status: "OFF", red: true, green: false},
  ]

  onClick(data){
    this.switchbtn[data].status = "ON";
    this.switchbtn[data].green = true;
    this.switchbtn[data].red = false;
  }
}
