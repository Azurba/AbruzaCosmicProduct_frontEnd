import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  register : boolean =  false;
  isModalOpen : boolean = false;
  loginForm!: FormGroup;

  isLoginModalOpen : boolean = false;
  errorModalTitle: string = '';
  errorModalMessage: string = '';

  
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router : Router) {}

  /*
  The ngOnInit is initializing the loginForm property using the formBuilder.group method, which create a new form group. 
  It takes an object as an argument, where each key represents a form control name and its associated value represents the initial value and 
  any validators for that control.

  In this case, the form group has two form controls: email and password. The email control is initialized with an empty string as the initial value, 
  and it has two validators applied: Validators.required to make the field mandatory and Validators.email to validate the input as an email format. 
  The password control is initialized with an empty string as the initial value and has the Validators.required validator to make it a required field.

  The resulting form group is assigned to the this.loginForm property, making it available for use in the template and other component methods.
  */

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  //scroll down to read all this method is doing
  onSubmit() {
    if (this.loginForm != undefined) {
      if (this.loginForm.valid) {
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;
        this.userService.login(email, password).pipe(
          catchError((error) => {
            console.log('Login error:', error);
            this.openLoginModel();
            this.errorModalTitle = 'Login Error';
            this.errorModalMessage = 'An error occurred during login. Please try again.';
            return of(''); // Return an observable with an empty string as a fallback value
          })
        ).subscribe((response: string) => {
          if (response) {
            console.log('Login successful');
            console.log('Token:', response);
            this.router.navigateByUrl('/account')
          } else {
            console.log('Login error: Empty response');
            this.openLoginModel();
            this.errorModalTitle = 'Login Error';
            this.errorModalMessage = 'Incorrect email or password. Please try again';
          }
        });
      }
    }
  }
      // if (this.loginForm.valid) {
      //   const email = this.loginForm.value.email;
      //   const password = this.loginForm.value.password;
      //   this.userService.login(email, password);
      //   console.log('Email:', email);
      //   console.log('Password:', password);
      // } else {
        
      // }
    
  isClicked(){
    if(this.register == false){
      this.register = true;
    }
    this.register = false
  }
  
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openLoginModel(){
    this.isLoginModalOpen = true;
  }
  
  closeLoginModel(){
    this.isLoginModalOpen = false;
  }

}



/*
  The `pipe` and `subscribe` methods are commonly used together in RxJS to handle and process data emitted by an observable.

The `pipe` method allows you to chain multiple operators together to transform or manipulate the data emitted by an observable. It takes one or more operators as arguments and returns a new observable with the operators applied. In the code snippet you provided, the `pipe` method is used to apply the `catchError` operator to the observable returned by `userService.login(email, password)`.

The `catchError` operator is used to handle errors that occur during the observable stream. It takes a callback function that will be executed when an error occurs. In the code snippet, the callback function logs the error message to the console and returns an observable with an empty string (`of('')`) as a fallback value.

The `subscribe` method is used to subscribe to an observable and receive the values emitted by the observable. It takes one or more callback functions as arguments to handle different scenarios: `(next?, error?, complete?)`. In the code snippet, the `subscribe` method is used to handle the successful login scenario (`next` callback) and the login error scenario (`error` callback).

By using the `pipe` method, you can apply the `catchError` operator to the observable and handle any errors that occur within the observable stream. Then, by using the `subscribe` method, you can define separate callback functions to handle different scenarios, such as successful login or login error.

In summary, the `pipe` method is used to apply operators to an observable, such as `catchError`, to handle errors within the observable stream. The `subscribe` method is used to subscribe to the observable and define callback functions to handle different scenarios based on the emitted values or errors.
*/

/*
If you remove the `pipe` and only use the `subscribe` method without applying any operators, you won't have any error handling mechanism in place for the observable. 

The `pipe` method allows you to chain operators and perform transformations or error handling on the emitted values of the observable. By removing the `pipe` and not using any operators, you won't have the ability to handle errors or perform any other transformations on the emitted values.

When you use only the `subscribe` method without any error handling, any errors that occur within the observable stream will propagate to the `error` callback of the `subscribe` method. However, if you don't provide an `error` callback or any error handling logic within it, the error will be thrown and potentially cause an unhandled error in your application.

In summary, the `pipe` method is used to apply operators and perform transformations or error handling on the observable, while the `subscribe` method is used to subscribe to the observable and define callbacks to handle different scenarios. It's important to use the `pipe` method with appropriate operators, such as `catchError`, to handle errors in a controlled manner and provide fallback or error handling logic.
*/