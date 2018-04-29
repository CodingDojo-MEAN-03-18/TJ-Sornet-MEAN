import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-showscore',
  templateUrl: './showscore.component.html',
  styleUrls: ['./showscore.component.css']
})
export class ShowscoreComponent implements OnInit {
  user: any[] = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.user.subscribe(
      (user) => { this.user = user; }
    );
  }

}
