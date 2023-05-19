import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  
  cartItems : Product[] = []
  generateRandomLink : String[] = ['/trips', '/courses', '/books', '/items'];
  quantity : number = 1;

  constructor(private cartService: CartService, private router: Router) {
    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems)
  }

  redirect(){
    const random = Math.floor(Math.random() * this.generateRandomLink.length);
    const randomItem = this.generateRandomLink[random].toString();
    console.log(randomItem);
    this.router.navigateByUrl('/trips');
  }

  increaseQuantity(item : Product): void {
    item.quantity = (item.quantity ?? 0) + 1;
  }

  decreaseQuantity(item : Product): void {
    if (item.quantity && item.quantity > 1) {
      item.quantity--;
    }
  }

  deleteItem(index : number) : void {
    this.cartItems.splice(index, 1)
  }

}
