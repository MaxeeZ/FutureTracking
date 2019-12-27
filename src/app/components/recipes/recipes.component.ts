import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  startRecipes: Recipe[] = [];
  mainRecipes: Recipe[] = [];
  dessertRecipes: Recipe[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.initRecipesLists();

    console.table(this.startRecipes);

  }

  initRecipesLists() {

    this.http.get('assets/recipes/recipes.json').subscribe((data: any) => {
      console.log(data);
      this.startRecipes = data.starter;
      this.mainRecipes = data.main;
      this.dessertRecipes = data.dessert;
    });

  }



}
