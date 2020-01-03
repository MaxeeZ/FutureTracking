import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'NebularApp';
  
  device: any;

  ngOnInit() {
    document.addEventListener('deviceready', function () {
      alert(this.device.platform);
    }, false);
  }
}
