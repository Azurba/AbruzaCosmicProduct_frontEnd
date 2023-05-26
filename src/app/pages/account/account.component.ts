import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  

  // constructor(private userService : UserService, private){}

  // ngOnInit(): void {
  //   this.getUserDetails();
    
  // }

  // getUserDetails() {
  //   this.userService.getUserByEmail().subscribe(
  //     (user: User) => {
  //       this.user = user;
  //       console.log('User:', this.user);
  //     },
  //     (error) => {
  //       console.log('Error:', error);
  //     }
  //   );
  // }

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
