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
  productsArray : Product[] = [
    {
      id: 1,
      name: "Test Card",
      quantity: 1,
      description: "This is a test",
      rating: 1,
      price: 12.50,
      image: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81JX99E6w-L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
    },
    {
      id: 1,
      name: "Test Card",
      quantity: 1,
      description: "This is a test",
      rating: 1,
      price: 12.50,
      image: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81JX99E6w-L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
    },
    {
      id: 1,
      name: "Test Card",
      quantity: 1,
      description: "This is a test",
      rating: 1,
      price: 12.50,
      image: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81JX99E6w-L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
    },
    {
      id: 1,
      name: "Test Card",
      quantity: 1,
      description: "This is a test",
      rating: 1,
      price: 12.50,
      image: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81JX99E6w-L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
    },
    {
      id: 1,
      name: "Test Card",
      quantity: 1,
      description: "This is a test",
      rating: 1,
      price: 12.50,
      image: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81JX99E6w-L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
    },
    {
      id: 1,
      name: "Test Card",
      quantity: 1,
      description: "This is a test",
      rating: 1,
      price: 12.50,
      image: "https://m.media-amazon.com/images/I/41q1soPbj1L._AC_SX679._SX._UX._SY._UY_.jpg"
    },
    {
      id: 1,
      name: "Test Card",
      quantity: 1,
      description: "This is a test",
      rating: 1,
      price: 12.50,
      image: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81JX99E6w-L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
    },
    {
      id: 1,
      name: "Test Card",
      quantity: 1,
      description: "This is a test",
      rating: 1,
      price: 12.50,
      image: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81JX99E6w-L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
    },

  ]
    
  constructor(private productService : ProductsService, private cartService : CartService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    // this.productService.getAllProducts().subscribe(result =>{
    //   this.productsArray = result;
    // });
  }

  addToCart(item : Product){
    this.cartService.addToCart(item);
  }
}
