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

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'trips', component: TripsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'tshirts', component: TshirtsComponent},
  {path: 'hats', component: HatsComponent},
  {path: 'posters', component: PostersComponent},
  {path: 'telescopes', component: TelescopesComponent},
  {path: 'spaceSuit', component: SpaceSuitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
