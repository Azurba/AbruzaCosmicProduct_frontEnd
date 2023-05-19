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
    console.log(this.cartItems);
    this.finalPrice = 0;
  }

  redirect(){
    const random = Math.floor(Math.random() * this.generateRandomLink.length);
    const randomItem = this.generateRandomLink[random].toString();
    this.router.navigateByUrl('/trips');
  }

  increaseQuantity(item : Product): void {
    // item.quantity = (item.quantity ?? 0) + 1;
    if(item.quantity != undefined){
      item.quantity+=1;
    }
  }

  decreaseQuantity(item : Product): void {
    // if (item.quantity && item.quantity > 1) {
    //   item.quantity--;
    // }
    if(item.quantity != undefined){
      item.quantity-=1;
    }
  }

  deleteItem(index : number) : void {
    this.cartItems.splice(index, 1)
  }

  getTotal() : number{
    for(const item of this.cartItems){
      if (item.quantity != undefined && item.price != undefined) {
        this.finalPrice += (item.quantity * item.price);
      }
    }
    return this.finalPrice;
  }

}
