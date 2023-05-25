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
  finalPrice : number;

  constructor(private cartService: CartService, private router: Router) {
    this.cartItems = this.cartService.getCartItems();
    this.finalPrice = 0;
  }

  redirect(link : string){
    const random = Math.floor(Math.random() * this.generateRandomLink.length);
    const randomItem = this.generateRandomLink[random].toString();
    this.router.navigateByUrl(link);
  }

  increaseQuantity(item : Product): void {
   this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item : Product): void {
    this.cartService.decreaseQuantity(item);
  }

  deleteItem(index : number) : void {
    this.cartService.deleteItem(index);
  }

  getTotal(){
    return this.cartService.getTotal();
  }
}
