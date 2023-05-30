import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderHistory } from 'src/app/models/orderHistory';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  
  user? : User;
  orderHistory : OrderHistory[] = [];

  constructor(private userService : UserService, private route : Router){
    console.log()
  }

  ngOnInit(): void {
    this.getUserDetails();
    this.getOrderDetails();
  }
  

  getUserDetails() {
    this.userService.getUserByEmail().subscribe({
      next: (user: User) => {
        this.user = user;
        console.log('User:', this.user);
      },
      error: (error) => {
        console.log('Error:', error);
      }
    });
  }

  getOrderDetails(){
    this.userService.getOrderHistory().subscribe(
      (data: OrderHistory[]) => {
        this.orderHistory = data;
      },
      (error) => {
        console.error('Failed to retrieve order history:', error);
      }
    );
  }

  logout(){
    this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.route.navigate([this.route.url]);
    });
  }
}
