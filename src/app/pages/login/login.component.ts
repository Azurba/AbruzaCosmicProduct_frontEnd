import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  register : boolean =  false;
  isModalOpen : boolean = false;

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
