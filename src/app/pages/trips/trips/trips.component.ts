import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent {
  productsArray : Product[] = []
    
  constructor(private productService : ProductsService) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(result =>{
      this.productsArray = result;
    });
    
  }
}
