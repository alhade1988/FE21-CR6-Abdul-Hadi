import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FooterComponent } from './footer/footer.component';


import { TravelsComponent } from './travels/travels.component';
import { HomePegeComponent } from './home-pege/home-pege.component';
import { CartComponent } from './cart/cart.component';
import { TravelsListeComponent } from './travels-liste/travels-liste.component';
import { BlogComponent } from './blog/blog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    FooterComponent,
  
  
    TravelsComponent,
          HomePegeComponent,
          CartComponent,
          TravelsListeComponent,
          BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
