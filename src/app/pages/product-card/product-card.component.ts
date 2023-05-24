import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  productsArray : Product[] = []

  constructor(private productService : ProductsService, private cartService : CartService, private matIconRegistry : MatIconRegistry, private domSanitizer : DomSanitizer, private route: ActivatedRoute) {
    this.matIconRegistry.addSvgIcon('star', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/star.svg'))
    this.matIconRegistry.addSvgIcon('starEmpty', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/starEmpty.svg'))
  }

  ngOnInit(): void {
    this.route.url.subscribe((segments) => {
      const currentRoute = segments[0].path; // Get the current route segment
      console.log(currentRoute);
      this.productService.getProductsByType(currentRoute).subscribe(result => {
        this.productsArray = result;
      });
    });
  }
  

  addToCart(item : Product){
    this.cartService.addToCart(item);
  }
}
