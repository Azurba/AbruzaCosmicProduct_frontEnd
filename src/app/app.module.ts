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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TripsComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
