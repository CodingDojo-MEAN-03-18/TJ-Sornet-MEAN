import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-sigma',
  templateUrl: './sigma.component.html',
  styleUrls: ['./sigma.component.css']
})
export class SigmaComponent implements OnInit {

  diff: number;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  getDiff() {
    this.diff = this._dataService.subtract();
  }
}
