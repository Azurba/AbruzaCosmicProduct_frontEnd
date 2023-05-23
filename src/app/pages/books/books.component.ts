import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  productsArray : Product[] = []

  constructor(private productService : ProductsService, private cartService : CartService, private matIconRegistry : MatIconRegistry, private domSanitizer : DomSanitizer) {
    this.matIconRegistry.addSvgIcon('star', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/star.svg'))
    this.matIconRegistry.addSvgIcon('starEmpty', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/starEmpty.svg'))
  }

  ngOnInit(): void {
    this.productService.getProductsByType('book').subscribe(result =>{
      this.productsArray = result;
    });
  }

  addToCart(item : Product){
    this.cartService.addToCart(item);
  }
}
