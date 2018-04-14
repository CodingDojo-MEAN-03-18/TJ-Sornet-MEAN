import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  graypst: boolean = true;
  graymst: boolean = true;
  graycst: boolean = true;
  grayest: boolean = true;
  grayclear: boolean = true;
  yellowpst: boolean = false;
  yellowmst: boolean = false;
  yellowcst: boolean = false;
  yellowest: boolean = false;
  yellowclear: boolean = false;
  onClick(data){
    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    if(data == "pst"){
      this.yellowpst = true;
      this.yellowmst = false;
      this.yellowcst = false;
      this.yellowest = false;
      this.yellowclear = false;
      this.graypst = false;
      this.graymst = true;
      this.graycst = true;
      this.grayest = true;
      this.grayclear = true;
      document.getElementById('dateTime').innerHTML = date.toLocaleString('en-US', options);
    }
    if(data == "mst"){
      this.yellowpst = false;
      this.yellowmst = true;
      this.yellowcst = false;
      this.yellowest = false;
      this.yellowclear = false;
      this.graypst = true;
      this.graymst = false;
      this.graycst = true;
      this.grayest = true;
      this.grayclear = true;
      date.setUTCHours(date.getUTCHours() + 1);
      document.getElementById('dateTime').innerHTML = date.toLocaleString('en-US', options);
    }
    if(data == "cst"){
      this.yellowpst = false;
      this.yellowmst = false;
      this.yellowcst = true;
      this.yellowest = false;
      this.yellowclear = false;
      this.graypst = true;
      this.graymst = true;
      this.graycst = false;
      this.grayest = true;
      this.grayclear = true;
      date.setUTCHours(date.getUTCHours() + 2);
      document.getElementById('dateTime').innerHTML = date.toLocaleString('en-US', options);
    }
    if(data == "est"){
      this.yellowpst = false;
      this.yellowmst = false;
      this.yellowcst = false;
      this.yellowest = true;
      this.yellowclear = false;
      this.graypst = true;
      this.graymst = true;
      this.graycst = true;
      this.grayest = false;
      this.grayclear = true;
      date.setUTCHours(date.getUTCHours() + 3);
      document.getElementById('dateTime').innerHTML = date.toLocaleString('en-US', options);
    }
    if(data == "clear"){
      this.yellowpst = false;
      this.yellowmst = false;
      this.yellowcst = false;
      this.yellowest = false;
      this.yellowclear = false;
      this.graypst = true;
      this.graymst = true;
      this.graycst = true;
      this.grayest = true;
      this.grayclear = true;
      document.getElementById('dateTime').innerHTML = '';
    }
  }
}
