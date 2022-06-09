import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { CocktailDetailsComponent } from './pages/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './pages/cocktail-list/cocktail-list.component';
import { CocktailSearchComponent } from './pages/cocktail-search/cocktail-search.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './pages/index/index.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReservComponent } from './pages/reserv/reserv.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
   
    CocktailDetailsComponent,
    CocktailListComponent,
    CocktailSearchComponent,
    IndexComponent,
    ContactComponent,
    ReservComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
