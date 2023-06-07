import { Component, Input } from '@angular/core';
import { OrderHistory } from 'src/app/models/orderHistory';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent {
  @Input() orderHistory: OrderHistory[] = [];
  productService: any;
  @Input() selectedProduct?: Product
}
