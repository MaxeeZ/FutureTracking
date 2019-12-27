import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe;

  constructor() {
  }

  ngOnInit() {

  }

  cook() {
    console.log('On voit toutes les étapes de préparation nécessaires pour la recette de ' + this.recipe.name);
  }

  exportPDF() {
    console.log('On export la recette en fichier PDF');
  }
}
