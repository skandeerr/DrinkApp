import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import axios from 'axios';
import { AboutComponent } from './pages/about/about.component';
import { CocktailDetailsComponent } from './pages/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './pages/cocktail-list/cocktail-list.component';
import { CocktailSearchComponent } from './pages/cocktail-search/cocktail-search.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IndexComponent } from './pages/index/index.component';
import { ReservComponent } from './pages/reserv/reserv.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'index', pathMatch : 'full'
  },
  
  {
    path: 'cocktail/:nomC', component: CocktailListComponent
  },
  {
    path: 'cocktail/details/:idC', component: CocktailDetailsComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'reserv', component: ReservComponent
  },
  {
    path: 'cocktail/search' , component: CocktailSearchComponent
  },
  {
    path: 'index' , component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 