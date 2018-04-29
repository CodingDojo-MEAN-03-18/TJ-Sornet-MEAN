import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { GetuserComponent } from './getuser/getuser.component';
import { ShowscoreComponent } from './showscore/showscore.component';

@NgModule({
  declarations: [
    AppComponent,
    GetuserComponent,
    ShowscoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
