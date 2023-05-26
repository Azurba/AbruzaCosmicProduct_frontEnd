import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  cartItemsQty = 0;

  constructor(private cartService : CartService, private router: Router){

  }

  ngOnInit(): void {
    this.cartService.cartBadge.subscribe((cartItems) => {
      this.cartItemsQty = cartItems.length;
    });
    
  }

  redirect(link : string){
    this.router.navigateByUrl(link);
  }

}
