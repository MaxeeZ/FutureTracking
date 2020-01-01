import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ErrorFoundComponent } from './components/error-found/error-found.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Recipes', component: RecipesComponent },
  { path: 'Contact', component: ContactComponent },
  { path: '', redirectTo: 'Home' , pathMatch: 'full'},
  { path: '**', redirectTo: '404', pathMatch: 'full'},
  { path: '404', component: ErrorFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
