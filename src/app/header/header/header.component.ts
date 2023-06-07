import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  cartItemsQty = 0;

  constructor(private cartService : CartService, private router: Router, private userService : UserService){

  }

  ngOnInit(): void {
    this.cartService.cartBadge.subscribe((cartItems) => {
      this.cartItemsQty = cartItems.length;
    });
    
  }

  redirect(link : string){
    this.router.navigateByUrl(link);
  }

  redirectAcc(){
    console.log(this.userService._email)
    this.router.navigateByUrl('/account')
    // if(this.userService._email === undefined){
    //   this.router.navigateByUrl('/login');
    // }else{
    //   this.router.navigateByUrl('/account');
    // }
  }

}
