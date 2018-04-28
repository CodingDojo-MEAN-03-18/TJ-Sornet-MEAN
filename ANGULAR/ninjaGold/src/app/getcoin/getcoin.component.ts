import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataService } from '../data.service';
import { Building } from '../building';
@Component({
  selector: 'app-getcoin',
  templateUrl: './getcoin.component.html',
  styleUrls: ['./getcoin.component.css']
})
export class GetcoinComponent implements OnInit {
  @Input() buildings: Building[];
  @Output() getGoldEvent = new EventEmitter();
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  getGold(data) {
    this._dataService.generateGold(data);
    this.getGoldEvent.emit(this._dataService.gold);
  }
}
