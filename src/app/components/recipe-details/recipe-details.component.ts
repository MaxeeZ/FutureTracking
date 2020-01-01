import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NbWindowService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe;
  @ViewChild('contentTemplate', { static: false }) contentTemplate: TemplateRef<any>;
  
  pdfSrc: any;

  constructor(private http: HttpClient, private windowService: NbWindowService, private router: Router) {
  }

  ngOnInit() {

  }

  cook() {
    console.log('On voit toutes les étapes de préparation nécessaires pour la recette de ' + this.recipe.name);
  }

  openWindow() {

  }

  exportPDF() {
    this.pdfSrc = 'http://localhost:8181/getRecipes/' + this.recipe.id;
    this.windowService.open(this.contentTemplate);
  }

  downloadPDF() {
    this.router.navigateByUrl('localhost:8181/getRecipes/' + this.recipe.id, { skipLocationChange: false });
  }
}
