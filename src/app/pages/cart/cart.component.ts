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
      if(item.quantity <= 0){
        item.quantity = 0;
      }
    }
    
  }

  deleteItem(index : number) : void {
    this.cartItems.splice(index, 1)
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
  */

  getTotal() : number{
    // The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous 
    // step (this result is the running sum of all the previous steps) — until there are no more elements to add.
    return this.cartItems.map((item) => (item.quantity != null && item.price != null) ? (item.quantity * item.price) : 0).reduce((prev, current) => prev + current, 0)
    
    /*
    === Using for loop won't work, read above ===
    for(const item of this.cartItems){
      if (item.quantity != undefined && item.price != undefined) {
        this.finalPrice += (item.quantity * item.price);
      }
    }
    return this.finalPrice;
    */
  }

}
