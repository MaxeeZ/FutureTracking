import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  selectedTheme = "default";

  constructor(private themeService: NbThemeService) { }

  ngOnInit() {
  }

  changeTheme(event) {
    console.log(event);
    this.themeService.changeTheme(event.value);
  }

}
