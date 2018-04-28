import { Component } from '@angular/core';
import { Building } from './building';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myGold = 0;
  buildings: Building[] = [
    {
      type: 'Farm',
      description: 'Earns 2-5 Gold'
    },
    {
      type: 'Cave',
      description: 'Earns 5-10 Gold'
    },
    {
      type: 'Casino',
      description: 'Earn up to or Lose up to 100 Gold'
    },
    {
      type: 'House',
      description: 'Earns 7-10 Gold'
    }
  ];

  getGoldFromChild(data) {
    this.myGold = data;
  }

}
