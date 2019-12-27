import { Component, OnInit, Directive } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-found',
  templateUrl: './error-found.component.html',
  styleUrls: ['./error-found.component.scss']
})

export class ErrorFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectHome() {
    this.router.navigate(['Home']);
  }

}
