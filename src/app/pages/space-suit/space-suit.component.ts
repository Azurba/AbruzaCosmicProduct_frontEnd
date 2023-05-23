import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-space-suit',
  templateUrl: './space-suit.component.html',
  styleUrls: ['./space-suit.component.scss']
})
export class SpaceSuitComponent {
  productsArray : Product[] = []

  constructor(private productService : ProductsService, private cartService : CartService, private matIconRegistry : MatIconRegistry, private domSanitizer : DomSanitizer) {
    this.matIconRegistry.addSvgIcon('star', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/star.svg'))
    this.matIconRegistry.addSvgIcon('starEmpty', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/starEmpty.svg'))
  }

  ngOnInit(): void {
    this.productService.getProductsByType('spaceSuit').subscribe(result =>{
      this.productsArray = result;
    });
  }

  addToCart(item : Product){
    this.cartService.addToCart(item);
  }
}
