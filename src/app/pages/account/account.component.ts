import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  
  user? : User;

  constructor(private userService : UserService){
    console.log()
  }

  ngOnInit(): void {
    this.getUserDetails();
  }
  

  getUserDetails() {
    this.userService.getUserByEmail().subscribe({
      next: (user: User) => {
        this.user = user;
        console.log('User:', this.user);
      },
      error: (error) => {
        console.log('Error:', error);
      }
    });
  }
}
