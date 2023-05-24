import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatRadioChange } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: ['./tshirts.component.scss']
})
export class TshirtsComponent {
  productsArray : Product[] = []
  isModalOpen : boolean = false;
  modalItem? : Product;

  constructor(private productService : ProductsService, private cartService : CartService, private _snackBar: MatSnackBar, private matIconRegistry : MatIconRegistry, private domSanitizer : DomSanitizer) {
    this.matIconRegistry.addSvgIcon('star', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/star.svg'))
    this.matIconRegistry.addSvgIcon('starEmpty', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/starEmpty.svg'))
  }

  ngOnInit(): void {
    this.productService.getProductsByType('tshirts').subscribe(result =>{
      this.productsArray = result;
    });
  }

  addToCart(item : Product){
    if(!item.selectedSize || !item.selectedColor || !item.selectedGender){
      this._snackBar.open('You need to select a gender, color and/or size before adding to the cart', 'Close', { duration: 8000, horizontalPosition: 'center', verticalPosition: 'bottom' });
    }else{
      this.cartService.addToCart(item);
    }
  }

  onGenderChange(event: MatRadioChange, item: Product) {
    const index = this.productsArray.findIndex((product) => product.id === item.id);
    if (index !== -1) {
      this.productsArray[index].selectedGender = event.value;
    }
  }

  onSizeChange(event: MatRadioChange, item: Product) {
    const index = this.productsArray.findIndex((product) => product.id === item.id);
    if (index !== -1) {
      this.productsArray[index].selectedSize = event.value;
    }
  }

  onColorChange(event: MatRadioChange, item: Product) {
    const index = this.productsArray.findIndex((product) => product.id === item.id);
    if (index !== -1) {
      this.productsArray[index].selectedColor = event.value;
    }
  }

  openModal(item: Product) {
    console.log("clicked")
    this.modalItem = item;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
