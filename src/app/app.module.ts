import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbThemeModule,
         NbLayoutModule,
         NbSidebarModule,
         NbMenuModule,
         NbSidebarService,
         NbActionsModule,
         NbUserModule,
         NbIconModule,
         NbTabsetModule,
         NbSearchModule,
         NbSearchService,
        NbToastrService,
        NbToastrModule,
        NbCardModule,
        NbButtonModule,
        NbSpinnerModule,
        NbThemeService,
        NbSelectModule,
        NbListModule,
        NbBadgeModule} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './components/home/home.component';
import { ErrorFoundComponent } from './components/error-found/error-found.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuSideBarComponent } from './components/menu-side-bar/menu-side-bar.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorFoundComponent,
    RecipesComponent,
    ContactComponent,
    MenuSideBarComponent,
    MenuHeaderComponent,
    FooterComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbActionsModule,
    NbUserModule,
    NbIconModule,
    NbTabsetModule,
    NbSearchModule,
    NbToastrModule.forRoot(),
    FormsModule,
    NbButtonModule,
    NbSpinnerModule,
    NbSelectModule,
    NbListModule,
    NbBadgeModule,
    HttpClientModule
  ],
  providers: [
    NbSidebarService,
    NbSearchService,
    NbToastrService,
    NbThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
