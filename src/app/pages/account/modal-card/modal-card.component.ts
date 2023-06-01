import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent {
  productsArray : Product[] = [
    {
      id: 0,
      name: "test",
      quantity: 1,
      description: "bla bla bla",
      rating: 5,
      price: 19.99,
      image: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C91CvXgUykuL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png",
      selectedGender: 'male',
      selectedSize: 'XG',
      selectedColor: 'black'
    }
  ]
}
