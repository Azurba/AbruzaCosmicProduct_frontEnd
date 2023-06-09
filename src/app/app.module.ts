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
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import {MatTabsModule} from '@angular/material/tabs';
import { User } from './models/user';
import { UserService } from './services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { ModalCardComponent } from './pages/account/modal-card/modal-card.component';
import { AuthGuardService } from './services/auth-guard.service';


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
    LoginComponent,
    FooterComponent,
    AboutComponent,
    AccountComponent,
    ModalCardComponent
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
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatChipsModule
  ],
  providers: [ProductsService, CartService, Depoimentos, User, UserService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
