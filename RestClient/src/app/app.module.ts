import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PkmTcgService } from './services/pkmtcg.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardsComponent } from './PKMTCG/Cards.component';
import { CardDetailComponent } from './PKMTCG/CardDetail.component'
import { LocalPokemonService } from './services/LocalPokemon.service'
import { LocalPokemonComponent } from './LocalPokemon/Localpokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    CardsComponent,
    CardDetailComponent,
    LocalPokemonComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'cards', pathMatch: 'full'},
      { path: 'cards', component: CardsComponent},
      { path: 'cards/:id', component: CardDetailComponent},
      { path: 'localpokemon', component: LocalPokemonComponent},
      { path: "**", component: PageNotFoundComponent}
    ], { useHash: true }),
    FormsModule,
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    PkmTcgService,
    LocalPokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
