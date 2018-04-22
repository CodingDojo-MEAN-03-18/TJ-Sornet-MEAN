import { Component, OnInit, Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-subpower',
  templateUrl: './subpower.component.html',
  styleUrls: ['./subpower.component.css']
})
export class SubpowerComponent implements OnInit {

  @Input() powers;
  constructor() { }
  power: number;
  ngOnInit() {
  }



}
