import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}

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

  onSubmit() {
    if (this.loginForm != undefined) {
      if (this.loginForm.valid) {
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;
        this.userService.login(email, password).subscribe(
          (response: string) => {
            console.log('Login successful');
            console.log('Token:', response);
            // Perform any necessary actions after successful login
          },
          (error) => {
            console.log('Login error:', error);
            // Handle login error and show appropriate message to the user
          }
        );
      } else {
        // Handle form validation errors if needed
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
}
