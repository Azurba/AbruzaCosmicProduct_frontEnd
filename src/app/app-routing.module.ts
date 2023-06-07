import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { TripsComponent } from './pages/trips/trips/trips.component';
import { CartComponent } from './pages/cart/cart.component';
import { TshirtsComponent } from './pages/tshirts/tshirts.component';
import { HatsComponent } from './pages/hats/hats.component';
import { PostersComponent } from './pages/posters/posters.component';
import { TelescopesComponent } from './pages/telescopes/telescopes.component';
import { SpaceSuitComponent } from './pages/space-suit/space-suit.component';
import { BooksComponent } from './pages/books/books.component';
import { CheckoutComponent } from './pages/cart/checkout/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'trip', component: TripsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'tshirts', component: TshirtsComponent},
  {path: 'hat', component: HatsComponent},
  {path: 'poster', component: PostersComponent},
  {path: 'telescope', component: TelescopesComponent},
  {path: 'spaceSuit', component: SpaceSuitComponent},
  {path: 'book', component: BooksComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'account', component: AccountComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
