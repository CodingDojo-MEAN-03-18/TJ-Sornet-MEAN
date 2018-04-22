import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Add a Quote';
  entry: Quote = new Quote();
  quotes: Array<Quote> = [];

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log(this.entry);
    this.quotes.push(this.entry);
    this.entry = new Quote();
    form.reset();
  }

  remove(quote) {
    const index = this.quotes.indexOf(quote);
    this.quotes.splice(index, 1);
  }
}
