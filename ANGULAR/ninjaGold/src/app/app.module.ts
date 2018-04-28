import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GetcoinComponent } from './getcoin/getcoin.component';
import { ShowcoinComponent } from './showcoin/showcoin.component';

import { DataService } from './data.service';
@NgModule({
  declarations: [
    AppComponent,
    GetcoinComponent,
    ShowcoinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
