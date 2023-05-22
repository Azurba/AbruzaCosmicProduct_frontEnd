import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  cartItemsQty = 0;

  constructor(private cartService : CartService){

  }

  ngOnInit(): void {
    this.cartService.cartBadge.subscribe((cartItems) => {
      this.cartItemsQty = cartItems.length;
    });
    
  }

  

}
