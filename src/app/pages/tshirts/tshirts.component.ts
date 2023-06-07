import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatRadioChange } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
  order : string = 'ascending';
  selected? : string;

  constructor(private productService : ProductsService, private cartService : CartService, private _snackBar: MatSnackBar, private matIconRegistry : MatIconRegistry, private domSanitizer : DomSanitizer) {
    this.matIconRegistry.addSvgIcon('star', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/star.svg'))
    this.matIconRegistry.addSvgIcon('starEmpty', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/starEmpty.svg'))
  }

  ngOnInit(): void {
    this.productService.getProductsByType('tshirts').subscribe(result =>{
      this.productsArray = result;
    });
    //console.log(this.productsArray);
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
    //console.log("clicked")
    this.modalItem = item;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  getRatingStars(rating: number | undefined): SafeHtml {
    const filledStar = '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" style="color: gold"; lass="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>';
    const emptyStar = '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" style="color: gold"; class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>';
  
    let stars = '';
    for (let i = 0; i < 5; i++) {
      if(rating != undefined)
        if (i < rating) {
          stars += filledStar;
        } else {
          stars += emptyStar;
        }
    }
    return this.domSanitizer.bypassSecurityTrustHtml(stars);
  }


  updateOrder(order : string){
    this.order = order;
    //console.log(this.order);
    if(this.selected == 'price'){
      this.sortBy('price')
    }
    if(this.selected == 'rating'){
      this.sortBy('rating');
    }
  }

  sortBy(sorter : string){
    if (this.productsArray.length > 0) {
      switch (sorter) {
        case 'price':
          this.selected = 'price';
          this.productsArray.sort((a, b) => (a?.price ?? 0) - (b?.price ?? 0));
          break;
        case 'rating':
          this.selected = 'rating';
          this.productsArray.sort((a, b) => (a?.rating ?? 0) - (b?.rating ?? 0));
          break;
        }
      if (this.order === 'descending') {
        this.productsArray.reverse();
      }
    }
  }
}
