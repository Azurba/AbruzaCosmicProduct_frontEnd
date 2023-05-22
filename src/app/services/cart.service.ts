import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Product[] = [];

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: Product): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      if(existingItem.quantity != undefined){
        existingItem.quantity += 1;
      }
    } else{
      this.cartItems.push(item);
    }
    this._snackBar.open('1 item added to cart.', 'Close', { duration: 3000, horizontalPosition: 'center', verticalPosition: 'bottom' });
  }
  
  deleteItem(index : number) : void {
    this.cartItems.splice(index, 1)
  }

  increaseQuantity(item : Product): void {
    if(item.quantity != undefined){
      item.quantity+=1;
    }
  }

  decreaseQuantity(item : Product): void {
    if(item.quantity != undefined){
      item.quantity-=1;
      if(item.quantity <= 0){
        item.quantity = 0;
      }
    }
  }

  /*
  The ExpressionChangedAfterItHasBeenCheckedError occurs when there are changes in the component's data bindings detected during the change 
  detection process. Angular performs change detection to check for any changes in the component's properties and update the corresponding view.

  When you were using a for loop to calculate the total price, it was likely being executed during the change detection process. The change 
  detection process consists of multiple phases, and the component's template is checked multiple times for any changes. If a change is 
  detected during one of these checks, it can lead to the ExpressionChangedAfterItHasBeenCheckedError because the component's data bindings 
  are being modified during the change detection process itself.

  On the other hand, using the map and reduce methods to calculate the total price doesn't cause this error because they are executed outside 
  the change detection process. The map and reduce methods are executed synchronously and immediately calculate the final price based on the 
  current state of the cartItems array. Since they are not executed during the change detection process, there are no changes detected in the 
  component's data bindings, and hence the error is avoided.

  By using map and reduce, you are performing the calculations in a separate context, ensuring that they are not interleaved with the change 
  detection process and preventing the occurrence of the ExpressionChangedAfterItHasBeenCheckedError.
  
  === Using for loop won't work, read above ===
  for(const item of this.cartItems){
    if (item.quantity != undefined && item.price != undefined) {
      this.finalPrice += (item.quantity * item.price);
    }
  }
  return this.finalPrice;
  
  */

  getTotal() : number{
    // The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous 
    // step (this result is the running sum of all the previous steps) — until there are no more elements to add.
    return this.cartItems.map((item) => (item.quantity != null && item.price != null) ? (item.quantity * item.price) : 0).reduce((prev, current) => prev + current, 0)
  }



  


  getCartItems(): Product[] {
    return this.cartItems;
  }
}
