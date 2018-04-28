import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-showcoin',
  templateUrl: './showcoin.component.html',
  styleUrls: ['./showcoin.component.css']
})
export class ShowcoinComponent implements OnInit {
  messages: string[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.messages = this._dataService.messages;
  }


}
