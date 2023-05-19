import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Product[] = [];

  constructor() { }

  addToCart(item: Product): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    console.log(existingItem)
    if (existingItem) {
      if(existingItem.quantity != undefined){
        existingItem.quantity += 1;
      }
    } else{
      this.cartItems.push(item);
    }
    
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }
}
