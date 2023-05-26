import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  
  transformPassword(password : string){
    let n: number = password.length;
    let nPassword: string = '';

    while (n > 0) {
      nPassword += '*';
      n--;
    }

    return nPassword;
  }



}
