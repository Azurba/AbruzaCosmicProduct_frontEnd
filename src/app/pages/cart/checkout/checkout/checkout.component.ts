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
  allOrders : OrderHistory[] = [];

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
      cardNumber: ['', [Validators.required]],
      nameCard: ['', [Validators.required]],
      expiration: ['', [Validators.required]],
      securityCode: ['', [Validators.required]],
    });

    //check if the form is done
    this.checkoutForm.valueChanges.subscribe(() => {
      this.updateOrderHistory();
    });
  }

  redirect(link: string) {
    this.router.navigateByUrl(link);
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
        const allOrders = []; // Initialize the allOrders array
        for (let i = 0; i < this.cartItems.length; i++) {
          //this.updateOrderHistory(); // Update orderHistory for each iteration
          this.orderHistory.productId = this.cartItems[i].id;
          this.orderHistory.total = this.cartItems[i].price;
          allOrders.push({ ...this.orderHistory }); // Add a copy of orderHistory to allOrders
        }
        
        for (let i = 0; i < allOrders.length; i++) {
          this.userService.addOrderHistory(allOrders[i]).subscribe(
            (response) => {console.log("success")},
            (error) => {console.log("error")}
          )
          console.log(allOrders[i]);
        }
      }
    }
  }

  updateOrderHistory() {
    const name = this.checkoutForm.value.fullName;
    const phone = this.checkoutForm.value.phone;
    const address = this.checkoutForm.value.address;
    const city = this.checkoutForm.value.city;
    const state = this.checkoutForm.value.state;
    const country = this.checkoutForm.value.country;
    const zip = this.checkoutForm.value.zip;
    const cardNumber = this.checkoutForm.value.cardNumber.toString().slice(-4); // get 4 last digits

    this.orderHistory = {
      email: this.userService._email,
      name: name,
      date: new Date(), 
      address: address,
      phone: phone,
      city: city,
      state: state,
      zipcode: zip,
      country: country,
      cardNumber: cardNumber,
    }
  }
}
