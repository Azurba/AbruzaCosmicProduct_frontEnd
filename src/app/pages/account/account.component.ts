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
  
  user?: User;
  orderHistory: OrderHistory[] = [];
  productsMap: Map<number, Product> = new Map<number, Product>();
  isModalOpen : boolean = false;

  constructor(private userService: UserService, private route: Router, private productService: ProductsService) { }

  ngOnInit(): void {
    this.getUserDetails();
    console.log('Order:', this.orderHistory);
  }
  
  getUserDetails() {
    this.userService.getUserByEmail().subscribe({
      next: (user: User) => {
        this.user = user;
        this.getOrderDetails();
      },
      error: (error) => {
        console.log('Error:', error);
      }
    });
  }

  getOrderDetails() {
    if (this.user?.email) {
      //get all the order details of the user
      this.userService.getOrderHistory(this.user.email).subscribe({
        next: (data: OrderHistory[]) => {
          this.orderHistory = data;
          this.fetchProducts(); // Call the method to fetch the product name
        },
        error: (error) => {
          console.error('Failed to retrieve order history:', error);
        }
      });
    }
  }

  //this will get the id of the product and return the product object of that id by calling the searchProduct API controller
  fetchProducts() {
    

    // const productIds = this.orderHistory.map(order => order.productId);
    // productIds.forEach(productId => {
    //   if (productId !== undefined) {
    //     this.productService.searchProduct(productId).subscribe({
    //       next: (product: Product) => {
    //         this.productsMap.set(productId, product);
            
    //       },
    //       error: (error) => {
    //         console.error(`Failed to retrieve product with ID ${productId}:`, error);
    //       }
    //     });
    //   }
    // });
  }

  logout(){
    this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.route.navigate([this.route.url]);
    });
  }
  
  openModal(){
    this.isModalOpen = true;
  }

  closeModal(){
    this.isModalOpen = false;
  }

}
