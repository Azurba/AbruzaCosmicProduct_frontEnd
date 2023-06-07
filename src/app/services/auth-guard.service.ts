import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  private isUserLoggedIn = false;


  constructor(private router : Router, private _snackBar: MatSnackBar) { }

  login(){
    this.isUserLoggedIn = true;
    console.log(this.isUserLoggedIn);
    this.router.navigateByUrl('/account')
    this._snackBar.open('You are now logged in. Welcome!', 'Close', { duration: 3000, horizontalPosition: 'center', verticalPosition: 'bottom' });
  }

  logout(){
    this.isUserLoggedIn = false;
    console.log(this.isUserLoggedIn);
  }

  isAuthenticated() : boolean {
    return this.isUserLoggedIn;
  }
}
