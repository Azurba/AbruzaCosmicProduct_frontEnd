import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Product[] = [];

  constructor() { }

  addToCart(item: Product): void {
    this.cartItems.push(item);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }
}
