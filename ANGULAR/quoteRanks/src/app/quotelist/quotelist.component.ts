import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {
  @Input() quotes;
  @Output() deleteQuote = new EventEmitter();
  constructor() { }

  up(quote) {
    quote.rating++;
  }
  down(quote) {
    quote.rating--;
  }
  delete(quote) {
    this.deleteQuote.emit(quote);
  }
  ngOnInit() {
  }
}
