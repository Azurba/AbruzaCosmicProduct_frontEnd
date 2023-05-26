import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
 
  cartItems : Product[] = [];
  cartTotal : number = 0;

  constructor(cartService : CartService, private userService : UserService, private router : Router) {
    this.cartItems = cartService.getCartItems();
    this.cartTotal = cartService.getTotal();
  }

  redirect(link : string){
    this.router.navigateByUrl(link);
  }

  redirectAcc(){
    console.log(this.userService._email)
    if(this.userService._email === undefined){
      this.router.navigateByUrl('/login');
    }else{
      this.router.navigateByUrl('/account');
    }
  }
}
