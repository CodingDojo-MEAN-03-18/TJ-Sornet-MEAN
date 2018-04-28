import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  messages: string[] = [];
  gold = 0;
  constructor() { }

  generateGold(type: string) {
    let tempGold = 0;
    if (type === 'Farm') {
      tempGold = Math.floor(Math.random() * 4) + 2;
      this.gold += tempGold;
      this.messages.unshift('You\'ve earned ' + tempGold.toString() + ' gold at the Farm');
      console.log(this.messages);
      console.log(this.gold);
    }
    if (type === 'Cave') {
      tempGold = Math.floor(Math.random() * 6) + 5;
      this.gold += tempGold;
      this.messages.unshift('You\'ve earned ' + tempGold.toString() + ' gold at the Cave');
      console.log(this.messages);
    }
    if (type === 'Casino') {
      tempGold = Math.floor(Math.random() * 201) - 100;
      this.gold += tempGold;
      if (tempGold < 0) {
        this.messages.unshift('You\'ve lost ' + tempGold.toString() + ' gold at the Casino');
      } else {
        this.messages.unshift('You\'ve earned ' + tempGold.toString() + ' gold at the Casino');
      }
      console.log(this.messages);
    }
    if (type === 'House') {
      tempGold = Math.floor(Math.random() * 4) + 7;
      this.gold += tempGold;
      this.messages.unshift('You\'ve earned ' + tempGold.toString() + ' gold at the House');
      console.log(this.messages);
    }
    return this.messages;
  }

}
