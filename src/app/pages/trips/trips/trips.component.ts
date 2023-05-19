import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { CartComponent } from '../../cart/cart.component';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent {
  productsArray : Product[] = []
    
  constructor(private productService : ProductsService, private cartService : CartService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(result =>{
      this.productsArray = result;
    });
  }

  addToCart(item : Product){
    this.cartService.addToCart(item);
    this._snackBar.open('1 item added to cart.', 'Ok', { duration: 3000, horizontalPosition: 'start', verticalPosition: 'top' });

  }
}
