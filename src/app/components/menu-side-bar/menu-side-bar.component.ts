import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-side-bar',
  templateUrl: './menu-side-bar.component.html',
  styleUrls: ['./menu-side-bar.component.scss']
})
export class MenuSideBarComponent implements OnInit {

  items = [
    {
      title: 'Home',
      icon: { icon: 'home-outline', pack: 'eva' },
      link: 'Home',
    },
    {
      title: 'Recipes',
      icon: { icon: 'list-outline', pack: 'eva' },
      link: 'Recipes',
    },
    {
      title: 'Contact',
      icon: { icon: 'message-square-outline', pack: 'eva' },
      link: 'Contact',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
