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

    this.http.get('http://localhost:8181/getRecipes').subscribe((data: any) => {
      console.log(data);
      this.startRecipes = data.filter(x => x.category == 0);
      console.log(this.startRecipes);
      this.mainRecipes = data.filter(x => x.category == 1);;
      this.dessertRecipes = data.filter(x => x.category == 2);;
    });

  }



}
