import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { TripsComponent } from './pages/trips/trips/trips.component';
import { CartComponent } from './pages/cart/cart.component';
import { TshirtsComponent } from './pages/tshirts/tshirts.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'trips', component: TripsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'tshirts', component: TshirtsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
