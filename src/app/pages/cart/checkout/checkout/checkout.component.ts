import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderHistory } from 'src/app/models/orderHistory';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  cartItems: Product[] = [];
  cartTotal: number = 0;
  isModalOpen: boolean = false;
  checkoutForm!: FormGroup;
  orderHistory: OrderHistory = {};

  constructor(private formBuilder: FormBuilder, cartService: CartService, private userService: UserService, private router: Router) {
    this.cartItems = cartService.getCartItems();
    this.cartTotal = cartService.getTotal();
  }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      zip: ['', [Validators.required]],
    });

    //check if the form is done
    this.checkoutForm.valueChanges.subscribe(() => {
      this.updateOrderHistory();
    });
  }

  redirect(link: string) {
    this.router.navigateByUrl(link);
  }

  redirectAcc() {
    console.log(this.orderHistory);
    this.openModal();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmitForm() {
    if (this.checkoutForm != undefined) {
      if (this.checkoutForm.valid) {
        this.updateOrderHistory();
      }
    }
  }

  private updateOrderHistory() {
    const name = this.checkoutForm.value.fullName;
    const phone = this.checkoutForm.value.phone;
    const address = this.checkoutForm.value.address;
    const city = this.checkoutForm.value.city;
    const state = this.checkoutForm.value.state;
    const country = this.checkoutForm.value.country;
    const zip = this.checkoutForm.value.zip;
    const productIds = this.cartItems
      .map((item) => item?.id) // Get the IDs of the products in the cart (including undefined)
      .filter((id) => id !== undefined) as number[];

    this.orderHistory = {
      email: this.userService._email,
      name: name,
      address: address,
      total: this.cartTotal,
      date: new Date(),
      phone: phone,
      city: city,
      state: state,
      zipcode: zip,
      country: country,
      cardNumber: 0,
      product: productIds,
    };
  }
}
