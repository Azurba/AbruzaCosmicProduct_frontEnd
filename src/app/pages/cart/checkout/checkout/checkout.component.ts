import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
 
  cartItems : Product[] = [];
  cartTotal : number = 0;
  router: any;

  constructor(cartService : CartService) {
    this.cartItems = cartService.getCartItems();
    this.cartTotal = cartService.getTotal();
  }

  redirect(link : string){
    this.router.navigateByUrl(link);
  }
}
