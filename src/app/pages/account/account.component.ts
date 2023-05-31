import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderHistory } from 'src/app/models/orderHistory';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  
  user? : User;
  orderHistory : OrderHistory[] = [];
  product: Product | undefined;
  productsMap: Map<number, Product> = new Map<number, Product>();

  constructor(private userService : UserService, private route : Router, private productService : ProductsService){
  }

  ngOnInit(): void {
    this.getUserDetails();
    this.getOrderDetails();
    this.productService.searchProduct(1074).subscribe(
      (product: Product) => {
        this.product = product;
        console.log('Product:', this.product);
      },
      (error) => {
        console.error('Error retrieving product:', error);
      }
    );
  }
  

  getUserDetails() {
    this.userService.getUserByEmail().subscribe({
      next: (user: User) => {
        this.user = user;
        console.log('User:', this.user);
        this.getOrderDetails();
      },
      error: (error) => {
        console.log('Error:', error);
      }
    });
  }

  getOrderDetails() {
    if (this.user?.email) {
      this.userService.getOrderHistory(this.user.email).subscribe({
        next: (data: OrderHistory[]) => {
          this.orderHistory = data;
        },
        error: (error) => {
          console.error('Failed to retrieve order history:', error);
        }
      });
    }
  }

  fetchProducts() {
    const productIds = this.orderHistory.map(order => order.productId);
    productIds.forEach(productId => {
      if(productId != undefined){
        this.productService.searchProduct(productId).subscribe({
          next: (product: Product) => {
            this.productsMap.set(productId, product);
          },
          error: (error) => {
            console.error(`Failed to retrieve product with ID ${productId}:`, error);
          }
        });
      }
    });
  }

  logout(){
    this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.route.navigate([this.route.url]);
    });
  }  

}
