import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { TripsComponent } from './pages/trips/trips/trips.component';
import { HomeComponent } from './pages/home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './pages/cart/cart.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';
import {MatBadgeModule} from '@angular/material/badge';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { TshirtsComponent } from './pages/tshirts/tshirts.component';
import { HatsComponent } from './pages/hats/hats.component';
import { PostersComponent } from './pages/posters/posters.component';
import { TelescopesComponent } from './pages/telescopes/telescopes.component';
import { SpaceSuitComponent } from './pages/space-suit/space-suit.component';
import { BooksComponent } from './pages/books/books.component';
import { Depoimentos } from './Data/Depoimentos';
import { ProductCardComponent } from './pages/product-card/product-card.component';
import { CheckoutComponent } from './pages/cart/checkout/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TripsComponent,
    HomeComponent,
    CartComponent,
    TshirtsComponent,
    HatsComponent,
    PostersComponent,
    TelescopesComponent,
    SpaceSuitComponent,
    BooksComponent,
    ProductCardComponent,
    CheckoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatRadioModule,
    MatIconModule,
    FormsModule
  ],
  providers: [ProductsService, CartService, Depoimentos],
  bootstrap: [AppComponent]
})
export class AppModule { }
